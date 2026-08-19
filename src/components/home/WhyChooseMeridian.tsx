import React from 'react';
import { Award, Cpu, Globe, GraduationCap, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import { ScrollReveal, StaggerReveal, StaggerItem } from '../animations/ScrollReveal';

const BENEFITS = [
  {
    icon: GraduationCap,
    title: 'World-Class Research & Faculty',
    description: 'Learn directly under Ph.D. scholars from top global research universities, leading cutting-edge laboratories.'
  },
  {
    icon: Cpu,
    title: 'State-of-the-Art Supercomputing Labs',
    description: 'Hands-on access to advanced AI clusters, cleanrooms, robotics suites, and high-performance computing centers.'
  },
  {
    icon: Globe,
    title: 'Global Academic Exchange Network',
    description: 'Dual-degree opportunities and exchange semesters with 14 partner institutions across Europe and North America.'
  },
  {
    icon: Briefcase,
    title: 'Executive Career Placement (98%)',
    description: 'Dedicated career center connects graduates with Fortune 500 tech firms, consulting houses, and research labs.'
  },
  {
    icon: Zap,
    title: 'Innovation & Startup Incubator',
    description: 'Seed funding, legal mentorship, and laboratory facilities for student-led technological enterprise startups.'
  },
  {
    icon: ShieldCheck,
    title: 'International Institutional Accreditation',
    description: 'Globally recognized degree standards ensuring seamless professional licensing and graduate admissions worldwide.'
  }
];

export const WhyChooseMeridian: React.FC = () => {
  return (
    <section className="py-20 bg-meridian-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <ScrollReveal variant="fadeUp" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-meridian-navy/5 border border-meridian-navy/10 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-meridian-navy">
            <Award className="w-3.5 h-3.5 text-meridian-gold" />
            <span>INSTITUTIONAL ADVANTAGE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-meridian-navy">
            Why Choose <span className="gold-gradient-text">The Meridian Institute</span>?
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed">
            We offer an unmatched educational ecosystem engineered to nurture intellectual depth, leadership resilience, and future-proof career mastery.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
          {BENEFITS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <StaggerItem key={index}>
                <div className="card-premium bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-meridian-gold/40 group flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-meridian-navy/5 border border-meridian-navy/10 flex items-center justify-center text-meridian-gold group-hover:bg-meridian-navy group-hover:text-meridian-gold transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="font-serif font-bold text-lg text-meridian-navy group-hover:text-meridian-gold transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400">
                    <span>Advantage #0{index + 1}</span>
                    <div className="w-2 h-2 rounded-full bg-meridian-gold opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};
