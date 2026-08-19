import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface ApplicationTrackingPageProps {
  onNavigate: (route: PageRoute) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const ApplicationTrackingPage: React.FC<ApplicationTrackingPageProps> = ({ onNavigate, onShowToast }) => {
  const [refIdInput, setRefIdInput] = useState('');
  const [activeTracking, setActiveTracking] = useState<{
    refId: string;
    applicantName: string;
    program: string;
    submittedDate: string;
    currentStep: number;
    statusLabel: string;
  } | null>({
    refId: 'MER-2026-8492',
    applicantName: 'Julian Vance',
    program: 'B.Sc. Computer Science & Artificial Intelligence',
    submittedDate: 'August 12, 2026',
    currentStep: 2,
    statusLabel: 'Under Committee Review'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refIdInput.trim()) {
      onShowToast('Enter Reference Number', 'Please enter your application reference ID (e.g. MER-2026-8492).', 'info');
      return;
    }

    setActiveTracking({
      refId: refIdInput.toUpperCase(),
      applicantName: 'Applicant Scholar',
      program: 'B.Sc. Computer Science & Artificial Intelligence',
      submittedDate: 'August 15, 2026',
      currentStep: 2,
      statusLabel: 'Under Committee Review'
    });

    onShowToast('Status Loaded', `Tracking details retrieved for ${refIdInput}.`, 'success');
  };

  const STEPS = [
    { step: 1, title: 'Application Submitted', desc: 'Form & transcripts received digitally.' },
    { step: 2, title: 'Under Committee Review', desc: 'Faculty admissions board verifying transcripts & GPA.' },
    { step: 3, title: 'Academic Interview', desc: 'Virtual or on-campus interaction scheduled.' },
    { step: 4, title: 'Final Enrollment Offer', desc: 'Official letter of acceptance & fee invoice issued.' }
  ];

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Banner */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="bg-meridian-navy/10 text-meridian-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            APPLICATION TRACKING SYSTEM
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-meridian-navy">
            Track Admission Status
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm">
            Enter your unique Meridian Application Reference Code (e.g., <code>MER-2026-8492</code>) to check real-time progress.
          </p>
        </div>

        {/* Search Bar Box */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={refIdInput}
                onChange={(e) => setRefIdInput(e.target.value)}
                placeholder="Enter Reference Code (e.g. MER-2026-8492)..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 focus:border-meridian-gold outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-meridian-navy hover:bg-meridian-navy-800 text-white font-bold px-6 py-3 rounded-xl shadow-md text-xs sm:text-sm shrink-0"
            >
              Track Application Status
            </button>
          </form>
        </div>

        {/* Tracking Details Results Card */}
        {activeTracking && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
            
            {/* Top Details Grid */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-meridian-gold tracking-widest">
                  APPLICATION REFERENCE
                </span>
                <h3 className="font-mono text-2xl font-bold text-meridian-navy mt-0.5">
                  {activeTracking.refId}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Applicant: <strong>{activeTracking.applicantName}</strong> • Submitted on {activeTracking.submittedDate}
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 self-start sm:self-auto">
                <Clock className="w-4 h-4 text-amber-600 animate-spin" />
                <span>Status: {activeTracking.statusLabel}</span>
              </div>
            </div>

            {/* Target Program Info */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
              <span className="text-slate-400 font-semibold uppercase text-[10px]">Applied Program:</span>
              <div className="font-serif font-bold text-sm text-meridian-navy mt-0.5">{activeTracking.program}</div>
            </div>

            {/* Step Timeline Visualizer */}
            <div className="space-y-6">
              <h4 className="font-serif font-bold text-base text-meridian-navy">Review Process Timeline</h4>
              
              <div className="space-y-6 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                {STEPS.map((s) => {
                  const isDone = s.step < activeTracking.currentStep;
                  const isCurrent = s.step === activeTracking.currentStep;

                  return (
                    <div key={s.step} className="relative flex items-start gap-4 pl-2">
                      <div className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shrink-0 z-10 ${
                        isDone 
                          ? 'bg-emerald-600 text-white'
                          : isCurrent
                          ? 'bg-meridian-gold text-meridian-navy shadow-gold-glow ring-4 ring-amber-100'
                          : 'bg-slate-100 text-slate-400 border border-slate-300'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                      </div>

                      <div className="space-y-0.5 pt-0.5">
                        <div className={`font-bold text-xs sm:text-sm ${isCurrent ? 'text-meridian-navy' : isDone ? 'text-slate-700' : 'text-slate-400'}`}>
                          {s.title}
                          {isCurrent && <span className="ml-2 bg-meridian-gold/20 text-meridian-gold text-[10px] uppercase font-bold px-2 py-0.5 rounded">Active Step</span>}
                        </div>
                        <p className="text-slate-500 text-xs">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Helpful Note */}
            <div className="bg-meridian-navy text-white p-4 rounded-xl border border-meridian-gold/30 text-xs flex items-center justify-between gap-4">
              <span>Have questions about your admissions file?</span>
              <button
                onClick={() => onNavigate('contact')}
                className="text-meridian-gold hover:underline font-semibold text-xs whitespace-nowrap"
              >
                Contact Admissions Board →
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
