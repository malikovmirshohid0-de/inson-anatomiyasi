import React, { useState, useMemo } from 'react';
import { GLOSSARY_DATA } from '../data/glossaryData';
import { Search, BookOpen, Layers } from 'lucide-react';

export const GlossaryPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');

  const letters = ['all', ...Array.from(new Set(GLOSSARY_DATA.map((t) => t.termUz[0].toUpperCase()))).sort()];

  const filteredTerms = useMemo(() => {
    return GLOSSARY_DATA.filter((item) => {
      const matchLetter = selectedLetter === 'all' || item.termUz[0].toUpperCase() === selectedLetter;
      const matchQuery =
        !search ||
        item.termUz.toLowerCase().includes(search.toLowerCase()) ||
        item.latinTerm.toLowerCase().includes(search.toLowerCase()) ||
        item.definitionUz.toLowerCase().includes(search.toLowerCase()) ||
        item.categoryUz.toLowerCase().includes(search.toLowerCase());
      return matchLetter && matchQuery;
    });
  }, [search, selectedLetter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
          <span>Tibbiy Terminologiya</span>
          <span aria-hidden="true">·</span>
          <span>Anatomik va Klinik Lugʻat</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Tibbiy Lugʻat</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Anatomiya, fiziologiya, patologiya va diagnostikaga oid asosiy xalqaro tibbiy atamalar, ularning lotincha muqobillari va klinik ahamiyati.
        </p>
      </div>

      {/* Search and Alphabet Bar */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Atama yoki lotincha nomini qidiring..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
          />
        </div>

        {/* Letter Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${
                selectedLetter === letter
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {letter === 'all' ? 'Hammasi' : letter}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.length === 0 ? (
          <div className="col-span-full p-12 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
            Hech qanday tibbiy atama topilmadi.
          </div>
        ) : (
          filteredTerms.map((term) => (
            <div
              key={term.id}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div>
                  <h2 className="text-base font-bold text-white">{term.termUz}</h2>
                  <span className="text-xs text-amber-400/90 italic font-serif">{term.latinTerm}</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">{term.categoryUz}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{term.definitionUz}</p>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/70 text-xs space-y-0.5">
                <span className="text-slate-400 font-medium block">Klinik ahamiyati:</span>
                <p className="text-slate-300 leading-relaxed">{term.clinicalSignificanceUz}</p>
              </div>

              {term.etymologyUz && (
                <div className="text-[11px] text-slate-400 italic">
                  Etimologiya: {term.etymologyUz}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
