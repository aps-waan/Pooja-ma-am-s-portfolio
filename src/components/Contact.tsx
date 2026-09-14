import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Sparkles, Clock, ExternalLink } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/25 mb-4">
            <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-xs font-mono font-bold tracking-wide text-orange-700 dark:text-orange-400 uppercase">
              Let's Connect
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Discuss Your Training or MIS Project
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you want to organize an enterprise Excel / Power BI bootcamp, optimize your billing reconciliation, or consult on a strategic reporting overhaul, Pooja is ready to collaborate. Reach out directly via Email or LinkedIn.
          </p>
        </div>

        {/* Direct Connect Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Direct Email Card */}
          <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-lg hover:border-orange-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-all text-xs font-mono font-bold flex items-center gap-1.5 border border-slate-200 dark:border-slate-700"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide font-bold block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg font-extrabold text-slate-900 dark:text-white hover:text-orange-500 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                For corporate workshops, university sessions & MIS consultations.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <a
                href={`mailto:${personalInfo.email}`}
                className="theme-btn-gradient w-full py-3 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Connect Card */}
          <div className="p-7 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-lg hover:border-[#0A66C2]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#38bdf8] flex items-center justify-center">
                  <LinkedInIcon className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#38bdf8] border border-[#0A66C2]/20">
                  Verified Profile
                </span>
              </div>

              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide font-bold block mb-1">
                LinkedIn Connection
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-extrabold text-slate-900 dark:text-white hover:text-[#0A66C2] dark:hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
              >
                <span>linkedin.com/in/pooja-bhatt-01b59482</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Connect for professional networking, recommendations & inquiries.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location & SLA Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center gap-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-semibold">
                Base Location
              </span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {personalInfo.location}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block font-semibold">
                Response SLA
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                Response guaranteed within <strong className="text-slate-900 dark:text-white">24 business hours</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
