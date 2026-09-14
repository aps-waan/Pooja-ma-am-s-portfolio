import React from 'react';
import { Palette, Sun, Moon, Check, Sparkles, X } from 'lucide-react';
import { colorThemes } from '../data/portfolioData';
import { ColorThemeOption } from '../types/portfolio';

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ColorThemeOption;
  setTheme: (theme: ColorThemeOption) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  isOpen,
  onClose,
  currentTheme,
  setTheme,
  darkMode,
  setDarkMode,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative transition-all">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Customize Theme & Palette
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Personalize the visual look to your taste
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close palette selector"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector (Dark vs Light) */}
        <div className="py-5 border-b border-slate-100 dark:border-slate-800">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Display Mode
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setDarkMode(false)}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                !darkMode
                  ? 'border-orange-500 bg-orange-50/50 text-orange-600 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Executive Light</span>
            </button>

            <button
              onClick={() => setDarkMode(true)}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                darkMode
                  ? 'border-orange-500 bg-orange-500/10 text-orange-400 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Sleek Dark</span>
            </button>
          </div>
        </div>

        {/* Color Palette Grid */}
        <div className="pt-5 pb-2">
          <div className="flex items-center justify-between mb-3">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Accent Color (All Curated &bull; No Navy)
            </label>
            <span className="text-[11px] font-mono text-slate-400">
              8 Options
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-1">
            {colorThemes.map((cTheme) => {
              const isSelected = currentTheme.id === cTheme.id;
              return (
                <button
                  key={cTheme.id}
                  onClick={() => setTheme(cTheme)}
                  className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'border-slate-900 dark:border-white ring-2 ring-orange-500/40 bg-slate-50 dark:bg-slate-800/80 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="w-4 h-4 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: cTheme.swatchHex }}
                    />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {cTheme.name}
                    </span>
                  </div>

                  {cTheme.lucky && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 shrink-0">
                      Lucky
                    </span>
                  )}
                  {isSelected && !cTheme.lucky && (
                    <Check className="w-3.5 h-3.5 text-slate-800 dark:text-white shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1 text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Updates across the whole site instantly</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
