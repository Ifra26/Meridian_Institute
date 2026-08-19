import React from 'react';
import { Target, Compass, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { PageBanner, AnimatedCardGrid, StaggerItem, ScrollReveal } from '../components/PageBanner';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const MILESTONES = [
    {
      year: '1998',
      title: 'Foundation of Meridian Institute',
      desc: 'Established as an international center for mathematical, computational, and economic research with an initial cohort of 120 scholars.'
    },
    {
      year: '2008',
      title: 'Expansion into Biotechnology & Health Sciences',
      desc: 'Inaugurated advanced genomics labs and launched accredited M.Sc. research programs in partnership with clinical institutes.'
    },
    {
      year: '2016',
      title: 'Launch of Global MBA & Executive School',
      desc: 'Introduced international hybrid leadership modules and established corporate partnership exchange programs in London and Zurich.'
    },
    {
      year: '2022',
      title: 'AI & Quantum Supercomputing Suite in Karachi',
      desc: 'Opened the multi-disciplinary AI research center, providing students with high-performance computing clusters.'
    },
    {
      year: '2026',
      title: 'Present Legacy: 12,500+ Scholars',
      desc: 'Recognized among top global institutions with a 98% executive employment placement rate across 42 countries.'
    }
  ];

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        <PageBanner
          badge="INSTITUTIONAL HERITAGE"
          title={<>Pioneering Rigorous Learning & <span className="gold-gradient-text">Global Leadership</span></>}
          description="For nearly three decades, The Meridian Institute has remained dedicated to cultivating transformative knowledge, ethical stewardship, and technological innovation."
        />

        <AnimatedCardGrid>
          <StaggerItem>
          <div className="card-premium bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-meridian-gold h-full">
            <div className="w-12 h-12 rounded-xl bg-meridian-navy/5 text-meridian-gold flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-meridian-navy">Our Vision</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              To stand as an internationally premier educational institution that redefines higher learning through scientific rigor, ethical AI integration, and global human impact.
            </p>
          </div>
          </StaggerItem>

          <StaggerItem>
          <div className="card-premium bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-meridian-gold h-full">
            <div className="w-12 h-12 rounded-xl bg-meridian-navy/5 text-meridian-gold flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-meridian-navy">Our Mission</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              To equip diverse scholars with future-ready skills, critical thinking capabilities, and practical executive experience required to solve complex global challenges.
            </p>
          </div>
          </StaggerItem>

          <StaggerItem>
          <div className="card-premium bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-meridian-gold h-full">
            <div className="w-12 h-12 rounded-xl bg-meridian-navy/5 text-meridian-gold flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-meridian-navy">Core Values</h3>
            <ul className="text-slate-600 text-xs sm:text-sm space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-meridian-gold shrink-0" />
                <span>Academic Rigor & Precision</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-meridian-gold shrink-0" />
                <span>Ethical Leadership & Integrity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-meridian-gold shrink-0" />
                <span>Global Inclusivity & Diversity</span>
              </li>
            </ul>
          </div>
          </StaggerItem>
        </AnimatedCardGrid>

        <ScrollReveal variant="fadeUp">
        <div className="card-premium bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-meridian-gold shadow-xl bg-slate-800 img-premium-hover">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Eleanor Vance, President of Meridian Institute"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <h4 className="font-serif font-bold text-xl text-meridian-navy mt-4">Dr. Eleanor Vance</h4>
              <p className="text-xs text-meridian-gold font-semibold uppercase tracking-wider">
                President & Director General
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-meridian-gold uppercase tracking-widest">
                DIRECTOR'S WELCOME MESSAGE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-meridian-navy leading-snug">
                "Welcome to a Community Driven by Curiosity, Valor, and Distinction."
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed italic font-serif">
                "At Meridian, education is far more than the acquisition of degrees; it is a sacred process of personal refinement, intellectual liberation, and societal empowerment. Every laboratory, lecture hall, and studio on our Karachi campus is designed to unlock human potential."
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Whether you aspire to build artificial intelligence frameworks, steer global enterprise marketing, or pioneer life-saving biomedical therapies, Meridian provides the mentorship and global network to transform your ambitions into reality.
              </p>
            </div>

          </div>
        </div>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal variant="fadeUp" className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-meridian-gold uppercase tracking-wider">
              OUR CHRONOLOGICAL TIMELINE
            </span>
            <h2 className="font-serif text-3xl font-bold text-meridian-navy">
              Milestones of Institutional Growth
            </h2>
          </ScrollReveal>

          <div className="relative border-l-2 border-meridian-gold/40 ml-4 sm:ml-32 space-y-8 py-4">
            {MILESTONES.map((m, idx) => (
              <ScrollReveal key={idx} variant="slideLeft" delay={idx * 0.08} className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-meridian-gold border-4 border-white shadow-md group-hover:scale-125 transition-transform" />
                
                <span className="hidden sm:inline-block absolute -left-32 top-1 text-sm font-bold text-meridian-navy font-serif">
                  {m.year}
                </span>

                <div className="card-premium bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="sm:hidden inline-block text-xs font-bold text-meridian-gold mb-1">
                    {m.year}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-meridian-navy">{m.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal variant="scaleIn">
        <div className="bg-gradient-to-r from-meridian-navy-950 via-meridian-navy to-meridian-navy-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 border border-meridian-gold/30">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">Ready to Start Your Academic Journey?</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Join our global cohort of ambitious scholars for the upcoming 2026 academic year in Karachi.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('apply')}
              className="btn-premium-gold px-6 py-3 text-sm group"
            >
              <span>Apply for Admissions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
