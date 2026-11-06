import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, Activity, AlertCircle, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { ORGANS_DATA } from '../../data/organsData';
import { SKELETON_DATA } from '../../data/skeletonData';
import { DISEASES_DATA } from '../../data/diseasesData';
import { GLOSSARY_DATA } from '../../data/glossaryData';
import { MUSCLES_DATA } from '../../data/musclesData';

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'organ' | 'bone' | 'muscle' | 'disease' | 'glossary';
  typeLabelUz: string;
  categoryUz: string;
  targetPage?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (item: SearchResultItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Omni-Index Search
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const list: SearchResultItem[] = [];

    // Search Organs
    ORGANS_DATA.forEach((o) => {
      const matchName = o.nameUz.toLowerCase().includes(q) || o.latinName.toLowerCase().includes(q);
      const matchFunction = o.functionsUz.some((fn) => fn.toLowerCase().includes(q));
      const matchSymptom = o.symptomsUz.some((s) => s.toLowerCase().includes(q));
      const matchDisease = o.diseasesUz.some((d) => d.toLowerCase().includes(q));

      if (matchName || matchFunction || matchSymptom || matchDisease) {
        list.push({
          id: o.id,
          title: o.nameUz,
          subtitle: `${o.latinName} · ${o.systemNameUz}`,
          type: 'organ',
          typeLabelUz: "Ichki a'zo",
          categoryUz: o.systemNameUz,
          targetPage: '3d-body',
        });
      }
    });

    // Search Bones
    SKELETON_DATA.forEach((b) => {
      if (
        b.nameUz.toLowerCase().includes(q) ||
        b.latinName.toLowerCase().includes(q) ||
        b.locationUz.toLowerCase().includes(q) ||
        b.structureUz.toLowerCase().includes(q)
      ) {
        list.push({
          id: b.id,
          title: b.nameUz,
          subtitle: `${b.latinName} · ${b.regionUz}`,
          type: 'bone',
          typeLabelUz: 'Suyak',
          categoryUz: b.regionUz,
          targetPage: 'suyaklar',
        });
      }
    });

    // Search Muscles
    MUSCLES_DATA.forEach((m) => {
      if (m.nameUz.toLowerCase().includes(q) || m.latinName.toLowerCase().includes(q) || m.functionUz.toLowerCase().includes(q)) {
        list.push({
          id: m.id,
          title: m.nameUz,
          subtitle: `${m.latinName} · ${m.groupUz}`,
          type: 'muscle',
          typeLabelUz: 'Mushak',
          categoryUz: m.groupUz,
          targetPage: 'mushaklar',
        });
      }
    });

    // Search Diseases
    DISEASES_DATA.forEach((d) => {
      const matchName = d.nameUz.toLowerCase().includes(q) || d.latinName.toLowerCase().includes(q);
      const matchDesc = d.descriptionUz.toLowerCase().includes(q);
      const matchSymptoms = d.symptomsUz.some((s) => s.toLowerCase().includes(q));

      if (matchName || matchDesc || matchSymptoms) {
        list.push({
          id: d.id,
          title: d.nameUz,
          subtitle: `${d.affectedOrganUz} · ${d.categoryUz}`,
          type: 'disease',
          typeLabelUz: 'Kasallik',
          categoryUz: d.categoryUz,
          targetPage: 'kasalliklar',
        });
      }
    });

    // Search Glossary
    GLOSSARY_DATA.forEach((g) => {
      if (g.termUz.toLowerCase().includes(q) || g.latinTerm.toLowerCase().includes(q) || g.definitionUz.toLowerCase().includes(q)) {
        list.push({
          id: g.id,
          title: g.termUz,
          subtitle: `${g.latinTerm} · ${g.categoryUz}`,
          type: 'glossary',
          typeLabelUz: 'Lugʻat atamasi',
          categoryUz: g.categoryUz,
          targetPage: 'lugat',
        });
      }
    });

    return list.slice(0, 12);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="A'zolar, suyaklar, kasalliklar, alomatlar yoki atamalarni qidiring (masalan: yurak, femur, insult, diabet)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="px-2.5 py-1 text-xs rounded bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60">
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-slate-400">
              <p className="text-xs">Tezkor tibbiy qidiruv: a'zo nomi, kasallik yoki simptom yozing</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                {['Yurak', 'Insult', 'Jigar', 'Femur', 'Diabet', 'Alveola'].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setQuery(sample)}
                    className="text-xs px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-800 text-cyan-300 border border-slate-700/60 transition-colors"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              <p className="text-sm font-medium text-slate-300">"{query}" boʻyicha hech narsa topilmadi</p>
              <p className="text-xs mt-1 text-slate-500">Iltimos, soʻz toʻgʻri yozilganligini tekshiring yoki boshqa atama kiriting.</p>
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item) => (
                <button
                  key={`${item.type}-${item.id}`}
                  onClick={() => {
                    onSelectResult(item);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors shrink-0">
                      {item.type === 'organ' && <Activity className="w-4 h-4" />}
                      {item.type === 'bone' && <Layers className="w-4 h-4" />}
                      {item.type === 'muscle' && <Activity className="w-4 h-4" />}
                      {item.type === 'disease' && <AlertCircle className="w-4 h-4 text-rose-400" />}
                      {item.type === 'glossary' && <BookOpen className="w-4 h-4 text-amber-400" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-xs text-slate-500">·</span>
                        <span className="text-xs text-slate-400">{item.typeLabelUz}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 ml-2" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
