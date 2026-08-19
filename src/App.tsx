import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageRoute, ToastMessage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Toast } from './components/Toast';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { ProspectusModal } from './components/ProspectusModal';
import { VideoModal } from './components/VideoModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ApplyOnlinePage } from './pages/ApplyOnlinePage';
import { ApplicationTrackingPage } from './pages/ApplicationTrackingPage';
import { FacultyPage } from './pages/FacultyPage';
import { CampusLifePage } from './pages/CampusLifePage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

import { Program } from './data/programs';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [prospectusOpen, setProspectusOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (title: string, message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, title, message, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-meridian-slate-50 font-sans">
      
      {/* Toast Notifications Host */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Program Details Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onNavigate={handleNavigate}
      />

      {/* Prospectus PDF Download Modal */}
      <ProspectusModal
        isOpen={prospectusOpen}
        onClose={() => setProspectusOpen(false)}
        onShowToast={showToast}
      />

      {/* Video Showcase Modal */}
      <VideoModal
        videoUrl={activeVideo?.url || null}
        title={activeVideo?.title || null}
        onClose={() => setActiveVideo(null)}
      />

      {/* Header & Sticky Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenProspectus={() => setProspectusOpen(true)}
      />

      {/* Breadcrumbs for inner pages */}
      <Breadcrumbs
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Page Routing */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProgram={(p) => setSelectedProgram(p)}
            onOpenProspectus={() => setProspectusOpen(true)}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentRoute === 'academics' && (
          <AcademicsPage
            onSelectProgram={(p) => setSelectedProgram(p)}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'admissions' && (
          <AdmissionsPage onNavigate={handleNavigate} />
        )}

        {currentRoute === 'apply' && (
          <ApplyOnlinePage onNavigate={handleNavigate} onShowToast={showToast} />
        )}

        {currentRoute === 'tracking' && (
          <ApplicationTrackingPage onNavigate={handleNavigate} onShowToast={showToast} />
        )}

        {currentRoute === 'faculty' && (
          <FacultyPage />
        )}

        {currentRoute === 'campus-life' && (
          <CampusLifePage
            onOpenVideo={(url, title) => setActiveVideo({ url, title })}
          />
        )}

        {currentRoute === 'news' && (
          <NewsEventsPage onShowToast={showToast} />
        )}

        {currentRoute === 'contact' && (
          <ContactPage onShowToast={showToast} />
        )}

        {currentRoute === 'admin' && (
          <AdminDashboardPage onNavigate={handleNavigate} onShowToast={showToast} />
        )}
      </main>

      {/* Floating Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-meridian-gold hover:bg-meridian-gold-light text-meridian-navy p-3 rounded-full shadow-gold-glow transition-colors duration-300 hover:scale-105"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sitewide Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenProspectus={() => setProspectusOpen(true)}
        onShowToast={showToast}
      />
    </div>
  );
}
