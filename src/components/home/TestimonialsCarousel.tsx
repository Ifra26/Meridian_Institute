import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, GraduationCap, Sparkles, Building2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { ScrollReveal } from '../animations/ScrollReveal';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const item = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 bg-meridian-navy text-white relative overflow-hidden">
      {/* Ambient gold radial glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-meridian-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-meridian-gold/15 border border-meridian-gold/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-meridian-gold">
            <GraduationCap className="w-3.5 h-3.5 text-meridian-gold" />
            <span>ALUMNI & STUDENT VOICES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Stories of <span className="gold-gradient-text">Impact & Excellence</span>
          </h2>
        </ScrollReveal>

        {/* Large Immersive Testimonial Canvas */}
        <ScrollReveal variant="scaleIn" delay={0.15}>
          <div className="bg-slate-900/90 border border-meridian-gold/30 rounded-3xl p-8 sm:p-14 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-24 h-24 text-meridian-gold/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10"
              >
                {/* Left Side: Editorial Quotation & Info (7 Columns) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1.5 text-meridian-gold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-meridian-gold text-meridian-gold" />
                    ))}
                    <span className="text-xs text-slate-400 font-mono ml-2">5.0 Star Rating</span>
                  </div>

                  {/* Main Quote */}
                  <blockquote className="text-xl sm:text-2xl text-slate-100 italic leading-relaxed font-serif tracking-tight">
                    "{item.quote}"
                  </blockquote>

                  {/* Student Details */}
                  <div className="pt-4 border-t border-slate-800 space-y-1">
                    <h3 className="font-serif font-extrabold text-xl text-white flex items-center gap-2">
                      <span>{item.name}</span>
                      <Sparkles className="w-4 h-4 text-meridian-gold shrink-0" />
                    </h3>
                    <p className="text-sm font-semibold text-meridian-gold">{item.role}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Building2 className="w-3.5 h-3.5 text-meridian-gold" />
                        <span>{item.company}</span>
                      </span>
                      <span>•</span>
                      <span>{item.program}</span>
                      <span>•</span>
                      <span className="font-mono text-meridian-gold-light">Class of {item.graduationYear}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Large Student Portrait & Navigation (5 Columns) */}
                <div className="lg:col-span-5 flex flex-col items-center justify-between gap-6">
                  <div className="relative w-full aspect-square max-w-[280px] rounded-3xl overflow-hidden border-2 border-meridian-gold/60 shadow-gold-glow bg-slate-800 img-premium-hover">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Minimal Controls (01 / 04) */}
                  <div className="flex items-center gap-4 bg-slate-950/80 px-5 py-2.5 rounded-full border border-meridian-gold/30">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full hover:bg-meridian-gold hover:text-meridian-navy text-slate-300 transition-all duration-300 hover:-translate-x-0.5"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <span className="text-xs text-meridian-gold font-mono font-bold tracking-widest px-2">
                      0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                    </span>

                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full hover:bg-meridian-gold hover:text-meridian-navy text-slate-300 transition-all duration-300 hover:translate-x-0.5"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

