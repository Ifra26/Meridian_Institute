import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [programChoice, setProgramChoice] = useState('Undergraduate Degrees');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      onShowToast('Required Fields Missing', 'Please fill in your name and email to download.', 'info');
      return;
    }

    onShowToast('Prospectus Download Started!', `The 2026 Academic Prospectus for ${programChoice} has been downloaded.`, 'success');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-meridian-navy-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-meridian-gold/30 rounded-2xl max-w-md w-full shadow-2xl overflow-hidden text-slate-100 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-meridian-gold/10 border border-meridian-gold/30 flex items-center justify-center text-meridian-gold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg text-white">2026 Academic Prospectus</h3>
            <p className="text-xs text-slate-400">Official Course & Campus Guide (PDF)</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
          Download our comprehensive 48-page institutional prospectus covering degree curricula, faculty profiles, lab facilities, and merit scholarships.
        </p>

        <form onSubmit={handleDownload} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alexandra Vance"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:border-meridian-gold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alexandra@example.com"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:border-meridian-gold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Interested Level</label>
            <select
              value={programChoice}
              onChange={(e) => setProgramChoice(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:border-meridian-gold outline-none"
            >
              <option>Undergraduate Degrees</option>
              <option>Postgraduate & MBA Programs</option>
              <option>Professional Diplomas & Certificates</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-meridian-gold to-amber-500 text-meridian-navy font-bold py-2.5 rounded-xl shadow-gold-glow text-xs flex items-center justify-center gap-2 mt-2 hover:brightness-110"
          >
            <Download className="w-4 h-4" />
            <span>Download Instant PDF (14.2 MB)</span>
          </button>
        </form>
      </div>
    </div>
  );
};
