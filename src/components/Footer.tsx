import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Download, ArrowUp } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-100 dark:border-slate-800">
          {/* Brand & Summary */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl theme-btn-gradient flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </span>
            </Link>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
              {personalInfo.title} &bull; {personalInfo.specialization}
            </p>
          </div>

          {/* Router Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-600 dark:text-slate-400">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-orange-500 transition-colors">About</Link>
            <Link to="/experience?tab=industry" className="hover:text-orange-500 transition-colors">Industry MIS</Link>
            <Link to="/experience?tab=edtech" className="hover:text-orange-500 transition-colors">EdTech & Training</Link>
            <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact & Bookings</Link>
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-[#0A66C2] dark:hover:text-[#38bdf8] flex items-center gap-1.5 transition-colors shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2] dark:text-[#38bdf8]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Pooja_Bhatt_Resume.pdf"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-orange-500 hover:text-orange-500 flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-orange-500" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-all shadow-sm"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Mohali, Punjab &bull; Global Remote.
          </p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            MIS/BI Reports & Dashboard Specialist &bull; Corporate Trainer &bull; Advanced Excel &bull; Power BI &bull; ERP
          </p>
        </div>
      </div>
    </footer>
  );
};
