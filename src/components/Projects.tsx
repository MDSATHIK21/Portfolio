import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    num: "01",
    name: "Personal Portfolio Website",
    status: "Completed",
    statusBg: "bg-slate-200/70 text-slate-700 dark:bg-white/10 dark:text-white/60",
    description: "A modern, premium portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed with Apple-inspired minimalism and ultra-smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    num: "02",
    name: "ClassBot",
    status: "Ongoing",
    statusBg: "bg-blue-100 text-blue-800 dark:bg-white/20 dark:text-white font-medium",
    description: "A customizable college management platform that enables educational institutions to deploy their own digital campus application. Features student authentication, announcements, notes, results, timetable, AI chatbot, and staff dashboard.",
    tech: ["Flutter", "Firebase", "ChatGPT", "Antigravity"]
  },
  {
    num: "03",
    name: "Smart Unified Education Platform",
    status: "Final Year Project",
    statusBg: "bg-purple-100 text-purple-800 dark:bg-white/10 dark:text-white",
    description: "An AI-powered educational platform providing comprehensive academic support including research assistance, quiz generation, theory explanations, journal access, and intelligent search capabilities.",
    tech: ["AI", "Research", "Quiz", "Theory", "Journal", "Search"]
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">Projects</h2>
          <p className="text-xl text-slate-500 dark:text-white/40">Selected work & ongoing builds</p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass glass-hover rounded-3xl p-8 relative overflow-hidden group border border-slate-200/80 dark:border-white/10"
            >
              <div className="absolute -right-8 -bottom-10 pointer-events-none select-none">
                <span className="text-8xl md:text-9xl font-extrabold text-slate-900/5 dark:text-white/5">{project.num}</span>
              </div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${project.statusBg} w-fit`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-white/50 text-lg mb-8 max-w-3xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-white/60 bg-slate-100/60 dark:bg-transparent text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

