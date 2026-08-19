import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  Search, 
  Calendar, 
  BookOpen, 
  FileText, 
  CheckCircle, 
  Award, 
  ShieldCheck,
  Phone
} from 'lucide-react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { dropdownVariants } from '../utils/motion';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenProspectus: () => void;
}

const navLinkClass = (isActive: boolean) =>
  `nav-link-premium whitespace-nowrap ${isActive ? 'active text-meridian-gold bg-white/5 font-semibold' : 'text-slate-200 hover:text-meridian-gold hover:bg-white/5'}`;

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenProspectus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsMenuOpen, setAcademicsMenuOpen] = useState(false);
  const [admissionsMenuOpen, setAdmissionsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setAcademicsMenuOpen(false);
    setAdmissionsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-meridian-navy-950 via-meridian-navy-800 to-meridian-navy-950 text-slate-200 text-xs py-2 px-4 border-b border-meridian-gold/20 flex items-center justify-between z-40">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="bg-meridian-gold text-meridian-navy font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Fall 2026 Admissions
            </span>
            <span>Admissions Open for Undergraduate & Postgraduate Programs • Karachi Campus</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <div className="hidden md:flex items-center gap-1 font-semibold text-meridian-gold-light">
              <Phone className="w-3 h-3 text-meridian-gold" />
              <span>+92 (21) 3498-8888</span>
            </div>
            <span className="hidden md:inline text-slate-600">|</span>
            <button 
              onClick={onOpenProspectus}
              className="hover:text-meridian-gold transition-colors duration-300 flex items-center gap-1 font-medium"
            >
              <BookOpen className="w-3.5 h-3.5 text-meridian-gold" />
              <span>Download Prospectus</span>
            </button>
            <span className="text-slate-600">|</span>
            <button 
              onClick={() => handleNav('tracking')}
              className="hover:text-meridian-gold transition-colors duration-300 flex items-center gap-1 font-medium"
            >
              <CheckCircle className="w-3.5 h-3.5 text-meridian-gold" />
              <span>Track Application</span>
            </button>
            <span className="text-slate-600">|</span>
            <button 
              onClick={() => handleNav('admin')}
              className="hover:text-meridian-gold transition-colors duration-300 flex items-center gap-1 font-medium text-slate-400"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <motion.header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'glass-nav border-b border-meridian-gold/20 shadow-2xl py-3' 
            : 'bg-meridian-navy border-b border-white/10 py-4'
        }`}
        initial={false}
        animate={{
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          <motion.div
            onClick={() => handleNav('home')}
            className="cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Logo size="md" />
          </motion.div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button onClick={() => handleNav('home')} className={navLinkClass(currentRoute === 'home')}>
              Home
            </button>
            <button onClick={() => handleNav('about')} className={navLinkClass(currentRoute === 'about')}>
              About
            </button>

            {/* Academics Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAcademicsMenuOpen(true)}
              onMouseLeave={() => setAcademicsMenuOpen(false)}
            >
              <button
                onClick={() => handleNav('academics')}
                className={`${navLinkClass(currentRoute === 'academics')} flex items-center gap-1`}
              >
                <span>Academics</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${academicsMenuOpen ? 'rotate-180 text-meridian-gold' : ''}`} />
              </button>

              <AnimatePresence>
                {academicsMenuOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-64 pt-2 z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="bg-slate-900 border border-meridian-gold/30 rounded-xl shadow-2xl p-2 text-sm text-slate-200 backdrop-blur-xl">
                      {[
                        { icon: BookOpen, title: 'Programs Directory', desc: 'Filter degrees & certificates', route: 'academics' as PageRoute },
                        { icon: Search, title: 'Program Finder', desc: 'Search by level & category', route: 'academics' as PageRoute },
                        { icon: Calendar, title: 'Academic Calendar', desc: 'Key semester dates & deadlines', route: 'academics' as PageRoute },
                      ].map((item) => (
                        <button
                          key={item.title}
                          onClick={() => handleNav(item.route)}
                          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-meridian-gold/10 hover:text-meridian-gold flex items-center gap-2.5 transition-all duration-300 group"
                        >
                          <item.icon className="w-4 h-4 text-meridian-gold group-hover:scale-110 transition-transform duration-300" />
                          <div>
                            <div className="font-semibold text-white">{item.title}</div>
                            <div className="text-[11px] text-slate-400">{item.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Admissions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAdmissionsMenuOpen(true)}
              onMouseLeave={() => setAdmissionsMenuOpen(false)}
            >
              <button
                onClick={() => handleNav('admissions')}
                className={`${navLinkClass(
                  currentRoute === 'admissions' || currentRoute === 'apply' || currentRoute === 'tracking'
                )} flex items-center gap-1`}
              >
                <span>Admissions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${admissionsMenuOpen ? 'rotate-180 text-meridian-gold' : ''}`} />
              </button>

              <AnimatePresence>
                {admissionsMenuOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-72 pt-2 z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="bg-slate-900 border border-meridian-gold/30 rounded-xl shadow-2xl p-2 text-sm text-slate-200 backdrop-blur-xl">
                      {[
                        { icon: Award, title: 'Admission Requirements', desc: 'Eligibility & fee calculator', route: 'admissions' as PageRoute },
                        { icon: FileText, title: 'Apply Online', desc: '5-step interactive wizard', route: 'apply' as PageRoute },
                        { icon: CheckCircle, title: 'Application Status', desc: 'Track reference status', route: 'tracking' as PageRoute },
                      ].map((item) => (
                        <button
                          key={item.title}
                          onClick={() => handleNav(item.route)}
                          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-meridian-gold/10 hover:text-meridian-gold flex items-center gap-2.5 transition-all duration-300 group"
                        >
                          <item.icon className="w-4 h-4 text-meridian-gold group-hover:scale-110 transition-transform duration-300" />
                          <div>
                            <div className="font-semibold text-white">{item.title}</div>
                            <div className="text-[11px] text-slate-400">{item.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => handleNav('faculty')} className={navLinkClass(currentRoute === 'faculty')}>
              Faculty
            </button>
            <button
              onClick={() => handleNav('campus-life')}
              className={navLinkClass(currentRoute === 'campus-life' || currentRoute === 'gallery')}
            >
              Campus Life
            </button>
            <button onClick={() => handleNav('news')} className={navLinkClass(currentRoute === 'news')}>
              News & Events
            </button>
            <button onClick={() => handleNav('contact')} className={navLinkClass(currentRoute === 'contact')}>
              Contact
            </button>
          </nav>

          {/* Primary Call to Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              onClick={() => handleNav('apply')}
             className="relative group overflow-hidden bg-gradient-to-r from-meridian-gold via-amber-400 to-meridian-gold text-meridian-navy font-bold px-5 py-2.5 rounded-lg shadow-gold-glow text-sm tracking-wide whitespace-nowrap shrink-0"
              whileHover={{ y: -2, scale: 1.03, boxShadow: '0 8px 28px rgba(197,160,89,0.45)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Apply Now</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-200 hover:text-meridian-gold p-2 rounded-lg bg-white/5 border border-white/10 transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[88px] bg-meridian-navy-950/95 backdrop-blur-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto border-t border-meridian-gold/20 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-2">
              {[
                { label: 'Home', route: 'home' as PageRoute },
                { label: 'About Meridian', route: 'about' as PageRoute },
              ].map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleNav(item.route)}
                  className="text-left py-3 px-4 rounded-lg font-medium text-base text-slate-200 hover:bg-white/5 hover:text-meridian-gold border-b border-slate-800 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}

              <div className="border-b border-slate-800">
                <button
                  onClick={() => setAcademicsMenuOpen(!academicsMenuOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 font-medium text-base text-slate-200 hover:text-meridian-gold transition-colors duration-300"
                >
                  <span>Academics & Programs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${academicsMenuOpen ? 'rotate-180 text-meridian-gold' : ''}`} />
                </button>
                <AnimatePresence>
                  {academicsMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-6 pb-3 flex flex-col gap-2 text-sm text-slate-300"
                    >
                      <button onClick={() => handleNav('academics')} className="text-left py-1.5 hover:text-meridian-gold transition-colors">
                        • All Academic Programs
                      </button>
                      <button onClick={() => handleNav('academics')} className="text-left py-1.5 hover:text-meridian-gold transition-colors">
                        • Program Search & Filters
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-b border-slate-800">
                <button
                  onClick={() => setAdmissionsMenuOpen(!admissionsMenuOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 font-medium text-base text-slate-200 hover:text-meridian-gold transition-colors duration-300"
                >
                  <span>Admissions & Fees</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${admissionsMenuOpen ? 'rotate-180 text-meridian-gold' : ''}`} />
                </button>
                <AnimatePresence>
                  {admissionsMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-6 pb-3 flex flex-col gap-2 text-sm text-slate-300"
                    >
                      <button onClick={() => handleNav('admissions')} className="text-left py-1.5 hover:text-meridian-gold transition-colors">
                        • Requirements & Fee Structure
                      </button>
                      <button onClick={() => handleNav('apply')} className="text-left py-1.5 hover:text-meridian-gold transition-colors">
                        • Online Application Wizard
                      </button>
                      <button onClick={() => handleNav('tracking')} className="text-left py-1.5 hover:text-meridian-gold transition-colors">
                        • Application Status Tracker
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { label: 'Faculty Directory', route: 'faculty' as PageRoute },
                { label: 'Campus Life & Gallery', route: 'campus-life' as PageRoute },
                { label: 'News & Circulars', route: 'news' as PageRoute },
                { label: 'Contact Us', route: 'contact' as PageRoute },
              ].map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleNav(item.route)}
                  className="text-left py-3 px-4 rounded-lg font-medium text-base text-slate-200 hover:bg-white/5 hover:text-meridian-gold border-b border-slate-800 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => handleNav('apply')}
                className="btn-premium-gold w-full py-3 text-center text-base"
              >
                Apply Online Now
              </button>
              <button
                onClick={() => handleNav('admin')}
                className="w-full bg-white/5 border border-white/10 text-slate-300 py-2.5 rounded-xl text-center text-xs hover:text-white transition-colors duration-300"
              >
                Admin Dashboard Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
