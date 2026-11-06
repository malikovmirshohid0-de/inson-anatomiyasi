import React, { useState } from 'react';
import { DISEASES_DATA } from '../data/diseasesData';
import { DiseaseData } from '../types/anatomy';
import { Search, AlertCircle, ShieldAlert, CheckCircle2, Globe, HeartPulse, UserCheck, Stethoscope } from 'lucide-react';

interface DiseasesPageProps {
  initialSearchQuery?: string;
  onNavigateTo3DOrgan?: (organName: string) => void;
}

export const DiseasesPage: React.FC<DiseasesPageProps> = ({ initialSearchQuery = '' }) => {
  const [search, setSearch] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDisease, setSelectedDisease] = useState<DiseaseData>(DISEASES_DATA[0]);

  const categories = [
    { key: 'all', labelUz: 'Barcha kasalliklar (9)' },
    { key: 'yurak', labelUz: 'Yurak-qon tomir' },
    { key: 'onkologiya', labelUz: 'Onkologiya' },
    { key: 'endokrin', labelUz: 'Endokrin (Diabet)' },
    { key: 'nafas', labelUz: 'Nafas tizimi' },
    { key: 'nevrologiya', labelUz: 'Nevrologiya' },
    { key: 'buyrak', labelUz: 'Buyrak xastaliklari' },
    { key: 'jigar', labelUz: 'Jigar xastaliklari' },
    { key: 'suyak', labelUz: 'Suyak va boʻgʻimlar' },
  ];

  const filteredDiseases = DISEASES_DATA.filter((d) => {
    const matchesCategory = selectedCategory === 'all' || d.category === selectedCategory;
    const matchesSearch =
      !search ||
      d.nameUz.toLowerCase().includes(search.toLowerCase()) ||
      d.latinName.toLowerCase().includes(search.toLowerCase()) ||
      d.affectedOrganUz.toLowerCase().includes(search.toLowerCase()) ||
      d.symptomsUz.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
          <span>Klinik Tibbiyot</span>
          <span aria-hidden="true">·</span>
          <span>Ilmiy Tibbiy Ensiklopediya</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Kasalliklar Ensiklopediyasi</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Inson organizmining asosiy patologiyalari, ularning sabablari, alomatlari, zamonaviy diagnostikasi, davolash tamoyillari hamda rasmiy global statistikasi.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat.key
                  ? 'bg-rose-500 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.labelUz}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Kasallik yoki alomat qidiring..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500/50"
          />
        </div>
      </div>

      {/* Two-Column Master-Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[75vh] overflow-y-auto pr-1">
          {filteredDiseases.length === 0 ? (
            <div className="p-8 text-center text-slate-400 bg-slate-900/40 rounded-xl border border-slate-800">
              Hech qanday kasallik topilmadi.
            </div>
          ) : (
            filteredDiseases.map((disease) => {
              const isSelected = selectedDisease.id === disease.id;
              return (
                <button
                  key={disease.id}
                  onClick={() => setSelectedDisease(disease)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-rose-500/50 shadow-md ring-1 ring-rose-500/30'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80'
                  }`}
                >
                  <div>
                    <h2 className="text-sm font-bold text-white">{disease.nameUz}</h2>
                    <span className="text-xs text-slate-400 italic font-serif">{disease.latinName}</span>
                    <span className="text-xs text-rose-400 block mt-0.5">{disease.affectedOrganUz}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 shrink-0 ml-2">{disease.annualDeaths}</span>
                </button>
              );
            })
          )}
        </div>

        {/* Right Column: Detailed Disease Monograph Card */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
          <div className="pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1">
              <span>{selectedDisease.categoryUz}</span>
              <span aria-hidden="true">·</span>
              <span className="italic font-serif text-slate-400">{selectedDisease.latinName}</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">{selectedDisease.nameUz}</h2>
            <span className="text-xs text-slate-400 block mt-1">
              Zararlangan organ: <span className="text-white font-medium">{selectedDisease.affectedOrganUz}</span>
            </span>
          </div>

          {/* Grounded Global Statistics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block">Jami kasallanganlar:</span>
              <span className="text-base font-bold text-rose-400 font-mono mt-0.5 block">
                {selectedDisease.affectedCount}
              </span>
              <span className="text-[10px] text-slate-500">{selectedDisease.populationPercent}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Yillik oʻlim koʻrsatkichi:</span>
              <span className="text-base font-bold text-white font-mono mt-0.5 block">
                {selectedDisease.annualDeaths}
              </span>
              <span className="text-[10px] text-slate-500">Dunyo miqyosida</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-xs text-slate-400 block">Rasmiy manba:</span>
              <span className="text-xs font-medium text-cyan-300 mt-1 block">
                {selectedDisease.source}
              </span>
              <span className="text-[10px] text-slate-500">{selectedDisease.year}-yil</span>
            </div>
          </div>

          {/* Medical Explanation */}
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Tibbiy taʼrifi va patogenezi:
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedDisease.descriptionUz}</p>
          </div>

          {/* Causes and Risk Factors */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              Kelib chiqish sabablari va xavf omillari:
            </span>
            <ul className="space-y-1 text-xs text-slate-300">
              {selectedDisease.causesUz.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Symptoms */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              Xarakterli klinik alomatlar:
            </span>
            <ul className="space-y-1 text-xs text-rose-100/90">
              {selectedDisease.symptomsUz.map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">!</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Diagnosis & Treatment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5" />
                Diagnostika usullari:
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                {selectedDisease.diagnosisUz.map((d, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-mono">›</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5" />
                Davolash tamoyillari:
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                {selectedDisease.treatmentUz.map((t, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-mono">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prevention */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Profilaktika va oldini olish choralari:
            </span>
            <ul className="space-y-1 text-xs text-slate-300">
              {selectedDisease.preventionUz.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Demographics */}
          <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
            <UserCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{selectedDisease.ageAndSexStatsUz}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
