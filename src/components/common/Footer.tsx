import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold font-display text-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>HUMAN BODY 3D · INTERAKTIV TIBBIY ATLAS</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            Inson anatomiyasi va jahon tibbiy statistikasini oʻrganuvchi interaktiv taʼlimiy platforma.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
            Bosh sahifa
          </button>
          <button onClick={() => onNavigate('3d-body')} className="hover:text-white transition-colors">
            3D Inson tanasi
          </button>
          <button onClick={() => onNavigate('organlar')} className="hover:text-white transition-colors">
            Ichki organlar
          </button>
          <button onClick={() => onNavigate('kasalliklar')} className="hover:text-white transition-colors">
            Kasalliklar
          </button>
          <button onClick={() => onNavigate('statistika')} className="hover:text-white transition-colors">
            Dunyo statistikasi
          </button>
          <button onClick={() => onNavigate('lugat')} className="hover:text-white transition-colors">
            Tibbiy lugʻat
          </button>
          <button onClick={() => onNavigate('testlar')} className="hover:text-white transition-colors">
            Bilim testlari
          </button>
          <button onClick={() => onNavigate('haqida')} className="hover:text-white transition-colors">
            Sayt haqida
          </button>
        </div>
      </div>
    </footer>
  );
};
