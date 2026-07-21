import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle Day and Night Theme"
      className="relative flex items-center w-[68px] h-9 p-1 rounded-full border border-slate-300/80 dark:border-white/15 bg-slate-200/80 dark:bg-[#18181b]/90 backdrop-blur-xl shadow-inner cursor-pointer select-none outline-none focus:outline-none transition-all duration-500 hover:scale-105 active:scale-95 pointer-events-auto"
    >
      {/* Sliding Capsule Thumb with Spring Animation */}
      <motion.div
        className={`absolute top-1 bottom-1 w-7 rounded-full shadow-md z-0 flex items-center justify-center ${
          isDark
            ? 'bg-[#27272a] shadow-[0_2px_10px_rgba(0,0,0,0.5)] border border-white/10'
            : 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-slate-200'
        }`}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 28,
        }}
      />

      {/* Sun Icon Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center h-full">
        <motion.div
          animate={{
            scale: isDark ? 0.7 : 1,
            rotate: isDark ? -90 : 0,
            opacity: isDark ? 0.45 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          <Sun
            className={`w-4 h-4 transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-amber-500 drop-shadow-[0_0_6px_rgba(245,158,11,0.7)]'
            }`}
          />
        </motion.div>
      </div>

      {/* Moon Icon Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center h-full">
        <motion.div
          animate={{
            scale: isDark ? 1 : 0.7,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0.45,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          <Moon
            className={`w-4 h-4 transition-colors duration-300 ${
              isDark ? 'text-indigo-400 drop-shadow-[0_0_6px_rgba(129,140,248,0.8)]' : 'text-slate-400'
            }`}
          />
        </motion.div>
      </div>
    </button>
  );
};
