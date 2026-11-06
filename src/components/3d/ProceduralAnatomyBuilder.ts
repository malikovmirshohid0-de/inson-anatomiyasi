import * as THREE from 'three';

export interface InteractiveAnatomyPart {
  mesh: THREE.Object3D;
  category: 'organ' | 'bone' | 'muscle' | 'vessel' | 'nerve' | 'skin';
  id: string;
  nameUz: string;
  originalPosition: THREE.Vector3;
  explodedOffset: THREE.Vector3;
}

export interface AnatomySceneBuildResult {
  rootGroup: THREE.Group;
  layers: {
    skin: THREE.Group;
    muscles: THREE.Group;
    skeleton: THREE.Group;
    organs: THREE.Group;
    circulatory: THREE.Group;
    nervous: THREE.Group;
  };
  interactiveParts: InteractiveAnatomyPart[];
  animatedHeartMesh?: THREE.Mesh;
  bloodParticlesGroup?: THREE.Group;
  nervePulsesGroup?: THREE.Group;
}

export class ProceduralAnatomyBuilder {
  private isSoftwareGl: boolean;
  private interactiveParts: InteractiveAnatomyPart[] = [];

  constructor(isSoftwareGl: boolean) {
    this.isSoftwareGl = isSoftwareGl;
  }

  public buildCompleteBody(): AnatomySceneBuildResult {
    this.interactiveParts = [];
    const rootGroup = new THREE.Group();
    rootGroup.name = 'HumanBody_Root';

    const skinGroup = new THREE.Group();
    skinGroup.name = 'Layer_Skin';

    const musclesGroup = new THREE.Group();
    musclesGroup.name = 'Layer_Muscles';

    const skeletonGroup = new THREE.Group();
    skeletonGroup.name = 'Layer_Skeleton';

    const organsGroup = new THREE.Group();
    organsGroup.name = 'Layer_Organs';

    const circulatoryGroup = new THREE.Group();
    circulatoryGroup.name = 'Layer_Circulatory';

    const nervousGroup = new THREE.Group();
    nervousGroup.name = 'Layer_Nervous';

    // 1. Build Layers
    this.buildSkin(skinGroup);
    this.buildSkeleton(skeletonGroup);
    this.buildMuscles(musclesGroup);
    const { heartMesh } = this.buildOrgans(organsGroup);
    const { bloodParticles } = this.buildCirculatory(circulatoryGroup);
    const { nervePulses } = this.buildNervous(nervousGroup);

    rootGroup.add(skeletonGroup);
    rootGroup.add(musclesGroup);
    rootGroup.add(organsGroup);
    rootGroup.add(circulatoryGroup);
    rootGroup.add(nervousGroup);
    rootGroup.add(skinGroup);

    return {
      rootGroup,
      layers: {
        skin: skinGroup,
        muscles: musclesGroup,
        skeleton: skeletonGroup,
        organs: organsGroup,
        circulatory: circulatoryGroup,
        nervous: nervousGroup,
      },
      interactiveParts: this.interactiveParts,
      animatedHeartMesh: heartMesh,
      bloodParticlesGroup: bloodParticles,
      nervePulsesGroup: nervePulses,
    };
  }

  // ==========================================
  // 1. SKIN LAYER (Realistic Anatomical Silhouette)
  // ==========================================
  private buildSkin(parent: THREE.Group) {
    const skinMat = new THREE.MeshPhysicalMaterial({
      color: 0xf6d5bc,
      roughness: 0.65,
      metalness: 0.04,
      transparent: true,
      opacity: 0.28, // translucent by default so internal organs/skeleton show through
      depthWrite: false,
      transmission: this.isSoftwareGl ? 0 : 0.35,
      clearcoat: 0.15,
      side: THREE.DoubleSide,
    });

    // Head and Neck
    const headGeom = new THREE.SphereGeometry(0.72, 24, 20);
    headGeom.scale(0.85, 1.05, 0.95);
    const headMesh = new THREE.Mesh(headGeom, skinMat);
    headMesh.position.set(0, 4.25, 0.05);
    parent.add(headMesh);

    // Torso silhouette (Chest + Abdomen)
    const torsoGeom = new THREE.CylinderGeometry(0.85, 0.72, 2.2, 24, 8);
    torsoGeom.scale(1.15, 1.0, 0.75);
    const torsoMesh = new THREE.Mesh(torsoGeom, skinMat);
    torsoMesh.position.set(0, 2.3, 0.08);
    parent.add(torsoMesh);

    // Hips / Pelvis silhouette
    const hipsGeom = new THREE.CylinderGeometry(0.72, 0.78, 0.9, 20, 6);
    hipsGeom.scale(1.1, 1.0, 0.78);
    const hipsMesh = new THREE.Mesh(hipsGeom, skinMat);
    hipsMesh.position.set(0, 0.8, 0.05);
    parent.add(hipsMesh);

    // Left and Right Arms
    [-0.85, 0.85].forEach((xSide) => {
      // Upper arm
      const armGeom = new THREE.CylinderGeometry(0.26, 0.22, 1.3, 16);
      const armMesh = new THREE.Mesh(armGeom, skinMat);
      armMesh.position.set(xSide * 1.25, 2.45, 0.05);
      armMesh.rotation.z = xSide * -0.15;
      parent.add(armMesh);

      // Forearm
      const forearmGeom = new THREE.CylinderGeometry(0.21, 0.17, 1.25, 16);
      const forearmMesh = new THREE.Mesh(forearmGeom, skinMat);
      forearmMesh.position.set(xSide * 1.48, 1.35, 0.08);
      forearmMesh.rotation.z = xSide * -0.08;
      parent.add(forearmMesh);

      // Hand
      const handGeom = new THREE.BoxGeometry(0.18, 0.35, 0.08);
      const handMesh = new THREE.Mesh(handGeom, skinMat);
      handMesh.position.set(xSide * 1.58, 0.58, 0.1);
      parent.add(handMesh);
    });

    // Left and Right Legs
    [-0.38, 0.38].forEach((xSide) => {
      // Thigh
      const thighGeom = new THREE.CylinderGeometry(0.38, 0.3, 1.6, 18);
      const thighMesh = new THREE.Mesh(thighGeom, skinMat);
      thighMesh.position.set(xSide, -0.45, 0.05);
      parent.add(thighMesh);

      // Calf
      const calfGeom = new THREE.CylinderGeometry(0.28, 0.2, 1.5, 18);
      const calfMesh = new THREE.Mesh(calfGeom, skinMat);
      calfMesh.position.set(xSide, -1.95, 0.05);
      parent.add(calfMesh);

      // Foot
      const footGeom = new THREE.BoxGeometry(0.32, 0.18, 0.65);
      const footMesh = new THREE.Mesh(footGeom, skinMat);
      footMesh.position.set(xSide, -2.85, 0.18);
      parent.add(footMesh);
    });

    this.registerPart(torsoMesh, 'skin', 'skin', 'Inson terisi (Epidermis va Dermis)', [0, 0, 0.8]);
  }

