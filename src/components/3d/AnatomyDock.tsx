import React, { useState } from 'react';
import {
  Layers,
  ChevronDown,
  ChevronUp,
  Volume2,
  VolumeX,
  RotateCcw,
  Sliders,
  Eye,
  Camera,
} from 'lucide-react';
import { AnatomicalLayer } from '../../types/anatomy';

interface AnatomyDockProps {
  activeLayers: Record<AnatomicalLayer, boolean>;
  onToggleLayer: (layer: AnatomicalLayer) => void;
  explodedValue: number;
  onChangeExploded: (val: number) => void;
  cameraPreset: 'head' | 'chest' | 'abdomen' | 'pelvis' | 'legs' | 'full';
  onChangeCameraPreset: (preset: 'head' | 'chest' | 'abdomen' | 'pelvis' | 'legs' | 'full') => void;
  onResetView: () => void;
  isHeartbeatActive: boolean;
  onToggleHeartbeat: () => void;
  skinOpacity: number;
  onChangeSkinOpacity: (val: number) => void;
}

export const AnatomyDock: React.FC<AnatomyDockProps> = ({
  activeLayers,
  onToggleLayer,
  explodedValue,
  onChangeExploded,
  cameraPreset,
  onChangeCameraPreset,
  onResetView,
  isHeartbeatActive,
  onToggleHeartbeat,
  skinOpacity,
  onChangeSkinOpacity,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'layers' | 'presets' | 'exploded' | 'view'>('layers');

  const layerLabels: { key: AnatomicalLayer; labelUz: string; color: string }[] = [
    { key: 'skin', labelUz: 'Teri', color: 'bg-amber-400' },
    { key: 'muscles', labelUz: 'Mushaklar', color: 'bg-rose-500' },
    { key: 'skeleton', labelUz: 'Skelet', color: 'bg-slate-300' },
    { key: 'organs', labelUz: 'Ichki organlar', color: 'bg-cyan-400' },
    { key: 'circulatory', labelUz: 'Qon tomirlar', color: 'bg-red-500' },
    { key: 'nervous', labelUz: 'Nerv tizimi', color: 'bg-yellow-400' },
  ];

  const presets: { id: 'head' | 'chest' | 'abdomen' | 'pelvis' | 'legs' | 'full'; labelUz: string }[] = [
    { id: 'full', labelUz: 'Butun tana' },
    { id: 'head', labelUz: 'Bosh / Miya' },
    { id: 'chest', labelUz: "Ko'krak / Yurak" },
    { id: 'abdomen', labelUz: 'Qorin / Jigar' },
    { id: 'pelvis', labelUz: 'Tos / Qovuq' },
    { id: 'legs', labelUz: 'Oyoqlar' },
  ];

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-20 transition-all duration-300 ease-out flex flex-col items-center pointer-events-auto w-[94vw] max-w-[940px] ${
        isCollapsed ? 'translate-y-[calc(100%-36px)]' : 'translate-y-0'
      }`}
    >
      {/* Collapse / Expand Toggle Tab */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-t-xl bg-slate-900/90 text-slate-300 hover:text-white border-t border-x border-slate-700/60 shadow-lg text-xs font-medium cursor-pointer transition-colors"
      >
        {isCollapsed ? (
          <>
            <ChevronUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Boshqaruv panelini ochish</span>
          </>
        ) : (
          <>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            <span>Panellarni yashirish (Zen rejimi)</span>
          </>
        )}
      </button>

      {/* Main Unified Control Dock */}
      <div className="w-full bg-slate-900/95 dark:bg-slate-950/95 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl p-3 md:p-4">
        {/* Dock Tab Selector & Utilities */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-1 p-0.5 bg-slate-800/80 rounded-lg">
            <button
              onClick={() => setActiveTab('layers')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'layers'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Anatomik qavatlar</span>
            </button>
            <button
              onClick={() => setActiveTab('presets')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'presets'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Kamera fokuslari</span>
            </button>
            <button
              onClick={() => setActiveTab('exploded')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'exploded'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Qavatlarni ajratish</span>
            </button>
          </div>

          {/* Quick Audio & Reset Utilities */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleHeartbeat}
              title={isHeartbeatActive ? "Yurak urishi ovozini o'chirish" : 'Yurak ritmi audio simulyatsiyasini yoqish'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isHeartbeatActive
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-slate-200'
              }`}
            >
              {isHeartbeatActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">Puls: 72 urish/daq</span>
            </button>
            <button
              onClick={onResetView}
              title="Kamerani dastlabki holatga qaytarish"
              className="p-1.5 rounded-lg bg-slate-800/60 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab 1: Anatomical Layer Toggles */}
        {activeTab === 'layers' && (
          <div className="flex flex-wrap items-center gap-2">
            {layerLabels.map(({ key, labelUz, color }) => {
              const active = activeLayers[key];
              return (
                <button
                  key={key}
                  onClick={() => onToggleLayer(key)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    active
                      ? 'bg-slate-800 text-white border-slate-600 shadow-sm'
                      : 'bg-slate-950/60 text-slate-500 border-slate-800/80 hover:text-slate-400'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-sm ${active ? color : 'bg-slate-600 opacity-40'}`}
                  />
                  <span>{labelUz}</span>
                </button>
              );
            })}

            {/* Translucent skin slider */}
            <div className="flex items-center gap-2 ml-auto px-3 py-1 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-slate-300">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              <span>Teri shaffofligi:</span>
              <input
                type="range"
                min="0"
                max="0.8"
                step="0.05"
                value={skinOpacity}
                onChange={(e) => onChangeSkinOpacity(parseFloat(e.target.value))}
                className="w-20 accent-cyan-400 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Camera Focus Presets */}
        {activeTab === 'presets' && (
          <div className="flex flex-wrap items-center gap-2">
            {presets.map((p) => {
              const isSelected = cameraPreset === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => onChangeCameraPreset(p.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-semibold'
                      : 'bg-slate-800/60 text-slate-300 border-slate-700/60 hover:text-white'
                  }`}
                >
                  {p.labelUz}
                </button>
              );
            })}
          </div>
        )}

        {/* Tab 3: Exploded Layer Separation Slider */}
        {activeTab === 'exploded' && (
          <div className="flex items-center gap-4 px-2 py-1">
            <span className="text-xs text-slate-400 whitespace-nowrap">
              Qavatlarni ajratish (Portlatilgan ko'rinish):
            </span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              value={explodedValue}
              onChange={(e) => onChangeExploded(parseFloat(e.target.value))}
              className="flex-1 accent-cyan-400 cursor-pointer"
            />
            <span className="text-xs font-mono text-cyan-400 w-12 text-right">
              {Math.round(explodedValue * 100)}%
            </span>
            <button
              onClick={() => onChangeExploded(0)}
              className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Nolga tushirish
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
