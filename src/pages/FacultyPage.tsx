import React, { useState, useMemo } from 'react';
import { Search, Mail, Clock, FileText, X } from 'lucide-react';
import { FacultyMember, FACULTY_DATA } from '../data/faculty';
import { PageBanner, ScrollReveal, StaggerReveal, StaggerItem } from '../components/PageBanner';

export const FacultyPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [activeFacultyModal, setActiveFacultyModal] = useState<FacultyMember | null>(null);

  const filteredFaculty = useMemo(() => {
    return FACULTY_DATA.filter((faculty) => {
      const matchesSearch =
        faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.bio.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDept = selectedDept === 'All' || faculty.department === selectedDept;

      return matchesSearch && matchesDept;
    });
  }, [searchQuery, selectedDept]);

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <PageBanner
          badge="DISTINGUISHED SCHOLARS & RESEARCHERS"
          title={<>Faculty & <span className="gold-gradient-text">Academic Directorate</span></>}
          description="Our world-class faculty in Karachi combine academic rigor from top global research universities with deep industry leadership."
        />

        <ScrollReveal variant="fadeUp">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty by name, title, or research topic..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-meridian-gold outline-none"
              />
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-meridian-gold outline-none font-medium"
              >
                <option value="All">All Academic Departments</option>
                <option value="Computer Science">Computer Science & AI</option>
                <option value="Business & Management">Business & Management</option>
                <option value="Design & Media">Design & Media</option>
                <option value="Biomedical Sciences">Biomedical Sciences</option>
                <option value="Humanities & Languages">Humanities & Languages</option>
              </select>
            </div>

          </div>
        </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
          {filteredFaculty.map((faculty) => (
            <StaggerItem key={faculty.id}>
            <div
              onClick={() => setActiveFacultyModal(faculty)}
              className="card-premium bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-meridian-gold/50 cursor-pointer group flex flex-col justify-between h-full"
            >
              <div>
                {/* Faculty Photo Container with object-top framing */}
                <div className="relative h-72 bg-slate-900 overflow-hidden img-premium-hover">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                   className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy via-meridian-navy/20 to-transparent" />
                  
                  <span className="absolute bottom-3 left-4 bg-meridian-gold text-meridian-navy font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                    {faculty.department}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-bold text-xl text-meridian-navy group-hover:text-meridian-gold transition-colors">
                    {faculty.name}
                  </h3>
                  <p className="text-xs font-bold text-meridian-gold-dark uppercase tracking-wider">{faculty.title}</p>
                  <p className="text-xs text-slate-500 font-medium">{faculty.qualification}</p>
                  <p className="text-xs text-slate-600 line-clamp-3 mt-3 leading-relaxed">{faculty.bio}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Mail className="w-3.5 h-3.5 text-meridian-gold" />
                  <span className="truncate max-w-[160px] font-mono text-[11px]">{faculty.email}</span>
                </span>
                <span className="font-semibold text-meridian-navy group-hover:text-meridian-gold transition-colors">
                  View Full Bio →
                </span>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Faculty Detail Modal */}
        {activeFacultyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-meridian-navy-950/80 backdrop-blur-md overflow-y-auto">
            <div className="bg-slate-900 border border-meridian-gold/30 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden text-slate-100 p-6 sm:p-8 relative my-8">
              <button
                onClick={() => setActiveFacultyModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full bg-white/5 border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={activeFacultyModal.image}
                  alt={activeFacultyModal.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover object-top border-2 border-meridian-gold shrink-0 shadow-xl bg-slate-800"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="space-y-1.5 flex-1">
                  <span className="bg-meridian-gold/20 text-meridian-gold border border-meridian-gold/30 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                    {activeFacultyModal.department}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-white">{activeFacultyModal.name}</h3>
                  <p className="text-xs font-semibold text-meridian-gold-light">{activeFacultyModal.title}</p>
                  <p className="text-xs text-slate-400">{activeFacultyModal.qualification}</p>
                  
                  <div className="pt-3 text-xs text-slate-300 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-meridian-gold" />
                      <span className="font-mono text-xs">{activeFacultyModal.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-meridian-gold" />
                      <span>{activeFacultyModal.officeHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-4 text-xs">
                <div>
                  <h4 className="font-bold text-white uppercase text-[10px] tracking-widest text-meridian-gold mb-1.5">BIOGRAPHY & RESEARCH FOCUS</h4>
                  <p className="text-slate-300 leading-relaxed">{activeFacultyModal.bio}</p>
                </div>

                <div>
                  <h4 className="font-bold text-white uppercase text-[10px] tracking-widest text-meridian-gold mb-1.5">SELECT PUBLICATIONS</h4>
                  <ul className="space-y-1 text-slate-400">
                    {activeFacultyModal.publications.map((pub, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-meridian-gold shrink-0 mt-0.5" />
                        <span>{pub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white uppercase text-[10px] tracking-widest text-meridian-gold mb-1.5">COURSES TAUGHT</h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeFacultyModal.coursesTaught.map((c, idx) => (
                      <span key={idx} className="bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-lg">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
