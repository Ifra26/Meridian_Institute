import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../types';

interface BreadcrumbsProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  subTitle?: string;
}

const ROUTE_LABELS: Record<PageRoute, string> = {
  home: 'Home',
  about: 'About Meridian',
  academics: 'Academics & Programs',
  admissions: 'Admissions & Fees',
  apply: 'Online Application Portal',
  tracking: 'Application Tracking',
  faculty: 'Faculty & Researchers',
  'campus-life': 'Campus Life & Facilities',
  gallery: 'Photo & Video Gallery',
  news: 'News & Announcements',
  contact: 'Contact & Location',
  admin: 'Admin Portal'
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentRoute, onNavigate, subTitle }) => {
  if (currentRoute === 'home') return null;

  return (
    <div className="bg-meridian-navy/95 border-b border-meridian-gold/10 py-3 px-4 sm:px-8 text-xs text-slate-300">
      <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1 hover:text-meridian-gold transition-colors text-slate-400"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />

        <span className={subTitle ? "text-slate-400" : "text-meridian-gold font-medium"}>
          {ROUTE_LABELS[currentRoute]}
        </span>

        {subTitle && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-meridian-gold font-medium">{subTitle}</span>
          </>
        )}
      </div>
    </div>
  );
};