  // ==========================================
  // 2. SKELETON LAYER (Complete Bone Matrix)
  // ==========================================
  private buildSkeleton(parent: THREE.Group) {
    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xedebe4,
      roughness: 0.68,
      metalness: 0.06,
    });

    const cartilageMat = new THREE.MeshStandardMaterial({
      color: 0x94d2bd,
      roughness: 0.45,
      metalness: 0.02,
      transparent: true,
      opacity: 0.85,
    });

    // A. Skull
    const skullGroup = new THREE.Group();
    skullGroup.name = 'Bone_Skull';
    // Cranium vault
    const craniumGeom = new THREE.SphereGeometry(0.58, 20, 16);
    craniumGeom.scale(0.88, 1.0, 0.95);
    const craniumMesh = new THREE.Mesh(craniumGeom, boneMat);
    skullGroup.add(craniumMesh);

    // Facial bones & eye orbits
    const faceGeom = new THREE.BoxGeometry(0.58, 0.45, 0.48);
    const faceMesh = new THREE.Mesh(faceGeom, boneMat);
    faceMesh.position.set(0, -0.22, 0.22);
    skullGroup.add(faceMesh);

    // Mandible (Lower jaw)
    const jawGeom = new THREE.TorusGeometry(0.24, 0.06, 8, 16, Math.PI);
    jawGeom.rotateX(Math.PI / 2);
    const jawMesh = new THREE.Mesh(jawGeom, boneMat);
    jawMesh.position.set(0, -0.52, 0.2);
    skullGroup.add(jawMesh);

    skullGroup.position.set(0, 4.3, 0.05);
    parent.add(skullGroup);
    this.registerPart(skullGroup, 'bone', 'skull', 'Kalla suyagi (Cranium)', [0, 0, 0.6]);

    // B. Spine (Vertebral Column)
    const spineGroup = new THREE.Group();
    spineGroup.name = 'Bone_Spine';
    const vertebraeCount = 24;
    for (let i = 0; i < vertebraeCount; i++) {
      const y = 3.65 - i * 0.125;
      const zCurve = Math.sin((i / vertebraeCount) * Math.PI * 2) * 0.08 - 0.12;

      // Vertebra body
      const vGeom = new THREE.CylinderGeometry(0.14, 0.15, 0.08, 12);
      const vMesh = new THREE.Mesh(vGeom, boneMat);
      vMesh.position.set(0, y, zCurve);
      vMesh.rotation.x = 0.05;
      spineGroup.add(vMesh);

      // Spinous process (back spine ridge)
      const pGeom = new THREE.BoxGeometry(0.04, 0.04, 0.14);
      const pMesh = new THREE.Mesh(pGeom, boneMat);
      pMesh.position.set(0, y, zCurve - 0.11);
      spineGroup.add(pMesh);

      // Cartilage disc
      if (i < vertebraeCount - 1) {
        const dGeom = new THREE.CylinderGeometry(0.13, 0.13, 0.03, 12);
        const dMesh = new THREE.Mesh(dGeom, cartilageMat);
        dMesh.position.set(0, y - 0.055, zCurve);
        spineGroup.add(dMesh);
      }
    }
    parent.add(spineGroup);
    this.registerPart(spineGroup, 'bone', 'spine', "Umurtqa pog'onasi (Columna vertebralis)", [0, 0, -0.6]);

    // C. Sternum
    const sternumGroup = new THREE.Group();
    const sternumGeom = new THREE.BoxGeometry(0.18, 0.65, 0.05);
    const sternumMesh = new THREE.Mesh(sternumGeom, boneMat);
    sternumMesh.position.set(0, 2.7, 0.38);
    sternumGroup.add(sternumMesh);
    parent.add(sternumGroup);
    this.registerPart(sternumGroup, 'bone', 'sternum', "To'sh suyagi (Sternum)", [0, 0, 0.5]);

    // D. Rib Cage (12 pairs of ribs)
    const ribsGroup = new THREE.Group();
    ribsGroup.name = 'Bone_Ribs';
    for (let r = 0; r < 10; r++) {
      const ribY = 3.1 - r * 0.11;
      const radiusX = 0.52 + Math.sin((r / 10) * Math.PI) * 0.32;
      const radiusZ = 0.35 + Math.sin((r / 10) * Math.PI) * 0.16;

      const curvePoints: THREE.Vector3[] = [];
      const segments = 20;
      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 1.8 - Math.PI * 0.9;
        const x = Math.sin(theta) * radiusX;
        const z = Math.cos(theta) * radiusZ - 0.05;
        const y = ribY - Math.abs(x) * 0.12;
        curvePoints.push(new THREE.Vector3(x, y, z));
      }
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const ribGeom = new THREE.TubeGeometry(curve, 24, 0.032, 8, false);
      const ribMesh = new THREE.Mesh(ribGeom, boneMat);
      ribsGroup.add(ribMesh);
    }
    parent.add(ribsGroup);
    this.registerPart(ribsGroup, 'bone', 'ribs', "Qovurg'alar (Costae)", [0, 0, 0.4]);

    // E. Shoulder Girdle (Clavicles & Scapulae)
    const shoulderGroup = new THREE.Group();
    [-1, 1].forEach((side) => {
      // Clavicle (O'mrov)
      const clavicleCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.08, 3.25, 0.32),
        new THREE.Vector3(side * 0.45, 3.28, 0.28),
        new THREE.Vector3(side * 0.85, 3.22, 0.12),
      ]);
      const clavicleGeom = new THREE.TubeGeometry(clavicleCurve, 16, 0.04, 8, false);
      const clavicleMesh = new THREE.Mesh(clavicleGeom, boneMat);
      shoulderGroup.add(clavicleMesh);

      // Scapula (Kurak)
      const scapulaGeom = new THREE.BoxGeometry(0.35, 0.48, 0.04);
      const scapulaMesh = new THREE.Mesh(scapulaGeom, boneMat);
      scapulaMesh.position.set(side * 0.55, 2.75, -0.22);
      scapulaMesh.rotation.y = side * 0.25;
      shoulderGroup.add(scapulaMesh);
    });
    parent.add(shoulderGroup);
    this.registerPart(shoulderGroup, 'bone', 'shoulder_girdle', "Yelka kamari (O'mrov va Kurak)", [0, 0.2, 0.3]);

    // F. Arm Bones (Humerus, Radius, Ulna, Hands)
    const armBonesGroup = new THREE.Group();
    [-1, 1].forEach((side) => {
      // Humerus (Yelka suyagi)
      const humerusGeom = new THREE.CylinderGeometry(0.07, 0.065, 1.25, 12);
      const humerusMesh = new THREE.Mesh(humerusGeom, boneMat);
      humerusMesh.position.set(side * 1.15, 2.45, 0.05);
      humerusMesh.rotation.z = side * -0.15;
      armBonesGroup.add(humerusMesh);

      // Radius & Ulna (Bilak va Tirsak suyaklari)
      const radiusGeom = new THREE.CylinderGeometry(0.045, 0.04, 1.15, 10);
      const radiusMesh = new THREE.Mesh(radiusGeom, boneMat);
      radiusMesh.position.set(side * 1.35, 1.35, 0.08);
      armBonesGroup.add(radiusMesh);

      const ulnaGeom = new THREE.CylinderGeometry(0.045, 0.038, 1.15, 10);
      const ulnaMesh = new THREE.Mesh(ulnaGeom, boneMat);
      ulnaMesh.position.set(side * 1.44, 1.35, 0.03);
      armBonesGroup.add(ulnaMesh);

      // Hand Bones (Kaft va Barmoqlar)
      const handGeom = new THREE.BoxGeometry(0.12, 0.28, 0.04);
      const handMesh = new THREE.Mesh(handGeom, boneMat);
      handMesh.position.set(side * 1.52, 0.62, 0.08);
      armBonesGroup.add(handMesh);
    });
    parent.add(armBonesGroup);
    this.registerPart(armBonesGroup, 'bone', 'arm_bones', "Qo'l suyaklari (Humerus, Radius, Ulna)", [0.4, 0, 0.2]);

    // G. Pelvis (Chanoq suyagi)
    const pelvisGroup = new THREE.Group();
    const pelvisGeom = new THREE.TorusGeometry(0.48, 0.16, 12, 24, Math.PI * 1.6);
    pelvisGeom.rotateX(Math.PI / 2.3);
    const pelvisMesh = new THREE.Mesh(pelvisGeom, boneMat);
    pelvisMesh.position.set(0, 0.75, 0.02);
    pelvisGroup.add(pelvisMesh);

    // Sacrum wedge
    const sacrumGeom = new THREE.ConeGeometry(0.22, 0.38, 5);
    sacrumGeom.rotateX(Math.PI);
    const sacrumMesh = new THREE.Mesh(sacrumGeom, boneMat);
    sacrumMesh.position.set(0, 0.85, -0.16);
    pelvisGroup.add(sacrumMesh);

    parent.add(pelvisGroup);
    this.registerPart(pelvisGroup, 'bone', 'pelvis', 'Tos suyagi (Pelvis)', [0, 0, 0.4]);

    // H. Leg Bones (Femur, Patella, Tibia, Fibula, Foot)
    const legBonesGroup = new THREE.Group();
    [-0.32, 0.32].forEach((sideX) => {
      // Femur (Son suyagi)
      const femurGeom = new THREE.CylinderGeometry(0.09, 0.08, 1.55, 14);
      const femurMesh = new THREE.Mesh(femurGeom, boneMat);
      femurMesh.position.set(sideX, -0.45, 0.05);
      legBonesGroup.add(femurMesh);

      // Patella (Tizza qopqog'i)
      const patellaGeom = new THREE.SphereGeometry(0.09, 12, 10);
      patellaGeom.scale(1.0, 1.2, 0.4);
      const patellaMesh = new THREE.Mesh(patellaGeom, boneMat);
      patellaMesh.position.set(sideX, -1.25, 0.18);
      legBonesGroup.add(patellaMesh);

      // Tibia (Katta boldir)
      const tibiaGeom = new THREE.CylinderGeometry(0.075, 0.065, 1.45, 12);
      const tibiaMesh = new THREE.Mesh(tibiaGeom, boneMat);
      tibiaMesh.position.set(sideX - 0.02 * Math.sign(sideX), -2.05, 0.05);
      legBonesGroup.add(tibiaMesh);

      // Fibula (Kichik boldir)
      const fibulaGeom = new THREE.CylinderGeometry(0.035, 0.03, 1.4, 8);
      const fibulaMesh = new THREE.Mesh(fibulaGeom, boneMat);
      fibulaMesh.position.set(sideX + 0.07 * Math.sign(sideX), -2.05, 0.02);
      legBonesGroup.add(fibulaMesh);

      // Foot bones (Oyoq panjasi)
      const footGeom = new THREE.BoxGeometry(0.2, 0.12, 0.52);
      const footMesh = new THREE.Mesh(footGeom, boneMat);
      footMesh.position.set(sideX, -2.85, 0.2);
      legBonesGroup.add(footMesh);
    });
    parent.add(legBonesGroup);
    this.registerPart(legBonesGroup, 'bone', 'femur', 'Son va boldir suyaklari (Femur, Tibia)', [0, 0, 0.4]);
  }

  // ==========================================
  // 3. MUSCULAR LAYER
  // ==========================================
  private buildMuscles(parent: THREE.Group) {
    const muscleMat = new THREE.MeshStandardMaterial({
      color: 0x991b1b, // deep anatomical red
      roughness: 0.52,
      metalness: 0.08,
    });

    const tendonMat = new THREE.MeshStandardMaterial({
      color: 0xeadbc8, // tendon pearly white
      roughness: 0.4,
      metalness: 0.05,
    });

    // A. Chest: Pectoralis Major (Ko'krak mushagi)
    [-1, 1].forEach((side) => {
      const pecGeom = new THREE.BoxGeometry(0.55, 0.45, 0.12);
      const pecMesh = new THREE.Mesh(pecGeom, muscleMat);
      pecMesh.position.set(side * 0.36, 2.75, 0.34);
      pecMesh.rotation.z = side * -0.15;
      pecMesh.rotation.y = side * 0.22;
      parent.add(pecMesh);
      this.registerPart(pecMesh, 'muscle', 'chest_muscles', "Katta ko'krak mushagi (Pectoralis major)", [0, 0, 0.5]);
    });

    // B. Abdominal: Rectus Abdominis (Press)
    const absGroup = new THREE.Group();
    for (let r = 0; r < 4; r++) {
      [-1, 1].forEach((side) => {
        const packGeom = new THREE.BoxGeometry(0.22, 0.18, 0.08);
        const packMesh = new THREE.Mesh(packGeom, muscleMat);
        packMesh.position.set(side * 0.14, 2.1 - r * 0.22, 0.32);
        absGroup.add(packMesh);
      });
    }
    parent.add(absGroup);
    this.registerPart(absGroup, 'muscle', 'abs_muscles', "Qorin to'g'ri mushagi (Rectus abdominis)", [0, 0, 0.5]);

    // C. Back: Latissimus Dorsi & Trapezius
    [-1, 1].forEach((side) => {
      const latGeom = new THREE.BoxGeometry(0.48, 0.85, 0.12);
      const latMesh = new THREE.Mesh(latGeom, muscleMat);
      latMesh.position.set(side * 0.45, 2.25, -0.25);
      latMesh.rotation.y = side * -0.25;
      parent.add(latMesh);
      this.registerPart(latMesh, 'muscle', 'back_muscles', 'Keng orqa mushagi (Latissimus dorsi)', [0, 0, -0.5]);
    });

    // D. Arms: Biceps & Triceps
    [-1, 1].forEach((side) => {
      const bicepsGeom = new THREE.CapsuleGeometry(0.12, 0.55, 8, 12);
      const bicepsMesh = new THREE.Mesh(bicepsGeom, muscleMat);
      bicepsMesh.position.set(side * 1.15, 2.45, 0.12);
      bicepsMesh.rotation.z = side * -0.15;
      parent.add(bicepsMesh);
      this.registerPart(bicepsMesh, 'muscle', 'arm_muscles', 'Yelka biceps mushagi', [side * 0.4, 0, 0.3]);
    });

    // E. Legs: Quadriceps (Sonning to'rt boshli mushagi)
    [-0.32, 0.32].forEach((sideX) => {
      const quadGeom = new THREE.CapsuleGeometry(0.18, 0.95, 8, 14);
      const quadMesh = new THREE.Mesh(quadGeom, muscleMat);
      quadMesh.position.set(sideX, -0.45, 0.16);
      parent.add(quadMesh);
      this.registerPart(quadMesh, 'muscle', 'leg_muscles', "Son to'rt boshli mushagi (Quadriceps)", [0, 0, 0.4]);

      // Calf Gastrocnemius (Boldir mushagi)
      const calfGeom = new THREE.CapsuleGeometry(0.15, 0.75, 8, 12);
      const calfMesh = new THREE.Mesh(calfGeom, muscleMat);
      calfMesh.position.set(sideX, -1.95, -0.12);
      parent.add(calfMesh);

      // Achilles tendon
      const achillesGeom = new THREE.CylinderGeometry(0.04, 0.05, 0.45, 8);
      const achillesMesh = new THREE.Mesh(achillesGeom, tendonMat);
      achillesMesh.position.set(sideX, -2.55, -0.14);
      parent.add(achillesMesh);
      this.registerPart(calfMesh, 'muscle', 'calf_muscles', 'Boldir mushagi va Axill payi', [0, 0, -0.4]);
    });
  }

  // ==========================================
  // 4. INTERNAL ORGANS LAYER
  // ==========================================
  private buildOrgans(parent: THREE.Group): { heartMesh: THREE.Mesh } {
    // A. Brain
    const brainMat = new THREE.MeshStandardMaterial({
      color: 0xf9a8d4, // soft anatomical brain pink
      roughness: 0.65,
      metalness: 0.05,
    });
    const brainGroup = new THREE.Group();
    [-0.14, 0.14].forEach((xSide) => {
      const hemisphereGeom = new THREE.SphereGeometry(0.36, 16, 14);
      hemisphereGeom.scale(0.85, 1.1, 1.25);
      const hemMesh = new THREE.Mesh(hemisphereGeom, brainMat);
      hemMesh.position.set(xSide, 0, 0);
      brainGroup.add(hemMesh);
    });
    // Cerebellum (Miyacha)
    const cerebellumGeom = new THREE.SphereGeometry(0.24, 12, 10);
    cerebellumGeom.scale(1.2, 0.7, 0.85);
    const cerebellumMesh = new THREE.Mesh(cerebellumGeom, brainMat);
    cerebellumMesh.position.set(0, -0.32, -0.22);
    brainGroup.add(cerebellumMesh);

    brainGroup.position.set(0, 4.25, 0.05);
    parent.add(brainGroup);
    this.registerPart(brainGroup, 'organ', 'brain', 'Bosh miya (Encephalon)', [0, 0.3, 0.6]);

    // B. Thyroid Gland (Qalqonsimon bez)
    const thyroidMat = new THREE.MeshStandardMaterial({
      color: 0xc026d3,
      roughness: 0.55,
      metalness: 0.08,
    });
    const thyroidGeom = new THREE.TorusGeometry(0.14, 0.05, 8, 16, Math.PI);
    thyroidGeom.rotateZ(Math.PI);
    const thyroidMesh = new THREE.Mesh(thyroidGeom, thyroidMat);
    thyroidMesh.position.set(0, 3.42, 0.22);
    parent.add(thyroidMesh);
    this.registerPart(thyroidMesh, 'organ', 'thyroid', 'Qalqonsimon bez (Glandula thyroidea)', [0, 0, 0.4]);

    // C. Lungs (O'pkalar)
    const lungsMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8, // cyan-blue lung texture
      roughness: 0.55,
      metalness: 0.05,
      transparent: true,
      opacity: 0.85,
    });
    const lungsGroup = new THREE.Group();
    // Right Lung (3 lobes)
    const rightLungGeom = new THREE.ConeGeometry(0.42, 1.05, 16);
    rightLungGeom.scale(1.1, 1.0, 0.8);
    const rightLung = new THREE.Mesh(rightLungGeom, lungsMat);
    rightLung.position.set(-0.35, 2.55, 0.12);
    lungsGroup.add(rightLung);

    // Left Lung (2 lobes with cardiac notch)
    const leftLungGeom = new THREE.ConeGeometry(0.38, 1.02, 16);
    leftLungGeom.scale(0.95, 1.0, 0.78);
    const leftLung = new THREE.Mesh(leftLungGeom, lungsMat);
    leftLung.position.set(0.35, 2.55, 0.12);
    lungsGroup.add(leftLung);

    parent.add(lungsGroup);
    this.registerPart(lungsGroup, 'organ', 'lungs', "O'pkalar (Pulmones)", [0, 0, 0.5]);

    // D. Heart (Yurak)
    const heartMat = new THREE.MeshStandardMaterial({
      color: 0xe11d48, // vibrant crimson heart
      roughness: 0.42,
      metalness: 0.12,
    });
    const heartGeom = new THREE.SphereGeometry(0.24, 16, 14);
    heartGeom.scale(0.95, 1.25, 0.95);
    const heartMesh = new THREE.Mesh(heartGeom, heartMat);
    heartMesh.position.set(0.12, 2.5, 0.28);
    heartMesh.rotation.z = -0.22;
    parent.add(heartMesh);
    this.registerPart(heartMesh, 'organ', 'heart', 'Yurak (Cor)', [0.1, 0, 0.6]);

    // E. Liver (Jigar)
    const liverMat = new THREE.MeshStandardMaterial({
      color: 0xb45309, // amber red-brown
      roughness: 0.48,
      metalness: 0.08,
    });
    const liverGeom = new THREE.SphereGeometry(0.42, 18, 14);
    liverGeom.scale(1.4, 0.75, 0.85);
    const liverMesh = new THREE.Mesh(liverGeom, liverMat);
    liverMesh.position.set(-0.25, 1.8, 0.22);
    liverMesh.rotation.z = 0.18;
    parent.add(liverMesh);
    this.registerPart(liverMesh, 'organ', 'liver', 'Jigar (Hepar)', [-0.3, 0, 0.6]);

    // F. Gallbladder (O't pufagi)
    const gallMat = new THREE.MeshStandardMaterial({
      color: 0x15803d, // emerald gall green
      roughness: 0.4,
      metalness: 0.05,
    });
    const gallGeom = new THREE.SphereGeometry(0.08, 10, 8);
    gallGeom.scale(0.8, 1.5, 0.8);
    const gallMesh = new THREE.Mesh(gallGeom, gallMat);
    gallMesh.position.set(-0.18, 1.62, 0.28);
    parent.add(gallMesh);
    this.registerPart(gallMesh, 'organ', 'gallbladder', "O't pufagi (Vesica fellea)", [-0.2, 0, 0.4]);

    // G. Stomach (Oshqozon)
    const stomachMat = new THREE.MeshStandardMaterial({
      color: 0xfb923c, // warm coral amber
      roughness: 0.45,
      metalness: 0.06,
    });
    const stomachGeom = new THREE.TorusGeometry(0.24, 0.12, 12, 20, Math.PI * 0.9);
    stomachGeom.rotateZ(Math.PI / 1.5);
    const stomachMesh = new THREE.Mesh(stomachGeom, stomachMat);
    stomachMesh.position.set(0.18, 1.75, 0.24);
    parent.add(stomachMesh);
    this.registerPart(stomachMesh, 'organ', 'stomach', 'Oshqozon (Gaster)', [0.25, 0, 0.6]);

    // H. Spleen (Taloq)
    const spleenMat = new THREE.MeshStandardMaterial({
      color: 0x831843, // deep plum
      roughness: 0.5,
      metalness: 0.06,
    });
    const spleenGeom = new THREE.SphereGeometry(0.14, 12, 10);
    spleenGeom.scale(0.7, 1.3, 0.6);
    const spleenMesh = new THREE.Mesh(spleenGeom, spleenMat);
    spleenMesh.position.set(0.38, 1.85, 0.05);
    parent.add(spleenMesh);
    this.registerPart(spleenMesh, 'organ', 'spleen', 'Taloq (Splen)', [0.4, 0, 0.3]);

    // I. Pancreas (Oshqozon osti bezi)
    const pancreasMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      roughness: 0.55,
      metalness: 0.05,
    });
    const pancreasGeom = new THREE.CapsuleGeometry(0.08, 0.38, 8, 12);
    pancreasGeom.rotateZ(Math.PI / 2.3);
    const pancreasMesh = new THREE.Mesh(pancreasGeom, pancreasMat);
    pancreasMesh.position.set(0.05, 1.65, 0.05);
    parent.add(pancreasMesh);
    this.registerPart(pancreasMesh, 'organ', 'pancreas', 'Oshqozon osti bezi (Pancreas)', [0.1, 0, 0.4]);

    // J. Kidneys (Buyraklar)
    const kidneyMat = new THREE.MeshStandardMaterial({
      color: 0x9f1239, // renal ruby red
      roughness: 0.45,
      metalness: 0.08,
    });
    const kidneysGroup = new THREE.Group();
    [-0.24, 0.24].forEach((xSide) => {
      const kidneyGeom = new THREE.SphereGeometry(0.15, 12, 10);
      kidneyGeom.scale(0.75, 1.25, 0.85);
      const kidneyMesh = new THREE.Mesh(kidneyGeom, kidneyMat);
      kidneyMesh.position.set(xSide, xSide < 0 ? 1.42 : 1.48, -0.15); // right kidney slightly lower
      kidneysGroup.add(kidneyMesh);
    });
    parent.add(kidneysGroup);
    this.registerPart(kidneysGroup, 'organ', 'kidneys', 'Buyraklar (Renes)', [0, 0, -0.5]);

    // K. Large Intestine (Yo'g'on ichak chambari)
    const colonMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // colon ochre
      roughness: 0.6,
      metalness: 0.05,
    });
    const colonCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.38, 0.75, 0.18), // cecum
      new THREE.Vector3(-0.42, 1.35, 0.18), // ascending
      new THREE.Vector3(0.0, 1.42, 0.24), // transverse
      new THREE.Vector3(0.42, 1.35, 0.18), // descending
      new THREE.Vector3(0.25, 0.68, 0.15), // sigmoid
      new THREE.Vector3(0.0, 0.52, 0.12), // rectum
    ]);
    const colonGeom = new THREE.TubeGeometry(colonCurve, 32, 0.09, 10, false);
    const colonMesh = new THREE.Mesh(colonGeom, colonMat);
    parent.add(colonMesh);
    this.registerPart(colonMesh, 'organ', 'large_intestine', "Yo'g'on ichak (Intestinum crassum)", [0, 0, 0.45]);

    // L. Small Intestine (Ingichka ichak)
    const smallIntestineMat = new THREE.MeshStandardMaterial({
      color: 0xf87171,
      roughness: 0.5,
      metalness: 0.04,
    });
    const intestineGeom = new THREE.SphereGeometry(0.32, 14, 12);
    intestineGeom.scale(1.0, 0.85, 0.6);
    const smallIntestineMesh = new THREE.Mesh(intestineGeom, smallIntestineMat);
    smallIntestineMesh.position.set(0.0, 1.05, 0.2);
    parent.add(smallIntestineMesh);
    this.registerPart(smallIntestineMesh, 'organ', 'small_intestine', 'Ingichka ichak (Intestinum tenue)', [0, 0, 0.5]);

    // M. Urinary Bladder (Siydik pufagi)
    const bladderMat = new THREE.MeshStandardMaterial({
      color: 0xeab308,
      roughness: 0.4,
      metalness: 0.06,
    });
    const bladderGeom = new THREE.SphereGeometry(0.14, 12, 10);
    bladderGeom.scale(1.1, 0.9, 1.0);
    const bladderMesh = new THREE.Mesh(bladderGeom, bladderMat);
    bladderMesh.position.set(0.0, 0.42, 0.16);
    parent.add(bladderMesh);
    this.registerPart(bladderMesh, 'organ', 'urinary_bladder', 'Siydik pufagi (Vesica urinaria)', [0, 0, 0.4]);

    return { heartMesh };
  }

  // ==========================================
  // 5. CIRCULATORY SYSTEM LAYER
  // ==========================================
  private buildCirculatory(parent: THREE.Group): { bloodParticles: THREE.Group } {
    const arteryMat = new THREE.MeshStandardMaterial({
      color: 0xef4444, // bright arterial red
      roughness: 0.35,
      metalness: 0.15,
    });

    const veinMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb, // venous royal blue
      roughness: 0.35,
      metalness: 0.15,
    });

    // Aorta Arch & Descending Aorta
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.12, 2.58, 0.28), // left ventricle exit
      new THREE.Vector3(0.08, 2.95, 0.22), // ascending
      new THREE.Vector3(-0.02, 3.05, 0.15), // arch
      new THREE.Vector3(-0.06, 2.45, 0.05), // thoracic aorta
      new THREE.Vector3(-0.04, 1.45, 0.02), // abdominal aorta
      new THREE.Vector3(0.0, 0.85, 0.02), // bifurcation
    ]);
    const aortaGeom = new THREE.TubeGeometry(aortaCurve, 32, 0.055, 10, false);
    const aortaMesh = new THREE.Mesh(aortaGeom, arteryMat);
    parent.add(aortaMesh);
    this.registerPart(aortaMesh, 'vessel', 'aorta', 'Aorta (Bosh arteriya)', [0, 0, 0.35]);

    // Vena Cava (Kovak venalar)
    const venaCavaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.06, 3.15, 0.15), // superior entrance
      new THREE.Vector3(0.08, 2.55, 0.18), // right atrium
      new THREE.Vector3(0.06, 1.45, 0.05), // inferior vena cava
      new THREE.Vector3(0.05, 0.85, 0.05), // bifurcation
    ]);
    const venaCavaGeom = new THREE.TubeGeometry(venaCavaCurve, 24, 0.06, 10, false);
    const venaCavaMesh = new THREE.Mesh(venaCavaGeom, veinMat);
    parent.add(venaCavaMesh);
    this.registerPart(venaCavaMesh, 'vessel', 'vena_cava_inferior', 'Pastki va Yuqori kovak venalar', [0, 0, 0.35]);

    // Carotid and Jugular to Head
    [-1, 1].forEach((side) => {
      // Carotid Artery (Uyqu arteriyasi)
      const carotidCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.08, 3.05, 0.18),
        new THREE.Vector3(side * 0.14, 3.65, 0.15),
        new THREE.Vector3(side * 0.18, 4.15, 0.12),
      ]);
      const carotidMesh = new THREE.Mesh(new THREE.TubeGeometry(carotidCurve, 16, 0.028, 8, false), arteryMat);
      parent.add(carotidMesh);

      // Jugular Vein (Bo'yinturuq venasi)
      const jugularCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.22, 4.15, 0.12),
        new THREE.Vector3(side * 0.18, 3.65, 0.15),
        new THREE.Vector3(side * 0.12, 3.05, 0.18),
      ]);
      const jugularMesh = new THREE.Mesh(new THREE.TubeGeometry(jugularCurve, 16, 0.032, 8, false), veinMat);
      parent.add(jugularMesh);

      // Arm Arteries & Veins
      const armArteryCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.25, 2.95, 0.15),
        new THREE.Vector3(side * 1.15, 2.45, 0.05),
        new THREE.Vector3(side * 1.45, 1.35, 0.08),
      ]);
      const armArteryMesh = new THREE.Mesh(new THREE.TubeGeometry(armArteryCurve, 16, 0.024, 8, false), arteryMat);
      parent.add(armArteryMesh);

      // Leg Iliac and Femoral vessels
      const legArteryCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.05, 0.85, 0.02),
        new THREE.Vector3(side * 0.25, -0.45, 0.08),
        new THREE.Vector3(side * 0.22, -1.95, 0.05),
      ]);
      const legArteryMesh = new THREE.Mesh(new THREE.TubeGeometry(legArteryCurve, 20, 0.035, 8, false), arteryMat);
      parent.add(legArteryMesh);

      const legVeinCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.26, -1.95, 0.05),
        new THREE.Vector3(side * 0.28, -0.45, 0.08),
        new THREE.Vector3(side * 0.08, 0.85, 0.05),
      ]);
      const legVeinMesh = new THREE.Mesh(new THREE.TubeGeometry(legVeinCurve, 20, 0.038, 8, false), veinMat);
      parent.add(legVeinMesh);
    });

    // Dynamic Flowing Blood Particles
    const bloodParticles = new THREE.Group();
    bloodParticles.name = 'Animated_BloodParticles';
    const particleCount = this.isSoftwareGl ? 30 : 90;
    const particleGeom = new THREE.SphereGeometry(0.024, 8, 8);

    for (let i = 0; i < particleCount; i++) {
      const isArterial = i % 2 === 0;
      const pMat = new THREE.MeshBasicMaterial({
        color: isArterial ? 0xff3b30 : 0x007aff,
      });
      const pMesh = new THREE.Mesh(particleGeom, pMat);
      // Place initial random positions along main circulatory loops
      pMesh.position.set((Math.random() - 0.5) * 0.4, 0.5 + Math.random() * 2.8, (Math.random() - 0.5) * 0.2 + 0.1);
      pMesh.userData = {
        speed: 0.015 + Math.random() * 0.02,
        direction: isArterial ? -1 : 1,
        startY: 0.2,
        endY: 3.8,
      };
      bloodParticles.add(pMesh);
    }
    parent.add(bloodParticles);

    return { bloodParticles };
  }

  // ==========================================
  // 6. NERVOUS SYSTEM LAYER
  // ==========================================
  private buildNervous(parent: THREE.Group): { nervePulses: THREE.Group } {
    const nerveMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a, // luminous nerve yellow
      roughness: 0.35,
      metalness: 0.1,
      emissive: 0xd97706,
      emissiveIntensity: 0.25,
    });

    // Spinal Cord (Orqa miya stvoli)
    const spinalCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 3.85, -0.05),
      new THREE.Vector3(0, 3.15, -0.12),
      new THREE.Vector3(0, 2.25, -0.1),
      new THREE.Vector3(0, 1.45, -0.08),
      new THREE.Vector3(0, 0.95, -0.05), // cauda equina
    ]);
    const spinalGeom = new THREE.TubeGeometry(spinalCurve, 24, 0.045, 8, false);
    const spinalMesh = new THREE.Mesh(spinalGeom, nerveMat);
    parent.add(spinalMesh);
    this.registerPart(spinalMesh, 'nerve', 'spinal_cord', 'Orqa miya (Medulla spinalis)', [0, 0, -0.4]);

    // Brachial Plexus (Yelka chigali) to arms
    [-1, 1].forEach((side) => {
      const nerveArmCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.08, 3.35, -0.05),
        new THREE.Vector3(side * 0.85, 2.85, 0.02),
        new THREE.Vector3(side * 1.35, 1.45, 0.05),
      ]);
      const armNerve = new THREE.Mesh(new THREE.TubeGeometry(nerveArmCurve, 16, 0.02, 6, false), nerveMat);
      parent.add(armNerve);
      this.registerPart(armNerve, 'nerve', 'brachial_plexus', 'Yelka chigali (Plexus brachialis)', [side * 0.3, 0, 0.2]);

      // Sciatic Nerve (Sedana nervi) down legs
      const sciaticCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.12, 0.75, -0.05),
        new THREE.Vector3(side * 0.25, -0.45, -0.08),
        new THREE.Vector3(side * 0.22, -1.95, -0.06),
      ]);
      const sciaticNerve = new THREE.Mesh(new THREE.TubeGeometry(sciaticCurve, 20, 0.026, 6, false), nerveMat);
      parent.add(sciaticNerve);
      this.registerPart(sciaticNerve, 'nerve', 'sciatic_nerve', 'Sedalish nervi (Nervus ischiadicus)', [0, 0, -0.3]);
    });

    // Nerve Impulse Sparkles
    const nervePulses = new THREE.Group();
    nervePulses.name = 'Animated_NervePulses';
    const pulseCount = this.isSoftwareGl ? 10 : 25;
    const pulseGeom = new THREE.SphereGeometry(0.03, 6, 6);
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0xfff000 });

    for (let i = 0; i < pulseCount; i++) {
      const pMesh = new THREE.Mesh(pulseGeom, pulseMat);
      pMesh.position.set(0, 1.0 + Math.random() * 2.5, -0.1);
      pMesh.userData = {
        speed: 0.04 + Math.random() * 0.03,
      };
      nervePulses.add(pMesh);
    }
    parent.add(nervePulses);

    return { nervePulses };
  }

  // ==========================================
  // Helper: Register Interactive Part
  // ==========================================
  private registerPart(
    mesh: THREE.Object3D,
    category: 'organ' | 'bone' | 'muscle' | 'vessel' | 'nerve' | 'skin',
    id: string,
    nameUz: string,
    explodedOffset: [number, number, number]
  ) {
    mesh.userData = {
      isInteractive: true,
      category,
      id,
      nameUz,
    };
    // Ensure all children also inherit this user data for raycasting
    mesh.traverse((child) => {
      child.userData = {
        isInteractive: true,
        category,
        id,
        nameUz,
      };
    });

    this.interactiveParts.push({
      mesh,
      category,
      id,
      nameUz,
      originalPosition: mesh.position.clone(),
      explodedOffset: new THREE.Vector3(...explodedOffset),
    });
  }
}
