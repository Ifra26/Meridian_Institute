import React from 'react';
import { ScrollReveal, StaggerReveal, StaggerItem } from './animations/ScrollReveal';

interface PageBannerProps {
  badge: string;
  title: React.ReactNode;
  description: string;
}

/** Reusable animated page hero banner for inner pages */
export const PageBanner: React.FC<PageBannerProps> = ({ badge, title, description }) => {
  return (
    <ScrollReveal variant="fadeUp">
      <div className="bg-meridian-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-meridian-gold/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-meridian-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="bg-meridian-gold/20 text-meridian-gold border border-meridian-gold/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold leading-tight">
            {title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

interface AnimatedCardGridProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

/** Staggered card grid wrapper for page sections */
export const AnimatedCardGrid: React.FC<AnimatedCardGridProps> = ({
  children,
  className = 'grid grid-cols-1 md:grid-cols-3 gap-8',
  stagger = 0.1,
}) => (
  <StaggerReveal className={className} stagger={stagger}>
    {children}
  </StaggerReveal>
);

export { StaggerItem, ScrollReveal, StaggerReveal };
