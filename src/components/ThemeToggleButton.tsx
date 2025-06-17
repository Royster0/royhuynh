import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 bg-slate-blue dark:bg-dusty-rose p-3 rounded-full text-parchment dark:text-navy-dark shadow-lg hover:scale-110 transition-all duration-300 z-50"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
