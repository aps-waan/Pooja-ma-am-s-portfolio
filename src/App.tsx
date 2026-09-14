import React, { useState, useEffect } from 'react';
import { MessageCircle, Palette } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Training } from './components/Training';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeCustomizer } from './components/ThemeCustomizer';
import { personalInfo, colorThemes } from './data/portfolioData';
import { ColorThemeOption } from './types/portfolio';

export const App: React.FC = () => {
  // Light mode first, dark mode second as requested!
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('pooja_theme_mode');
    return saved ? saved === 'dark' : false;
  });

  const [currentTheme, setCurrentTheme] = useState<ColorThemeOption>(() => {
    const savedId = localStorage.getItem('pooja_color_id');
    return colorThemes.find(t => t.id === savedId) || colorThemes[0];
  });

  const [paletteOpen, setPaletteOpen] = useState<boolean>(false);

  // Apply dark/light class and dynamic CSS variables on theme changes
  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('pooja_theme_mode', darkMode ? 'dark' : 'light');
    localStorage.setItem('pooja_color_id', currentTheme.id);
    
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
    <div className={`min-h-screen transition-colors duration-250 ${darkMode ? 'bg-[#0B0F17] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'}`}>
      {/* Background pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20 opacity-60" />

      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        openPalette={() => setPaletteOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Training />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Theme / Palette Quick Trigger Button */}
      <button
        onClick={() => setPaletteOpen(true)}
        aria-label="Customize colors"
        className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        title="Choose Theme & Color"
      >
        <Palette className="w-5 h-5 text-orange-500" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Themes ({currentTheme.name})
        </span>
      </button>

      {/* Floating WhatsApp Quick-Connect Button */}
      <a
        href={personalInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Pooja on WhatsApp"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>

      {/* Theme Customizer Modal */}
      <ThemeCustomizer
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
};

export default App;
