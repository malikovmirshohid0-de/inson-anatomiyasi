import React, { useState } from 'react';
import { STATISTICS_DATA } from '../data/statisticsData';
import { MedicalStatistic } from '../types/anatomy';
import { BarChart3, Globe, TrendingUp, Users, Calendar, Database, Info } from 'lucide-react';

export const StatisticsPage: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<MedicalStatistic>(STATISTICS_DATA[0]);

  // Max value calculation for bar chart normalization
  const maxValue = Math.max(...selectedStat.chartData.map((d) => d.value));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
          <span>Global Tibbiyot Tahlili</span>
          <span aria-hidden="true">·</span>
          <span>Rasmiy JSST va IHME Maʼlumotlari</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Dunyo Tibbiy Statistikasi</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Jahon Sog'liqni Saqlash Tashkiloti (WHO), Jahon Banki va IHME tadqiqotlariga asoslangan kasalliklar tarqalganligi (prevalence), yangi kasallanish (incidence) va o'lim (mortality) ko'rsatkichlari.
        </p>
      </div>

      {/* Metric Category Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {STATISTICS_DATA.map((stat) => {
          const isSelected = selectedStat.id === stat.id;
          return (
            <button
              key={stat.id}
              onClick={() => setSelectedStat(stat)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-800/90 border-emerald-500/50 shadow-lg ring-1 ring-emerald-500/30'
                  : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{stat.categoryUz}</span>
                <span className="font-mono text-emerald-400">{stat.year}</span>
              </div>
              <h2 className="text-xs font-bold text-white line-clamp-2 mb-2">{stat.titleUz}</h2>
              <span className="text-base font-extrabold text-white font-mono">{stat.mainValue}</span>
              <span className="text-[11px] text-slate-500 block truncate">{stat.unitUz}</span>
            </button>
          );
        })}
      </div>

      {/* Main Selected Statistic Visualizer Card */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-8">
        {/* Metric Overview Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span>{selectedStat.metricTypeUz}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{selectedStat.coverage}</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">{selectedStat.titleUz}</h2>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">{selectedStat.descriptionUz}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 shrink-0 min-w-56 space-y-1">
            <span className="text-xs text-slate-400 block">Asosiy koʻrsatkich:</span>
            <span className="text-2xl font-extrabold text-emerald-400 font-mono block">
              {selectedStat.mainValue}
            </span>
            <span className="text-xs text-slate-400 block">{selectedStat.unitUz}</span>
          </div>
        </div>

        {/* Interactive Custom SVG/HTML Bar Chart */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Taqqoslash grafigi</span>
            </h3>
            <span className="text-xs text-slate-500 font-mono">Birlik: koʻrsatkich miqdori</span>
          </div>

          <div className="space-y-3 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            {selectedStat.chartData.map((item, index) => {
              const percent = Math.max(5, Math.min(100, (item.value / maxValue) * 100));
              return (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-white">{item.value}</span>
                      {item.note && <span className="text-slate-500 text-[11px]">({item.note})</span>}
                    </div>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Demographic Breakdown (Age & Sex) if present */}
        {selectedStat.demographics && selectedStat.demographics.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Yosh va Jins kesimidagi tahlil</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {selectedStat.demographics.map((demo, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-semibold text-slate-300 block">{demo.group}</span>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-blue-400">Erkaklar: {demo.male > 0 ? demo.male : '—'}</span>
                    <span className="text-pink-400">Ayollar: {demo.female > 0 ? demo.female : '—'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scientific Source & Methodology Footer */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Rasmiy manba:</strong> {selectedStat.source} ({selectedStat.year})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong>Geografik qamrov:</strong> {selectedStat.coverage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
