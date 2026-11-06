import React from 'react';
import { ShieldCheck, BookOpen, Database, AlertCircle, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-24">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
          <span>Loyiha Haqida</span>
          <span aria-hidden="true">·</span>
          <span>Ilmiy Maqsad va Manbalar</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">
          Human Body 3D – Interaktiv Tibbiy Atlas
        </h1>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          Ushbu platforma oʻzbek tilida soʻzlashuvchi keng jamoatchilik, tibbiyot talabalari, shifokorlar va oʻquvchilar uchun inson tanasi anatomiyasi hamda zamonaviy tibbiy bilimlarni bepul, vizual va ilmiy asosda taqdim etish maqsadida yaratilgan professional ta'limiy platformadir.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/60 w-fit text-cyan-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-white">100% Sof Ilmiy Oʻzbek Tili</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Barcha anatomik atamalar, organlar funksiyalari, kasalliklar tavsifi va profilaktik choralar xalqaro lotincha muqobillari bilan birgalikda, tushunarli va ravon oʻzbek tilida bayon etilgan.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60 w-fit text-emerald-400">
            <Database className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-white">Haqiqiy Global Tibbiy Statistika</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Saytdagi har bir statistik koʻrsatkich faqat rasmiy xalqaro manbalar (JSST, IHME, Jahon Banki) asosida berilgan. Tarqalganlik (prevalence), kasallanish (incidence) va oʻlim (mortality) aniq ajratilgan.
          </p>
        </div>
      </div>

      {/* Scientific Literature & References */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          <span>Foydalanilgan Ilmiy Adabiyotlar va Rasmiy Manbalar</span>
        </h2>
        <ul className="space-y-2.5 text-xs text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-bold">•</span>
            <span>
              <strong>World Health Organization (WHO):</strong> Global Health Estimates (GHE), World Health Statistics Reports, Noncommunicable Diseases Factsheets.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-bold">•</span>
            <span>
              <strong>Institute for Health Metrics and Evaluation (IHME):</strong> Global Burden of Disease (GBD) Study (204 mamlakat va hududlar).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-bold">•</span>
            <span>
              <strong>Standart Anatomik Manbalar:</strong> Gray's Anatomy for Students, Netter's Atlas of Human Anatomy, Nomina Anatomica xalqaro nomenklaturasi.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-bold">•</span>
            <span>
              <strong>Milliy Koʻrsatkichlar:</strong> Oʻzbekiston Respublikasi Sogʻliqni saqlash vazirligi va Oʻzbekiston Respublikasi Prezidenti huzuridagi Statistika agentligi maʼlumotnomalari.
            </span>
          </li>
        </ul>
      </div>

      {/* Medical Disclaimer */}
      <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-2">
        <div className="flex items-center gap-2 text-rose-300 text-sm font-bold">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>Muhim Tibbiy Ogohlantirish (Medical Disclaimer)</span>
        </div>
        <p className="text-xs text-rose-100/90 leading-relaxed">
          Ushbu veb-sayt faqat ma'rifiy va axborot berish maqsadida ishlab chiqilgan. Saytdagi ma'lumotlar malakali shifokor konsultatsiyasi, tibbiy ko'rik, tashxis qo'yish yoki shaxsiy davolash kursining o'rnini bosa olmaydi. Salomatligingizda har qanday noqulaylik yoki alomatlar sezilganda, darhol malakali tibbiyot xodimiga yoki shifoxonaga murojaat qiling.
        </p>
      </div>
    </div>
  );
};
