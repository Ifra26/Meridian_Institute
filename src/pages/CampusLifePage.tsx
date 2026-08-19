import React, { useState } from 'react';
import { Camera, Play, Calendar as CalendarIcon, MapPin, Clock, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
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
        <div className="bg-meridian-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-meridian-gold/30">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-meridian-gold/20 text-meridian-gold border border-meridian-gold/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              VIBRANT CAMPUS EXPERIENCE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold leading-tight">
              Life at <span className="gold-gradient-text">The Meridian Institute</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our state-of-the-art academic facilities, vibrant student organizations, photo galleries, and cultural events.
            </p>
          </div>
        </div>

        {/* Section 1: Categorized Photo Gallery with Lightbox */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-meridian-gold" />
                <h2 className="font-serif font-bold text-2xl text-meridian-navy">Campus Photo Gallery</h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">High-resolution snapshots of facilities & student life</p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 text-xs">
              {['All', 'Campus', 'Classrooms', 'Facilities', 'Graduation'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedGalleryCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-semibold transition-colors ${
                    selectedGalleryCategory === cat
                      ? 'bg-meridian-navy text-meridian-gold shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer border border-slate-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy-950/90 via-meridian-navy/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="bg-meridian-gold text-meridian-navy font-bold text-[10px] uppercase px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h4 className="font-serif font-bold text-base">{item.title}</h4>
                  <p className="text-xs text-slate-300 line-clamp-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Video Tour Showcase */}
        <div className="bg-meridian-navy text-white rounded-3xl p-8 sm:p-12 border border-meridian-gold/30 shadow-2xl space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-meridian-gold/20 flex items-center justify-center text-meridian-gold">
              <Play className="w-6 h-6 fill-meridian-gold" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-2xl text-white">Video Showcase & Campus Tours</h2>
              <p className="text-xs text-slate-400">Experience Meridian campus life in motion</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_GALLERY_DATA.map((vid) => (
              <div
                key={vid.id}
                onClick={() => onOpenVideo(vid.videoUrl, vid.title)}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer group hover:border-meridian-gold transition-colors"
              >
                <div className="relative aspect-video bg-slate-800 overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-meridian-gold/90 text-meridian-navy flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-meridian-navy ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {vid.duration}
                  </span>
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-bold text-meridian-gold uppercase">{vid.category}</span>
                  <h4 className="font-serif font-bold text-sm text-white group-hover:text-meridian-gold transition-colors line-clamp-2">
                    {vid.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Campus Events Calendar */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
            <CalendarIcon className="w-5 h-5 text-meridian-gold" />
            <h2 className="font-serif font-bold text-2xl text-meridian-navy">Academic & Cultural Events Calendar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS_DATA.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-meridian-navy text-meridian-gold font-bold text-[10px] uppercase px-2.5 py-1 rounded">
                    {event.category}
                  </span>
                  <span className="text-xs font-bold text-meridian-navy font-serif">{event.date}</span>
                </div>

                <h3 className="font-serif font-bold text-base text-meridian-navy">{event.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{event.description}</p>
                
                <div className="pt-2 text-xs text-slate-500 space-y-1 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-meridian-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-meridian-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-meridian-navy-950/95 backdrop-blur-xl">
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-white/10 z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevLightbox}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-slate-900/80 hover:bg-meridian-gold hover:text-meridian-navy transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-slate-900/80 hover:bg-meridian-gold hover:text-meridian-navy transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full text-center space-y-4">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[75vh] w-auto mx-auto rounded-2xl shadow-2xl border border-meridian-gold/30 object-contain"
              />
              <div className="text-white space-y-1">
                <span className="text-xs uppercase font-bold text-meridian-gold tracking-widest">
                  {currentLightboxItem.category}
                </span>
                <h3 className="font-serif font-bold text-xl">{currentLightboxItem.title}</h3>
                <p className="text-xs text-slate-300 max-w-lg mx-auto">{currentLightboxItem.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
