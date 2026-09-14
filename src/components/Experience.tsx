import React, { useState } from 'react';
import { Briefcase, Calendar, Clock, Building } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Corporate Training', 'MIS & Analytics', 'Logistics & Billing', 'Automotive & Retail'];

  const filteredExperience = selectedCategory === 'All'
    ? experienceData
    : experienceData.filter(item => item.category === selectedCategory);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
            <Briefcase className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
              Chronological Career Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            10+ Years of Quantifiable Enterprise Impact
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            From managing high-volume billing audits for US logistics clients and reporting for Mercedes-Benz to training 1,000+ university and corporate analysts.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'theme-btn-gradient text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-orange-500/40'
              }`}
            >
              {cat} {cat === 'All' ? `(${experienceData.length})` : ''}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline spine line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-0.5 bg-slate-300 dark:bg-slate-800" />

          <div className="space-y-10">
            {filteredExperience.map((item) => (
              <div key={item.id} className="relative pl-12 sm:pl-20 group">
                {/* Timeline Indicator Dot */}
                <div className="absolute left-2 sm:left-6 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-2 border-orange-500 group-hover:scale-125 transition-all flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 rounded-full theme-primary-bg" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-md">
                  {/* Top metadata strip */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-500/15 border border-orange-200 dark:border-orange-500/30 text-orange-700 dark:text-orange-400 text-[11px] font-mono font-bold uppercase tracking-wider inline-block mb-1.5">
                        {item.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 mt-0.5">
                        <Building className="w-4 h-4 text-orange-500" />
                        <span>{item.organization}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-orange-500" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 mt-1 text-[11px]">
                        <Clock className="w-3 h-3" />
                        Duration: {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills / Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold border border-slate-200 dark:border-slate-700"
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
    </section>
  );
};
