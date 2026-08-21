import React, { useState } from 'react';
import { Camera, Play, Calendar as CalendarIcon, MapPin, Clock, X, ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';
import { GALLERY_DATA, VIDEO_GALLERY_DATA, GalleryItem, VideoGalleryItem } from '../data/gallery';
import { EVENTS_DATA } from '../data/events';
import { PageBanner, ScrollReveal, StaggerReveal, StaggerItem } from '../components/PageBanner';

interface CampusLifePageProps {
  onOpenVideo: (url: string, title: string) => void;
}

export const CampusLifePage: React.FC<CampusLifePageProps> = ({ onOpenVideo }) => {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredGallery = GALLERY_DATA.filter(
    item => selectedGalleryCategory === 'All' || item.category === selectedGalleryCategory
  );

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const prevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(prev => (prev === 0 ? filteredGallery.length - 1 : (prev as number) - 1));
  };

  const nextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(prev => (prev === filteredGallery.length - 1 ? 0 : (prev as number) + 1));
  };

  const currentLightboxItem = activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : null;

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Banner */}
        <PageBanner
          badge="VIBRANT CAMPUS LIFE & FACILITIES"
          title={<>Life at <span className="gold-gradient-text">The Meridian Institute</span></>}
          description="Explore our state-of-the-art supercomputing labs, active student societies, high-resolution photo galleries, and annual campus festivals."
        />

        {/* Section 1: Asymmetric Editorial Photo Gallery with Lightbox */}
        <div className="space-y-8">
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-meridian-navy text-meridian-gold flex items-center justify-center shadow-md">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-2xl text-meridian-navy">Editorial Photo Gallery</h2>
                    <p className="text-xs text-slate-500">Snapshots of facilities, student research & graduation milestones</p>
                  </div>
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 text-xs">
                {['All', 'Campus', 'Classrooms', 'Facilities', 'Graduation'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedGalleryCategory(cat)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      selectedGalleryCategory === cat
                        ? 'bg-meridian-navy text-meridian-gold shadow-md border border-meridian-gold/40'
                        : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Asymmetric Editorial Grid */}
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-12 gap-6" stagger={0.08}>
            {filteredGallery.map((item, idx) => {
              // Asymmetric spanning logic: first item is hero feature (7 cols), others 5 or 4 cols
              const isHero = idx === 0;
              const spanClass = isHero
                ? 'md:col-span-8 h-80 sm:h-[420px]'
                : idx === 1
                ? 'md:col-span-4 h-80 sm:h-[420px]'
                : 'md:col-span-4 h-72 sm:h-80';

              return (
                <StaggerItem key={item.id} className={spanClass}>
                  <div
                    onClick={() => openLightbox(idx)}
                    className="group relative w-full h-full rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer border border-slate-200/90 img-premium-hover"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy-950/90 via-meridian-navy/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-meridian-gold text-meridian-navy font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                      <h4 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-meridian-gold transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{item.caption}</p>
                    </div>

                    <div className="absolute top-4 right-4 bg-slate-950/70 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles className="w-4 h-4 text-meridian-gold" />
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerReveal>
        </div>

        {/* Section 2: Video Tour Showcase */}
        <ScrollReveal variant="fadeUp">
          <div className="bg-meridian-navy text-white rounded-3xl p-8 sm:p-14 border border-meridian-gold/30 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-meridian-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-meridian-gold/20 flex items-center justify-center text-meridian-gold shadow-md">
                <Play className="w-6 h-6 fill-meridian-gold" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">Video Showcase & Campus Tours</h2>
                <p className="text-xs text-slate-300">Experience Meridian campus culture, labs, and sports in motion</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {VIDEO_GALLERY_DATA.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => onOpenVideo(vid.videoUrl, vid.title)}
                  className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden cursor-pointer group hover:border-meridian-gold transition-all duration-300 shadow-xl"
                >
                  <div className="relative aspect-video bg-slate-800 overflow-hidden img-premium-hover">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-meridian-gold text-meridian-navy flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-meridian-navy ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-white/10">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-extrabold text-meridian-gold uppercase tracking-wider block">
                      {vid.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-white group-hover:text-meridian-gold transition-colors line-clamp-2 leading-snug">
                      {vid.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Section 3: Campus Events Calendar */}
        <div className="space-y-6">
          <ScrollReveal variant="fadeUp">
            <div className="flex items-center gap-2.5 border-b border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-meridian-navy text-meridian-gold flex items-center justify-center shadow-md">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-2xl text-meridian-navy">Academic & Cultural Events Calendar</h2>
                <p className="text-xs text-slate-500">Upcoming conferences, hackathons, and exhibitions</p>
              </div>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {EVENTS_DATA.map((event) => (
              <StaggerItem key={event.id}>
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-meridian-gold/40 transition-all duration-300 space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="bg-meridian-navy text-meridian-gold font-bold text-[10px] uppercase px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                      <span className="text-xs font-bold text-meridian-navy font-mono">{event.date}</span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-meridian-navy leading-snug">{event.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{event.description}</p>
                  </div>
                  
                  <div className="pt-3 text-xs text-slate-500 space-y-1 border-t border-slate-100 font-medium">
                    <div className="flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5 text-meridian-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-meridian-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        {/* Lightbox Modal */}
        {currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-meridian-navy-950/95 backdrop-blur-xl">
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2.5 rounded-full bg-white/10 z-50 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevLightbox}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3.5 rounded-full bg-slate-900/90 border border-white/10 hover:bg-meridian-gold hover:text-meridian-navy transition-all z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3.5 rounded-full bg-slate-900/90 border border-white/10 hover:bg-meridian-gold hover:text-meridian-navy transition-all z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-5xl w-full text-center space-y-4">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[75vh] w-auto mx-auto rounded-3xl shadow-2xl border-2 border-meridian-gold/40 object-contain bg-slate-900"
              />
              <div className="text-white space-y-1 max-w-xl mx-auto">
                <span className="text-xs uppercase font-extrabold text-meridian-gold tracking-widest block">
                  {currentLightboxItem.category}
                </span>
                <h3 className="font-serif font-bold text-2xl text-white">{currentLightboxItem.title}</h3>
                <p className="text-xs text-slate-300">{currentLightboxItem.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

