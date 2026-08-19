import React from 'react';
import { Users, GraduationCap, BookOpen, Trophy } from 'lucide-react';
import { StaggerReveal, StaggerItem, ScrollReveal } from '../animations/ScrollReveal';

const STATS = [
  {
    icon: Users,
    value: '12,500+',
    label: 'Students Enrolled',
    subtext: 'Representing 42 countries'
  },
  {
    icon: GraduationCap,
    value: '450+',
    label: 'Faculty & Scholars',
    subtext: '92% hold Ph.D. credentials'
  },
  {
    icon: BookOpen,
    value: '65+',
    label: 'Academic Programs',
    subtext: 'Undergraduate to Executive Doctorate'
  },
  {
    icon: Trophy,
    value: '28 Years',
    label: 'Excellence Legacy',
    subtext: 'Established in 1998'
  }
];

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-meridian-navy-950 via-meridian-navy to-meridian-navy-950 text-white border-y border-meridian-gold/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-meridian-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800" stagger={0.12}>
          {STATS.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <StaggerItem key={idx}>
                <div className={`pt-6 md:pt-0 ${idx !== 0 ? 'md:pl-6' : ''} space-y-2`}>
                  <div className="w-10 h-10 mx-auto rounded-xl bg-meridian-gold/10 border border-meridian-gold/30 flex items-center justify-center text-meridian-gold">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <ScrollReveal variant="scaleIn" delay={idx * 0.05}>
                    <div className="font-serif font-extrabold text-3xl sm:text-4xl text-white tracking-tight gold-gradient-text">
                      {stat.value}
                    </div>
                  </ScrollReveal>

                  <div className="font-semibold text-xs sm:text-sm text-slate-200 uppercase tracking-wider">
                    {stat.label}
                  </div>

                  <p className="text-[11px] text-slate-400 font-normal">
                    {stat.subtext}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};
