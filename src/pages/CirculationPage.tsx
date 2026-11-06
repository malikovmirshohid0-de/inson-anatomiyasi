import React, { useState } from 'react';
import { CIRCULATION_DATA } from '../data/circulationData';
import { BloodVesselData } from '../types/anatomy';
import { HeartPulse, ArrowRight, Eye, ShieldCheck, Volume2, VolumeX } from 'lucide-react';
import { medicalAudio } from '../utils/soundEffects';

interface CirculationPageProps {
  onOpenIn3D: (vesselId: string) => void;
}

export const CirculationPage: React.FC<CirculationPageProps> = ({ onOpenIn3D }) => {
  const [selectedVessel, setSelectedVessel] = useState<BloodVesselData>(CIRCULATION_DATA[0]);
  const [bpm, setBpm] = useState<number>(72);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const toggleSound = () => {
    const active = medicalAudio.toggleHeartbeat(bpm);
    setIsAudioPlaying(active);
  };

  const handleBpmChange = (newBpm: number) => {
    setBpm(newBpm);
    if (isAudioPlaying) {
      medicalAudio.startHeartbeat(newBpm);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
          <span>Inson Anatomiyasi</span>
          <span aria-hidden="true">·</span>
          <span>Yurak va Qon Tomirlar Tizimi</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Qon Aylanish Tizimi</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Katta va kichik qon aylanish doiralari, kislorodga boy (arterial - qizil) va kambag'al (venoz - ko'k) qon harakati, yurak klapanlari hamda mikroskopik kapillyarlar tarmog'i.
        </p>
      </div>

      {/* Interactive Cardiac Rhythm Simulator Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900 to-blue-950/40 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
            <HeartPulse className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Yurak Qisqarish Ritmi Simulyatori</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-bold font-mono text-white">{bpm}</span>
              <span className="text-xs text-slate-400">zarba / daqiqa (BPM)</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <span className="text-xs text-slate-400 whitespace-nowrap">Puls tezligi:</span>
          <input
            type="range"
            min="50"
            max="140"
            value={bpm}
            onChange={(e) => handleBpmChange(parseInt(e.target.value))}
            className="w-36 accent-red-500 cursor-pointer"
          />
          <button
            onClick={toggleSound}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
              isAudioPlaying
                ? 'bg-rose-500 text-white border-rose-400'
                : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
            }`}
          >
            {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{isAudioPlaying ? "Ovozni o'chirish" : 'LUB-DUB Ovozini yoqish'}</span>
          </button>
        </div>
      </div>

      {/* Two-Column Explorer: Vessels list & Monograph */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Vessels list */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {CIRCULATION_DATA.map((vessel) => {
            const isSelected = selectedVessel.id === vessel.id;
            return (
              <button
                key={vessel.id}
                onClick={() => setSelectedVessel(vessel)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800/90 border-red-500/50 shadow-md ring-1 ring-red-500/30'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: vessel.color }}
                  />
                  <div>
                    <h2 className="text-sm font-bold text-white">{vessel.nameUz}</h2>
                    <span className="text-xs text-slate-400 italic font-serif">{vessel.latinName}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 hidden sm:inline">{vessel.circulationUz}</span>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-red-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Vascular Monograph */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-red-400 block mb-1">
                {selectedVessel.typeUz} · <span className="italic font-serif text-slate-400">{selectedVessel.latinName}</span>
              </span>
              <h2 className="text-2xl font-bold font-display text-white">{selectedVessel.nameUz}</h2>
            </div>
            <button
              onClick={() => onOpenIn3D(selectedVessel.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer w-fit"
            >
              <Eye className="w-4 h-4" />
              <span>3D Modelda Koʻrish</span>
            </button>
          </div>

          {/* Blood oxygen tag strip */}
          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block">Qon turi:</span>
              <span
                className={`text-sm font-bold ${
                  selectedVessel.oxygenLevel === 'boy' ? 'text-red-400' : 'text-blue-400'
                }`}
              >
                {selectedVessel.oxygenLevel === 'boy' ? 'Kislorodga boy (O2 arterial)' : "Kislorodga kambag'al (CO2 venoz)"}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Qon doirasi:</span>
              <span className="text-sm font-semibold text-white">{selectedVessel.circulationUz}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Fiziologik vazifasi:
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedVessel.functionUz}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block">
              Qon oqimining yoʻnalishi:
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
              {selectedVessel.flowDirectionUz}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Klinik ahamiyati va xavflar:
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedVessel.clinicalSignificanceUz}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
