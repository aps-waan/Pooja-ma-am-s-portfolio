import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Download, Sun, Moon, Menu, X, BarChart3, Palette } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onOpenThemeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  toggleDarkMode,
  onOpenThemeModal 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience', badge: 'EdTech & Industry' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm'
          : 'bg-white/60 dark:bg-[#0B0F17]/60 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl theme-btn-gradient flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white transition-colors whitespace-nowrap">
                {personalInfo.name}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
            </div>
            <p className="text-[11px] font-mono text-orange-600 dark:text-orange-400 font-semibold tracking-wide whitespace-nowrap">
              MIS/BI & Corporate Trainer
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'
                }`
              }
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="hidden xl:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400">
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Palette Customizer button */}
          {onOpenThemeModal && (
            <button
              onClick={onOpenThemeModal}
              aria-label="Customize accent color theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-500/40 transition-all shadow-sm shrink-0"
              title="Customize Color Theme Palette"
            >
              <Palette className="w-4 h-4 text-orange-500" />
            </button>
          )}

          {/* Theme Switcher */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark/light mode"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-500/40 transition-all shadow-sm shrink-0"
            title={darkMode ? "Switch to Executive Light Mode" : "Switch to Sleek Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* LinkedIn Connect */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-[#0A66C2] dark:hover:text-[#38bdf8] hover:border-[#0A66C2]/40 transition-all shadow-sm shrink-0"
            title="Connect on LinkedIn"
          >
            <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2] dark:text-[#38bdf8]" />
            <span>LinkedIn</span>
          </a>

          {/* Resume Download */}
          <a
            href={personalInfo.resumeUrl}
            download="Pooja_Bhatt_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all shadow-sm shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-orange-500" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenThemeModal && (
            <button
              onClick={onOpenThemeModal}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              title="Theme Palettes"
            >
              <Palette className="w-4 h-4 text-orange-500" />
            </button>
          )}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme mode"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-orange-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-base font-bold transition-all ${
                  isActive
                    ? 'bg-orange-50 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400'
                    : 'text-slate-700 dark:text-slate-200 hover:text-orange-500'
                }`
              }
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400">
                    {link.badge}
                  </span>
                )}
              </div>
            </NavLink>
          ))}

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold hover:text-[#0A66C2]"
            >
              <LinkedInIcon className="w-4 h-4 text-[#0A66C2] dark:text-[#38bdf8]" />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Pooja_Bhatt_Resume.pdf"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl theme-btn-gradient text-white text-sm font-bold shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
