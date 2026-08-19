import React from 'react';
import { Hero } from '../components/home/Hero';
import { QuickActions } from '../components/home/QuickActions';
import { WelcomeSection } from '../components/home/WelcomeSection';
import { FeaturedPrograms } from '../components/home/FeaturedPrograms';
import { WhyChooseMeridian } from '../components/home/WhyChooseMeridian';
import { StatsCounter } from '../components/home/StatsCounter';
import { NewsEventsSpotlight } from '../components/home/NewsEventsSpotlight';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { AccreditationMarquee } from '../components/home/AccreditationMarquee';
import { Program } from '../data/programs';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectProgram: (program: Program) => void;
  onOpenProspectus: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProgram, onOpenProspectus }) => {
  return (
    <div className="space-y-0">
      <Hero onNavigate={onNavigate} onOpenProspectus={onOpenProspectus} />
      <QuickActions onNavigate={onNavigate} onOpenProspectus={onOpenProspectus} />
      <WelcomeSection onNavigate={onNavigate} />
      <FeaturedPrograms onSelectProgram={onSelectProgram} onNavigate={onNavigate} />
      <WhyChooseMeridian />
      <StatsCounter />
      <NewsEventsSpotlight onNavigate={onNavigate} />
      <TestimonialsCarousel />
      <AccreditationMarquee />
    </div>
  );
};
