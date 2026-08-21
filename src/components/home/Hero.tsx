import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, ChevronDown, Award, Globe } from 'lucide-react';
import { PageRoute } from '../../types';
import {
  HERO_VIDEO_SRC,
  HERO_VIDEO_POSTER,
  heroBadgeVariants,
  heroHeadingLineVariants,
  heroGoldTextVariants,
  heroDescriptionVariants,
  heroCtaVariants,
} from '../../utils/motion';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
  onOpenProspectus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center bg-meridian-navy overflow-hidden">
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {!videoFailed ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_VIDEO_POSTER}
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-[1.02]"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <img
            src={HERO_VIDEO_POSTER}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-105 brightness-75"
          />
        )}

        {/* Sophisticated navy overlay — stronger center, lighter edges, bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy-950 via-meridian-navy-950/75 to-meridian-navy/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(6,11,26,0.88)_0%,rgba(6,11,26,0.55)_45%,rgba(11,19,42,0.25)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-meridian-navy/30 via-transparent to-meridian-navy-950 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-meridian-slate-50 to-transparent pointer-events-none" />

        {/* Subtle cinematic vignette */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 40%, rgba(6,11,26,0.35) 100%)',
            }}
          />
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 text-center flex flex-col items-center">
        {/* Prestige Institutional Badge */}
        <motion.div
          variants={heroBadgeVariants}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="visible"
          className="inline-flex items-center gap-2 bg-meridian-gold/15 border border-meridian-gold/40 backdrop-blur-md text-meridian-gold-light px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-lg animate-float-subtle"
        >
          <Sparkles className="w-3.5 h-3.5 text-meridian-gold animate-spin-slow" />
          <span>WELCOME TO THE MERIDIAN INSTITUTE</span>
        </motion.div>

        {/* Editorial Heading — staggered lines */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-2xl">
          <motion.span
            custom={0}
            variants={heroHeadingLineVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="visible"
            className="block"
          >
            Empowering Knowledge.
          </motion.span>
          <motion.span
            custom={1}
            variants={heroHeadingLineVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="visible"
            className="block sm:inline sm:ml-0"
          >
            <motion.span
              variants={heroGoldTextVariants}
              initial={prefersReducedMotion ? false : 'hidden'}
              animate="visible"
              className="gold-gradient-text inline-block"
            >
              Inspiring Excellence.
            </motion.span>
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={heroDescriptionVariants}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="visible"
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          A premier international center for higher learning, pioneering scientific research, and
          executive leadership in Karachi. Preparing world-class thinkers for global impact.
        </motion.p>

        {/* Hero CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <motion.button
            custom={0}
            variants={heroCtaVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="visible"
            onClick={() => onNavigate('apply')}
            className="btn-premium-gold w-full sm:w-auto px-8 py-4 text-sm sm:text-base group"
          >
            <span>Apply Now for 2026</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            custom={1}
            variants={heroCtaVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="visible"
            onClick={() => onNavigate('academics')}
            className="btn-premium-glass w-full sm:w-auto px-7 py-4 text-sm sm:text-base group"
          >
            <BookOpen className="w-4 h-4 text-meridian-gold" />
            <span>Explore Programs</span>
          </motion.button>

          <motion.button
            custom={2}
            variants={heroCtaVariants}
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="visible"
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto text-xs text-slate-300 hover:text-meridian-gold py-3 px-4 transition-colors duration-300 font-medium flex items-center justify-center gap-1.5 hover:-translate-y-0.5"
          >
            <Globe className="w-4 h-4 text-meridian-gold" />
            <span>Discover Meridian →</span>
          </motion.button>
        </div>

        {/* Key Quick Highlights */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300 text-xs sm:text-sm font-medium w-full max-w-3xl"
        >
          {[
            { icon: Award, label: 'Global Accreditation' },
            { icon: Sparkles, label: 'Top 1% Faculty' },
            { icon: BookOpen, label: '65+ Programs' },
            { icon: Globe, label: '98% Placement Rate' },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-2"
            >
              <Icon className="w-4 h-4 text-meridian-gold" />
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Cue Indicator */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 text-[10px] uppercase tracking-widest pointer-events-none"
      >
        <span>Scroll to Explore</span>
        <ChevronDown
          className={`w-4 h-4 text-meridian-gold ${prefersReducedMotion ? '' : 'animate-scroll-cue'}`}
        />
      </motion.div>
    </section>
  );
};
