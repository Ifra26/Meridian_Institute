import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, DollarSign, Calculator, FileText, ArrowRight, ShieldCheck, Sparkles, UserCheck, BookOpen, Layers } from 'lucide-react';
import { PageRoute } from '../types';
import { PageBanner, ScrollReveal, StaggerReveal, StaggerItem } from '../components/PageBanner';

interface AdmissionsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onNavigate }) => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  // Calculator State
  const [level, setLevel] = useState<'undergraduate' | 'postgraduate' | 'certificate'>('undergraduate');
  const [scholarship, setScholarship] = useState<number>(0);
  const [housing, setHousing] = useState<boolean>(false);

  const baseRates = {
    undergraduate: 8500,
    postgraduate: 11200,
    certificate: 4200
  };

  const calculatedFee = React.useMemo(() => {
    const base = baseRates[level];
    const discountAmount = (base * scholarship) / 100;
    const housingFee = housing ? 2400 : 0;
    return base - discountAmount + housingFee;
  }, [level, scholarship, housing]);

  const ADMISSION_STEPS = [
    { step: '01', title: 'Explore Degree Programs', icon: BookOpen, desc: 'Review undergraduate, postgraduate, and diploma offerings, entry benchmarks, and graduate career outcomes.', actionText: 'View All Curricula' },
    { step: '02', title: 'Verify Academic Eligibility', icon: ShieldCheck, desc: 'Ensure high school or undergraduate transcripts, GPA minimums, and language test certificates align with standards.', actionText: 'Check Guidelines' },
    { step: '03', title: 'Submit Digital Application', icon: FileText, desc: 'Fill out our interactive 5-step application wizard with your personal credentials and academic background.', actionText: 'Start Application' },
    { step: '04', title: 'Upload Credentials & SOP', icon: Layers, desc: 'Upload scanned copies of official academic transcripts, national identity/passport, and statement of purpose.', actionText: 'Document Hub' },
    { step: '05', title: 'Faculty Review & Interview', icon: UserCheck, desc: 'Admissions evaluation committee reviews application and conducts virtual interview within 5 business days.', actionText: 'Interview Tips' },
    { step: '06', title: 'Accept Offer & Enrolment', icon: Award, desc: 'Receive official Meridian Acceptance Letter, pay enrolment fee, and receive student registration credentials.', actionText: 'Enroll Now' }
  ];

  const activeStep = ADMISSION_STEPS[activeStepIdx];

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Banner Header */}
        <div className="bg-meridian-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-meridian-gold/30">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-meridian-gold/20 text-meridian-gold border border-meridian-gold/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              ADMISSIONS & TUITION 2026
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold leading-tight">
              Begin Your Journey at <span className="gold-gradient-text">The Meridian Institute</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We welcome high-achieving applicants worldwide. Our admissions process is transparent, holistic, and merit-based.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('apply')}
                className="btn-premium-gold px-6 py-3 text-xs sm:text-sm group"
              >
                <span>Launch Online Application Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('tracking')}
                className="btn-premium-glass px-5 py-3 text-xs sm:text-sm"
              >
                Track Application Reference
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Step-by-step Admission Roadmap (Replaces 6-card grid) */}
        <ScrollReveal variant="fadeUp" className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 bg-meridian-navy/5 border border-meridian-navy/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-meridian-navy">
              <Sparkles className="w-3.5 h-3.5 text-meridian-gold" />
              <span>ROADMAP TO ENROLLMENT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-meridian-navy">
              6-Step Admission Journey
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            
            {/* Step Navigation Bar */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 border-b border-slate-200 pb-6">
              {ADMISSION_STEPS.map((s, idx) => {
                const isActive = idx === activeStepIdx;
                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStepIdx(idx)}
                    className={`p-3 rounded-2xl text-center transition-all duration-300 relative ${
                      isActive
                        ? 'bg-meridian-navy text-white shadow-lg'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeAdmissionStep"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-meridian-gold rounded-full"
                      />
                    )}
                    <div className={`font-serif font-extrabold text-lg font-mono ${isActive ? 'text-meridian-gold' : 'text-slate-400'}`}>
                      {s.step}
                    </div>
                    <div className="text-[11px] font-bold truncate mt-0.5">{s.title.split(' ')[0]}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Display Canvas */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-meridian-navy/10 text-meridian-navy font-bold px-3 py-1 rounded-full text-xs">
                    <span>STEP {activeStep.step} OF 06</span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-meridian-navy">
                    {activeStep.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                    {activeStep.desc}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('apply')}
                      className="btn-premium-gold px-6 py-2.5 text-xs group inline-flex"
                    >
                      <span>{activeStep.actionText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-32 h-32 rounded-3xl bg-meridian-navy text-meridian-gold flex items-center justify-center shadow-2xl border-2 border-meridian-gold/40 animate-float-subtle">
                    <activeStep.icon className="w-14 h-14" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </ScrollReveal>

        {/* Interactive Tuition Fee Calculator & Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Eligibility & Requirements Table */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-meridian-gold" />
              <div>
                <h3 className="font-serif font-bold text-xl text-meridian-navy">Eligibility & Academic Requirements</h3>
                <p className="text-xs text-slate-500">General qualification benchmarks</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-100 text-meridian-navy font-serif uppercase font-bold text-[10px]">
                  <tr>
                    <th className="p-3 rounded-l-lg">Degree Level</th>
                    <th className="p-3">Minimum Academic Standing</th>
                    <th className="p-3 rounded-r-lg">Language Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-bold text-meridian-navy">Undergraduate (B.Sc / B.Des)</td>
                    <td className="p-3">High School Diploma (Min 75% or GPA 3.0)</td>
                    <td className="p-3">IELTS 6.5 / TOEFL 80</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-meridian-navy">Postgraduate / MBA</td>
                    <td className="p-3">Accredited Bachelor’s (GPA 3.2+) + 2 yrs Exp</td>
                    <td className="p-3">IELTS 7.0 / TOEFL 92</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-meridian-navy">Professional Certificate</td>
                    <td className="p-3">Open enrollment / Aptitude review</td>
                    <td className="p-3">Functional English Fluency</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Calculator Box */}
          <div className="lg:col-span-5 bg-meridian-navy text-white p-8 rounded-3xl border border-meridian-gold/30 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-meridian-gold/20 flex items-center justify-center text-meridian-gold">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Tuition Fee Estimator</h3>
                <p className="text-xs text-slate-400">Calculate net estimated tuition per semester</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Academic Program Level</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:border-meridian-gold outline-none"
                >
                  <option value="undergraduate">Undergraduate B.Sc / B.Des ($8,500 Base)</option>
                  <option value="postgraduate">Postgraduate MBA / M.Sc ($11,200 Base)</option>
                  <option value="certificate">Professional Diploma ($4,200 Base)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Merit Scholarship Discount</label>
                <select
                  value={scholarship}
                  onChange={(e) => setScholarship(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:border-meridian-gold outline-none"
                >
                  <option value={0}>Standard Enrollment (0% Discount)</option>
                  <option value={15}>Merit Tier 1 (15% Tuition Discount)</option>
                  <option value={30}>Dean's Honor Award (30% Tuition Discount)</option>
                  <option value={50}>Global Excellence Fellowship (50% Coverage)</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="housing"
                  checked={housing}
                  onChange={(e) => setHousing(e.target.checked)}
                  className="w-4 h-4 accent-meridian-gold rounded cursor-pointer"
                />
                <label htmlFor="housing" className="text-slate-300 cursor-pointer">
                  Include On-Campus Student Residence & Meals (+$2,400 / sem)
                </label>
              </div>

              <div className="pt-4 border-t border-slate-800 bg-slate-950/80 p-4 rounded-xl text-center space-y-1">
                <span className="text-[10px] uppercase font-bold text-meridian-gold tracking-widest">
                  ESTIMATED NET TUITION PER SEMESTER
                </span>
                <div className="font-serif font-extrabold text-3xl text-white gold-gradient-text">
                  ${calculatedFee.toLocaleString()} USD
                </div>
                <p className="text-[11px] text-slate-400">
                  *Payable in 4 flexible monthly installments.
                </p>
              </div>

              <button
                onClick={() => onNavigate('apply')}
                className="btn-premium-gold w-full py-3.5 text-xs font-bold uppercase tracking-wider"
              >
                Proceed to Apply Online →
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

