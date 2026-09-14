import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  BarChart3, 
  ReceiptText, 
  Server, 
  GraduationCap, 
  CheckCircle2, 
  Cpu, 
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  ReceiptText: <ReceiptText className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.title.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
            <Cpu className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
              Core Technical Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            10+ Years of Enterprise Fluency
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Bridging raw computational power with strategic decision-making. From high-throughput financial audits to training university cohorts in advanced business intelligence.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Competencies' },
            { id: 'excel', label: 'Advanced Excel & DAX' },
            { id: 'power bi', label: 'Power BI & Reporting' },
            { id: 'billing', label: 'Billing & Auditing' },
            { id: 'erp', label: 'ERP Systems' },
            { id: 'training', label: 'Corporate Pedagogy' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveCategory(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === btn.id
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
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:border-orange-500/50 transition-all shadow-md"
            >
              <div>
                {/* Icon & Proficiency Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-105 transition-transform">
                    {iconMap[category.iconName] || <Layers className="w-6 h-6" />}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block font-semibold uppercase">
                      Proficiency
                    </span>
                    <span className="text-base font-mono font-extrabold text-slate-900 dark:text-white">
                      {category.proficiency}%
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Sub-skills bullet list */}
                <div className="space-y-2.5 mb-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Pills Footer */}
              <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {category.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
  );
};
