import React from 'react';
import { ArrowRight, Download, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, keyMetrics } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 w-fit">
              <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-300 uppercase">
                10+ Years Enterprise Data & MIS Experience
              </span>
            </div>

            {/* Main Headline - High contrast in both light and dark */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Turning Complex Data into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 dark:from-orange-400 dark:via-amber-400 dark:to-orange-500">
                Strategic Decisions
              </span>{' '}
              & Empowering 1,000+ Analysts
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-bold">{personalInfo.name}</strong>. Senior MIS Analyst, Data Analyst & Corporate Trainer specializing in <span className="font-semibold text-orange-600 dark:text-orange-400">Advanced Excel, Power BI, DAX & ERP Systems</span>. Over the past decade, I have optimized reporting frameworks for enterprise leaders including Mercedes-Benz, Tanishq, and ShipHaven US Clients, while training 1,000+ university students and corporate professionals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="theme-btn-gradient px-6 sm:px-7 py-3.5 rounded-xl text-white font-bold text-sm flex items-center gap-2.5 transition-all shadow-md"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Pooja_Bhatt_Resume.pdf"
                className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-bold text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-orange-500" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#training"
                className="px-4 py-3.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 text-sm font-semibold transition-colors"
              >
                Corporate Training Programs →
              </a>
            </div>

            {/* Verification checklist */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs text-slate-600 dark:text-slate-400 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>University Guest Faculty (CGC & Chitkara)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>US Enterprise Billing & Audit (FedEx/UPS)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>ERP Fluency (SAP, Tally ERP, Zoho)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Executive Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl glass-card p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
              {/* Corner Badge */}
              <div className="absolute -top-3 -right-2 px-3.5 py-1 bg-slate-900 dark:bg-orange-500 text-white rounded-full text-[11px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
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
                  <p className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400">
                    M.Sc. IT &bull; B.Com (Professional)
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Mohali, Punjab &bull; Corporate Trainer & MIS Lead
                  </p>
                </div>
              </div>

              {/* Verified Competencies */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-800 dark:text-slate-200">Advanced Excel & Power Query Automation</span>
                    <span className="text-orange-600 dark:text-orange-400 font-mono">98%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full theme-primary-bg rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-800 dark:text-slate-200">Power BI & Executive MIS Reporting</span>
                    <span className="text-orange-600 dark:text-orange-400 font-mono">95%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full theme-primary-bg rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-800 dark:text-slate-200">Carrier Billing Audits (FedEx / UPS)</span>
                    <span className="text-orange-600 dark:text-orange-400 font-mono">96%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full theme-primary-bg rounded-full" style={{ width: '96%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-800 dark:text-slate-200">Corporate & Higher Ed Training (1,000+ Students)</span>
                    <span className="text-orange-600 dark:text-orange-400 font-mono">98%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full theme-primary-bg rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>
              </div>

              {/* Primary Focus Summary */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-medium">Core Value:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  Data Accuracy &bull; Automation &bull; Pedagogy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:border-orange-500/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Brand Credentials Marquee / Highlights */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6 font-bold">
            Trusted by Premier Institutions & Enterprise Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {[
              "Mercedes-Benz Panjab Motors",
              "Tanishq Fine Jewelry",
              "CGC University Mohali",
              "Chitkara University (Languafina)",
              "ShipHaven (US Clients)",
              "Shine Logistics",
              "Cogneesol (BIS)",
              "Cargo Motors",
            ].map((brand, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
