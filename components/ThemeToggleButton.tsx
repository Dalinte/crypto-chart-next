'use client'
import { useTheme } from 'next-themes'

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="w-full px-4 py-2 bg-blue-500   hover:bg-blue-600 text-white  rounded-lg transition-colors duration-200"
    >
      Сменить тему
    </button>
  );
}