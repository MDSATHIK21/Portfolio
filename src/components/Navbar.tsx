import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  isDark?: boolean;
  onToggleTheme?: () => void;
}

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '/Mohammed_Sathik_Resume.pdf', isExternal: true },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark = true, onToggleTheme }) => {
  const [activeTab, setActiveTab] = useState<string>('About');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);

          const scrollPosition = window.scrollY + 200;
          for (let i = navItems.length - 1; i >= 0; i--) {
            if (navItems[i].isExternal) continue;
            const section = document.querySelector(navItems[i].href) as HTMLElement | null;
            if (section && section.offsetTop <= scrollPosition) {
              setActiveTab(navItems[i].name);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; href: string; isExternal?: boolean }) => {
    if (item.isExternal) {
      setMobileMenuOpen(false);
      return;
    }
    setActiveTab(item.name);
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(item.href);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-4 md:top-6 left-0 right-0 z-50 px-6 md:px-12 pointer-events-none transform-gpu"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left Corner Logo: MS ! */}
        <a
          href="#"
          className={`hidden md:block text-2xl font-black text-slate-900 dark:text-white tracking-tighter transition-all duration-300 z-50 ${
            scrolled ? '-translate-y-12 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto hover:opacity-80'
          }`}
        >
          MS !
        </a>

        {/* Desktop Centered Spotlight Navigation Bar */}
        <div
          className={`hidden md:flex items-center gap-1 p-2 pl-3 pr-2.5 rounded-full border transition-all duration-500 relative pointer-events-auto absolute left-1/2 -translate-x-1/2 ${
            scrolled
              ? 'bg-white/90 dark:bg-[#18181b]/95 backdrop-blur-xl border-slate-200/80 dark:border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
              : 'bg-white/80 dark:bg-[#27272a]/85 backdrop-blur-md border-slate-200/60 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          }`}
          style={{ borderRadius: '9999px' }}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-4.5 py-2.5 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 select-none flex items-center gap-1.5 justify-center ${
                  isActive && !item.isExternal
                    ? 'text-slate-900 dark:text-white font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-white/50 dark:hover:text-white/80'
                }`}
              >
                {/* SINGLE WRAPPER SPOTLIGHT INDICATOR */}
                {isActive && !item.isExternal && (
                  <motion.div
                    layoutId="spotlight-aligned-wrapper"
                    className="absolute inset-0 pointer-events-none z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  >
                    {/* Top White / Dark Light Bar */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-slate-900 dark:bg-white rounded-full shadow-[0_0_10px_rgba(15,23,42,0.5)] dark:shadow-[0_0_10px_#ffffff] z-30" />

                    {/* Downward Light Cone Beam */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-slate-900/15 via-slate-900/5 to-transparent dark:from-white/35 dark:via-white/12 dark:to-transparent rounded-b-xl z-10"
                      style={{
                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                      }}
                    />

                    {/* Soft Radial Ambient Glow */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-6 bg-slate-900/15 dark:bg-white/25 blur-md rounded-full z-0" />
                  </motion.div>
                )}

                {/* Navigation Item Label */}
                {item.isExternal && <FileText className="w-3.5 h-3.5 opacity-80" />}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}

          {/* Theme Toggle Separator & Switch Inside Capsule */}
          {onToggleTheme && (
            <>
              <div className="w-[1px] h-5 bg-slate-300 dark:bg-white/15 mx-1 shrink-0" />
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            </>
          )}
        </div>

        {/* Right Corner Spacer for Desktop Balance */}
        <div className="hidden md:block w-10 pointer-events-none" />

        {/* Mobile Version Header & Menu */}
        <div className="md:hidden flex flex-col items-center mx-auto pointer-events-auto">
          <div
            className={`flex items-center justify-between w-full min-w-[280px] max-w-[340px] px-4 py-2.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? 'bg-white/90 dark:bg-[#18181b]/95 backdrop-blur-xl border-slate-200 dark:border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
                : 'bg-white/80 dark:bg-[#27272a]/85 backdrop-blur-md border-slate-200/80 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            }`}
            style={{ borderRadius: '9999px' }}
          >
            <a href="#" className="text-base font-bold text-slate-900 dark:text-white tracking-tight pl-2">
              MS.
            </a>
            <div className="flex items-center gap-2">
              {onToggleTheme && <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full text-slate-700 dark:text-white/90 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 8, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-full min-w-[280px] max-w-[340px] p-3 rounded-3xl bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/15 shadow-2xl flex flex-col gap-1 z-50 overflow-hidden"
              >
                {navItems.map((item) => {
                  const isActive = activeTab === item.name;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                        isActive && !item.isExternal
                          ? 'bg-slate-100 dark:bg-white/15 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-white/20'
                          : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.isExternal && <FileText className="w-4 h-4" />}
                        {item.name}
                      </span>
                      {isActive && !item.isExternal && (
                        <span className="w-2 h-2 rounded-full bg-slate-900 shadow-[0_0_8px_rgba(15,23,42,0.6)] dark:bg-white dark:shadow-[0_0_8px_#ffffff]" />
                      )}
                    </a>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};


