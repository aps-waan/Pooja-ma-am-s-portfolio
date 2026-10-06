import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  BarChart3, 
  ShieldCheck
} from 'lucide-react';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { personalInfo, keyMetrics, caseStudies } from '../data/portfolioData';

export const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle atmospheric gradient glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/15 border border-orange-300 dark:border-orange-500/30 w-fit">
                <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-xs font-mono font-bold tracking-wide text-orange-800 dark:text-orange-300 uppercase">
                  10+ Years MIS/BI Specialist & Corporate Trainer
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Transforming Enterprise Data into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 dark:from-orange-400 dark:via-amber-400 dark:to-orange-500">
                  Strategic Clarity
                </span>{' '}
                & Upskilling 1,000+ Analysts
              </h1>

              {/* Bio Subtitle */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
                Hi, I'm <strong className="text-slate-900 dark:text-white font-bold">{personalInfo.name}</strong>. A seasoned MIS/BI Reports and Dashboard Specialist bridging the gap between rigorous enterprise data architecture and corporate analytics training. Specializing in <span className="font-semibold text-orange-600 dark:text-orange-400">Advanced Excel, Power BI, DAX & ERP Systems</span> across logistics, luxury automotive, retail, and higher education.
              </p>

              {/* Primary Call-to-Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/experience"
                  className="theme-btn-gradient px-6 sm:px-7 py-3.5 rounded-xl text-white font-bold text-sm flex items-center gap-2.5 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Experience & Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-bold text-sm flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Book Training / Consult</span>
                </Link>

                <a
                  href={personalInfo.resumeUrl}
                  download="Pooja_Bhatt_Resume.pdf"
                  className="px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-bold text-sm flex items-center gap-2 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-orange-500" />
                  <span>Resume (PDF)</span>
                </a>
              </div>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs text-slate-600 dark:text-slate-400 font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Faculty at CGC & Chitkara University</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>US Freight Billing Auditing (FedEx / UPS)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>ERP Expertise (SAP, Tally ERP, Zoho)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Grounded Executive Profile Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl glass-card p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
                {/* Verified Corner Badge */}
                <div className="absolute -top-3 -right-2 px-3.5 py-1 bg-slate-900 dark:bg-orange-500 text-white rounded-full text-[11px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>10+ Yrs Verified</span>
                </div>

                {/* Profile Card Header */}
                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-14 h-14 rounded-2xl theme-btn-gradient flex items-center justify-center text-white shadow-md">
                    <Database className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Pooja Bhatt
                    </h3>
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-mono font-semibold">
                      Mohali, Punjab &bull; Global Remote
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      M.Sc. IT &bull; B.Com Professional
                    </p>
                  </div>
                </div>

                {/* Core Competencies Quick Pills */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        Power BI & Executive MIS
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        Interactive dashboards, Star Schema data models & DAX time-intelligence for C-Suite decisions.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        1,000+ Alumni Upskilled
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        Delivered placement-ready business analytics curriculum at CGC and Chitkara University cohorts.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800/80 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        US Carrier Billing Audits
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        Reconciled 14,000+ monthly FedEx and UPS freight invoices with zero error variance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                    Available for Workshops & Consulting
                  </span>
                  <Link
                    to="/about"
                    className="font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
                  >
                    <span>Read Full Bio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY METRICS COUNTER BAR ================= */}
      <section className="py-12 bg-slate-50/80 dark:bg-slate-950/60 border-y border-slate-200/70 dark:border-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {keyMetrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 text-center shadow-sm hover:border-orange-500/40 transition-all"
              >
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold text-slate-900 dark:text-white">
                    {metric.value}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-orange-600 dark:text-orange-400">
                    {metric.suffix}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {metric.label}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DUAL PILLARS (INDUSTRY vs EDTECH) ================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
              <TrendingUp className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
                Dual Expertise Framework
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise Industry Practice & EdTech Pedagogy
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              What sets Pooja apart is her dual fluency: a decade inside corporate command rooms solving complex business operations, paired with a passion for teaching future data leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pillar 1: Industry Practice */}
            <div className="rounded-3xl glass-card border border-slate-200 dark:border-slate-800 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-orange-500/40 transition-all">
              <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/10 rounded-bl-full pointer-events-none -z-10 group-hover:scale-125 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center shadow-sm">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold">
                    Industry Track
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                  Enterprise Industry MIS & Audit
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Over 10 years managing high-stakes reporting infrastructure, financial reconciliations, and ERP operations across global organizations:
                </p>

                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>US Freight Billing Auditing:</strong> Audited 14,000+ monthly FedEx and UPS carrier invoices at Performance Modes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>Luxury Automotive MIS:</strong> Built daily sales conversion and workshop service pipelines for Mercedes-Benz.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>Luxury Retail & ERP:</strong> Handled SAP inventory aging, Tally ERP ledgers, and retail tracking at Tanishq (Titan).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>Multi-Departmental BIS:</strong> Built cross-functional HR, Accounts, and Operations dashboards at Cogneesol.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <Link
                  to="/experience?tab=industry"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl theme-btn-gradient text-white text-xs sm:text-sm font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Explore Industry Roles & Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: EdTech & Higher Education Pedagogy */}
            <div className="rounded-3xl glass-card border border-slate-200 dark:border-slate-800 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-orange-500/40 transition-all">
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-bl-full pointer-events-none -z-10 group-hover:scale-125 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-sm">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold">
                    EdTech Track
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                  Corporate Training & Higher Education
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Empowering over 1,000+ university students and corporate working professionals with industry-proven analytics pedagogy:
                </p>

                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>1,000+ Learners Upskilled:</strong> Trained MBA, BBA, B.Com, HR, and Supply Chain cohorts at CGC and Chitkara University.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Placement Accelerator Modules:</strong> Corporate interview prep, DAX speed-modeling, and live case problem solving.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Executive Power BI Bootcamps:</strong> Taking analysts from clean spreadsheet hygiene to C-suite interactive storytelling.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Custom Corporate Workshops:</strong> Tailored curriculum designed around an enterprise client's messy real-world datasets.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <Link
                  to="/experience?tab=edtech"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Explore EdTech & Training Modules</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE 4 PILLARS OF PRACTICE ================= */}
      <section className="py-20 bg-slate-50/70 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              The 4 Pillars of Pooja's Analytical Practice
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Guiding every automated pipeline built and every masterclass delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Zero-Error Data Hygiene
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Before building visual dashboards, ensure bulletproof source validation, exception trapping, and multi-key reconciliation.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Automated Pipelines
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Transform messy, repetitive spreadsheet routines into 1-click Power Query and Power Pivot ETL pipelines that save dozens of manual hours weekly.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Executive Clarity
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Dashboards crafted for decision-makers: clear KPI cards, drill-through paths, and intuitive visual hierarchies with zero visual clutter.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Placement-Proven Pedagogy
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Training without theoretical fluff. Students work on actual messy enterprise datasets and pass corporate technical screenings with flying colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED CASE STUDIES TEASER ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Enterprise Portfolio Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Featured Case Studies
              </h2>
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400 hover:gap-3 transition-all"
            >
              <span>View All Projects & Roles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.slice(0, 2).map((study) => (
              <div
                key={study.id}
                className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-lg hover:border-orange-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 text-xs font-mono font-bold">
                      {study.domain}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {study.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-xs font-bold text-orange-600 dark:text-orange-400 mb-4">
                    {study.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {study.challenge}
                  </p>

                  {/* Impact Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    {study.impactMetrics.slice(0, 2).map((metric, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-lg font-mono font-bold text-slate-900 dark:text-white">
                          {metric.metric}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {study.toolsUsed.slice(0, 3).map((tool, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/experience"
                    className="text-xs font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1 hover:underline shrink-0"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM EXECUTIVE CTA BANNER ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden theme-btn-gradient text-white shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <span className="px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider inline-block mb-4">
                Open for Engagements
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                Ready to Upgrade Your MIS Architecture or Upskill Your Analytics Team?
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-medium">
                Whether you need an executive Power BI reporting overhaul, high-volume carrier billing reconciliation, or a custom university/corporate workshop, Pooja brings 10+ years of proven results.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm shadow-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Schedule a Discussion</span>
                  <ArrowRight className="w-4 h-4 text-orange-600" />
                </Link>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm transition-all flex items-center gap-2"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
