import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Compass, Heart, CheckCircle2, ArrowRight, Sparkles, Award, Quote, Calendar } from 'lucide-react';
import { PageRoute } from '../types';
import { PageBanner, ScrollReveal, StaggerReveal, StaggerItem } from '../components/PageBanner';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

const PHILOSOPHY_TABS = [
  {
    id: 'vision',
    icon: Target,
    title: 'Our Vision',
    subtitle: 'Redefining Higher Education for Global Human Impact',
    desc: 'To stand as an internationally premier educational institution in Karachi that redefines higher learning through scientific rigor, ethical AI integration, and transformative research.',
    points: [
      'Top 1% Global Faculty & Research Labs',
      'Cross-Disciplinary AI & Bio-Computing Integration',
      'Ethical Stewardship & Global Academic Leadership'
    ]
  },
  {
    id: 'mission',
    icon: Compass,
    title: 'Our Mission',
    subtitle: 'Equipping Scholars for Complex Global Challenges',
    desc: 'To equip diverse scholars with future-proof computational skills, critical leadership resilience, and practical executive experience required to lead international enterprise.',
    points: [
      'Industry-Co-Designed Curricula & Supercomputing Labs',
      '98% Executive Career Placement Success Rate',
      'Dual-Degree Exchange Partnerships Across Europe & USA'
    ]
  },
  {
    id: 'values',
    icon: Heart,
    title: 'Core Values',
    subtitle: 'Principles Nurturing Academic Distinction',
    desc: 'Our pillars of integrity, academic precision, and inclusive innovation guide every lecture, laboratory experiment, and strategic initiative.',
    points: [
      'Academic Rigor & Theoretical Precision',
      'Ethical Innovation & Artificial Intelligence Safety',
      'Global Diversity & Equitable Merit-Based Opportunity'
    ]
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [activeTabId, setActiveTabId] = useState<string>('vision');
  const activeTab = PHILOSOPHY_TABS.find(t => t.id === activeTabId) || PHILOSOPHY_TABS[0];

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

        {/* Section 1: Interactive Institutional Philosophy Canvas (Replaces 3 static cards) */}
        <ScrollReveal variant="fadeUp">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Tab Selectors (4 Columns) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="text-xs uppercase tracking-wider font-bold text-meridian-gold flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-meridian-gold" />
                <span>Institutional Pillars</span>
              </div>

              {PHILOSOPHY_TABS.map((tab) => {
                const isSelected = tab.id === activeTab.id;
                const IconComponent = tab.icon;

                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group relative overflow-hidden ${
                      isSelected
                        ? 'bg-meridian-navy text-white border-meridian-gold shadow-lg scale-[1.01]'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activePhilosophyGlow"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-meridian-gold"
                      />
                    )}

                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-meridian-gold text-meridian-navy font-bold' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`font-serif font-bold text-base ${isSelected ? 'text-white' : 'text-meridian-navy'}`}>
                          {tab.title}
                        </h4>
                        <p className={`text-[11px] truncate max-w-[170px] ${isSelected ? 'text-meridian-gold-light' : 'text-slate-500'}`}>
                          {tab.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-meridian-gold translate-x-1' : 'text-slate-400 group-hover:translate-x-1'}`} />
                  </div>
                );
              })}
            </div>

            {/* Right Column: Active Canvas Showcase (8 Columns) */}
            <div className="lg:col-span-8 bg-meridian-navy text-white rounded-3xl p-8 sm:p-12 border border-meridian-gold/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-80 h-80 bg-meridian-gold/10 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {activeTab && (
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-6 relative z-10"
                  >
                    <div className="inline-flex items-center gap-2 bg-meridian-gold/15 border border-meridian-gold/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-meridian-gold">
                      <Award className="w-3.5 h-3.5 text-meridian-gold" />
                      <span>{activeTab.title} Overview</span>
                    </div>

                    <div>
                      <h3 className="font-serif font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                        {activeTab.subtitle}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3 font-normal">
                        {activeTab.desc}
                      </p>
                    </div>

                    <div className="w-20 h-1 bg-gradient-to-r from-meridian-gold to-transparent rounded-full" />

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs uppercase font-bold text-meridian-gold tracking-widest">
                        KEY INSTITUTIONAL COMMITMENTS
                      </h4>
                      <div className="space-y-2">
                        {activeTab.points.map((pt, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-meridian-gold shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </ScrollReveal>

        {/* Section 2: Director's Welcome Spotlight */}
        <ScrollReveal variant="fadeUp">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-meridian-gold shadow-gold-glow bg-slate-800 img-premium-hover">
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
                <p className="text-xs text-meridian-gold font-bold uppercase tracking-wider">
                  President & Director General
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-meridian-gold">
                  <Quote className="w-6 h-6 text-meridian-gold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-meridian-navy">
                    DIRECTOR'S WELCOME MESSAGE
                  </span>
                </div>
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

        {/* Section 3: Interactive Chronological Timeline */}
        <div className="space-y-8">
          <ScrollReveal variant="fadeUp" className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 bg-meridian-navy/5 border border-meridian-navy/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-meridian-navy">
              <Calendar className="w-3.5 h-3.5 text-meridian-gold" />
              <span>CHRONOLOGICAL TIMELINE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-meridian-navy">
              Milestones of Institutional Growth
            </h2>
          </ScrollReveal>

          <StaggerReveal className="space-y-6" stagger={0.1}>
            {MILESTONES.map((m) => (
              <StaggerItem key={m.year}>
                <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-meridian-gold/50 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden">
                  
                  {/* Year Tag */}
                  <div className="w-20 h-20 rounded-2xl bg-meridian-navy text-meridian-gold flex flex-col items-center justify-center shrink-0 border border-meridian-gold/30 shadow-md group-hover:scale-105 transition-transform">
                    <span className="font-serif font-extrabold text-2xl font-mono">{m.year}</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-300 font-bold">Epoch</span>
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-serif font-bold text-lg sm:text-xl text-meridian-navy group-hover:text-meridian-gold transition-colors">
                      {m.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{m.desc}</p>
                  </div>

                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-meridian-gold group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        {/* CTA Banner */}
        <ScrollReveal variant="scaleIn">
          <div className="bg-gradient-to-r from-meridian-navy-950 via-meridian-navy to-meridian-navy-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-meridian-gold/30 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3 relative z-10">
              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">Ready to Start Your Academic Journey?</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Join our global cohort of ambitious scholars for the upcoming 2026 academic year in Karachi.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => onNavigate('apply')}
                  className="btn-premium-gold px-8 py-4 text-xs sm:text-sm group"
                >
                  <span>Apply Online For 2026</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

