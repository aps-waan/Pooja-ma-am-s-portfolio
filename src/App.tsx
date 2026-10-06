import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeCustomizer } from './components/ThemeCustomizer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';
import { personalInfo, colorThemes } from './data/portfolioData';
import { ColorThemeOption } from './types/portfolio';

export const App: React.FC = () => {
  // Light mode default, dark mode switchable
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('pooja_theme_mode');
    return saved ? saved === 'dark' : false;
  });

  // Theme palette state (Sunset Orange is the lucky default)
  const [currentTheme, setCurrentTheme] = useState<ColorThemeOption>(() => {
    const savedThemeId = localStorage.getItem('pooja_color_theme');
    const found = colorThemes.find(t => t.id === savedThemeId);
    return found || colorThemes[0];
  });

  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  // Apply dark/light class and dynamic CSS variables on theme changes
  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('pooja_theme_mode', darkMode ? 'dark' : 'light');
    localStorage.setItem('pooja_color_theme', currentTheme.id);
    
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    // Set dynamic CSS properties based on current mode and selected color palette
    const themeColors = darkMode ? currentTheme.dark : currentTheme.light;
    root.style.setProperty('--primary-color', themeColors.primary);
    root.style.setProperty('--secondary-color', themeColors.secondary);
    root.style.setProperty('--accent-color', themeColors.accent);
    root.style.setProperty('--glow-color', themeColors.glow);
    root.style.setProperty('--text-accent', themeColors.text);
  }, [darkMode, currentTheme]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={`min-h-screen transition-colors duration-250 flex flex-col justify-between ${
        darkMode ? 'bg-[#0B0F17] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
      }`}>
        {/* Background subtle grid pattern */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20 opacity-60" />

        {/* Global Navigation Bar */}
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onOpenThemeModal={() => setIsThemeModalOpen(true)}
        />

        {/* Multipage Routing Body */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Theme Palette Customizer Modal */}
        <ThemeCustomizer
          isOpen={isThemeModalOpen}
          onClose={() => setIsThemeModalOpen(false)}
          currentTheme={currentTheme}
          setTheme={setCurrentTheme}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Floating LinkedIn Quick-Connect Button */}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Pooja on LinkedIn"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white shadow-xl shadow-[#0A66C2]/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        >
          <LinkedInIcon className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
            Connect on LinkedIn
          </span>
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
