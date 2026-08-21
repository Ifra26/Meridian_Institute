import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Clock, ArrowRight, Calendar as CalendarIcon, CheckCircle2, LayoutGrid, List, Sparkles } from 'lucide-react';
import { Program, PROGRAMS_DATA } from '../data/programs';
import { PageRoute } from '../types';
import { PageBanner, ScrollReveal, StaggerReveal, StaggerItem } from '../components/PageBanner';

interface AcademicsPageProps {
  onSelectProgram: (program: Program) => void;
  onNavigate: (route: PageRoute) => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onSelectProgram, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'interactive' | 'grid'>('interactive');
  const [activeCanvasProgramId, setActiveCanvasProgramId] = useState<string>(PROGRAMS_DATA[0].id);

  const filteredPrograms = useMemo(() => {
    return PROGRAMS_DATA.filter((program) => {
      const matchesSearch = 
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.code.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLevel = selectedLevel === 'All' || program.level === selectedLevel;
      const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;

      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [searchQuery, selectedLevel, selectedCategory]);

  const activeCanvasProgram = useMemo(() => {
    return filteredPrograms.find(p => p.id === activeCanvasProgramId) || filteredPrograms[0] || PROGRAMS_DATA[0];
  }, [filteredPrograms, activeCanvasProgramId]);

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <PageBanner
          badge="ACADEMICS & DEGREE PROGRAMS"
          title={<>Discover Your <span className="gold-gradient-text">Academic Pathway</span></>}
          description="Browse our accredited undergraduate, postgraduate, and professional diploma curricula in Karachi designed to build high-impact global careers."
        />

        {/* Search, Filter Toolbar & View Toggle */}
        <ScrollReveal variant="fadeUp">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Search Input */}
              <div className="md:col-span-6 relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by program title, keyword, or code (e.g. CS-101)..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-meridian-gold outline-none transition-colors"
                />
              </div>

              {/* Level Filter Dropdown */}
              <div className="md:col-span-3">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:border-meridian-gold outline-none font-medium"
                >
                  <option value="All">All Academic Levels</option>
                  <option value="Undergraduate">Undergraduate Degrees</option>
                  <option value="Postgraduate">Postgraduate & Masters</option>
                  <option value="Diploma">Professional Diplomas</option>
                  <option value="Certificate">Certificates</option>
                </select>
              </div>

              {/* Category Filter Dropdown */}
              <div className="md:col-span-3">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:border-meridian-gold outline-none font-medium"
                >
                  <option value="All">All Disciplines</option>
                  <option value="technology">Technology & AI</option>
                  <option value="business">Business & MBA</option>
                  <option value="design">Design & User Experience</option>
                  <option value="science">Biomedical & Biotechnology</option>
                  <option value="languages">Languages & Rhetoric</option>
                </select>
              </div>

            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100 flex-wrap gap-2">
              <span>Showing <strong>{filteredPrograms.length}</strong> available programs</span>

              <div className="flex items-center gap-4">
                {/* View Mode Switcher */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setViewMode('interactive')}
                    className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                      viewMode === 'interactive' ? 'bg-meridian-navy text-meridian-gold shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>Interactive Canvas</span>
                  </button>

                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                      viewMode === 'grid' ? 'bg-meridian-navy text-meridian-gold shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Editorial Directory</span>
                  </button>
                </div>

                {(searchQuery || selectedLevel !== 'All' || selectedCategory !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedLevel('All');
                      setSelectedCategory('All');
                    }}
                    className="text-meridian-navy font-bold hover:underline"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {filteredPrograms.length > 0 ? (
          viewMode === 'interactive' ? (
            /* Interactive Canvas Layout */
            <ScrollReveal variant="fadeUp">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Program Index (5 Columns) */}
                <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3 max-h-[720px] overflow-y-auto pr-1">
                  <div className="text-xs uppercase tracking-wider font-bold text-meridian-navy mb-2 flex items-center justify-between">
                    <span>Program Index</span>
                    <span className="font-mono text-slate-400">{filteredPrograms.length} Courses</span>
                  </div>

                  {filteredPrograms.map((prog, idx) => {
                    const isSelected = prog.id === activeCanvasProgram?.id;
                    const numStr = (idx + 1).toString().padStart(2, '0');

                    return (
                      <div
                        key={prog.id}
                        onClick={() => setActiveCanvasProgramId(prog.id)}
                        className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group relative ${
                          isSelected
                            ? 'bg-meridian-navy text-white border-meridian-gold shadow-md scale-[1.01]'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="activeAcademicsGlow"
                            className="absolute left-0 top-2 bottom-2 w-1.5 bg-meridian-gold rounded-r-full"
                          />
                        )}

                        <div className="flex items-center gap-3.5 min-w-0">
                          <span
                            className={`font-serif font-extrabold text-xs font-mono shrink-0 ${
                              isSelected ? 'text-meridian-gold' : 'text-slate-400'
                            }`}
                          >
                            {numStr}
                          </span>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span
                                className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                                  isSelected ? 'bg-meridian-gold text-meridian-navy' : 'bg-slate-200 text-slate-700'
                                }`}
                              >
                                {prog.level}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">{prog.duration}</span>
                            </div>

                            <h4
                              className={`font-serif font-bold text-sm truncate ${
                                isSelected ? 'text-white' : 'text-meridian-navy group-hover:text-meridian-gold'
                              }`}
                            >
                              {prog.title}
                            </h4>
                          </div>
                        </div>

                        <ArrowRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isSelected ? 'text-meridian-gold translate-x-1' : 'text-slate-400 group-hover:translate-x-1'
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Right Column: Active Program Stage (7 Columns) */}
                <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl p-6 sm:p-8 space-y-6">
                  <AnimatePresence mode="wait">
                    {activeCanvasProgram && (
                      <motion.div
                        key={activeCanvasProgram.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6"
                      >
                        <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 img-premium-hover">
                          <img
                            src={activeCanvasProgram.image}
                            alt={activeCanvasProgram.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy via-meridian-navy/30 to-transparent" />

                          <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                            <div>
                              <span className="bg-meridian-gold text-meridian-navy font-bold text-[10px] uppercase px-2.5 py-0.5 rounded">
                                {activeCanvasProgram.level}
                              </span>
                              <h3 className="font-serif font-extrabold text-2xl text-white mt-1">
                                {activeCanvasProgram.title}
                              </h3>
                            </div>
                            <span className="font-serif font-bold text-meridian-gold text-lg">
                              {activeCanvasProgram.tuitionFee}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4 text-slate-600 text-xs sm:text-sm">
                          <p className="leading-relaxed">{activeCanvasProgram.shortDescription}</p>
                          <p className="leading-relaxed">{activeCanvasProgram.fullDescription}</p>

                          <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                              <span className="text-[10px] uppercase font-bold text-meridian-gold block">Duration</span>
                              <span className="font-bold text-meridian-navy text-sm">{activeCanvasProgram.duration}</span>
                            </div>

                            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                              <span className="text-[10px] uppercase font-bold text-meridian-gold block">Credits</span>
                              <span className="font-bold text-meridian-navy text-sm">{activeCanvasProgram.credits} Credits</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                          <button
                            onClick={() => onSelectProgram(activeCanvasProgram)}
                            className="btn-premium-navy px-6 py-3 text-xs sm:text-sm group flex-1 justify-center"
                          >
                            <span>Inspect Full Syllabus</span>
                            <ArrowRight className="w-4 h-4 text-meridian-gold group-hover:translate-x-1 transition-transform" />
                          </button>

                          <button
                            onClick={() => onNavigate('apply')}
                            className="btn-premium-gold px-6 py-3 text-xs sm:text-sm flex-1 justify-center"
                          >
                            <span>Apply Now</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </ScrollReveal>
          ) : (
            /* Editorial Directory View */
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
              {filteredPrograms.map((program) => (
                <StaggerItem key={program.id}>
                  <div
                    onClick={() => onSelectProgram(program)}
                    className="card-premium bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-meridian-gold/50 cursor-pointer group flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="relative h-52 bg-slate-900 overflow-hidden img-premium-hover">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy via-transparent to-transparent opacity-60" />

                        <span className="absolute top-3 left-3 bg-meridian-navy text-meridian-gold font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-md shadow-md border border-meridian-gold/30">
                          {program.level}
                        </span>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5 text-meridian-gold" />
                            <span>{program.duration}</span>
                          </span>
                          <span className="font-semibold text-slate-700 font-mono">{program.credits} Credits</span>
                        </div>

                        <h3 className="font-serif font-bold text-lg text-meridian-navy group-hover:text-meridian-gold transition-colors leading-snug">
                          {program.title}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {program.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-meridian-navy font-serif">
                        {program.tuitionFee}
                      </span>
                      <span className="text-xs font-semibold text-meridian-gold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>View Curriculum</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          )
        ) : (
          <ScrollReveal variant="fadeUp">
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-meridian-navy">No Programs Found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No academic programs matched your exact search query. Try broadening your filter selection.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel('All');
                  setSelectedCategory('All');
                }}
                className="btn-premium-navy px-6 py-2.5 text-xs inline-flex items-center gap-2"
              >
                Clear Search & Show All
              </button>
            </div>
          </ScrollReveal>
        )}

        {/* Academic Calendar Highlights */}
        <ScrollReveal variant="fadeUp">
          <div className="bg-meridian-navy text-white rounded-3xl p-8 border border-meridian-gold/30 shadow-xl space-y-6 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-6 h-6 text-meridian-gold" />
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  2026 Academic Calendar Highlights
                </h3>
                <p className="text-xs text-slate-400">Key dates for semester registration & examinations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="font-bold text-meridian-gold uppercase text-[10px]">Fall Semester 2026</span>
                <h4 className="font-bold text-white">Semester Registration Opens</h4>
                <p className="text-slate-400">September 01, 2026 - Official orientation & course keying</p>
              </div>
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="font-bold text-meridian-gold uppercase text-[10px]">Mid-Term Assessment</span>
                <h4 className="font-bold text-white">Mid-Semester Examinations</h4>
                <p className="text-slate-400">October 20 - October 28, 2026</p>
              </div>
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="font-bold text-meridian-gold uppercase text-[10px]">Spring 2027 Advance</span>
                <h4 className="font-bold text-white">International Exchange Submissions</h4>
                <p className="text-slate-400">November 15, 2026 - Overseas application deadline</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

