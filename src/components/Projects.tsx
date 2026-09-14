import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, Building2, Tag } from 'lucide-react';
import { caseStudies } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const current = caseStudies[activeProject];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 mb-4">
            <FolderGit2 className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-xs font-mono font-bold tracking-wide text-orange-600 dark:text-orange-400 uppercase">
              Proven Enterprise Track Record
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Case Studies
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Real problems solved across logistics, luxury automotive, retail inventory, and higher education during a decade of hands-on data leadership.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveProject(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeProject === idx
                  ? 'theme-btn-gradient text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-orange-500/40'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{study.organization.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Main Case Study Card */}
        <div className="rounded-3xl glass-card border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400">
                  {current.domain}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Tenure: {current.period}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {current.title}
              </h3>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
                Organization: <strong className="text-slate-900 dark:text-slate-200">{current.organization}</strong>
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-orange-600 dark:text-orange-400 border border-orange-500/30 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all shrink-0"
            >
              <span>Consult on Similar Need</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Impact Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-b border-slate-100 dark:border-slate-800">
            {current.impactMetrics.map((item, mIdx) => (
              <div
                key={mIdx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white mb-1">
                  {item.metric}
                </div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Two Column Narrative: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-slate-100 dark:border-slate-800">
            <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2.5">
                The Business Challenge
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {current.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2.5">
                Pooja's Methodology & Solution
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {current.solution}
              </p>
            </div>
          </div>

          {/* Tools Applied */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-orange-500" /> Technologies & Tools:
              </span>
              {current.toolsUsed.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Verified from official employment records
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
