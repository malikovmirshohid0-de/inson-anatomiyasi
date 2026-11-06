import React, { useState } from 'react';
import { MUSCLES_DATA } from '../data/musclesData';
import { MuscleData } from '../types/anatomy';
import { Activity, ShieldAlert, ArrowRight, Eye, Dumbbell } from 'lucide-react';

interface MusclesPageProps {
  onOpenIn3D: (muscleId: string) => void;
}

export const MusclesPage: React.FC<MusclesPageProps> = ({ onOpenIn3D }) => {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleData>(MUSCLES_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
          <span>Inson Anatomiyasi</span>
          <span aria-hidden="true">·</span>
          <span>Mushaklar Tizimi (600 dan ortiq mushak)</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Inson Mushaklar Tizimi</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Yuz mimikasi, bo'yin, ko'krak, orqa, press, qo'l va oyoq mushaklarining anatomiyasi, harakat biomexanikasi, antagonist juftliklar hamda jarohatlar profilaktikasi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Muscle groups list */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {MUSCLES_DATA.map((muscle) => {
            const isSelected = selectedMuscle.id === muscle.id;
            return (
              <button
                key={muscle.id}
                onClick={() => setSelectedMuscle(muscle)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800/90 border-rose-500/50 shadow-md ring-1 ring-rose-500/30'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80'
                }`}
              >
                <div>
                  <h2 className="text-sm font-bold text-white">{muscle.nameUz}</h2>
                  <span className="text-xs text-slate-400 italic font-serif">{muscle.latinName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-rose-400/80 hidden sm:inline">{muscle.groupUz}</span>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-rose-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Muscle Monograph */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-rose-400 block mb-1">
                {selectedMuscle.groupUz} · <span className="italic font-serif text-slate-400">{selectedMuscle.latinName}</span>
              </span>
              <h2 className="text-2xl font-bold font-display text-white">{selectedMuscle.nameUz}</h2>
            </div>
            <button
              onClick={() => onOpenIn3D(selectedMuscle.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer w-fit"
            >
              <Eye className="w-4 h-4" />
              <span>3D Modelda Koʻrish</span>
            </button>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-rose-400" />
              Tanadagi joylashuvi:
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedMuscle.locationUz}</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5 text-cyan-400" />
              Asosiy funksiyasi va harakati:
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedMuscle.functionUz}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
              Biomexanika va tortish oʻqlari:
            </span>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{selectedMuscle.biomechanicsUz}</p>
          </div>

          {selectedMuscle.antagonistUz && (
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
              <span className="text-slate-400">Antagonist (qarama-qarshi ishlovchi) mushak:</span>
              <span className="font-semibold text-rose-300">{selectedMuscle.antagonistUz}</span>
            </div>
          )}

          <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-900/40 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              Keng tarqalgan jarohatlar va spazmlar:
            </span>
            <ul className="space-y-1 text-xs text-rose-100/90">
              {selectedMuscle.commonInjuriesUz.map((inj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">!</span>
                  <span>{inj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
