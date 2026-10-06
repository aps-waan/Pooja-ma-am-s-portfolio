import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Clock, 
  Building, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  ArrowRight, 
  Users, 
  Award, 
  BookOpen,
  Send
} from 'lucide-react';
import { experienceData, caseStudies, trainingPrograms, personalInfo } from '../data/portfolioData';

export const ExperiencePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'industry';
  const [activeTab, setActiveTab] = useState<'industry' | 'edtech' | 'all'>(
    initialTab === 'edtech' ? 'edtech' : initialTab === 'all' ? 'all' : 'industry'
  );

  const [timelineCategory, setTimelineCategory] = useState<string>('All');

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'edtech' || tabParam === 'industry' || tabParam === 'all') {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (tab: 'industry' | 'edtech' | 'all') => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // Filtered lists
  const industryExperience = experienceData.filter(item => item.category !== 'Corporate Training');
  const edtechExperience = experienceData.filter(item => item.category === 'Corporate Training');
  
  const timelineFiltered = timelineCategory === 'All'
    ? experienceData
    : experienceData.filter(item => item.category === timelineCategory);

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-24 left-1/3 w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />

      {/* ================= BREADCRUMB & HEADER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <nav className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mb-6">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-orange-600 dark:text-orange-400 font-bold">Experience (Industry & EdTech)</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Corporate Industry Practice & EdTech Pedagogy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Explore my 10+ years across corporate command rooms (Logistics, Luxury Automotive, Retail ERP) and higher education classrooms (CGC, Chitkara University, 1,000+ Alumni).
          </p>
        </div>
      </div>

      {/* ================= MAIN DUAL TRACK TOGGLE ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="p-1.5 bg-slate-200/80 dark:bg-slate-900 rounded-2xl max-w-xl mx-auto flex items-center shadow-inner border border-slate-300/60 dark:border-slate-800">
          <button
            onClick={() => handleTabChange('industry')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'industry'
                ? 'bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Industry & Corporate MIS</span>
          </button>

          <button
            onClick={() => handleTabChange('edtech')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'edtech'
                ? 'bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>EdTech & Corporate Training</span>
          </button>

          <button
            onClick={() => handleTabChange('all')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'all'
                ? 'bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Full Timeline</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: INDUSTRY & CORPORATE MIS ================= */}
      {activeTab === 'industry' && (
        <div key="industry" className="animate-fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Section 1: In-Depth Case Studies */}
          <div>
            <div className="mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Validated Case Studies
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Enterprise Case Studies & Transformations
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
                Real-world operational challenges transformed into automated, zero-error reporting systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-3xl glass-card border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between shadow-lg hover:border-orange-500/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 text-[11px] font-mono font-bold">
                        {study.domain}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {study.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1.5 leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-xs font-bold text-orange-600 dark:text-orange-400 mb-4">
                      {study.organization}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                        Challenge
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                        Solution Delivered
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Impact Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 mb-6">
                      {study.impactMetrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-sm font-mono font-extrabold text-slate-900 dark:text-white">
                            {metric.metric}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1">
                      {study.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Industry Positions Timeline */}
          <div>
            <div className="mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Corporate Positions
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Industry Roles & Organizational Leadership
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
                Hands-on reporting across logistics, automotive, fine jewelry, e-commerce, and business information systems.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {industryExperience.map((item) => (
                <div
                  key={item.id}
                  className="p-7 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-md hover:border-orange-500/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 text-[10px] font-mono font-bold uppercase mb-1 inline-block">
                        {item.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          {item.organization}
                        </span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-1">
                      <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-orange-500" />
                        <span>{item.period}</span>
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: EDTECH & CORPORATE TRAINING ================= */}
      {activeTab === 'edtech' && (
        <div key="edtech" className="animate-fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Institutional Highlights Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 text-center shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 mx-auto flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-mono font-extrabold text-slate-900 dark:text-white">1,000+</h4>
              <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase mt-0.5">Learners Mentored</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                MBA, BBA, B.Com, HR, Supply Chain, and corporate analysts across CGC & Chitkara University.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 text-center shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-mono font-extrabold text-slate-900 dark:text-white">Placement-Ready</h4>
              <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase mt-0.5">Corporate Alignment</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Skill-based assessments, interview mock tests, and real-world corporate datasets.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 text-center shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 mx-auto flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-mono font-extrabold text-slate-900 dark:text-white">Custom Syllabi</h4>
              <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase mt-0.5">Corporate & University</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Customized bootcamps from 3-day intensive workshops to full-semester accelerators.
              </p>
            </div>
          </div>

          {/* Institutional Roles (CGC & Chitkara) */}
          <div>
            <div className="mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Academic & Corporate Pedagogy
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                University Faculty & Institutional Training Roles
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {edtechExperience.map((item) => (
                <div
                  key={item.id}
                  className="p-7 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-md hover:border-orange-500/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 text-[10px] font-mono font-bold uppercase mb-1 inline-block">
                        {item.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          {item.organization}
                        </span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-1">
                      <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-orange-500" />
                        <span>{item.period}</span>
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* In-Depth Training Modules & Bootcamps */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  Standard Training Curricula
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                  Corporate & Higher-Ed Training Programs
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
                  Ready-to-deploy training modules customizable for universities, corporate departments, and executive cohorts.
                </p>
              </div>

              <Link
                to="/contact?service=training"
                className="px-5 py-2.5 rounded-xl theme-btn-gradient text-white text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Request Custom Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {trainingPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="rounded-3xl glass-card border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between shadow-lg hover:border-orange-500/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 text-xs font-mono font-bold">
                        {prog.code}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{prog.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold mb-3">
                      Target Audience: {prog.audience}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {prog.overview}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                        Core Curriculum Modules
                      </h4>
                      <ul className="space-y-2">
                        {prog.curriculum.map((mod, mIdx) => (
                          <li key={mIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                            <span>{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 mb-6">
                      <h4 className="text-[11px] font-mono font-bold text-orange-600 dark:text-orange-400 uppercase mb-1.5">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-1">
                        {prog.keyOutcomes.map((out, oIdx) => (
                          <li key={oIdx} className="text-xs text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                      Level: {prog.level}
                    </span>
                    <Link
                      to={`/contact?service=training&program=${encodeURIComponent(prog.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
                    >
                      <span>Inquire About This Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: FULL CHRONOLOGICAL TIMELINE ================= */}
      {activeTab === 'all' && (
        <div key="all" className="animate-fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['All', 'Corporate Training', 'MIS & Analytics', 'Logistics & Billing', 'Automotive & Retail'].map((cat) => (
              <button
                key={cat}
                onClick={() => setTimelineCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  timelineCategory === cat
                    ? 'theme-btn-gradient text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-orange-500/40'
                }`}
              >
                {cat} {cat === 'All' ? `(${experienceData.length})` : ''}
              </button>
            ))}
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline spine */}
            <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-0.5 bg-slate-300 dark:bg-slate-800" />

            <div className="space-y-8">
              {timelineFiltered.map((item) => (
                <div key={item.id} className="relative pl-12 sm:pl-20 group">
                  {/* Indicator Dot */}
                  <div className="absolute left-2 sm:left-6 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-2 border-orange-500 group-hover:scale-125 transition-all flex items-center justify-center shadow-md">
                    <div className="w-2 h-2 rounded-full theme-primary-bg" />
                  </div>

                  {/* Card */}
                  <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 text-[10px] font-mono font-bold uppercase mb-1 inline-block">
                          {item.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                            {item.organization}
                          </span>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-1">
                        <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-orange-500" />
                          <span>{item.period}</span>
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= BOTTOM ENGAGEMENT CTA ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Interested in Collaborating on a Project or Workshop?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
            I am available for corporate training bootcamps, university analytics workshops, and executive MIS dashboard consulting.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl theme-btn-gradient text-white text-xs sm:text-sm font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Get in Touch with Me</span>
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download="Pooja_Bhatt_Resume.pdf"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              Download My Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
