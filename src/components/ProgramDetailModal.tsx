import React, { useState } from 'react';
import { X, Clock, Award, BookOpen, CheckCircle, Sparkles, DollarSign, Briefcase } from 'lucide-react';
import { Program } from '../data/programs';
import { PageRoute } from '../types';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ program, onClose, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'eligibility' | 'careers'>('overview');

  if (!program) return null;

  const handleApply = () => {
    onClose();
    onNavigate('apply');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-meridian-navy-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-meridian-gold/30 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden text-slate-100 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="relative h-48 sm:h-56 bg-slate-800 overflow-hidden">
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white p-2 rounded-full border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-meridian-gold text-meridian-navy font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider">
              {program.level} • {program.format}
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white mt-2 drop-shadow-md">
              {program.title}
            </h2>
            <p className="text-xs text-slate-300 mt-1">Code: {program.code} • {program.credits} Credits</p>
          </div>
        </div>

        {/* Modal Tabs Header */}
        <div className="flex border-b border-slate-800 bg-slate-950 px-6 text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-meridian-gold text-meridian-gold font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeTab === 'curriculum'
                ? 'border-meridian-gold text-meridian-gold font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Curriculum Preview
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeTab === 'eligibility'
                ? 'border-meridian-gold text-meridian-gold font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Eligibility & Tuition
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeTab === 'careers'
                ? 'border-meridian-gold text-meridian-gold font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Careers
          </button>
        </div>

        {/* Modal Tab Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6 text-sm">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-base">
                {program.fullDescription}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-meridian-gold" />
                    <span>Duration</span>
                  </div>
                  <div className="font-semibold text-white mt-1">{program.duration}</div>
                </div>

                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-meridian-gold" />
                    <span>Credits</span>
                  </div>
                  <div className="font-semibold text-white mt-1">{program.credits} Credit Hours</div>
                </div>

                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 col-span-2 sm:col-span-1">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-meridian-gold" />
                    <span>Tuition Fee</span>
                  </div>
                  <div className="font-semibold text-meridian-gold-light mt-1">{program.tuitionFee}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-base">Semester Roadmap Preview</h4>
              <div className="space-y-3">
                {program.curriculum.map((sem, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80">
                    <h5 className="font-bold text-meridian-gold text-xs uppercase tracking-wider mb-2">
                      {sem.semester}
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {sem.modules.map((mod, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-2">
                          <BookOpen className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white text-base mb-2">Admission Requirements</h4>
                <ul className="space-y-2">
                  {program.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                      <CheckCircle className="w-4 h-4 text-meridian-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-meridian-navy/90 p-4 rounded-xl border border-meridian-gold/30">
                <div className="text-xs text-meridian-gold uppercase font-bold tracking-wider mb-1">
                  Tuition Fee Structure
                </div>
                <div className="text-xl font-bold text-white">{program.tuitionFee}</div>
                <p className="text-xs text-slate-400 mt-1">
                  *Merit-based scholarships and flexible 4-part installment plans available upon application.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'careers' && (
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-base">Career Trajectories & Outcomes</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.careerOpportunities.map((opp, idx) => (
                  <div key={idx} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-meridian-gold/10 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-meridian-gold" />
                    </div>
                    <span className="font-medium text-slate-200 text-xs sm:text-sm">{opp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Close Preview
          </button>

          <button
            onClick={handleApply}
            className="bg-gradient-to-r from-meridian-gold via-amber-400 to-meridian-gold text-meridian-navy font-bold px-6 py-2.5 rounded-xl shadow-gold-glow text-xs sm:text-sm flex items-center gap-2 hover:brightness-110 transition-all"
          >
            <span>Apply for Program</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
