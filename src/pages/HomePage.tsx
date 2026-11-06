import React from 'react';
import {
  ArrowRight,
  Activity,
  Layers,
  Heart,
  Brain,
  ShieldAlert,
  BarChart3,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { DAILY_FACTS } from '../data/dailyFactsData';
import { STATISTICS_DATA } from '../data/statisticsData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onFocusOrgan3D: (organId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onFocusOrgan3D }) => {
  const todayFact = DAILY_FACTS[0]; // Rich daily fact
  const topCauses = STATISTICS_DATA.find((s) => s.id === 'top_causes_of_death');

  const systems = [
    {
      id: '3d-body',
      titleUz: '3D Inson tanasi',
      descUz: "360° to'liq interaktiv uch o'lchamli inson tanasi, erkin burish, yaqinlashtirish va qavatlarni ajratish.",
      icon: Activity,
      color: 'text-cyan-400 bg-cyan-950/40 border-cyan-800/40',
      action: () => onNavigate('3d-body'),
    },
    {
      id: 'organlar',
      titleUz: 'Ichki organlar',
      descUz: "Yurak, o'pkalar, jigar, buyraklar, bosh miya va boshqa 14 ta asosiy hayotiy a'zolarning ilmiy anatomiyasi.",
      icon: Heart,
      color: 'text-rose-400 bg-rose-950/40 border-rose-800/40',
      action: () => onNavigate('organlar'),
    },
    {
      id: 'suyaklar',
      titleUz: 'Skelet tizimi',
      descUz: "Kalla suyagi, umurtqa pog'onasi, qovurg'alar, son va boldir suyaklari, ularning strukturasi va sinish xavflari.",
      icon: Layers,
      color: 'text-slate-300 bg-slate-800/60 border-slate-700',
      action: () => onNavigate('suyaklar'),
    },
    {
      id: 'qon-aylanish',
      titleUz: 'Qon aylanish tizimi',
      descUz: "Aorta, kapillyarlar, yurak klapanlari, arterial va venoz qon oqimining jonli animatsiyasi va gaz almashinuvi.",
      icon: Activity,
      color: 'text-red-400 bg-red-950/40 border-red-800/40',
      action: () => onNavigate('qon-aylanish'),
    },
    {
      id: 'nerv-tizimi',
      titleUz: 'Nerv tizimi',
      descUz: "Bosh miya po'stlog'i, miyacha, orqa miya va periferik nerv tolalari, neyron impulslari va reflekslar.",
      icon: Brain,
      color: 'text-yellow-400 bg-yellow-950/40 border-yellow-800/40',
      action: () => onNavigate('nerv-tizimi'),
    },
    {
      id: 'kasalliklar',
      titleUz: 'Kasalliklar ensiklopediyasi',
      descUz: "Yurak infarkti, insult, qandli diabet, onkologiya, KO'AL, alomatlar, sabablar, tashxis va davolash mezonlari.",
      icon: ShieldAlert,
      color: 'text-amber-400 bg-amber-950/40 border-amber-800/40',
      action: () => onNavigate('kasalliklar'),
    },
    {
      id: 'statistika',
      titleUz: 'Dunyo statistikasi',
      descUz: "Jahon Sog'liqni Saqlash Tashkiloti (JSST) va IHME ning global kasalliklar yuki va o'lim ko'rsatkichlari.",
      icon: BarChart3,
      color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40',
      action: () => onNavigate('statistika'),
    },
    {
      id: 'testlar',
      titleUz: 'Bilim testlari va viktorinalar',
      descUz: "Boshlang'ich va chuqurlashtirilgan tibbiy testlar, 3D modelda a'zolarni aniqlash interaktiv o'yini.",
      icon: HelpCircle,
      color: 'text-purple-400 bg-purple-950/40 border-purple-800/40',
      action: () => onNavigate('testlar'),
    },
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950/90">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wide uppercase">
              <span>Professional Tibbiy Ta'lim Platformasi</span>
              <span aria-hidden="true">·</span>
              <span>100% Oʻzbek tilida</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white text-balance leading-tight">
              Inson Tanasi 3D – Interaktiv Tibbiy Atlas
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Inson anatomiyasi, hayotiy a'zolar, suyak va mushaklar arxitekturasi, qon tomirlar va nerv tolalari, kasalliklar mexanizmlari hamda JSST rasmiy tibbiy statistikasini real vaqtda 3D muhitda o'rganing.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('3d-body')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>3D Atlasni ishga tushirish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('organlar')}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-colors cursor-pointer"
              >
                Ichki organlar katalogi
              </button>
              <button
                onClick={() => onNavigate('testlar')}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-colors cursor-pointer"
              >
                Bilimni sinash testi
              </button>
            </div>

            {/* Credibility info */}
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-4">
              <span>Manbalar: JSST (WHO)</span>
              <span aria-hidden="true">·</span>
              <span>Gray's Anatomy</span>
              <span aria-hidden="true">·</span>
              <span>Netter Tibbiy Atlasi</span>
              <span aria-hidden="true">·</span>
              <span>IHME GBD</span>
            </div>
          </div>

          {/* Hero Side: Interactive Daily Medical Fact */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Kunning tibbiy ilmiy fakti
                </span>
                <span className="text-xs text-slate-500">{todayFact.organNameUz}</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">{todayFact.titleUz}</h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{todayFact.factUz}</p>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-1 mb-4">
                <span className="text-slate-400 block font-medium">Ilmiy izoh:</span>
                <p className="text-slate-300 leading-relaxed">{todayFact.scientificContextUz}</p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-emerald-400 font-medium">
                  {todayFact.impactUz}
                </span>
                <button
                  onClick={() => onFocusOrgan3D('heart')}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>3D ko'rish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Systems Hub Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-display text-white">Anatomiya va Tibbiyot boʻlimlari</h2>
          <p className="text-sm text-slate-400 mt-1">Oʻrganmoqchi boʻlgan tana tizimi yoki tibbiy ensiklopediya boʻlimini tanlang</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systems.map((sys) => {
            const Icon = sys.icon;
            return (
              <button
                key={sys.id}
                onClick={sys.action}
                className="flex flex-col text-left p-5 rounded-2xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800/80 hover:border-slate-700 transition-all group cursor-pointer"
              >
                <div className={`p-3 rounded-xl w-fit mb-4 border ${sys.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {sys.titleUz}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed flex-1">{sys.descUz}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-cyan-400 mt-4 group-hover:translate-x-1 transition-transform">
                  <span>Boʻlimga oʻtish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Global Statistics Highlights Strip */}
      {topCauses && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block mb-1">
                  Global Tibbiy Statistika · JSST (WHO)
                </span>
                <h3 className="text-lg font-bold text-white">{topCauses.titleUz}</h3>
              </div>
              <button
                onClick={() => onNavigate('statistika')}
                className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors w-fit"
              >
                <span>Toʻliq interaktiv grafiklar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {topCauses.chartData.slice(0, 4).map((c, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <span className="text-xs text-slate-400 block line-clamp-1">{c.label}</span>
                  <span className="text-xl font-extrabold text-white font-mono block mt-1">
                    {c.value} mln
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">{c.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
