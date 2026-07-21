import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-12 pb-8">
      <div className="section-divider absolute top-0 left-0 right-0 h-[1px] bg-slate-200/80 dark:bg-white/10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center gap-2 text-xs text-slate-500 dark:text-white/30">
        <p>Designed & Developed by Mohammed Sathik</p>
        <p>&copy; 2026</p>
      </div>
    </footer>
  );
};

