import React from 'react';
import { Newspaper, Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { NEWS_DATA } from '../../data/news';
import { EVENTS_DATA } from '../../data/events';
import { PageRoute } from '../../types';
import { ScrollReveal, StaggerReveal, StaggerItem } from '../animations/ScrollReveal';

interface NewsEventsSpotlightProps {
  onNavigate: (route: PageRoute) => void;
}

export const NewsEventsSpotlight: React.FC<NewsEventsSpotlightProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-meridian-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fadeUp">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-meridian-gold" />
                  <h3 className="font-serif font-bold text-2xl text-meridian-navy">
                    Latest Academic News
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('news')}
                  className="text-xs font-semibold text-meridian-navy hover:text-meridian-gold flex items-center gap-1 transition-colors duration-300 group"
                >
                  <span>View All News</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </ScrollReveal>

            <StaggerReveal className="space-y-6" stagger={0.1}>
              {NEWS_DATA.map((article) => (
                <StaggerItem key={article.id}>
                  <div
                    onClick={() => onNavigate('news')}
                    className="card-premium bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-meridian-gold/40 cursor-pointer group flex flex-col sm:flex-row gap-5 items-center"
                  >
                    <div className="w-full sm:w-44 h-32 rounded-xl shrink-0 overflow-hidden img-premium-hover bg-slate-200">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80';
                        }}
                      />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 text-[11px] text-slate-400">
                        <span className="bg-meridian-navy/5 text-meridian-navy font-semibold px-2 py-0.5 rounded">
                          {article.category}
                        </span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-meridian-navy group-hover:text-meridian-gold transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-meridian-gold" />
                  <h3 className="font-serif font-bold text-2xl text-meridian-navy">
                    Upcoming Events
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('campus-life')}
                  className="text-xs font-semibold text-meridian-navy hover:text-meridian-gold flex items-center gap-1 transition-colors duration-300 group"
                >
                  <span>Full Calendar</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
              </div>
            </ScrollReveal>

            <StaggerReveal className="space-y-4" stagger={0.1}>
              {EVENTS_DATA.map((event) => (
                <StaggerItem key={event.id}>
                  <div
                    onClick={() => onNavigate('campus-life')}
                    className="card-premium bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-meridian-gold/40 cursor-pointer group flex items-start gap-4"
                  >
                    <div className="w-14 h-16 rounded-xl bg-meridian-navy text-white flex flex-col items-center justify-center shrink-0 border border-meridian-gold/30 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <span className="text-[10px] font-bold text-meridian-gold uppercase">
                        {event.month}
                      </span>
                      <span className="font-serif font-extrabold text-xl leading-none">
                        {event.day}
                      </span>
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <span className="text-[10px] uppercase font-bold text-meridian-gold tracking-wider">
                        {event.category}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-meridian-navy group-hover:text-meridian-gold transition-colors duration-300 leading-snug">
                        {event.title}
                      </h4>
                      <div className="text-[11px] text-slate-500 space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>
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
