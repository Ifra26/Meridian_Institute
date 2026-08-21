import React, { useEffect, useState } from 'react';
import { Users, GraduationCap, BookOpen, Trophy, Sparkles } from 'lucide-react';
import { StaggerReveal, StaggerItem, ScrollReveal } from '../animations/ScrollReveal';

const STATS = [
  {
    icon: Users,
    numericTarget: 12500,
    prefix: '',
    suffix: '+',
    label: 'Students Enrolled',
    subtext: 'Representing 42 global nations'
  },
  {
    icon: GraduationCap,
    numericTarget: 450,
    prefix: '',
    suffix: '+',
    label: 'Faculty & Scholars',
    subtext: '92% hold doctoral degrees'
  },
  {
    icon: BookOpen,
    numericTarget: 65,
    prefix: '',
    suffix: '+',
    label: 'Degree Programs',
    subtext: 'Undergraduate to Executive Doctorate'
  },
  {
    icon: Trophy,
    numericTarget: 28,
    prefix: '',
    suffix: ' Years',
    label: 'Excellence Legacy',
    subtext: 'Chartered in 1998'
  }
];

function AnimatedCounter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800; // ms
    const increment = Math.max(1, Math.floor(target / (duration / 30)));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  const formatted = count >= 1000 ? count.toLocaleString() : count;

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-meridian-navy-950 via-meridian-navy to-meridian-navy-950 text-white border-y border-meridian-gold/30 relative overflow-hidden shadow-2xl">
      {/* Background ambient radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-meridian-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-8">
        
        {/* Subtle Section Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-meridian-gold/15 border border-meridian-gold/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-meridian-gold">
            <Sparkles className="w-3.5 h-3.5 text-meridian-gold" />
            <span>INSTITUTIONAL METRICS & IMPACT</span>
          </div>
        </div>

        {/* Horizontal Achievement Bar */}
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10" stagger={0.1}>
          {STATS.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <StaggerItem key={idx}>
                <div className={`pt-6 md:pt-0 ${idx !== 0 ? 'md:pl-8' : ''} space-y-3 group`}>
                  
                  {/* Icon badge */}
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-meridian-gold/10 border border-meridian-gold/30 flex items-center justify-center text-meridian-gold group-hover:scale-110 group-hover:bg-meridian-gold group-hover:text-meridian-navy transition-all duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Animated Number Counter */}
                  <ScrollReveal variant="scaleIn" delay={idx * 0.08}>
                    <div className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-tight gold-gradient-text">
                      <AnimatedCounter target={stat.numericTarget} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                  </ScrollReveal>

                  <div className="font-semibold text-xs sm:text-sm text-slate-200 uppercase tracking-wider font-sans">
                    {stat.label}
                  </div>

                  <p className="text-[11px] text-slate-400 font-normal max-w-[180px] mx-auto">
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

