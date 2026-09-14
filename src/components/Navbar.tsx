import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X, BarChart3, ArrowRight, Palette } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  openPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, openPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Career Journey', href: '#experience' },
    { name: 'Corporate Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl theme-btn-gradient flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white transition-colors">
                {personalInfo.name}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
            </div>
            <p className="text-[11px] font-mono text-orange-600 dark:text-orange-400 font-semibold tracking-wide">
              MIS & Data Analyst &bull; Trainer
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Palette Customizer Button */}
          <button
            onClick={openPalette}
            aria-label="Customize theme colors"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-500/40 transition-all flex items-center gap-1.5 text-xs font-semibold shadow-sm"
            title="Choose Accent Colors (8 options)"
          >
            <Palette className="w-4 h-4 text-orange-500" />
            <span className="hidden xl:inline">Colors</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark/light mode"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-500/40 transition-all shadow-sm"
            title={darkMode ? "Switch to Executive Light Mode" : "Switch to Sleek Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Resume Download */}
          <a
            href={personalInfo.resumeUrl}
            download="Pooja_Bhatt_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-orange-500" />
            <span>Resume</span>
          </a>

          {/* Book Consultation */}
          <a
            href="#contact"
            className="theme-btn-gradient inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md transition-all"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={openPalette}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            title="Colors"
          >
            <Palette className="w-4 h-4 text-orange-500" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-orange-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-orange-500 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openPalette();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold"
            >
              <Palette className="w-4 h-4 text-orange-500" /> Change Color Palette (8 Curated)
            </button>
            <a
              href={personalInfo.resumeUrl}
              download="Pooja_Bhatt_Resume.pdf"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-orange-500/40 text-orange-600 dark:text-orange-400 text-sm font-bold"
            >
              <Download className="w-4 h-4" /> Download Resume PDF
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="theme-btn-gradient flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-bold shadow-md"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
