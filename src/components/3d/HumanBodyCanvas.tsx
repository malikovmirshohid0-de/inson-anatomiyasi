import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import {
  ProceduralAnatomyBuilder,
  AnatomySceneBuildResult,
  InteractiveAnatomyPart,
} from './ProceduralAnatomyBuilder';
import { AnatomicalLayer } from '../../types/anatomy';
import { medicalAudio } from '../../utils/soundEffects';

interface HumanBodyCanvasProps {
  activeLayers: Record<AnatomicalLayer, boolean>;
  explodedValue: number; // 0 to 1
  selectedPartId: string | null;
  onSelectPart: (category: 'organ' | 'bone' | 'muscle' | 'vessel' | 'nerve' | 'skin', id: string, nameUz: string) => void;
  cameraPreset?: 'head' | 'chest' | 'abdomen' | 'pelvis' | 'legs' | 'full';
  isHeartbeatActive: boolean;
  skinOpacity?: number;
}

export const HumanBodyCanvas: React.FC<HumanBodyCanvasProps> = ({
  activeLayers,
  explodedValue,
  selectedPartId,
  onSelectPart,
  cameraPreset = 'full',
  isHeartbeatActive,
  skinOpacity = 0.28,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const buildResultRef = useRef<AnatomySceneBuildResult | null>(null);

  // Interaction & Camera State
  const cameraTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 1.6, 0));
  const cameraPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 1.8, 5.8));
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const sphericalRef = useRef({ radius: 5.8, theta: 0, phi: Math.PI / 2 });

  // Raycasting
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  // Highlighting
  const highlightHelperGroupRef = useRef<THREE.Group>(new THREE.Group());

  // Camera presets map
  const getPresetCoords = useCallback((preset: string): { target: THREE.Vector3; radius: number; phi: number } => {
    switch (preset) {
      case 'head':
        return { target: new THREE.Vector3(0, 4.25, 0), radius: 2.2, phi: Math.PI / 2.05 };
      case 'chest':
        return { target: new THREE.Vector3(0, 2.65, 0.1), radius: 2.6, phi: Math.PI / 2.02 };
      case 'abdomen':
        return { target: new THREE.Vector3(0, 1.5, 0.1), radius: 2.8, phi: Math.PI / 2.0 };
      case 'pelvis':
        return { target: new THREE.Vector3(0, 0.6, 0), radius: 2.6, phi: Math.PI / 2.0 };
      case 'legs':
        return { target: new THREE.Vector3(0, -1.2, 0), radius: 3.4, phi: Math.PI / 2.0 };
      case 'full':
      default:
        return { target: new THREE.Vector3(0, 1.4, 0), radius: 6.2, phi: Math.PI / 2.0 };
    }
  }, []);

  // Update camera target when preset changes
  useEffect(() => {
    const coords = getPresetCoords(cameraPreset);
    cameraTargetRef.current.copy(coords.target);
    sphericalRef.current.radius = coords.radius;
    sphericalRef.current.phi = coords.phi;
  }, [cameraPreset, getPresetCoords]);

  // Main Scene Initialization
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Detect Software WebGL
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Scene & Studio Environment
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 4. Lighting Rig (Key + Fill + Rim)
    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.2);
    keyLight.position.set(4, 8, 6);
    keyLight.castShadow = !isSoftwareGl;
    if (!isSoftwareGl) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const hemiLight = new THREE.HemisphereLight(0xe0f2fe, 0x0f172a, 1.4); // cool sky / warm ground fill
    scene.add(hemiLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimLight.position.set(-5, 4, -5);
    scene.add(rimLight);

    // Subtle radial contact shadow on floor
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    shadowTex.colorSpace = THREE.SRGBColorSpace;
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 3.5), shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -3.1;
    scene.add(shadowPlane);

    // 5. Camera
    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 50);
    camera.position.set(0, 1.8, 6.2);
    cameraRef.current = camera;

    // 6. Build Anatomy Models
    const builder = new ProceduralAnatomyBuilder(isSoftwareGl);
    const buildResult = builder.buildCompleteBody();
    buildResultRef.current = buildResult;
    scene.add(buildResult.rootGroup);

    // Highlight Box helper
    scene.add(highlightHelperGroupRef.current);

    // 7. Mouse Orbit & Pan Interaction Listeners
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (!isDraggingRef.current) {
        // Raycasting for hover tooltip
        raycasterRef.current.setFromCamera(mouseRef.current, camera);
        const intersects = raycasterRef.current.intersectObjects(buildResult.rootGroup.children, true);
        const hit = intersects.find((i) => i.object.userData?.isInteractive && i.object.visible);
        if (hit && hit.object.userData?.nameUz) {
          setHoveredName(hit.object.userData.nameUz);
          renderer.domElement.style.cursor = 'pointer';
        } else {
          setHoveredName(null);
          renderer.domElement.style.cursor = 'grab';
        }
        return;
      }

      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      // Orbit angles
      sphericalRef.current.theta -= deltaX * 0.008;
      sphericalRef.current.phi = Math.max(0.15, Math.min(Math.PI - 0.15, sphericalRef.current.phi - deltaY * 0.008));

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      sphericalRef.current.radius = Math.max(1.5, Math.min(10.0, sphericalRef.current.radius + e.deltaY * 0.005));
    };

    // Click to select
    const onClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      const ray = new THREE.Raycaster();
      ray.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

      const intersects = ray.intersectObjects(buildResult.rootGroup.children, true);
      const hit = intersects.find((i) => i.object.userData?.isInteractive && i.object.visible);
      if (hit && hit.object.userData) {
        const u = hit.object.userData;
        medicalAudio.playClickSound();
        onSelectPart(u.category, u.id, u.nameUz);
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel, { passive: false });
    dom.addEventListener('click', onClick);

    // Touch support for mobile/tablets
    let touchStartDist = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && isDraggingRef.current) {
        const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
        const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;
        sphericalRef.current.theta -= deltaX * 0.01;
        sphericalRef.current.phi = Math.max(0.15, Math.min(Math.PI - 0.15, sphericalRef.current.phi - deltaY * 0.01));
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = (touchStartDist - dist) * 0.01;
        sphericalRef.current.radius = Math.max(1.5, Math.min(10.0, sphericalRef.current.radius + factor));
        touchStartDist = dist;
      }
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    dom.addEventListener('touchmove', onTouchMove, { passive: true });
    dom.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation Render Loop (with Software WebGL pacing via fenceSync)
    let frameId = 0;
    const clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    const _targetPos = new THREE.Vector3();

    function tick() {
      const dt = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth Camera Damping
      const { radius, theta, phi } = sphericalRef.current;
      _targetPos.set(
        cameraTargetRef.current.x + radius * Math.sin(phi) * Math.sin(theta),
        cameraTargetRef.current.y + radius * Math.cos(phi),
        cameraTargetRef.current.z + radius * Math.sin(phi) * Math.cos(theta)
      );
      camera.position.lerp(_targetPos, 0.08);
      camera.lookAt(cameraTargetRef.current);

      // Heart contraction pulse animation
      if (buildResult.animatedHeartMesh) {
        const heartPulse = Math.sin(elapsed * 4.5);
        const beatScale = 1.0 + (heartPulse > 0.6 ? (heartPulse - 0.6) * 0.25 : 0);
        buildResult.animatedHeartMesh.scale.set(0.95 * beatScale, 1.25 * beatScale, 0.95 * beatScale);
      }

      // Animated Blood Flow Particles
      if (buildResult.bloodParticlesGroup) {
        buildResult.bloodParticlesGroup.children.forEach((child) => {
          const u = child.userData;
          if (u) {
            child.position.y += u.direction * u.speed;
            if (u.direction < 0 && child.position.y < u.startY) {
              child.position.y = u.endY;
            } else if (u.direction > 0 && child.position.y > u.endY) {
              child.position.y = u.startY;
            }
          }
        });
      }

      // Animated Nerve Impulses
      if (buildResult.nervePulsesGroup) {
        buildResult.nervePulsesGroup.children.forEach((child) => {
          child.position.y -= child.userData.speed || 0.04;
          if (child.position.y < 0.9) {
            child.position.y = 3.8;
          }
        });
      }

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    tick();

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('wheel', onWheel);
      dom.removeEventListener('click', onClick);
      dom.removeEventListener('touchstart', onTouchStart);
      dom.removeEventListener('touchmove', onTouchMove);
      dom.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, [onSelectPart]);

  // Update Layer Visibility
  useEffect(() => {
    if (!buildResultRef.current) return;
    const { layers } = buildResultRef.current;
    layers.skin.visible = activeLayers.skin;
    layers.muscles.visible = activeLayers.muscles;
    layers.skeleton.visible = activeLayers.skeleton;
    layers.organs.visible = activeLayers.organs;
    layers.circulatory.visible = activeLayers.circulatory;
    layers.nervous.visible = activeLayers.nervous;
  }, [activeLayers]);

  // Update Skin Opacity
  useEffect(() => {
    if (!buildResultRef.current) return;
    const skinLayer = buildResultRef.current.layers.skin;
    skinLayer.traverse((child) => {
      if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
        const mat = (child as THREE.Mesh).material as THREE.MeshPhysicalMaterial;
        if (mat.transparent) {
          mat.opacity = skinOpacity;
        }
      }
    });
  }, [skinOpacity]);

  // Update Exploded View
  useEffect(() => {
    if (!buildResultRef.current) return;
    const parts = buildResultRef.current.interactiveParts;
    parts.forEach((p: InteractiveAnatomyPart) => {
      p.mesh.position.lerpVectors(
        p.originalPosition,
        p.originalPosition.clone().add(p.explodedOffset.clone().multiplyScalar(explodedValue)),
        1.0
      );
    });
  }, [explodedValue]);

  // Update Selected Part Halo/Highlight
  useEffect(() => {
    if (!buildResultRef.current) return;
    const parts = buildResultRef.current.interactiveParts;
    highlightHelperGroupRef.current.clear();

    if (!selectedPartId) return;

    const selected = parts.find((p) => p.id === selectedPartId);
    if (selected) {
      const box = new THREE.Box3().setFromObject(selected.mesh);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);

      // Create glowing wireframe cyan halo box
      const boxGeom = new THREE.BoxGeometry(size.x * 1.15 + 0.1, size.y * 1.15 + 0.1, size.z * 1.15 + 0.1);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4, // medical cyan
        wireframe: true,
        transparent: true,
        opacity: 0.65,
      });
      const highlightMesh = new THREE.Mesh(boxGeom, wireMat);
      highlightMesh.position.copy(center);
      highlightHelperGroupRef.current.add(highlightMesh);

      // Smoothly focus camera target on selected organ/bone
      cameraTargetRef.current.lerp(center, 0.85);
    }
  }, [selectedPartId]);

  return (
    <div className="relative w-full h-full select-none overflow-hidden">
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Hover Tooltip (Quiet medical HUD badge) */}
      {hoveredName && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-1.5 rounded-lg bg-slate-900/90 text-cyan-300 text-xs font-medium tracking-wide border border-cyan-500/30 shadow-lg backdrop-blur-sm">
          {hoveredName}
        </div>
      )}
    </div>
  );
};
