import React from 'react';
import { GraduationCap, Languages, Award, BookCheck } from 'lucide-react';
import { educationData, languages } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-50/70 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Academic Credentials */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
              <GraduationCap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
                Academic Background
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
              Education & Institutional Qualifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-md"
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

          {/* Right: Languages & Delivery Advantage */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
                <Languages className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
                  Language Proficiency
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                Multilingual Facilitation
              </h3>

              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full theme-primary-bg" />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {lang.language}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-5 rounded-3xl bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/25">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-700 dark:text-orange-400 uppercase mb-1">
                <BookCheck className="w-4 h-4" />
                <span>Pedagogical Advantage</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Able to deliver complex analytical and DAX workshops seamlessly across English, Hindi, and Punjabi, ensuring maximum conceptual grasp for diverse corporate and university cohorts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
