import React, { useState } from 'react';
import { LayoutDashboard, FileText, Newspaper, Users, DollarSign, Bell, Settings, Plus, CheckCircle, Search, ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';

interface AdminDashboardPageProps {
  onNavigate: (route: PageRoute) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onNavigate, onShowToast }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'notices' | 'settings'>('overview');
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeCategory, setNoticeCategory] = useState('Examination');

  const RECENT_APPLICATIONS = [
    { id: 'MER-2026-8492', applicant: 'Julian Vance', program: 'B.Sc. Computer Science & AI', status: 'Under Review', date: 'Today, 14:20' },
    { id: 'MER-2026-8491', applicant: 'Sophia Martinez', program: 'MBA in Global Leadership', status: 'Approved', date: 'Yesterday' },
    { id: 'MER-2026-8490', applicant: 'Liam O’Connor', program: 'B.Des. UX & Product Design', status: 'Pending Review', date: 'Aug 14, 2026' }
  ];

  const handlePublishNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeTitle) return;
    onShowToast('Notice Published!', `New notice "${noticeTitle}" created in CMS.`, 'success');
    setNoticeTitle('');
  };

  return (
    <div className="py-8 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-meridian-gold text-meridian-navy font-bold flex items-center justify-center shadow-gold-glow">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif font-bold text-xl text-white">Meridian CMS Control Center</h1>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                  Admin Demo
                </span>
              </div>
              <p className="text-xs text-slate-400">Institutional Content & Application Management System</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => onNavigate('home')}
              className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl border border-slate-800 transition-colors"
            >
              Exit to Public Website
            </button>
          </div>
        </div>

        {/* Dashboard Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl font-medium text-xs flex items-center gap-2.5 transition-colors ${
                activeTab === 'overview'
                  ? 'bg-meridian-gold text-meridian-navy font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview Metrics</span>
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl font-medium text-xs flex items-center gap-2.5 transition-colors ${
                activeTab === 'applications'
                  ? 'bg-meridian-gold text-meridian-navy font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Student Applications (1,482)</span>
            </button>

            <button
              onClick={() => setActiveTab('notices')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl font-medium text-xs flex items-center gap-2.5 transition-colors ${
                activeTab === 'notices'
                  ? 'bg-meridian-gold text-meridian-navy font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span>Notice Publisher</span>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* Overview Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-500">Total Applications</span>
                <div className="font-serif font-bold text-2xl text-meridian-gold-light">1,482</div>
                <span className="text-[10px] text-emerald-400">+12% this week</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-500">Active Programs</span>
                <div className="font-serif font-bold text-2xl text-white">65</div>
                <span className="text-[10px] text-slate-400">Undergrad & Postgrad</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-500">Faculty Members</span>
                <div className="font-serif font-bold text-2xl text-white">450</div>
                <span className="text-[10px] text-slate-400">92% Ph.D. scholars</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-500">Published News</span>
                <div className="font-serif font-bold text-2xl text-white">34</div>
                <span className="text-[10px] text-slate-400">Press releases</span>
              </div>
            </div>

            {/* Applications Management Table */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-white">Recent Admission Submissions</h3>
                <span className="text-xs text-slate-400">Live Mock Feed</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 uppercase font-bold text-[10px]">
                    <tr>
                      <th className="p-3 rounded-l-lg">Reference ID</th>
                      <th className="p-3">Applicant Name</th>
                      <th className="p-3">Selected Program</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 rounded-r-lg">Date Logged</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {RECENT_APPLICATIONS.map((app) => (
                      <tr key={app.id}>
                        <td className="p-3 font-mono font-bold text-meridian-gold">{app.id}</td>
                        <td className="p-3 text-white font-medium">{app.applicant}</td>
                        <td className="p-3">{app.program}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            app.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="p-3 text-slate-500">{app.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Notice Publisher Form */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="font-serif font-bold text-base text-white">Publish New Official Circular / Notice</h3>
              
              <form onSubmit={handlePublishNotice} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-400 mb-1">Notice Title</label>
                    <input
                      type="text"
                      required
                      value={noticeTitle}
                      onChange={(e) => setNoticeTitle(e.target.value)}
                      placeholder="e.g. Spring 2027 Registration Schedule..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-meridian-gold outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-400 mb-1">Notice Category</label>
                    <select
                      value={noticeCategory}
                      onChange={(e) => setNoticeCategory(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-meridian-gold outline-none"
                    >
                      <option>Examination</option>
                      <option>Admissions</option>
                      <option>Finance</option>
                      <option>General</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-meridian-gold hover:bg-meridian-gold-light text-meridian-navy font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Notice to Public Portal</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
