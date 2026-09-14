import React, { useState } from 'react';
import { GraduationCap, BookOpen, Clock, Users, Award, ChevronRight, CheckCircle2, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { trainingPrograms } from '../data/portfolioData';
import { TrainingProgram } from '../types/portfolio';

export const Training: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);

  return (
    <section id="training" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
            <GraduationCap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
              Corporate Training & Higher Ed
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Empowering Over 1,000+ Students & Professionals
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Hands-on, placement-driven curriculum delivered at top universities (CGC, Chitkara) and corporate teams. Moving beyond generic theory into industry-ready problem solving.
          </p>
        </div>

        {/* Impact Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 text-center shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 mx-auto flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-mono font-extrabold text-slate-900 dark:text-white">1,000+</h4>
            <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase mt-0.5">Learners Mentored</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
              MBA, BBA, B.Com, HR, Supply Chain, and Corporate Working Professionals.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 text-center shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-mono font-extrabold text-slate-900 dark:text-white">Placement-Ready</h4>
            <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase mt-0.5">Corporate Alignment</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
              Skill-based assessments, interview tests, real-world corporate datasets & case studies.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 text-center shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 mx-auto flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-mono font-extrabold text-slate-900 dark:text-white">Custom Syllabi</h4>
            <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase mt-0.5">Modular Delivery</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
              Flexible 2-day bootcamps to semester-long university accelerator modules.
            </p>
          </div>
        </div>

        {/* Training Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trainingPrograms.map((prog) => (
            <div
              key={prog.id}
              className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:border-orange-500/40 transition-all shadow-md"
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 text-xs font-mono font-bold">
                    {prog.code}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    <span>{prog.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">
                  {prog.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {prog.overview}
                </p>

                {/* Target Audience */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 mb-6">
                  <strong className="text-orange-600 dark:text-orange-400 block font-bold mb-1">Target Audience:</strong>
                  {prog.audience}
                </div>

                {/* Curriculum Bullet Preview */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    Core Topics Covered:
                  </span>
                  {prog.curriculum.slice(0, 3).map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:opacity-80 flex items-center gap-1 transition-colors"
                >
                  <span>View Full Curriculum</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30 text-orange-700 dark:text-orange-400 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white text-xs font-bold transition-all"
                >
                  Book Workshop
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Feedback Callout */}
        <div className="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 shadow-md">
          <div className="w-16 h-16 rounded-2xl theme-btn-gradient flex items-center justify-center text-white shrink-0 shadow-md">
            <MessageSquareQuote className="w-8 h-8" />
          </div>
          <div className="text-center sm:text-left">
            <blockquote className="text-sm sm:text-base italic text-slate-800 dark:text-slate-200 leading-relaxed mb-3">
              "Pooja Bhatt's training sessions at Chitkara and CGC have consistently bridged the critical gap between academic spreadsheets and corporate business intelligence. Her practical case studies give students authentic placement confidence."
            </blockquote>
            <p className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
              Academic & Corporate Feedback &bull; Verified Institutional Endorsement
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Full Curriculum */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 transition-colors"
            >
              ✕ Close
            </button>

            <span className="px-2.5 py-1 rounded bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 font-mono text-xs font-bold">
              {selectedProgram.code} &bull; {selectedProgram.level}
            </span>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-2">
              {selectedProgram.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              {selectedProgram.overview}
            </p>

            <h4 className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider font-mono mb-3">
              Full Module Roadmap:
            </h4>
            <ul className="space-y-2.5 mb-6 text-sm text-slate-700 dark:text-slate-300">
              {selectedProgram.curriculum.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider font-mono mb-3">
              Key Strategic Outcomes:
            </h4>
            <ul className="space-y-2 mb-6 text-sm text-slate-700 dark:text-slate-300">
              {selectedProgram.keyOutcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProgram(null)}
                className="theme-btn-gradient px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow-md"
              >
                Inquire for Institutional Booking <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
