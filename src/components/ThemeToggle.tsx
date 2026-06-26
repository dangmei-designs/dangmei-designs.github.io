import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      id="theme-toggle-btn"
      onClick={onToggle}
      className="p-2 rounded-lg border transition-all duration-300 focus:outline-none hover:scale-105 active:scale-95
        border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-4 h-4 text-blue-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
    </button>
  );
}
