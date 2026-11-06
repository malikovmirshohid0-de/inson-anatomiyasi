import React, { useState } from 'react';
import { SKELETON_DATA } from '../data/skeletonData';
import { BoneData } from '../types/anatomy';
import { Layers, ShieldCheck, AlertTriangle, Eye, ArrowRight } from 'lucide-react';

interface SkeletonPageProps {
  onOpenIn3D: (boneId: string) => void;
}

export const SkeletonPage: React.FC<SkeletonPageProps> = ({ onOpenIn3D }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedBone, setSelectedBone] = useState<BoneData>(SKELETON_DATA[0]);

  const regions = [
    { key: 'all', labelUz: 'Barcha suyaklar (12)' },
    { key: 'kalla', labelUz: 'Kalla sohasi' },
    { key: 'umurtqa', labelUz: 'Umurtqa' },
    { key: 'kokrak', labelUz: "Ko'krak qafasi" },
    { key: 'qol', labelUz: "Qo'l va yelka" },
    { key: 'tos', labelUz: 'Tos kamari' },
    { key: 'oyoq', labelUz: 'Oyoqlar' },
  ];

  const filteredBones = selectedRegion === 'all'
    ? SKELETON_DATA
    : SKELETON_DATA.filter((b) => b.region === selectedRegion);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
          <span>Tayanch-Harakat Tizimi</span>
          <span aria-hidden="true">·</span>
          <span>Inson Skeleti (206 Suyak)</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Inson Skelet Tizimi</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Kalla suyagi, umurtqa pog'onasi, qovurg'alar, son va boldir suyaklari, ularning g'ovak va kompakt tuzilishi, biologik mexanikasi hamda sinish xavflari.
        </p>
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800 w-fit">
        {regions.map((reg) => (
          <button
            key={reg.key}
            onClick={() => setSelectedRegion(reg.key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedRegion === reg.key
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {reg.labelUz}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bones list */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {filteredBones.map((bone) => {
            const isSelected = selectedBone.id === bone.id;
            return (
              <button
                key={bone.id}
                onClick={() => setSelectedBone(bone)}
                className={`flex items-center justify-between p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800/90 border-cyan-500/50 shadow-md ring-1 ring-cyan-500/30'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80'
                }`}
              >
                <div>
                  <h2 className="text-sm font-bold text-white">{bone.nameUz}</h2>
                  <span className="text-xs text-slate-400 italic font-serif">{bone.latinName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 hidden sm:inline">{bone.regionUz}</span>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Bone Monograph */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-cyan-400 block mb-1">
                {selectedBone.regionUz} · <span className="italic font-serif text-slate-400">{selectedBone.latinName}</span>
              </span>
              <h2 className="text-2xl font-bold font-display text-white">{selectedBone.nameUz}</h2>
            </div>
            <button
              onClick={() => onOpenIn3D(selectedBone.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer w-fit"
            >
              <Eye className="w-4 h-4" />
              <span>3D Modelda Koʻrish</span>
            </button>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Skeletdagi joylashuvi:
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedBone.locationUz}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Suyak strukturasi va tuzilishi:
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedBone.structureUz}</p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Suyakning asosiy funksiyalari:
            </span>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {selectedBone.functionsUz.map((fn, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">›</span>
                  <span>{fn}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-900/40 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              Sinish xavfi va travmatologiya:
            </span>
            <p className="text-xs text-rose-100/90 leading-relaxed">{selectedBone.fractureRiskUz}</p>
          </div>

          {selectedBone.diseasesUz && selectedBone.diseasesUz.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Tegishli kasalliklar va patologiyalar:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedBone.diseasesUz.map((d, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
