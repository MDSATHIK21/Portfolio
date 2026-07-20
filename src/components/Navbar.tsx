import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; href: string }) => {
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
          className={`hidden md:block text-2xl font-black text-white tracking-tighter transition-all duration-300 z-50 ${
            scrolled ? '-translate-y-12 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto hover:opacity-80'
          }`}
        >
          MS !
        </a>

        {/* Desktop Centered Spotlight Navigation Bar */}
        <div
          className={`hidden md:flex items-center gap-1 p-2 rounded-full border transition-all duration-300 relative pointer-events-auto absolute left-1/2 -translate-x-1/2 ${scrolled
              ? 'bg-[#18181b]/95 backdrop-blur-xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
              : 'bg-[#27272a]/85 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            }`}
          style={{ borderRadius: '9999px' }}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 select-none flex items-center justify-center ${isActive ? 'text-white font-semibold' : 'text-white/50 hover:text-white/80'
                  }`}
              >
                {/* SINGLE WRAPPER SPOTLIGHT INDICATOR */}
                {isActive && (
                  <motion.div
                    layoutId="spotlight-aligned-wrapper"
                    className="absolute inset-0 pointer-events-none z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  >
                    {/* Top White Light Bar */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white rounded-full shadow-[0_0_10px_#ffffff] z-30" />

                    {/* Downward Light Cone Beam */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/12 to-transparent rounded-b-xl z-10"
                      style={{
                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                      }}
                    />

                    {/* Soft Radial Ambient Glow */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/25 blur-md rounded-full z-0" />
                  </motion.div>
                )}

                {/* Navigation Item Label */}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}

          {/* Resume Button in Navigation Bar */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 text-sm font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-all duration-200 hover:scale-105 select-none"
            >
              Resume
            </button>
          )}
        </div>

        {/* Right Corner Spacer for Desktop Balance */}
        <div className="hidden md:block w-10 pointer-events-none" />

        {/* Mobile Version Header & Menu */}
        <div className="md:hidden flex flex-col items-center mx-auto pointer-events-auto">
          <div
            className={`flex items-center justify-between w-full min-w-[280px] max-w-[340px] px-4 py-2.5 rounded-full border transition-all duration-300 ${scrolled
                ? 'bg-[#18181b]/95 backdrop-blur-xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
                : 'bg-[#27272a]/85 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              }`}
            style={{ borderRadius: '9999px' }}
          >
            <a href="#" className="text-base font-bold text-white tracking-tight pl-2">
              MS.
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-white/90 hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 8, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-full min-w-[280px] max-w-[340px] p-3 rounded-3xl bg-[#1c1c1e]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-1 z-50 overflow-hidden"
              >
                {navItems.map((item) => {
                  const isActive = activeTab === item.name;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${isActive
                          ? 'bg-white/15 text-white font-semibold border border-white/20'
                          : 'text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                      )}
                    </a>
                  );
                })}
                {onOpenResume && (
                  <button
                    onClick={() => {
                      onOpenResume();
                      setMobileMenuOpen(false);
                    }}
                    className="mt-1 w-full py-2.5 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 rounded-2xl transition-all"
                  >
                    Resume
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};
