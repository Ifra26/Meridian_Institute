import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, BookOpen, Sparkles, CheckCircle2, Award, ChevronRight, GraduationCap } from 'lucide-react';
import { Program, PROGRAMS_DATA } from '../../data/programs';
import { PageRoute } from '../../types';
import { ScrollReveal } from '../animations/ScrollReveal';

interface FeaturedProgramsProps {
  onSelectProgram: (program: Program) => void;
  onNavigate: (route: PageRoute) => void;
}

export const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({ onSelectProgram, onNavigate }) => {
  const featuredPrograms = PROGRAMS_DATA.filter((p) => p.featured);
  const [activeProgramId, setActiveProgramId] = useState<string>(featuredPrograms[0]?.id || PROGRAMS_DATA[0].id);

  const activeProgram = featuredPrograms.find((p) => p.id === activeProgramId) || featuredPrograms[0];

  return (
    <section className="py-20 bg-meridian-navy text-slate-100 relative overflow-hidden">
      {/* Subtle radial grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-meridian-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <ScrollReveal variant="fadeUp">
            <div>
              <div className="inline-flex items-center gap-2 bg-meridian-gold/15 border border-meridian-gold/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-meridian-gold mb-3">
                <BookOpen className="w-3.5 h-3.5 text-meridian-gold" />
                <span>ACADEMIC EXCELLENCE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Interactive <span className="gold-gradient-text">Program Showcase</span>
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mt-2">
                Explore flagship degree offerings across computer science, executive business, user experience, and biomedical engineering.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.15}>
            <button
              onClick={() => onNavigate('academics')}
              className="self-start md:self-auto btn-premium-glass px-6 py-3 text-xs sm:text-sm group"
            >
              <span>View All 65+ Programs</span>
              <ArrowRight className="w-4 h-4 text-meridian-gold group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </ScrollReveal>
        </div>

        {/* Interactive Split Layout */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Side: Program Selector List (5 Columns) */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
              <div className="text-xs uppercase tracking-wider font-bold text-meridian-gold flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-meridian-gold" />
                <span>Select Flagship Program</span>
              </div>

              {featuredPrograms.map((prog, index) => {
                const isSelected = prog.id === activeProgram.id;
                const indexStr = (index + 1).toString().padStart(2, '0');

                return (
                  <div
                    key={prog.id}
                    onClick={() => setActiveProgramId(prog.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group relative overflow-hidden ${
                      isSelected
                        ? 'bg-slate-900/90 border-meridian-gold shadow-gold-glow scale-[1.01]'
                        : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 text-slate-300'
                    }`}
                  >
                    {/* Active vertical glow indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeProgramGlow"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-meridian-gold via-amber-400 to-meridian-gold"
                      />
                    )}

                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className={`font-serif font-extrabold text-sm font-mono shrink-0 ${
                          isSelected ? 'text-meridian-gold' : 'text-slate-500 group-hover:text-white'
                        }`}
                      >
                        {indexStr}
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                              isSelected ? 'bg-meridian-gold text-meridian-navy' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {prog.level}
                          </span>
                          <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                            <Clock className="w-3 h-3 text-meridian-gold" />
                            {prog.duration}
                          </span>
                        </div>

                        <h3
                          className={`font-serif font-bold text-base sm:text-lg truncate transition-colors ${
                            isSelected ? 'text-white' : 'text-slate-300 group-hover:text-meridian-gold'
                          }`}
                        >
                          {prog.title}
                        </h3>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isSelected
                          ? 'text-meridian-gold translate-x-1'
                          : 'text-slate-600 group-hover:translate-x-1 group-hover:text-white'
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Side: Expanded Spotlight Stage (7 Columns) */}
            <div className="lg:col-span-7 bg-slate-900/90 border border-meridian-gold/30 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col justify-between relative">
              <AnimatePresence mode="wait">
                {activeProgram && (
                  <motion.div
                    key={activeProgram.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-between h-full"
                  >
                    {/* Top Hero Banner */}
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-800 img-premium-hover">
                      <img
                        src={activeProgram.image}
                        alt={activeProgram.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="bg-meridian-gold text-meridian-navy font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                          {activeProgram.level}
                        </span>
                        <span className="bg-slate-950/80 text-meridian-gold border border-meridian-gold/40 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md">
                          {activeProgram.credits} Academic Credits
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                        <div>
                          <span className="text-xs uppercase tracking-widest text-meridian-gold font-bold">
                            PROGRAM CODE: {activeProgram.code}
                          </span>
                          <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                            {activeProgram.title}
                          </h3>
                        </div>

                        <div className="hidden sm:block text-right">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Tuition Fee</span>
                          <span className="font-serif font-bold text-lg text-meridian-gold">
                            {activeProgram.tuitionFee}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Program Overview & Details */}
                    <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                          {activeProgram.shortDescription}
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-meridian-gold shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-xs font-bold text-white">Degree Level</h4>
                              <p className="text-[11px] text-slate-400">{activeProgram.level} ({activeProgram.duration})</p>
                            </div>
                          </div>

                          <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-start gap-2.5">
                            <Award className="w-4 h-4 text-meridian-gold shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-xs font-bold text-white">Global Accreditation</h4>
                              <p className="text-[11px] text-slate-400">HEC & International Partner Approved</p>
                            </div>
                          </div>
                        </div>

                        {/* Career Opportunities */}
                        {activeProgram.careerOpportunities && activeProgram.careerOpportunities.length > 0 && (
                          <div>
                            <h4 className="text-xs uppercase font-bold text-meridian-gold tracking-widest mb-2 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-meridian-gold" />
                              <span>Graduate Career Opportunities</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {activeProgram.careerOpportunities.map((career: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="bg-slate-800 text-slate-300 border border-slate-700 text-[11px] px-3 py-1 rounded-lg font-medium"
                                >
                                  {career}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA Buttons */}
                      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                        <button
                          onClick={() => onSelectProgram(activeProgram)}
                          className="btn-premium-gold w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm group"
                        >
                          <span>Explore Full Curriculum</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        <button
                          onClick={() => onNavigate('apply')}
                          className="btn-premium-glass w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm"
                        >
                          <span>Apply For Admissions</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

