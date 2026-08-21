import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, Globe, GraduationCap, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import { ScrollReveal, StaggerReveal, StaggerItem } from '../animations/ScrollReveal';

const BENEFITS = [
  {
    number: '01',
    icon: GraduationCap,
    title: 'World-Class Research & Faculty',
    description: 'Learn directly under Ph.D. scholars from MIT, Oxford, and Stanford leading cutting-edge laboratories.'
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Supercomputing & AI Laboratories',
    description: 'Hands-on access to advanced AI clusters, cleanrooms, robotics suites, and high-performance computing.'
  },
  {
    number: '03',
    icon: Globe,
    title: 'Global Academic Exchange Network',
    description: 'Dual-degree opportunities and exchange semesters with 14 partner institutions across Europe & North America.'
  },
  {
    number: '04',
    icon: Briefcase,
    title: 'Executive Career Placement (98%)',
    description: 'Dedicated career center connecting graduates directly with Fortune 500 tech firms & global research labs.'
  },
  {
    number: '05',
    icon: Zap,
    title: 'Innovation & Startup Incubator',
    description: 'Seed funding, legal mentorship, and laboratory facilities for student-led technological enterprise startups.'
  },
  {
    number: '06',
    icon: ShieldCheck,
    title: 'International Accreditation',
    description: 'Globally recognized degree standards ensuring seamless professional licensing and graduate admissions worldwide.'
  }
];

export const WhyChooseMeridian: React.FC = () => {
  return (
    <section className="py-24 bg-meridian-slate-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-meridian-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-meridian-navy/5 border border-meridian-navy/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-meridian-navy shadow-sm">
            <Award className="w-4 h-4 text-meridian-gold" />
            <span>INSTITUTIONAL ADVANTAGE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-meridian-navy tracking-tight">
            Architects of <span className="gold-gradient-text">Academic Leadership</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We provide an unparalleled educational ecosystem engineered to nurture intellectual depth, leadership resilience, and future-proof career mastery.
          </p>
        </ScrollReveal>

        {/* Asymmetric Numbered Timeline Layout */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
          {BENEFITS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <StaggerItem key={item.number}>
                <div className="group relative bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-meridian-gold/50 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                  
                  {/* Glowing corner accent on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-meridian-gold/5 rounded-bl-full pointer-events-none group-hover:bg-meridian-gold/15 transition-colors duration-500" />

                  <div className="space-y-6 relative z-10">
                    {/* Top Row: Oversized Number + Icon Badge */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-extrabold text-4xl sm:text-5xl text-slate-200 group-hover:text-meridian-gold transition-colors duration-500 font-mono tracking-tighter">
                        {item.number}
                      </span>

                      <div className="w-12 h-12 rounded-2xl bg-meridian-navy text-meridian-gold flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-meridian-gold group-hover:text-meridian-navy transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-xl text-meridian-navy group-hover:text-meridian-gold transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Indicator Bar */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 relative z-10">
                    <span className="uppercase text-[10px] tracking-wider text-meridian-gold">
                      Advantage {item.number}
                    </span>
                    <span className="text-meridian-navy group-hover:translate-x-1 transition-transform duration-300 font-serif">
                      Explore →
                    </span>
                  </div>

                  {/* Animated Gold Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-meridian-gold via-amber-400 to-meridian-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};

