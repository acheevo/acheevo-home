import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface DarkModeToggleProps {
  /** Pass `true` when the header has scrolled and has a light background */
  scrolled?: boolean;
}

const DarkModeToggle = ({ scrolled = false }: DarkModeToggleProps) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const buttonClass = scrolled
    ? 'bg-neutral-100 border-neutral-300 hover:bg-neutral-200 dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-700/50'
    : 'bg-white/10 border-white/20 hover:bg-white/20 dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-700/50';

  const iconClass = scrolled
    ? 'text-neutral-600 dark:text-neutral-300'
    : 'text-white';

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm border transition-all duration-300 group ${buttonClass}`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDarkMode}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${iconClass} ${
            isDarkMode
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100'
          }`}
          strokeWidth={2}
        />
        {/* Moon Icon */}
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${iconClass} ${
            isDarkMode
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
          strokeWidth={2}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;
