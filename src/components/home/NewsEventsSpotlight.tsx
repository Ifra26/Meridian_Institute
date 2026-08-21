import React from 'react';
import { Newspaper, Calendar, MapPin, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { NEWS_DATA } from '../../data/news';
import { EVENTS_DATA } from '../../data/events';
import { PageRoute } from '../../types';
import { ScrollReveal, StaggerReveal, StaggerItem } from '../animations/ScrollReveal';

interface NewsEventsSpotlightProps {
  onNavigate: (route: PageRoute) => void;
}

export const NewsEventsSpotlight: React.FC<NewsEventsSpotlightProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-meridian-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Editorial News Magazine List (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fadeUp">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-meridian-navy text-meridian-gold flex items-center justify-center shadow-md">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-meridian-navy">
                      Academic Spotlight & News
                    </h3>
                    <p className="text-xs text-slate-500">Research breakthroughs & institute announcements</p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('news')}
                  className="text-xs font-bold text-meridian-navy hover:text-meridian-gold flex items-center gap-1 transition-colors duration-300 group"
                >
                  <span>View All News</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </ScrollReveal>

            <StaggerReveal className="space-y-4" stagger={0.1}>
              {NEWS_DATA.map((article) => (
                <StaggerItem key={article.id}>
                  <div
                    onClick={() => onNavigate('news')}
                    className="group bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-meridian-gold/50 cursor-pointer transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center relative overflow-hidden"
                  >
                    <div className="w-full sm:w-48 h-36 rounded-2xl shrink-0 overflow-hidden img-premium-hover bg-slate-200">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80';
                        }}
                      />
                    </div>

                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                        <span className="bg-meridian-gold/15 text-meridian-gold-dark font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>

                      <h4 className="font-serif font-bold text-base sm:text-lg text-meridian-navy group-hover:text-meridian-gold transition-colors duration-300 leading-snug line-clamp-2">
                        {article.title}
                      </h4>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                        {article.excerpt}
                      </p>

                      <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-meridian-navy group-hover:text-meridian-gold transition-colors">
                        <span>Read Full Story</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

          {/* Right Side: Interactive Calendar Events Timeline (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-meridian-navy text-meridian-gold flex items-center justify-center shadow-md">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-meridian-navy">
                      Events Timeline
                    </h3>
                    <p className="text-xs text-slate-500">Upcoming academic & campus events</p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('campus-life')}
                  className="text-xs font-bold text-meridian-navy hover:text-meridian-gold flex items-center gap-1 transition-colors duration-300 group"
                >
                  <span>Full Calendar</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </ScrollReveal>

            <StaggerReveal className="space-y-4" stagger={0.1}>
              {EVENTS_DATA.map((event) => (
                <StaggerItem key={event.id}>
                  <div
                    onClick={() => onNavigate('campus-life')}
                    className="group bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-meridian-gold/50 cursor-pointer transition-all duration-300 flex items-center gap-4 relative overflow-hidden"
                  >
                    {/* Date Badge */}
                    <div className="w-16 h-20 rounded-2xl bg-meridian-navy text-white flex flex-col items-center justify-center shrink-0 border border-meridian-gold/40 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <span className="text-[10px] font-extrabold text-meridian-gold uppercase tracking-wider font-mono">
                        {event.month}
                      </span>
                      <span className="font-serif font-extrabold text-2xl leading-none mt-0.5">
                        {event.day}
                      </span>
                    </div>

                    {/* Event Content */}
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <span className="text-[10px] uppercase font-extrabold text-meridian-gold tracking-widest block">
                        {event.category}
                      </span>

                      <h4 className="font-serif font-bold text-sm sm:text-base text-meridian-navy group-hover:text-meridian-gold transition-colors duration-300 leading-snug truncate">
                        {event.title}
                      </h4>

                      <div className="text-[11px] text-slate-500 space-y-1 font-medium">
                        <div className="flex items-center gap-1.5 font-mono">
                          <Clock className="w-3.5 h-3.5 text-meridian-gold" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-meridian-gold" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-meridian-gold group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

