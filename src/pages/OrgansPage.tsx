import React, { useState } from 'react';
import { ORGANS_DATA } from '../data/organsData';
import { BodySystem, OrganData } from '../types/anatomy';
import { Activity, ShieldCheck, AlertTriangle, Sparkles, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

interface OrgansPageProps {
  onOpenIn3D: (organId: string) => void;
  onNavigateToDisease?: (diseaseName: string) => void;
}

export const OrgansPage: React.FC<OrgansPageProps> = ({ onOpenIn3D, onNavigateToDisease }) => {
  const [selectedSystem, setSelectedSystem] = useState<BodySystem | 'all'>('all');
  const [selectedOrgan, setSelectedOrgan] = useState<OrganData>(ORGANS_DATA[0]);

  const systemsList: { key: BodySystem | 'all'; labelUz: string }[] = [
    { key: 'all', labelUz: "Barcha a'zolar (14)" },
    { key: 'asab', labelUz: 'Nerv tizimi' },
    { key: 'qon_aylanish', labelUz: 'Qon aylanish va immun' },
    { key: 'nafas', labelUz: 'Nafas olish' },
    { key: 'ovqat_hazm', labelUz: 'Ovqat hazm qilish' },
    { key: 'siydik_tanosil', labelUz: 'Siydik-tanosil' },
    { key: 'endokrin', labelUz: 'Endokrin tizim' },
  ];

  const filteredOrgans = selectedSystem === 'all'
    ? ORGANS_DATA
    : ORGANS_DATA.filter((o) => o.system === selectedSystem);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
          <span>Inson Anatomiyasi</span>
          <span aria-hidden="true">·</span>
          <span>14 Asosiy Hayotiy Organ</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Ichki Aʼzolar Tizimi</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Har bir a'zoning aniq joylashuvi, vazifalari, ishlash mexanizmi, sog'lom me'yorlari, kasalliklari va ilmiy faktlari bilan tanishing.
        </p>
      </div>

      {/* Systems Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800 w-fit">
        {systemsList.map((sys) => {
          const isActive = selectedSystem === sys.key;
          return (
            <button
              key={sys.key}
              onClick={() => setSelectedSystem(sys.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {sys.labelUz}
            </button>
          );
        })}
      </div>

      {/* Two-column Interactive Split: Organ List + Deep Medical Monograph */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Organ Cards Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {filteredOrgans.map((organ) => {
            const isSelected = selectedOrgan.id === organ.id;
            return (
              <button
                key={organ.id}
                onClick={() => setSelectedOrgan(organ)}
                className={`flex items-center justify-between p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800/90 border-cyan-500/50 shadow-md ring-1 ring-cyan-500/30'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3.5 h-3.5 rounded-full shrink-0"
                    style={{ backgroundColor: organ.color }}
                  />
                  <div>
                    <h2 className="text-sm font-bold text-white">{organ.nameUz}</h2>
                    <span className="text-xs text-slate-400 italic font-serif">{organ.latinName}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 hidden sm:inline">{organ.systemNameUz}</span>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Full Detailed Organ Monograph Card */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
          {/* Header & 3D Direct Jump CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
                <span>{selectedOrgan.systemNameUz}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400 font-serif italic">{selectedOrgan.latinName}</span>
              </div>
              <h2 className="text-2xl font-bold font-display text-white">{selectedOrgan.nameUz}</h2>
            </div>
            <button
              onClick={() => onOpenIn3D(selectedOrgan.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer w-fit"
            >
              <Eye className="w-4 h-4" />
              <span>3D Modelda Koʻrish</span>
            </button>
          </div>

          {/* Normal Healthy Metrics Strip */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              Sogʻlom holat meʼyori va koʻrsatkichlari:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {selectedOrgan.normalMetricsUz.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <span className="text-xs text-slate-400 block line-clamp-1">{m.label}</span>
                  <span className="text-sm font-bold text-cyan-300 font-mono block mt-0.5">
                    {m.value}
                  </span>
                  {m.unit && <span className="text-[10px] text-slate-500 block">{m.unit}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Location & Nearby Organs */}
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              Anatomik joylashuvi va chegaralari:
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedOrgan.nearbyOrgansUz}</p>
          </div>

          {/* Functions list */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Asosiy hayotiy vazifalari:
            </span>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {selectedOrgan.functionsUz.map((fn, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{fn}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How it works */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
              Qanday ishlaydi (Biologik mexanizm):
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedOrgan.howItWorksUz}</p>
          </div>

          {/* Common Diseases & Symptoms */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              Keng tarqalgan kasalliklar va alomatlar:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedOrgan.diseasesUz.map((dis, i) => (
                <button
                  key={i}
                  onClick={() => onNavigateToDisease?.(dis)}
                  className="text-xs px-2.5 py-1 rounded bg-rose-950/40 border border-rose-900/60 text-rose-200 hover:bg-rose-900/60 transition-colors"
                >
                  {dis}
                </button>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1 text-xs">
              <span className="text-slate-400 font-semibold">Asosiy xavotirli alomatlar (qachon shifokorga murojaat qilish kerak):</span>
              <ul className="space-y-1 text-slate-300 mt-1">
                {selectedOrgan.symptomsUz.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prevention */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
            <span className="text-xs font-semibold text-emerald-400 block uppercase tracking-wide">
              Profilaktika va aʼzoni sogʻlom saqlash yoʻllari:
            </span>
            <ul className="space-y-1 text-xs text-slate-300">
              {selectedOrgan.preventionUz.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Facts */}
          {selectedOrgan.factsUz && selectedOrgan.factsUz.length > 0 && (
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-1">
              <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Qiziqarli ilmiy faktlar:
              </span>
              {selectedOrgan.factsUz.map((fact, idx) => (
                <p key={idx} className="text-xs text-cyan-100/90 italic leading-relaxed">
                  "{fact}"
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
