import React from 'react';
import { Sparkles, CheckCircle2, Download, PhoneCall, ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../../types';
import { StaggerReveal, StaggerItem } from '../animations/ScrollReveal';

interface QuickActionsProps {
  onNavigate: (route: PageRoute) => void;
  onOpenProspectus: () => void;
}

const ACTIONS = [
  {
    icon: Sparkles,
    title: 'Apply Online',
    badge: 'Fall 2026',
    desc: 'Admissions now open',
    primary: true,
    onClick: (nav: (r: PageRoute) => void) => nav('apply'),
  },
  {
    icon: CheckCircle2,
    title: 'Track Application',
    badge: null,
    desc: 'Check reference status',
    primary: false,
    onClick: (nav: (r: PageRoute) => void) => nav('tracking'),
  },
  {
    icon: Download,
    title: '2026 Prospectus',
    badge: null,
    desc: 'Course & campus guide',
    primary: false,
    onClick: (_nav: (r: PageRoute) => void, prospectus: () => void) => prospectus(),
  },
  {
    icon: PhoneCall,
    title: 'Admissions Inquiry',
    badge: null,
    desc: 'Speak with an advisor',
    primary: false,
    onClick: (nav: (r: PageRoute) => void) => nav('contact'),
  },
] as const;

export const QuickActions: React.FC<QuickActionsProps> = ({ onNavigate, onOpenProspectus }) => {
  return (
    <section className="relative z-20 py-8 bg-meridian-slate-50 border-b border-slate-200/60 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" stagger={0.08}>
          {ACTIONS.map((action) => {
            const IconComponent = action.icon;
            return (
              <StaggerItem key={action.title}>
                <div
                  onClick={() => action.onClick(onNavigate, onOpenProspectus)}
                  className={`bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-meridian-gold cursor-pointer group flex items-center justify-between h-full relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
                    action.primary ? 'border-t-4 border-t-meridian-gold bg-gradient-to-br from-white via-slate-50 to-amber-50/20' : ''
                  }`}
                >
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="w-11 h-11 rounded-2xl bg-meridian-navy text-meridian-gold shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-meridian-gold group-hover:text-meridian-navy transition-all duration-300 shrink-0">
                      <IconComponent className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-serif font-bold text-sm sm:text-base text-meridian-navy group-hover:text-meridian-gold-dark transition-colors duration-300">
                          {action.title}
                        </h3>
                        {action.badge && (
                          <span className="bg-meridian-gold text-meridian-navy font-extrabold text-[9px] uppercase px-1.5 py-0.5 rounded shadow-sm">
                            {action.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium">{action.desc}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-meridian-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-2 relative z-10" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};
