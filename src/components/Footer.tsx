import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { PageRoute } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenProspectus: () => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenProspectus, onShowToast }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Invalid Email', 'Please enter a valid email address.', 'info');
      return;
    }
    onShowToast('Subscribed Successfully!', 'Thank you for subscribing to Meridian academic updates.', 'success');
    setEmail('');
  };

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-meridian-navy text-slate-300 border-t border-meridian-gold/20 pt-16 pb-8 relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-meridian-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div onClick={() => handleNav('home')} className="cursor-pointer inline-block">
              <Logo size="lg" />
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              A premier educational institute in Karachi dedicated to academic rigor, pioneering research, global leadership, and future-ready career excellence.
            </p>

            {/* Newsletter Box */}
            <div className="pt-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-meridian-gold-light mb-2">
                Subscribe to Meridian Academic Insights
              </h5>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter institutional email..."
                  className="bg-slate-900/90 border border-slate-700 focus:border-meridian-gold rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 flex-1 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-meridian-gold hover:bg-meridian-gold-light text-meridian-navy font-bold p-2 rounded-lg transition-colors shadow-md flex items-center justify-center"
                  title="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-white font-serif font-semibold text-base border-b border-meridian-gold/30 pb-2 inline-block">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-meridian-gold transition-colors">
                  About Meridian & History
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-meridian-gold transition-colors">
                  Academic Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faculty')} className="hover:text-meridian-gold transition-colors">
                  Faculty & Researchers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('campus-life')} className="hover:text-meridian-gold transition-colors">
                  Campus Life & Facilities
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-meridian-gold transition-colors">
                  Photo & Video Galleries
                </button>
              </li>
            </ul>
          </div>

          {/* Admissions Column */}
          <div className="space-y-3">
            <h4 className="text-white font-serif font-semibold text-base border-b border-meridian-gold/30 pb-2 inline-block">
              Admissions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-meridian-gold transition-colors">
                  Admission Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-meridian-gold transition-colors">
                  Eligibility & Criteria
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-meridian-gold transition-colors">
                  Tuition Fee Structure
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('apply')} className="hover:text-meridian-gold transition-colors font-medium text-meridian-gold">
                  Apply Online Portal →
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tracking')} className="hover:text-meridian-gold transition-colors">
                  Track Application Status
                </button>
              </li>
              <li>
                <button onClick={onOpenProspectus} className="hover:text-meridian-gold transition-colors text-slate-400 flex items-center gap-1">
                  <span>Download Prospectus</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Directory Column (Karachi Details) */}
          <div className="space-y-3">
            <h4 className="text-white font-serif font-semibold text-base border-b border-meridian-gold/30 pb-2 inline-block">
              Karachi Campus
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-meridian-gold shrink-0 mt-0.5" />
                <span>Main University Road, Block 5, Gulshan-e-Iqbal, Karachi, Sindh 75300, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-meridian-gold shrink-0" />
                <span>+92 (21) 3498-8888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-meridian-gold shrink-0" />
                <span>admissions@meridian.edu.pk</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-meridian-gold shrink-0" />
                <span>Mon - Sat: 8:30 AM - 5:30 PM PKT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Social & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span>© 2026 The Meridian Institute Karachi. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <button onClick={() => handleNav('admin')} className="hover:text-meridian-gold text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Demo</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#linkedin" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-meridian-gold hover:bg-slate-800 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#twitter" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-meridian-gold hover:bg-slate-800 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#facebook" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-meridian-gold hover:bg-slate-800 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#youtube" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-meridian-gold hover:bg-slate-800 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#instagram" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-meridian-gold hover:bg-slate-800 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
