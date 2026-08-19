import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
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
    <section className="py-20 bg-meridian-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-meridian-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        
        <ScrollReveal variant="fadeUp" className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 bg-meridian-gold/15 border border-meridian-gold/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-meridian-gold">
            <GraduationCap className="w-3.5 h-3.5 text-meridian-gold" />
            <span>ALUMNI & STUDENT VOICES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
            Stories of <span className="gold-gradient-text">Impact & Success</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="scaleIn" delay={0.15}>
          <div className="bg-slate-900/90 border border-meridian-gold/30 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-meridian-gold/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-meridian-gold shadow-gold-glow bg-slate-800 img-premium-hover">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mt-4">{item.name}</h3>
                  <p className="text-xs text-meridian-gold font-medium">{item.role}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.company}</p>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-1 text-meridian-gold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-meridian-gold" />
                    ))}
                  </div>

                  <blockquote className="text-base sm:text-lg text-slate-200 italic leading-relaxed font-serif">
                    "{item.quote}"
                  </blockquote>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <div>
                      <span className="font-semibold text-white">{item.program}</span>
                      <span className="mx-2">•</span>
                      <span>{item.graduationYear}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevTestimonial}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-meridian-gold hover:text-meridian-navy text-slate-300 transition-all duration-300 hover:-translate-x-0.5"
                        aria-label="Previous Testimonial"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <span className="text-xs text-slate-500 font-mono">
                        0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                      </span>

                      <button
                        onClick={nextTestimonial}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-meridian-gold hover:text-meridian-navy text-slate-300 transition-all duration-300 hover:translate-x-0.5"
                        aria-label="Next Testimonial"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
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
