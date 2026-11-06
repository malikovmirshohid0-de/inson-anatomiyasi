import React, { useState } from 'react';
import { NERVOUS_DATA } from '../data/nervousData';
import { NerveData } from '../types/anatomy';
import { Brain, ArrowRight, Eye, ShieldAlert, Sparkles, Activity } from 'lucide-react';

interface NervousPageProps {
  onOpenIn3D: (nerveId: string) => void;
}

export const NervousPage: React.FC<NervousPageProps> = ({ onOpenIn3D }) => {
  const [selectedNerve, setSelectedNerve] = useState<NerveData>(NERVOUS_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-1">
          <span>Inson Anatomiyasi</span>
          <span aria-hidden="true">·</span>
          <span>Markaziy va Periferik Asab Tizimi</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Inson Nerv Tizimi</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Bosh miya po'stlog'i, miyacha, miya ustuni, orqa miya va periferik nerv tolalari, ularning o'tkazuvchi yo'llari, sezgi va harakat integratsiyasi hamda nevrologik kasalliklar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Nerve units list */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {NERVOUS_DATA.map((nerve) => {
            const isSelected = selectedNerve.id === nerve.id;
            return (
              <button
                key={nerve.id}
                onClick={() => setSelectedNerve(nerve)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800/90 border-yellow-500/50 shadow-md ring-1 ring-yellow-500/30'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80'
                }`}
              >
                <div>
                  <h2 className="text-sm font-bold text-white">{nerve.nameUz}</h2>
                  <span className="text-xs text-slate-400 italic font-serif">{nerve.latinName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-yellow-400/80 hidden sm:inline">{nerve.divisionUz}</span>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-yellow-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Monograph */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-yellow-400 block mb-1">
                {selectedNerve.divisionUz} · <span className="italic font-serif text-slate-400">{selectedNerve.latinName}</span>
              </span>
              <h2 className="text-2xl font-bold font-display text-white">{selectedNerve.nameUz}</h2>
            </div>
            <button
              onClick={() => onOpenIn3D(selectedNerve.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer w-fit"
            >
              <Eye className="w-4 h-4" />
              <span>3D Modelda Koʻrish</span>
            </button>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400 block">Nerv tolalari turi:</span>
              <span className="font-semibold text-yellow-300">{selectedNerve.typeUz}</span>
            </div>
            <Brain className="w-5 h-5 text-yellow-400" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Bajaradigan asosiy vazifasi:
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedNerve.functionUz}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              Anatomik yoʻli va nerv impulsi trassasi:
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
              {selectedNerve.pathwayUz}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-900/40 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              Ushbu boʻlimning keng tarqalgan nevrologik buzilishlari:
            </span>
            <ul className="space-y-1 text-xs text-rose-100/90">
              {selectedNerve.disordersUz.map((dis, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{dis}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              Klinik neyrotekshiruv usullari:
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">{selectedNerve.clinicalExamUz}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
