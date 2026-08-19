import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageRoute } from '../../types';
import { ScrollReveal, StaggerReveal, StaggerItem } from '../animations/ScrollReveal';

interface WelcomeSectionProps {
  onNavigate: (route: PageRoute) => void;
}

const HIGHLIGHTS = [
  { title: 'Industry-Aligned Curriculum', desc: 'Co-designed with global enterprise partners' },
  { title: 'State-of-the-Art Research Labs', desc: 'AI suites & bio-computing cleanrooms' },
  { title: 'Global Exchange Network', desc: 'Dual degree programs in Europe & USA' },
  { title: '98% Placement Success', desc: 'Recruitment by top global companies' },
];

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-meridian-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Stack */}
          <ScrollReveal variant="slideRight" className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-800 img-premium-hover">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" 
                alt="Students studying at Meridian Institute campus" 
                className="w-full h-[380px] sm:h-[450px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-meridian-gold/30 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-meridian-gold shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-meridian-gold font-bold">
                      ESTABLISHED 1998
                    </div>
                    <div className="text-xs text-slate-300">28 Years of World-Class Academic Leadership</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-meridian-gold/30 rounded-2xl -z-0 hidden sm:block" />
          </ScrollReveal>

          {/* Right Column: Editorial Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-meridian-navy/5 border border-meridian-navy/10 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-meridian-navy">
                <BookOpen className="w-3.5 h-3.5 text-meridian-gold" />
                <span>ABOUT THE MERIDIAN INSTITUTE</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.15}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-meridian-navy leading-tight">
                Inspiring World-Class Minds for a <span className="gold-gradient-text">Global Future</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded on the pillars of academic precision, technological innovation, and ethical leadership, The Meridian Institute Karachi stands as a beacon of high-impact education. We empower scholars with cross-disciplinary knowledge and real-world executive problem-solving skills.
              </p>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2" stagger={0.08}>
              {HIGHLIGHTS.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="card-premium flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm hover:border-meridian-gold/40">
                    <CheckCircle2 className="w-5 h-5 text-meridian-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-meridian-navy text-xs sm:text-sm">{item.title}</h4>
                      <p className="text-[11px] text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-premium-navy px-6 py-3 text-sm group"
                >
                  <span>Read Full Institute Story</span>
                  <ArrowRight className="w-4 h-4 text-meridian-gold group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
