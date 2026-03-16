'use client';

import { useTheme } from './ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
      </motion.div>
    </motion.button>
  );
}
