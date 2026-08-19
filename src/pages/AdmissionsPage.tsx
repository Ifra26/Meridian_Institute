import React, { useState } from 'react';
import { Award, CheckCircle2, DollarSign, Calculator, FileText, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';
import { PageBanner, ScrollReveal, StaggerReveal, StaggerItem } from '../components/PageBanner';

interface AdmissionsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onNavigate }) => {
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
    { step: '01', title: 'Explore Programs', desc: 'Review degree options, entry requirements, and career opportunities.' },
    { step: '02', title: 'Check Eligibility', desc: 'Ensure academic transcripts & language credentials meet standards.' },
    { step: '03', title: 'Submit Online Application', desc: 'Complete our 5-step digital application wizard.' },
    { step: '04', title: 'Upload Official Documents', desc: 'Upload certified transcripts, ID copies, & recommendation letters.' },
    { step: '05', title: 'Committee Review & Interview', desc: 'Admissions committee evaluates application within 5 business days.' },
    { step: '06', title: 'Enrollment & Offer Confirmation', desc: 'Receive official Meridian Acceptance Letter & reference code.' }
  ];

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Banner Header */}
        <div className="bg-meridian-navy rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-meridian-gold/30">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-meridian-gold/20 text-meridian-gold border border-meridian-gold/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
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
                className="bg-meridian-gold hover:bg-meridian-gold-light text-meridian-navy font-bold px-6 py-3 rounded-xl shadow-gold-glow text-xs sm:text-sm flex items-center gap-2"
              >
                <span>Launch Online Application Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('tracking')}
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-xl text-xs sm:text-sm border border-white/20"
              >
                Track Application Reference
              </button>
            </div>
          </div>
        </div>

        {/* Step-by-step Admission Process */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-meridian-gold uppercase tracking-wider">
              ROADMAP TO ENROLLMENT
            </span>
            <h2 className="font-serif text-3xl font-bold text-meridian-navy">
              6-Step Admission Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADMISSION_STEPS.map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-meridian-gold transition-colors">
                <span className="font-serif font-extrabold text-3xl text-meridian-gold/40 group-hover:text-meridian-gold transition-colors">
                  {s.step}
                </span>
                <h4 className="font-serif font-bold text-base text-meridian-navy mt-2">{s.title}</h4>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

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
                  className="w-4 h-4 accent-meridian-gold rounded"
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
                className="w-full bg-gradient-to-r from-meridian-gold to-amber-500 text-meridian-navy font-bold py-3 rounded-xl shadow-gold-glow text-center text-xs uppercase tracking-wider hover:brightness-110"
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
