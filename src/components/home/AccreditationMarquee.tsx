import React from 'react';
import { ShieldCheck, Building2 } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';

const PARTNERS = [
  { name: 'Global Accreditation Board', logo: 'GAB Accredited' },
  { name: 'European Research Council', logo: 'ERC Partner' },
  { name: 'International Tech Council', logo: 'ITC Member' },
  { name: 'Global Biotech Federation', logo: 'GBF Certified' },
  { name: 'World Leadership Association', logo: 'WLA Affiliate' },
  { name: 'Higher Education Commission', logo: 'HEC Tier-1' },
];

export const AccreditationMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-meridian-slate-50 border-t border-slate-200/80 overflow-hidden">
      <ScrollReveal variant="fadeIn" className="max-w-7xl mx-auto px-4 sm:px-8 mb-6 text-center">
        <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500 font-bold flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-meridian-gold" />
          <span>RECOGNIZED BY GLOBAL ACCREDITATION & ACADEMIC BODIES</span>
        </span>
      </ScrollReveal>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="flex gap-12 animate-marquee whitespace-nowrap py-2">
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div
              key={idx}
              className="card-premium flex items-center gap-3 bg-white px-6 py-3 rounded-xl border border-slate-200/80 shadow-sm shrink-0 hover:border-meridian-gold/40"
            >
              <Building2 className="w-5 h-5 text-meridian-navy" />
              <span className="font-serif font-semibold text-xs sm:text-sm text-meridian-navy tracking-wide">
                {partner.name}
              </span>
              <span className="text-[10px] uppercase font-bold bg-meridian-gold/15 text-meridian-gold-dark px-2 py-0.5 rounded">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
