import React, { useState } from 'react';
import { Newspaper, FileText, Download, Clock, ArrowRight, X, Calendar, CheckCircle2 } from 'lucide-react';
import { NEWS_DATA, NewsArticle } from '../data/news';
import { NOTICES_DATA } from '../data/notices';
import { PageBanner, ScrollReveal, StaggerReveal, StaggerItem } from '../components/PageBanner';

interface NewsEventsPageProps {
  onShowToast: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const NewsEventsPage: React.FC<NewsEventsPageProps> = ({ onShowToast }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'notices'>('news');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const featuredArticle = NEWS_DATA.find(a => a.featured) || NEWS_DATA[0];

  const handleDownloadNotice = (refNo: string, title: string) => {
    onShowToast('Downloading Official Circular', `Document ${refNo} (${title}) download initiated.`, 'success');
  };

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Banner Header */}
        <div className="bg-meridian-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-meridian-gold/30">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-meridian-gold/20 text-meridian-gold border border-meridian-gold/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              INSTITUTIONAL PRESS & ANNOUNCEMENTS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold">
              News, Research & <span className="gold-gradient-text">Official Notices</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Stay updated with academic breakthroughs, international campus events, press releases, and circulars.
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-white p-2 rounded-2xl shadow-sm text-sm font-semibold max-w-md">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex-1 py-2.5 rounded-xl transition-all ${
              activeTab === 'news'
                ? 'bg-meridian-navy text-meridian-gold shadow-md'
                : 'text-slate-600 hover:text-meridian-navy'
            }`}
          >
            Institutional News & Research
          </button>
          <button
            onClick={() => setActiveTab('notices')}
            className={`flex-1 py-2.5 rounded-xl transition-all ${
              activeTab === 'notices'
                ? 'bg-meridian-navy text-meridian-gold shadow-md'
                : 'text-slate-600 hover:text-meridian-navy'
            }`}
          >
            Official Circulars & Notices
          </button>
        </div>

        {/* TAB 1: NEWS */}
        {activeTab === 'news' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* Featured Article Spotlight */}
            {featuredArticle && (
              <div
                onClick={() => setSelectedArticle(featuredArticle)}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl hover:border-meridian-gold/40 transition-all cursor-pointer group grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden bg-slate-800">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-meridian-gold text-meridian-navy font-bold text-xs uppercase px-3 py-1 rounded shadow-md">
                    Featured Spotlight
                  </span>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="bg-meridian-navy/5 text-meridian-navy font-semibold px-2.5 py-0.5 rounded">
                        {featuredArticle.category}
                      </span>
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>

                    <h2 className="font-serif font-bold text-2xl text-meridian-navy group-hover:text-meridian-gold transition-colors leading-snug">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-meridian-navy group-hover:text-meridian-gold">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )}

            {/* News Editorial Grid */}
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
              {NEWS_DATA.map((article) => (
                <StaggerItem key={article.id}>
                  <div
                    onClick={() => setSelectedArticle(article)}
                    className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-meridian-gold/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full transform hover:-translate-y-1"
                  >
                    <div>
                      <div className="relative h-48 bg-slate-800 overflow-hidden img-premium-hover">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-meridian-navy text-meridian-gold font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                          {article.category}
                        </span>
                      </div>

                      <div className="p-6 space-y-2">
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>

                        <h3 className="font-serif font-bold text-base text-meridian-navy group-hover:text-meridian-gold transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-meridian-navy group-hover:text-meridian-gold">
                      <span>Read Story</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

          </div>
        )}

        {/* TAB 2: NOTICES */}
        {activeTab === 'notices' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {NOTICES_DATA.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-meridian-gold transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="bg-meridian-navy text-meridian-gold font-bold text-[10px] uppercase px-2.5 py-1 rounded">
                        {notice.category}
                      </span>
                      <span className="font-mono text-slate-400 text-[11px]">Ref: {notice.refNo}</span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-meridian-navy">{notice.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{notice.summary}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{notice.date} • {notice.fileSize}</span>
                    <button
                      onClick={() => handleDownloadNotice(notice.refNo, notice.title)}
                      className="bg-meridian-navy hover:bg-meridian-navy-800 text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5 text-meridian-gold" />
                      <span>Download Circular</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-meridian-navy-950/80 backdrop-blur-md overflow-y-auto">
            <div className="bg-slate-900 border border-meridian-gold/30 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden text-slate-100 p-6 sm:p-8 relative my-8">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="bg-meridian-gold text-meridian-navy font-bold text-[10px] uppercase px-2.5 py-1 rounded">
                  {selectedArticle.category}
                </span>

                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-3 text-xs text-slate-400 border-b border-slate-800 pb-4">
                  <span>By {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed pt-2">
                  {selectedArticle.content}
                </p>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="bg-meridian-gold text-meridian-navy font-bold px-6 py-2 rounded-xl text-xs"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
