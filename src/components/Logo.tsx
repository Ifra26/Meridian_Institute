import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl'
  };

  return (
    <div className="flex items-center gap-3.5 group select-none">
      {/* Insignia Crest Logo Container */}
      <div className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-200 via-meridian-gold to-amber-700 p-0.5 shadow-gold-glow group-hover:scale-105 transition-transform duration-300`}>
        <div className="w-full h-full bg-meridian-navy rounded-[10px] flex items-center justify-center p-1.5 relative overflow-hidden">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-meridian-gold/20 via-transparent to-meridian-gold/10" />

          {/* Academic Crest Emblem Vector SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-meridian-gold" fill="none" stroke="currentColor" strokeWidth="3">
            {/* Outer Shield Border */}
            <path d="M50 5 L88 20 V50 C88 73 50 95 50 95 C50 95 12 73 12 50 V20 L50 5 Z" fill="currentColor" fillOpacity="0.12" stroke="url(#goldGradient)" strokeWidth="4" />
            
            {/* Compass Star / Meridian Lines */}
            <line x1="50" y1="18" x2="50" y2="82" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="3 2" />
            <line x1="22" y1="50" x2="78" y2="50" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="3 2" />

            {/* Graduation Cap Center Symbol */}
            <path d="M50 32 L76 44 L50 56 L24 44 Z" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="2" />
            <path d="M34 50 V62 C34 66 66 66 66 62 V50" fill="none" stroke="url(#goldGradient)" strokeWidth="3" />
            <path d="M72 46 V62" stroke="url(#goldGradient)" strokeWidth="3" />
            <circle cx="72" cy="63" r="2.5" fill="url(#goldGradient)" />

            {/* Gradients */}
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5EDD5" />
                <stop offset="50%" stopColor="#C5A059" />
                <stop offset="100%" stopColor="#9A7730" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div>
        <span className={`font-serif font-extrabold tracking-wider text-white flex items-center gap-1.5 leading-none ${titleSizes[size]}`}>
          THE MERIDIAN
        </span>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-meridian-gold font-semibold block mt-1">
            INSTITUTE OF EXCELLENCE • KARACHI
          </span>
        )}
      </div>
    </div>
  );
};
