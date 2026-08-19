import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PageBanner, ScrollReveal, StaggerReveal, StaggerItem } from '../components/PageBanner';

interface ContactPageProps {
  onShowToast: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Admissions',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Required Fields Missing', 'Please complete your name, email, and message.', 'info');
      return;
    }

    setSubmitted(true);
    onShowToast('Inquiry Submitted!', `Thank you ${formData.name}. Our ${formData.department} department in Karachi will respond shortly.`, 'success');
  };

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        <PageBanner
          badge="KARACHI CAMPUS CONTACT"
          title={<>Contact <span className="gold-gradient-text">The Meridian Institute</span></>}
          description="Our academic advisors, registrar officers, and admissions counselors at our Gulshan-e-Iqbal Karachi campus are available to assist prospective scholars."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <ScrollReveal variant="slideRight" className="lg:col-span-7">
          <div className="card-premium bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 h-full">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <MessageSquare className="w-5 h-5 text-meridian-gold" />
              <h3 className="font-serif font-bold text-xl text-meridian-navy">Send an Official Inquiry</h3>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Muhammad Ali Khan"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ali.khan@example.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Phone Number (Pakistani)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 (300) 123-4567"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Target Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none font-semibold"
                    >
                      <option value="Admissions">Admissions & Enrollment</option>
                      <option value="Academics">Academic Programs & Dean</option>
                      <option value="Student Affairs">Student Affairs & Housing</option>
                      <option value="Finance">Tuition & Financial Aid</option>
                      <option value="General Inquiry">General Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief summary of your question..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Message Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your detailed inquiry here..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-meridian-gold to-amber-500 text-meridian-navy font-bold py-3 rounded-xl shadow-gold-glow text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-xl text-meridian-navy">Message Dispatched Successfully</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your message has been routed to the <strong>{formData.department}</strong> department at Meridian Karachi. Expect a response within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-slate-100 text-slate-700 font-semibold px-4 py-2 rounded-xl text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft" delay={0.1} className="lg:col-span-5 space-y-6">
            
            {/* Department Directory Card */}
            <div className="bg-meridian-navy text-white p-8 rounded-3xl border border-meridian-gold/30 shadow-xl space-y-6">
              <h3 className="font-serif font-bold text-xl text-white border-b border-slate-800 pb-3">
                Karachi Campus Directory
              </h3>

              <ul className="space-y-4 text-xs">
                <li className="space-y-1">
                  <div className="font-bold text-meridian-gold uppercase tracking-wider text-[10px]">Admissions & Enrollment Office</div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-3.5 h-3.5 text-meridian-gold" />
                    <span>+92 (21) 3498-8888 / Ext 101</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-3.5 h-3.5 text-meridian-gold" />
                    <span>+92 (300) 829-9988 (WhatsApp Helpline)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-meridian-gold" />
                    <span>admissions@meridian.edu.pk</span>
                  </div>
                </li>

                <li className="space-y-1">
                  <div className="font-bold text-meridian-gold uppercase tracking-wider text-[10px]">Dean of Academics</div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-meridian-gold" />
                    <span>academics@meridian.edu.pk</span>
                  </div>
                </li>

                <li className="space-y-1">
                  <div className="font-bold text-meridian-gold uppercase tracking-wider text-[10px]">Accounts & Financial Aid</div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-meridian-gold" />
                    <span>finance@meridian.edu.pk</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Office Hours & Location */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-meridian-navy text-sm">
                <Clock className="w-4 h-4 text-meridian-gold" />
                <span>Karachi Office Hours</span>
              </div>
              <p>Monday - Saturday: 8:30 AM - 5:30 PM PKT</p>
              <p>Sunday: Closed</p>
            </div>

          </ScrollReveal>

        </div>

        <ScrollReveal variant="fadeUp">
        <div className="card-premium bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-meridian-gold" />
              <h3 className="font-serif font-bold text-xl text-meridian-navy">Karachi Main Campus Location</h3>
            </div>
            <span className="text-xs text-slate-500 font-semibold">Gulshan-e-Iqbal, Karachi</span>
          </div>

          {/* Styled Map Graphic Display */}
          <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center text-center p-6">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80"
              alt="Karachi Map Location"
              className="absolute inset-0 w-full h-full object-cover opacity-40 filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy via-meridian-navy/70 to-transparent" />

            <div className="relative z-10 max-w-md space-y-3">
              <div className="w-12 h-12 rounded-full bg-meridian-gold text-meridian-navy font-bold flex items-center justify-center mx-auto shadow-gold-glow animate-bounce">
                <MapPin className="w-6 h-6 fill-meridian-navy" />
              </div>
              <h4 className="font-serif font-bold text-xl text-white">The Meridian Institute Karachi</h4>
              <p className="text-xs text-slate-300">
                Main University Road, Block 5, Gulshan-e-Iqbal, Karachi, Sindh 75300, Pakistan. Near NIPA Chowrangi.
              </p>
              <button
                onClick={() => onShowToast('Karachi Location Map', 'Opening Google Maps directions for Gulshan-e-Iqbal campus.', 'info')}
                className="bg-meridian-gold hover:bg-meridian-gold-light text-meridian-navy font-bold px-4 py-2 rounded-xl text-xs shadow-md"
              >
                Get Driving Directions in Karachi
              </button>
            </div>
          </div>
        </div>
        </ScrollReveal>

      </div>

      {/* Floating WhatsApp Quick Contact Button UI */}
      <button
        onClick={() => onShowToast('WhatsApp Karachi Helpdesk', 'Connecting to Meridian Karachi admissions team on WhatsApp (+92 300 829-9988).', 'success')}
        className="fixed bottom-6 left-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-xs transition-transform hover:scale-105 border border-emerald-400/40"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline">WhatsApp Karachi (+92 300 8299988)</span>
      </button>
    </div>
  );
};
