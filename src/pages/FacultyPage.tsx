import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Clock, FileText, Sparkles, BookOpen, Award, CheckCircle2, ChevronRight, User } from 'lucide-react';
import { FacultyMember, FACULTY_DATA } from '../data/faculty';
import { PageBanner, ScrollReveal } from '../components/PageBanner';

const DEPARTMENT_FILTERS: string[] = [
  'All',
  'Computer Science',
  'Business & Management',
  'Design & Media',
  'Biomedical Sciences',
  'Humanities & Languages',
];

export const FacultyPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [selectedFacultyId, setSelectedFacultyId] = useState<string>(FACULTY_DATA[0].id);

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

  // Sync selected faculty when filter changes
  useEffect(() => {
    if (filteredFaculty.length > 0) {
      const exists = filteredFaculty.some((f) => f.id === selectedFacultyId);
      if (!exists) {
        setSelectedFacultyId(filteredFaculty[0].id);
      }
    }
  }, [filteredFaculty, selectedFacultyId]);

  const activeFaculty = useMemo(() => {
    return filteredFaculty.find((f) => f.id === selectedFacultyId) || filteredFaculty[0] || FACULTY_DATA[0];
  }, [filteredFaculty, selectedFacultyId]);

  return (
    <div className="py-12 bg-meridian-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Editorial Page Banner */}
        <PageBanner
          badge="DISTINGUISHED SCHOLARS & RESEARCHERS"
          title={<>Faculty Showcase & <span className="gold-gradient-text">Academic Directorate</span></>}
          description="Our world-class faculty in Karachi combine doctoral rigor from MIT, Oxford, Stanford, and Harvard with executive industry leadership."
        />

        {/* Search & Department Filter Toolbar */}
        <ScrollReveal variant="fadeUp">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* Search input */}
              <div className="lg:col-span-6 relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search faculty by name, title, or research topic..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-800 focus:border-meridian-gold focus:ring-2 focus:ring-meridian-gold/20 outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Department Pills */}
              <div className="lg:col-span-6 flex flex-wrap items-center gap-2">
                {DEPARTMENT_FILTERS.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                      selectedDept === dept
                        ? 'bg-meridian-navy text-meridian-gold shadow-md scale-105 border border-meridian-gold/40'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {dept === 'All' ? 'All Departments' : dept}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Master Faculty Showcase Section */}
        {filteredFaculty.length > 0 ? (
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left & Center: Active Profile Stage (8 Columns) */}
              <div className="lg:col-span-8 bg-meridian-navy rounded-3xl p-6 sm:p-10 text-white border border-meridian-gold/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-meridian-gold/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-meridian-navy-800/50 rounded-full blur-2xl pointer-events-none" />

                <AnimatePresence mode="wait">
                  {activeFaculty && (
                    <motion.div
                      key={activeFaculty.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10"
                    >
                      {/* Left Details Column */}
                      <div className="md:col-span-7 space-y-5">
                        <div className="inline-flex items-center gap-2 bg-meridian-gold/15 border border-meridian-gold/40 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-meridian-gold">
                          <Award className="w-3.5 h-3.5 text-meridian-gold" />
                          <span>{activeFaculty.department}</span>
                        </div>

                        <div>
                          <h2 className="font-serif font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                            {activeFaculty.name}
                          </h2>
                          <p className="text-sm font-semibold text-meridian-gold mt-1">
                            {activeFaculty.title}
                          </p>
                          <p className="text-xs text-slate-300 mt-1 font-medium flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-meridian-gold shrink-0" />
                            <span>{activeFaculty.qualification}</span>
                          </p>
                        </div>

                        <div className="w-16 h-1 bg-gradient-to-r from-meridian-gold to-transparent rounded-full" />

                        <div className="space-y-2">
                          <h4 className="text-xs uppercase font-bold text-meridian-gold tracking-widest">
                            RESEARCH & ACADEMIC BIOGRAPHY
                          </h4>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                            {activeFaculty.bio}
                          </p>
                        </div>

                        {/* Publications & Courses */}
                        <div className="space-y-3 pt-2">
                          <div>
                            <h4 className="text-[11px] uppercase font-bold text-slate-300 tracking-wider mb-2 flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-meridian-gold" />
                              <span>Select Key Publications</span>
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-300">
                              {activeFaculty.publications.map((pub, idx) => (
                                <li key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                                  <span className="text-meridian-gold font-bold shrink-0">•</span>
                                  <span className="leading-snug">{pub}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-[11px] uppercase font-bold text-slate-300 tracking-wider mb-2 flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-meridian-gold" />
                              <span>Courses Taught</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {activeFaculty.coursesTaught.map((course, idx) => (
                                <span
                                  key={idx}
                                  className="bg-meridian-gold/10 border border-meridian-gold/30 text-meridian-gold-light px-3 py-1 rounded-lg text-xs font-medium"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Contact Meta */}
                        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
                          <span className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-meridian-gold" />
                            <span className="font-mono text-slate-200">{activeFaculty.email}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-meridian-gold" />
                            <span>{activeFaculty.officeHours}</span>
                          </span>
                        </div>
                      </div>

                      {/* Right Portrait & Visual Spotlight */}
                      <div className="md:col-span-5 relative flex flex-col items-center">
                        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-meridian-gold/60 shadow-gold-glow bg-slate-900 img-premium-hover">
                          <img
                            src={activeFaculty.image}
                            alt={activeFaculty.name}
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy via-transparent to-transparent opacity-80" />

                          {/* Floating Department Badge */}
                          <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-meridian-gold/30 flex items-center justify-between text-white">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-meridian-gold shrink-0" />
                              <span className="text-xs font-bold tracking-wide uppercase text-meridian-gold-light">
                                Meridian Faculty
                              </span>
                            </div>
                            <span className="text-[10px] bg-meridian-gold text-meridian-navy font-bold px-2 py-0.5 rounded">
                              Active
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 text-center">
                          <span className="text-xs text-slate-400 font-mono">
                            FACULTY CODE: {activeFaculty.id.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side: Interactive Faculty Index Selector (4 Columns) */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-meridian-gold" />
                    <h3 className="font-serif font-bold text-lg text-meridian-navy">Faculty Index</h3>
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full font-mono">
                    {filteredFaculty.length} Scholars
                  </span>
                </div>

                <p className="text-xs text-slate-500">
                  Select a faculty member below to load their interactive profile showcase:
                </p>

                <div className="space-y-3 max-h-[620px] overflow-y-auto pr-1">
                  {filteredFaculty.map((faculty, index) => {
                    const isSelected = faculty.id === activeFaculty?.id;
                    const numString = (index + 1).toString().padStart(2, '0');

                    return (
                      <div
                        key={faculty.id}
                        onClick={() => setSelectedFacultyId(faculty.id)}
                        className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3.5 group relative ${
                          isSelected
                            ? 'bg-meridian-navy text-white border-meridian-gold shadow-lg scale-[1.02]'
                            : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200'
                        }`}
                      >
                        {/* Gold accent line indicator for active */}
                        {isSelected && (
                          <motion.div
                            layoutId="activeFacultyBar"
                            className="absolute left-0 top-3 bottom-3 w-1.5 bg-meridian-gold rounded-r-full"
                          />
                        )}

                        <span
                          className={`font-serif font-extrabold text-sm font-mono shrink-0 ${
                            isSelected ? 'text-meridian-gold' : 'text-slate-400 group-hover:text-meridian-navy'
                          }`}
                        >
                          {numString}
                        </span>

                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-300 shadow-sm">
                          <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                            }}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4
                            className={`font-serif font-bold text-sm truncate ${
                              isSelected ? 'text-white' : 'text-meridian-navy group-hover:text-meridian-gold'
                            }`}
                          >
                            {faculty.name}
                          </h4>
                          <p
                            className={`text-[11px] truncate ${
                              isSelected ? 'text-meridian-gold-light' : 'text-slate-500'
                            }`}
                          >
                            {faculty.title}
                          </p>
                          <span
                            className={`inline-block text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded mt-1 ${
                              isSelected ? 'bg-meridian-gold/20 text-meridian-gold' : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {faculty.department}
                          </span>
                        </div>

                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                            isSelected
                              ? 'text-meridian-gold translate-x-0.5'
                              : 'text-slate-400 group-hover:translate-x-1 group-hover:text-meridian-navy'
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal variant="fadeUp">
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
              <User className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-meridian-navy">No Faculty Found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                No faculty members match your current search query or department filter. Try resetting your search parameters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDept('All');
                }}
                className="btn-premium-navy px-6 py-2.5 text-xs inline-flex items-center gap-2"
              >
                Reset Search Filters
              </button>
            </div>
          </ScrollReveal>
        )}

      </div>
    </div>
  );
};

