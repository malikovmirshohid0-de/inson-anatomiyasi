import React, { useState } from 'react';
import { Search, Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenSearch: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenSearch,
  isDarkMode,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', labelUz: 'Bosh sahifa' },
    { id: '3d-body', labelUz: '3D Inson tanasi' },
    { id: 'organlar', labelUz: 'Ichki organlar' },
    { id: 'suyaklar', labelUz: 'Suyaklar' },
    { id: 'kasalliklar', labelUz: 'Kasalliklar' },
    { id: 'statistika', labelUz: 'Dunyo statistikasi' },
    { id: 'testlar', labelUz: 'Bilim testlari' },
  ];

  const allPages = [
    { id: 'home', labelUz: 'Bosh sahifa' },
    { id: '3d-body', labelUz: '3D Inson tanasi' },
    { id: 'organlar', labelUz: 'Ichki organlar' },
    { id: 'suyaklar', labelUz: 'Suyaklar tizimi' },
    { id: 'mushaklar', labelUz: 'Mushaklar tizimi' },
    { id: 'qon-aylanish', labelUz: 'Qon aylanish tizimi' },
    { id: 'nerv-tizimi', labelUz: 'Nerv tizimi' },
    { id: 'kasalliklar', labelUz: 'Kasalliklar ensiklopediyasi' },
    { id: 'statistika', labelUz: 'Dunyo statistikasi (JSST)' },
    { id: 'lugat', labelUz: "Tibbiy lug'at" },
    { id: 'testlar', labelUz: 'Bilim testlari' },
    { id: 'haqida', labelUz: 'Sayt haqida' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8 h-16">
        {/* Zone 1: Single Brand wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2 whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
          <span className="font-display">HUMAN BODY 3D</span>
          <span className="text-xs font-normal text-slate-400 hidden lg:inline">· Tibbiy Atlas</span>
        </button>

        {/* Zone 2: 4-5 Concise single-line navigation links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`whitespace-nowrap transition-colors py-1 ${
                  isActive
                    ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.labelUz}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Search CTA, Theme Toggle, Mobile Menu) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
            title="Qidiruv (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Qidiruv...</span>
            <kbd className="hidden md:inline text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={isDarkMode ? "Yorug' rejimga o'tish" : "Qorong'u rejimga o'tish"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 text-slate-300 xl:hidden border border-slate-800"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu with all sections */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-4 py-3 space-y-1 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-1.5">
            {allPages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  onNavigate(page.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activePage === page.id
                    ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {page.labelUz}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
