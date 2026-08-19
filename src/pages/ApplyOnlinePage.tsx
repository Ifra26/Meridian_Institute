import React, { useState } from 'react';
import { CheckCircle2, FileText, Upload, User, GraduationCap, Award, ArrowRight, ArrowLeft, Copy, Sparkles, AlertCircle } from 'lucide-react';
import { PageRoute } from '../types';
import { PROGRAMS_DATA } from '../data/programs';

interface ApplyOnlinePageProps {
  onNavigate: (route: PageRoute) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const ApplyOnlinePage: React.FC<ApplyOnlinePageProps> = ({ onNavigate, onShowToast }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedRefId, setGeneratedRefId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    nationality: 'United States',

    // Step 2: Academic History
    previousSchool: '',
    qualificationLevel: 'High School Diploma',
    gpa: '',
    graduationYear: '2025',

    // Step 3: Program
    selectedProgramId: PROGRAMS_DATA[0].id,
    studyMode: 'On-Campus',

    // Step 4: Uploads
    passportUploaded: false,
    transcriptUploaded: false,
    passportFileName: '',
    transcriptFileName: '',

    // Step 5: Terms
    agreedTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUpload = (type: 'passport' | 'transcript', fileName: string) => {
    if (type === 'passport') {
      setFormData(prev => ({ ...prev, passportUploaded: true, passportFileName: fileName }));
      onShowToast('Document Uploaded', `${fileName} attached successfully.`, 'success');
    } else {
      setFormData(prev => ({ ...prev, transcriptUploaded: true, transcriptFileName: fileName }));
      onShowToast('Document Uploaded', `${fileName} attached successfully.`, 'success');
    }
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        onShowToast('Required Fields Missing', 'Please fill in your name and email address.', 'info');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.previousSchool || !formData.gpa) {
        onShowToast('Required Fields Missing', 'Please specify your previous institution and GPA/Grade.', 'info');
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedTerms) {
      onShowToast('Terms Agreement Required', 'Please check the box agreeing to Meridian application guidelines.', 'info');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refCode = `MER-2026-${randomNum}`;
    setGeneratedRefId(refCode);
    setIsSubmitted(true);
    onShowToast('Application Submitted!', `Your reference code is ${refCode}. Store this safely.`, 'success');
  };

  const copyRefId = () => {
    navigator.clipboard.writeText(generatedRefId);
    onShowToast('Copied to Clipboard!', 'Application Reference ID copied.', 'info');
  };

  const selectedProgramObj = PROGRAMS_DATA.find(p => p.id === formData.selectedProgramId);

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="bg-meridian-navy/10 text-meridian-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            DIGITAL ADMISSIONS PORTAL
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-meridian-navy">
            Online Application Wizard (2026 Cycle)
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm">
            Complete all 5 sections to register your application for review by the Meridian Admissions Board.
          </p>
        </div>

        {/* Wizard Steps Progress Header */}
        {!isSubmitted && (
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between relative">
              {[1, 2, 3, 4, 5].map((stepNum) => (
                <div key={stepNum} className="flex flex-col items-center relative z-10">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center transition-all ${
                    currentStep === stepNum
                      ? 'bg-meridian-gold text-meridian-navy shadow-gold-glow scale-110'
                      : currentStep > stepNum
                      ? 'bg-meridian-navy text-white'
                      : 'bg-slate-100 text-slate-400 border border-slate-300'
                  }`}>
                    {currentStep > stepNum ? <CheckCircle2 className="w-5 h-5" /> : stepNum}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 mt-1 hidden sm:inline">
                    {stepNum === 1 && 'Personal'}
                    {stepNum === 2 && 'Academic'}
                    {stepNum === 3 && 'Program'}
                    {stepNum === 4 && 'Documents'}
                    {stepNum === 5 && 'Review'}
                  </span>
                </div>
              ))}
              <div className="absolute top-4 sm:top-5 left-4 right-4 h-0.5 bg-slate-200 -z-0" />
            </div>
          </div>
        )}

        {/* Form Body Container */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <User className="w-5 h-5 text-meridian-gold" />
                    <h3 className="font-serif font-bold text-lg text-meridian-navy">Step 1: Personal Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="e.g. Julian"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Vance"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Primary Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="julian.vance@example.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Nationality / Citizenship</label>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Academic History */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <GraduationCap className="w-5 h-5 text-meridian-gold" />
                    <h3 className="font-serif font-bold text-lg text-meridian-navy">Step 2: Academic Background</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="sm:col-span-2">
                      <label className="block font-semibold text-slate-700 mb-1">Previous School / University Name *</label>
                      <input
                        type="text"
                        name="previousSchool"
                        required
                        value={formData.previousSchool}
                        onChange={handleChange}
                        placeholder="e.g. St. Jude Academy / Boston Collegiate"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Highest Qualification Attained</label>
                      <select
                        name="qualificationLevel"
                        value={formData.qualificationLevel}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                      >
                        <option>High School Diploma / A-Levels</option>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree / Postgrad Diploma</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">GPA / Average Marks (%) *</label>
                      <input
                        type="text"
                        name="gpa"
                        required
                        value={formData.gpa}
                        onChange={handleChange}
                        placeholder="e.g. 3.8 / 4.0 or 88%"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 focus:border-meridian-gold outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Program Selection */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Award className="w-5 h-5 text-meridian-gold" />
                    <h3 className="font-serif font-bold text-lg text-meridian-navy">Step 3: Program Selection</h3>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Select Target Program of Study *</label>
                      <select
                        name="selectedProgramId"
                        value={formData.selectedProgramId}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-800 font-semibold focus:border-meridian-gold outline-none"
                      >
                        {PROGRAMS_DATA.map(p => (
                          <option key={p.id} value={p.id}>
                            {p.title} ({p.level} • {p.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedProgramObj && (
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                        <div className="font-bold text-meridian-navy">{selectedProgramObj.title}</div>
                        <p className="text-slate-600 text-xs">{selectedProgramObj.shortDescription}</p>
                        <div className="text-xs font-semibold text-meridian-gold">Tuition: {selectedProgramObj.tuitionFee}</div>
                      </div>
                    )}

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Preferred Study Format</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer font-medium">
                          <input
                            type="radio"
                            name="studyMode"
                            value="On-Campus"
                            checked={formData.studyMode === 'On-Campus'}
                            onChange={handleChange}
                            className="accent-meridian-gold"
                          />
                          <span>Full-Time On-Campus</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer font-medium">
                          <input
                            type="radio"
                            name="studyMode"
                            value="Hybrid"
                            checked={formData.studyMode === 'Hybrid'}
                            onChange={handleChange}
                            className="accent-meridian-gold"
                          />
                          <span>Hybrid / Distance Learning</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Document Uploads */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Upload className="w-5 h-5 text-meridian-gold" />
                    <h3 className="font-serif font-bold text-lg text-meridian-navy">Step 4: Certified Document Uploads</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    {/* Passport / ID Upload */}
                    <div className="border-2 border-dashed border-slate-300 p-6 rounded-2xl text-center space-y-3 bg-slate-50/50 hover:border-meridian-gold transition-colors">
                      <FileText className="w-8 h-8 text-slate-400 mx-auto" />
                      <div className="font-semibold text-slate-700">Passport / Government ID Photo</div>
                      <p className="text-[11px] text-slate-500">PDF, PNG, JPG (Max 5MB)</p>
                      
                      {formData.passportUploaded ? (
                        <div className="bg-emerald-50 text-emerald-800 font-semibold p-2 rounded-lg text-xs flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>{formData.passportFileName}</span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleFileUpload('passport', 'ID_Passport_Copy.pdf')}
                          className="bg-meridian-navy text-white text-xs font-semibold px-4 py-2 rounded-xl"
                        >
                          Attach Sample File
                        </button>
                      )}
                    </div>

                    {/* Transcripts Upload */}
                    <div className="border-2 border-dashed border-slate-300 p-6 rounded-2xl text-center space-y-3 bg-slate-50/50 hover:border-meridian-gold transition-colors">
                      <FileText className="w-8 h-8 text-slate-400 mx-auto" />
                      <div className="font-semibold text-slate-700">Official Transcripts</div>
                      <p className="text-[11px] text-slate-500">Certified Marksheets (PDF)</p>

                      {formData.transcriptUploaded ? (
                        <div className="bg-emerald-50 text-emerald-800 font-semibold p-2 rounded-lg text-xs flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>{formData.transcriptFileName}</span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleFileUpload('transcript', 'Official_Transcripts_2025.pdf')}
                          className="bg-meridian-navy text-white text-xs font-semibold px-4 py-2 rounded-xl"
                        >
                          Attach Sample File
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Final Review & Terms */}
              {currentStep === 5 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <CheckCircle2 className="w-5 h-5 text-meridian-gold" />
                    <h3 className="font-serif font-bold text-lg text-meridian-navy">Step 5: Review & Submission</h3>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-700">
                    <div className="grid grid-cols-2 gap-2">
                      <div><strong className="text-meridian-navy">Applicant Name:</strong> {formData.firstName} {formData.lastName}</div>
                      <div><strong className="text-meridian-navy">Email:</strong> {formData.email}</div>
                      <div><strong className="text-meridian-navy">Previous Institution:</strong> {formData.previousSchool}</div>
                      <div><strong className="text-meridian-navy">GPA Benchmark:</strong> {formData.gpa}</div>
                      <div className="col-span-2"><strong className="text-meridian-navy">Selected Program:</strong> {selectedProgramObj?.title}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs pt-2">
                    <input
                      type="checkbox"
                      id="agreedTerms"
                      name="agreedTerms"
                      checked={formData.agreedTerms}
                      onChange={handleChange}
                      className="w-4 h-4 accent-meridian-gold rounded mt-0.5"
                    />
                    <label htmlFor="agreedTerms" className="text-slate-600 cursor-pointer">
                      I declare that all submitted personal details and transcript information are authentic and accurate. I agree to comply with The Meridian Institute Honor Code.
                    </label>
                  </div>
                </div>
              )}

              {/* Wizard Navigation Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : <div />}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-meridian-navy hover:bg-meridian-navy-800 text-white font-bold px-6 py-2.5 rounded-xl shadow-md text-xs flex items-center gap-2"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4 text-meridian-gold" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-meridian-gold via-amber-400 to-meridian-gold text-meridian-navy font-extrabold px-8 py-3 rounded-xl shadow-gold-glow text-xs sm:text-sm flex items-center gap-2 hover:brightness-110"
                  >
                    <span>Submit Formal Application</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          ) : (
            /* Submission Confirmation Screen */
            <div className="text-center space-y-6 py-8 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-meridian-gold">
                  APPLICATION RECEIVED
                </span>
                <h2 className="font-serif text-3xl font-extrabold text-meridian-navy">
                  Application Submitted Successfully!
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.firstName}</strong>. Your application has been logged into the Meridian Admissions system.
                </p>
              </div>

              {/* Reference ID Box */}
              <div className="bg-meridian-navy text-white p-6 rounded-2xl max-w-md mx-auto border border-meridian-gold/30 space-y-2 shadow-xl">
                <span className="text-[10px] uppercase font-bold text-meridian-gold tracking-widest">
                  YOUR APPLICATION REFERENCE NUMBER
                </span>
                <div className="font-mono text-2xl font-bold gold-gradient-text flex items-center justify-center gap-3">
                  <span>{generatedRefId}</span>
                  <button onClick={copyRefId} className="text-slate-400 hover:text-white p-1" title="Copy Code">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  Save this reference code to track committee review status.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate('tracking')}
                  className="bg-meridian-gold hover:bg-meridian-gold-light text-meridian-navy font-bold px-6 py-2.5 rounded-xl shadow-gold-glow text-xs"
                >
                  Track Application Status Now
                </button>
                <button
                  onClick={() => onNavigate('home')}
                  className="bg-slate-100 text-slate-700 font-semibold px-6 py-2.5 rounded-xl text-xs"
                >
                  Return to Home
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
