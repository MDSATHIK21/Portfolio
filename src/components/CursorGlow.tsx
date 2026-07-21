import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (glowRef.current) {
          const isDark = document.documentElement.classList.contains('dark');
          const glowColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(59,130,246,0.07)';
          glowRef.current.style.background = `radial-gradient(500px circle at ${e.clientX}px ${e.clientY}px, ${glowColor}, transparent 40%)`;
        }
      });
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="hidden md:block pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 transform-gpu"
    />
  );
};

