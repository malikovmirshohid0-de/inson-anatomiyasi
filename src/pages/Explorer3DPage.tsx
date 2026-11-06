import React, { useState } from 'react';
import { HumanBodyCanvas } from '../components/3d/HumanBodyCanvas';
import { AnatomyDock } from '../components/3d/AnatomyDock';
import { AnatomyInspector } from '../components/3d/AnatomyInspector';
import { AnatomicalLayer } from '../types/anatomy';
import { medicalAudio } from '../utils/soundEffects';

interface Explorer3DPageProps {
  initialTargetOrganId?: string | null;
  onNavigateToDisease?: (diseaseName: string) => void;
}

export const Explorer3DPage: React.FC<Explorer3DPageProps> = ({
  initialTargetOrganId = null,
  onNavigateToDisease,
}) => {
  const [activeLayers, setActiveLayers] = useState<Record<AnatomicalLayer, boolean>>({
    skin: true,
    muscles: false,
    skeleton: true,
    organs: true,
    circulatory: true,
    nervous: true,
  });

  const [explodedValue, setExplodedValue] = useState<number>(0);
  const [cameraPreset, setCameraPreset] = useState<'head' | 'chest' | 'abdomen' | 'pelvis' | 'legs' | 'full'>('full');
  const [skinOpacity, setSkinOpacity] = useState<number>(0.28);
  const [isHeartbeatActive, setIsHeartbeatActive] = useState<boolean>(false);

  // Selected Inspector State
  const [selectedCategory, setSelectedCategory] = useState<'organ' | 'bone' | 'muscle' | 'vessel' | 'nerve' | 'skin' | null>(
    initialTargetOrganId ? 'organ' : null
  );
  const [selectedId, setSelectedId] = useState<string | null>(initialTargetOrganId);

  const handleToggleLayer = (layer: AnatomicalLayer) => {
    setActiveLayers((prev) => ({
      ...prev,
      [layer]: !prev[layer],
    }));
  };

  const handleSelectPart = (
    category: 'organ' | 'bone' | 'muscle' | 'vessel' | 'nerve' | 'skin',
    id: string,
    _nameUz: string
  ) => {
    setSelectedCategory(category);
    setSelectedId(id);
  };

  const handleToggleHeartbeat = () => {
    const isPlaying = medicalAudio.toggleHeartbeat(72);
    setIsHeartbeatActive(isPlaying);
  };

  const handleResetView = () => {
    setCameraPreset('full');
    setExplodedValue(0);
    setSelectedId(null);
    setSelectedCategory(null);
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] bg-slate-950 overflow-hidden">
      {/* 3D WebGL Canvas Viewport */}
      <HumanBodyCanvas
        activeLayers={activeLayers}
        explodedValue={explodedValue}
        selectedPartId={selectedId}
        onSelectPart={handleSelectPart}
        cameraPreset={cameraPreset}
        isHeartbeatActive={isHeartbeatActive}
        skinOpacity={skinOpacity}
      />

      {/* Top Controls Overlay Helper */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex flex-col gap-1 text-xs">
        <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-300 w-fit pointer-events-auto">
          <div className="flex items-center gap-2 font-semibold text-white mb-0.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Interaktiv 3D Inson Tanasi</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Sichqoncha bilan 360° burish va kattalashtirish · A'zoni bosib ma'lumot olish
          </p>
        </div>
      </div>

      {/* Inspector Side Drawer */}
      <AnatomyInspector
        selectedCategory={selectedCategory}
        selectedId={selectedId}
        onClose={() => {
          setSelectedId(null);
          setSelectedCategory(null);
        }}
        onNavigateToDisease={onNavigateToDisease}
      />

      {/* Sleek Collapsible Bottom Dock */}
      <AnatomyDock
        activeLayers={activeLayers}
        onToggleLayer={handleToggleLayer}
        explodedValue={explodedValue}
        onChangeExploded={setExplodedValue}
        cameraPreset={cameraPreset}
        onChangeCameraPreset={setCameraPreset}
        onResetView={handleResetView}
        isHeartbeatActive={isHeartbeatActive}
        onToggleHeartbeat={handleToggleHeartbeat}
        skinOpacity={skinOpacity}
        onChangeSkinOpacity={setSkinOpacity}
      />
    </div>
  );
};
