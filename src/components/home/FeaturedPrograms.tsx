import React from 'react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Program, PROGRAMS_DATA } from '../../data/programs';
import { PageRoute } from '../../types';
import { ScrollReveal, StaggerReveal, StaggerItem } from '../animations/ScrollReveal';

interface FeaturedProgramsProps {
  onSelectProgram: (program: Program) => void;
  onNavigate: (route: PageRoute) => void;
}

export const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({ onSelectProgram, onNavigate }) => {
  const featuredPrograms = PROGRAMS_DATA.filter((p) => p.featured);

  return (
    <section className="py-20 bg-meridian-navy text-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal variant="fadeUp">
            <div>
              <div className="inline-flex items-center gap-2 bg-meridian-gold/15 border border-meridian-gold/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-meridian-gold mb-3">
                <BookOpen className="w-3.5 h-3.5 text-meridian-gold" />
                <span>ACADEMIC EXCELLENCE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Featured <span className="gold-gradient-text">Degree Programs</span>
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mt-2">
                Explore our world-class undergraduate, postgraduate, and professional certification offerings.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.15}>
            <button
              onClick={() => onNavigate('academics')}
              className="self-start md:self-auto bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-meridian-gold px-5 py-2.5 rounded-xl border border-slate-700 transition-all duration-300 text-xs sm:text-sm font-semibold flex items-center gap-2 group hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </ScrollReveal>
        </div>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {featuredPrograms.map((prog) => (
            <StaggerItem key={prog.id}>
              <div
                onClick={() => onSelectProgram(prog)}
                className="card-premium bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-card-hover hover:border-meridian-gold/50 cursor-pointer flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-800 img-premium-hover">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <span className="absolute top-3 left-3 bg-meridian-gold text-meridian-navy font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      {prog.level}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-meridian-gold" />
                        <span>{prog.duration}</span>
                      </span>
                      <span className="uppercase text-[10px] text-meridian-gold font-medium bg-meridian-gold/10 px-2 py-0.5 rounded">
                        {prog.category}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-white group-hover:text-meridian-gold transition-colors duration-300 leading-snug line-clamp-2">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {prog.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-meridian-gold-light">
                    {prog.tuitionFee}
                  </span>

                  <span className="text-xs font-semibold text-white group-hover:text-meridian-gold flex items-center gap-1 transition-colors duration-300">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>

                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-meridian-gold to-amber-500 transition-all duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};
