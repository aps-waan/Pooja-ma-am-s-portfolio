import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  BarChart3, 
  ReceiptText, 
  Server, 
  GraduationCap, 
  CheckCircle2, 
  Cpu, 
  Award, 
  Languages, 
  Download, 
  ArrowRight,
  Sparkles,
  Compass,
  Check,
  ChevronRight
} from 'lucide-react';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { personalInfo, skillCategories, educationData, languages } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  ReceiptText: <ReceiptText className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
};

export const AboutPage: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('all');

  const filteredCategories = activeSkillCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.title.toLowerCase().includes(activeSkillCategory.toLowerCase()));

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Header Glow */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ================= BREADCRUMB & HERO ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <nav className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mb-6">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-orange-600 dark:text-orange-400 font-bold">About Pooja Bhatt</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/15 border border-orange-300 dark:border-orange-500/25 mb-4">
            <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
              Professional Biography & Philosophy
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Bridging Analytical Precision with Corporate Pedagogy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A decade-long journey at the convergence of financial auditing, enterprise data architecture, luxury dealership MIS, and high-impact university training.
          </p>
        </div>
      </div>

      {/* ================= NARRATIVE BIOGRAPHY & ETHOS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-md">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 flex items-center gap-2.5">
                <Compass className="w-6 h-6 text-orange-500" />
                <span>The Journey: From Commercial Accounting to Big Data</span>
              </h2>
              
              <p className="mb-4">
                Pooja's foundational journey began with a <strong>B.Com (Professional)</strong> from Guru Nanak Dev University, giving her an innate comprehension of balance sheets, cost accounting, reconciliations, and commercial audit trails. Recognizing early that data architecture was the future of business intelligence, she pursued and completed an <strong>M.Sc. in Information Technology</strong> from Punjab Technical University.
              </p>

              <p className="mb-4">
                This distinctive hybrid foundation — commercial finance acumen paired with structured database computing — enabled Pooja to step into high-stakes enterprise reporting roles where raw numbers need to translate into strategic executive decisions without friction.
              </p>

              <p>
                Over the past 10+ years, Pooja has managed complex reporting pipelines for tier-one brands including <strong>Mercedes-Benz</strong> (luxury automotive dealership sales and workshop MIS), <strong>Tanishq (Titan)</strong> (SAP fine jewelry inventory aging and retail performance), <strong>Cogneesol</strong> (cross-functional business information systems), and <strong>ShipHaven / Performance Modes</strong> (auditing 14,000+ monthly FedEx and UPS freight invoices for US corporate accounts).
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-md">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 flex items-center gap-2.5">
                <GraduationCap className="w-6 h-6 text-orange-500" />
                <span>Transforming 1,000+ Learners into Placement-Ready Analysts</span>
              </h2>

              <p className="mb-4">
                While excelling in corporate MIS, Pooja identified a persistent industry problem: university graduates and junior analysts were graduating with theoretical textbook knowledge, but floundered when confronted with chaotic, messy corporate spreadsheets, nested DAX calculations, and multi-key VLOOKUP/Power Query reconciliations.
              </p>

              <p>
                As guest faculty and corporate trainer at leading institutions like <strong>CGC University</strong> and <strong>Chitkara University</strong>, Pooja has designed and delivered hands-on placement accelerator programs. By teaching students using real-world anonymized retail, logistics, and automotive datasets, she has empowered over <strong>1,000+ MBA, BBA, B.Com, and corporate professionals</strong> to clear corporate technical interview screenings and thrive in their analytics careers.
              </p>
            </div>
          </div>

          {/* Quick Facts & Sidebar Card (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span>Pooja at a Glance</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Full Name</span>
                  <span className="font-bold text-slate-900 dark:text-white">{personalInfo.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Primary Role</span>
                  <span className="font-bold text-slate-900 dark:text-white">MIS/BI Specialist & Trainer</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Experience</span>
                  <span className="font-bold text-orange-600 dark:text-orange-400 font-mono">10+ Years</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Students Upskilled</span>
                  <span className="font-bold text-orange-600 dark:text-orange-400 font-mono">1,000+ Alumni</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Location</span>
                  <span className="font-bold text-slate-900 dark:text-white">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Work Mode</span>
                  <span className="font-bold text-slate-900 dark:text-white">Remote Global & On-Site India</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  download="Pooja_Bhatt_Resume.pdf"
                  className="w-full py-3 rounded-xl theme-btn-gradient text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Verified Resume PDF</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Core Philosophy Card */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white dark:bg-slate-900/90 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold mb-4 text-orange-400 flex items-center gap-2">
                <span>The 4 Analytical Commandments</span>
              </h3>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Assumptions:</strong> Every reconciliation must balance to the exact cent/paisa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Automate Repetition:</strong> If a report is run more than twice, build a Power Query ETL pipeline for it.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Executive Simplicity:</strong> A dashboard that requires explanation is an incomplete dashboard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Practical Pedagogy:</strong> Teach how corporate teams actually operate, not textbook theories.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE SKILLS & TECHNICAL STACK ================= */}
      <section className="py-20 bg-slate-50/70 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/60 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
              <Cpu className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
                Technical Stack & Mastery
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise Fluency & Competencies
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Deep, battle-tested knowledge across Microsoft Business Intelligence, enterprise ERP platforms, and financial reconciliations.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'excel', label: 'Advanced Excel & DAX' },
              { id: 'power bi', label: 'Power BI & BI Architecture' },
              { id: 'billing', label: 'Billing & Carrier Audits' },
              { id: 'erp', label: 'ERP Systems (SAP & Tally)' },
              { id: 'pedagogy', label: 'Corporate Pedagogy' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveSkillCategory(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeSkillCategory === btn.id
                    ? 'theme-btn-gradient text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-orange-500/40'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-md hover:border-orange-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconMap[cat.iconName] || <Cpu className="w-6 h-6" />}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono font-bold uppercase">
                      {cat.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {cat.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACADEMIC QUALIFICATIONS & LANGUAGES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Degrees */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
              <GraduationCap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
                Academic Background
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
              Education & Institutional Credentials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 text-xs font-mono font-bold">
                        {item.period}
                      </span>
                      <Award className="w-5 h-5 text-amber-500" />
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1 mb-4">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Languages */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
                  <Languages className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
                    Delivery Fluency
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                  Language Proficiency
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Trilingual fluency allows Pooja to comfortably navigate international client reporting as well as regional classroom cohorts.
                </p>

                <div className="space-y-4">
                  {languages.map((lang, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between"
                    >
                      <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                        {lang.language}
                      </span>
                      <span className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
                >
                  <span>Connect with Pooja directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 text-center shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Want to learn more about Pooja's Experience?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
            Explore her industry case studies (FedEx/UPS audits, Mercedes-Benz, Tanishq) and EdTech university training programs in detail.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/experience"
              className="px-6 py-3 rounded-xl theme-btn-gradient text-white text-xs sm:text-sm font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <span>Explore Experience (EdTech & Industry)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
