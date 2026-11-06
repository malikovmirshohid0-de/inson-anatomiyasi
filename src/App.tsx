import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { SearchModal } from './components/common/SearchModal';
import { HomePage } from './pages/HomePage';
import { Explorer3DPage } from './pages/Explorer3DPage';
import { OrgansPage } from './pages/OrgansPage';
import { SkeletonPage } from './pages/SkeletonPage';
import { MusclesPage } from './pages/MusclesPage';
import { CirculationPage } from './pages/CirculationPage';
import { NervousPage } from './pages/NervousPage';
import { DiseasesPage } from './pages/DiseasesPage';
import { StatisticsPage } from './pages/StatisticsPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { QuizzesPage } from './pages/QuizzesPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Deep linking state for 3D focus
  const [targetOrganId3D, setTargetOrganId3D] = useState<string | null>(null);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync theme class on html document
  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    if (next) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFocusOrganIn3D = (organId: string) => {
    setTargetOrganId3D(organId);
    setCurrentPage('3d-body');
  };

  const handleSearchResultSelect = (item: { type: string; id: string; title: string; targetPage?: string }) => {
    if (item.type === 'organ' || item.type === 'bone' || item.type === 'muscle') {
      setTargetOrganId3D(item.id);
      setCurrentPage('3d-body');
    } else if (item.targetPage) {
      setCurrentPage(item.targetPage);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 antialiased font-sans transition-colors duration-200">
      {/* 3-Zone Compliant Navbar */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onFocusOrgan3D={handleFocusOrganIn3D}
          />
        )}

        {currentPage === '3d-body' && (
          <Explorer3DPage
            initialTargetOrganId={targetOrganId3D}
            onNavigateToDisease={(_name) => setCurrentPage('kasalliklar')}
          />
        )}

        {currentPage === 'organlar' && (
          <OrgansPage
            onOpenIn3D={handleFocusOrganIn3D}
            onNavigateToDisease={(_name) => setCurrentPage('kasalliklar')}
          />
        )}

        {currentPage === 'suyaklar' && (
          <SkeletonPage onOpenIn3D={handleFocusOrganIn3D} />
        )}

        {currentPage === 'mushaklar' && (
          <MusclesPage onOpenIn3D={handleFocusOrganIn3D} />
        )}

        {currentPage === 'qon-aylanish' && (
          <CirculationPage onOpenIn3D={handleFocusOrganIn3D} />
        )}

        {currentPage === 'nerv-tizimi' && (
          <NervousPage onOpenIn3D={handleFocusOrganIn3D} />
        )}

        {currentPage === 'kasalliklar' && (
          <DiseasesPage
            onNavigateTo3DOrgan={handleFocusOrganIn3D}
          />
        )}

        {currentPage === 'statistika' && <StatisticsPage />}

        {currentPage === 'lugat' && <GlossaryPage />}

        {currentPage === 'testlar' && (
          <QuizzesPage onOpenIn3D={handleFocusOrganIn3D} />
        )}

        {currentPage === 'haqida' && <AboutPage />}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSearchResultSelect}
      />

      {/* Responsive Footer (shown on all pages except full-screen 3D body explorer) */}
      {currentPage !== '3d-body' && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}
