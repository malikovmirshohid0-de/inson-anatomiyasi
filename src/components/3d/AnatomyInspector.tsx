import React from 'react';
import { X, Activity, ShieldCheck, AlertTriangle, Sparkles, BookOpen, HeartPulse } from 'lucide-react';
import { ORGANS_DATA } from '../../data/organsData';
import { SKELETON_DATA } from '../../data/skeletonData';
import { MUSCLES_DATA } from '../../data/musclesData';
import { CIRCULATION_DATA } from '../../data/circulationData';
import { NERVOUS_DATA } from '../../data/nervousData';

interface AnatomyInspectorProps {
  selectedCategory: 'organ' | 'bone' | 'muscle' | 'vessel' | 'nerve' | 'skin' | null;
  selectedId: string | null;
  onClose: () => void;
  onNavigateToDisease?: (diseaseName: string) => void;
}

export const AnatomyInspector: React.FC<AnatomyInspectorProps> = ({
  selectedCategory,
  selectedId,
  onClose,
  onNavigateToDisease,
}) => {
  if (!selectedId || !selectedCategory) return null;

  // Find entity across datasets
  const organ = selectedCategory === 'organ' ? ORGANS_DATA.find((o) => o.id === selectedId) : null;
  const bone = selectedCategory === 'bone' ? SKELETON_DATA.find((b) => b.id === selectedId) : null;
  const muscle = selectedCategory === 'muscle' ? MUSCLES_DATA.find((m) => m.id === selectedId) : null;
  const vessel = selectedCategory === 'vessel' ? CIRCULATION_DATA.find((v) => v.id === selectedId) : null;
  const nerve = selectedCategory === 'nerve' ? NERVOUS_DATA.find((n) => n.id === selectedId) : null;

  const titleUz =
    organ?.nameUz ||
    bone?.nameUz ||
    muscle?.nameUz ||
    vessel?.nameUz ||
    nerve?.nameUz ||
    "Anatomik tuzilma";

  const latinName =
    organ?.latinName ||
    bone?.latinName ||
    muscle?.latinName ||
    vessel?.latinName ||
    nerve?.latinName ||
    '';

  const categoryLabelUz = {
    organ: "Ichki a'zo",
    bone: 'Suyak tizimi',
    muscle: 'Mushak tizimi',
    vessel: 'Qon tomiri',
    nerve: 'Nerv tizimi',
    skin: 'Teri qoplami',
  }[selectedCategory];

  return (
    <aside className="fixed top-20 right-4 bottom-24 w-[92vw] max-w-[440px] z-30 bg-slate-900/95 dark:bg-slate-950/95 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col pointer-events-auto backdrop-blur-md animate-in slide-in-from-right duration-200">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-start justify-between gap-3 bg-slate-900/60">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            <span>{categoryLabelUz}</span>
            {organ?.systemNameUz && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">{organ.systemNameUz}</span>
              </>
            )}
          </div>
          <h2 className="text-xl font-bold font-display text-white">{titleUz}</h2>
          {latinName && <p className="text-xs italic text-slate-400 font-serif mt-0.5">{latinName}</p>}
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          title="Yopish"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Content scroll area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 text-sm">
        {/* ORGAN MONOGRAPH */}
        {organ && (
          <>
            {/* Top metrics pill-free grid */}
            {organ.normalMetricsUz && organ.normalMetricsUz.length > 0 && (
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                {organ.normalMetricsUz.slice(0, 4).map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs text-slate-400">{m.label}</span>
                    <span className="text-sm font-semibold text-cyan-300 font-mono">
                      {m.value} {m.unit || ''}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Anatomical location & relationships */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Joylashuvi va qoʻshni aʼzolar</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs">{organ.nearbyOrgansUz}</p>
            </div>

            {/* Main functions */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Asosiy hayotiy vazifalari</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {organ.functionsUz.map((fn, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">›</span>
                    <span>{fn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How it works */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Qanday ishlaydi (Mexanizmi)</span>
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">{organ.howItWorksUz}</p>
            </div>

            {/* Common diseases */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>Keng tarqalgan kasalliklar</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {organ.diseasesUz.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => onNavigateToDisease?.(d)}
                    className="text-xs px-2.5 py-1 rounded bg-rose-950/40 border border-rose-900/60 text-rose-200 hover:bg-rose-900/60 transition-colors"
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Symptoms & Prevention */}
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-300 block">Profilaktika va tavsiyalar:</span>
              <ul className="space-y-1 text-xs text-slate-400">
                {organ.preventionUz.slice(0, 3).map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-mono">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facts */}
            {organ.factsUz && organ.factsUz.length > 0 && (
              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40">
                <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Qiziqarli ilmiy fakt
                </span>
                <p className="text-xs text-cyan-100/90 italic leading-relaxed">{organ.factsUz[0]}</p>
              </div>
            )}
          </>
        )}

        {/* BONE MONOGRAPH */}
        {bone && (
          <>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Joylashuvi</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{bone.locationUz}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Suyak strukturasi</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{bone.structureUz}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1.5">Vazifalari</h3>
              <ul className="space-y-1 text-xs text-slate-300">
                {bone.functionsUz.map((fn, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">›</span>
                    <span>{fn}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-900/40">
              <span className="text-xs font-semibold text-rose-300 block mb-1">Sinish va shikastlanish xavfi:</span>
              <p className="text-xs text-rose-200/90 leading-relaxed">{bone.fractureRiskUz}</p>
            </div>
          </>
        )}

        {/* MUSCLE MONOGRAPH */}
        {muscle && (
          <>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Joylashuvi</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{muscle.locationUz}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Funksiyasi va Harakati</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{muscle.functionUz}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Biomexanikasi</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{muscle.biomechanicsUz}</p>
            </div>
            {muscle.antagonistUz && (
              <div className="p-2.5 rounded-lg bg-slate-800/60 text-xs">
                <span className="text-slate-400">Antagonist mushak: </span>
                <span className="text-white font-medium">{muscle.antagonistUz}</span>
              </div>
            )}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1.5">Keng tarqalgan jarohatlar</h3>
              <ul className="space-y-1 text-xs text-slate-300">
                {muscle.commonInjuriesUz.map((inj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">!</span>
                    <span>{inj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* VESSEL MONOGRAPH */}
        {vessel && (
          <>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Qon turi:</span>
                <span className={`text-xs font-semibold ${vessel.oxygenLevel === 'boy' ? 'text-red-400' : 'text-blue-400'}`}>
                  {vessel.oxygenLevel === 'boy' ? "Kislorodga boy (Arterial)" : "Kislorodga kambag'al (Venoz)"}
                </span>
              </div>
              <HeartPulse className={`w-5 h-5 ${vessel.oxygenLevel === 'boy' ? 'text-red-400' : 'text-blue-400'}`} />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Funksiyasi</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{vessel.functionUz}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Qon oqimi yoʻnalishi</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{vessel.flowDirectionUz}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs font-semibold text-slate-300 block mb-1">Klinik ahamiyati:</span>
              <p className="text-xs text-slate-400 leading-relaxed">{vessel.clinicalSignificanceUz}</p>
            </div>
          </>
        )}

        {/* NERVE MONOGRAPH */}
        {nerve && (
          <>
            <div className="p-2.5 rounded-lg bg-yellow-950/30 border border-yellow-800/40 text-xs text-yellow-200">
              <span className="font-semibold">{nerve.divisionUz}: </span>
              <span>{nerve.typeUz}</span>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Vazifasi</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{nerve.functionUz}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Anatomik yoʻli (Trassasi)</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{nerve.pathwayUz}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1.5">Nevrologik kasalliklar</h3>
              <ul className="space-y-1 text-xs text-slate-300">
                {nerve.disordersUz.map((dis, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">›</span>
                    <span>{dis}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs font-semibold text-slate-300 block mb-1">Klinik tekshirish usuli:</span>
              <p className="text-xs text-slate-400 leading-relaxed">{nerve.clinicalExamUz}</p>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};
