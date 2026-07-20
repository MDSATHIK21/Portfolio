import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const pills = [
  'AI Enthusiast',
  'Flutter Developer',
  'Vibe Coder',
  'Prompt Engineer',
];

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050505] pt-24 pb-16 lg:pt-0 lg:pb-0">
      {/* Floating Blur Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[350px] h-[350px] rounded-full bg-white/[0.04] blur-[100px] animate-float" style={{ top: '10%', left: '10%' }} />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-white/[0.03] blur-[80px] animate-float-slow" style={{ bottom: '20%', right: '10%' }} />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-white/[0.05] blur-[60px] animate-float-delayed" style={{ top: '50%', left: '60%' }} />
      </div>

      {/* Main Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-screen lg:min-h-0">

          {/* LEFT SIDE — Bold Text & Content */}
          <motion.div
            className="flex flex-col justify-center order-2 lg:order-1 lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting Pill */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm font-medium text-white/80">
                <span>👋</span> Hi, I'm
              </div>
            </motion.div>

            {/* Name */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6"
            >
              Mohammed Sathik
            </motion.h2>

            {/* HUGE Display Text */}
            <motion.div variants={itemVariants} className="mb-8 overflow-visible">
              <h1
                className="font-black text-white uppercase leading-none"
                style={{
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9,
                }}
              >
                <div className="block text-[clamp(2.8rem,5.8vw,6.8rem)]">Software</div>
                <div className="block text-gradient-white mt-1 text-[clamp(2.2rem,4.6vw,5.4rem)] whitespace-nowrap">Engineering</div>
              </h1>
            </motion.div>

            {/* Role Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-8"
            >
              {pills.map((pill, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-full glass border border-white/10 text-xs font-medium text-white/70 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default"
                >
                  {pill}
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/40 text-base md:text-lg max-w-xl leading-relaxed"
            >
              Final Year Computer Science Engineering Student passionate about
              Artificial Intelligence, Software Engineering, Flutter
              Development, AI-powered applications, and building impactful
              real-world solutions.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE — Animated Avatar */}
          <motion.div
            className="flex items-center justify-center lg:justify-end order-1 lg:order-2 relative lg:col-span-5 lg:translate-x-6"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glow circle behind avatar */}
            <div className="absolute w-[70%] aspect-square rounded-full bg-white/[0.04] blur-[80px] animate-pulse-soft z-0" />

            {/* "AI Developer" outlined text behind avatar */}
            <div className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none select-none overflow-hidden">
              <h1
                className="text-outline uppercase font-black whitespace-nowrap opacity-60"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 10rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.1)',
                  color: 'transparent',
                }}
              >
                AI Developer
              </h1>
            </div>

            {/* Avatar Image */}
            <motion.div
              className="relative z-10 w-full max-w-md"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/portrait.png"
                alt="Mohammed Sathik — Animated Avatar"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  maxHeight: '65vh',
                  filter: 'drop-shadow(0 20px 60px rgba(255,255,255,0.07))',
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
