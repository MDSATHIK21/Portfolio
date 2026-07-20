import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">About Me</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="text-xl text-white/70 leading-relaxed font-light">
              I am a passionate final-year Computer Science Engineering student with a deep interest in Artificial Intelligence, Software Engineering, and building impactful digital solutions. I specialize in Flutter development for cross-platform mobile applications and embrace AI-assisted development workflows to accelerate innovation. My approach combines classical engineering principles with modern AI-powered tools to create efficient, scalable, and user-centric applications.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* College Education */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col justify-between h-full gap-6">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="text-xl font-bold text-white">Bachelor of Engineering</h4>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">College</span>
                  </div>
                  <p className="text-white/70 mb-1 text-base font-medium">Computer Science and Engineering</p>
                  <p className="text-white/40 text-sm">CSI College of Engineering • Ketti, The Nilgiris</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-sm">
                  <span className="text-white/50">Final Year</span>
                  <span className="text-white font-semibold bg-white/10 px-3 py-1 rounded-full">CGPA: 7.87</span>
                </div>
              </div>
            </div>

            {/* School Education */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col justify-between h-full gap-6">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="text-xl font-bold text-white">Higher Secondary (HSC & SSLC)</h4>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">School</span>
                  </div>
                  <p className="text-white/70 mb-1 text-base font-medium">Higher Secondary & High Schooling</p>
                  <p className="text-white/40 text-sm">State Board • Computer Science / Mathematics</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-sm">
                  <span className="text-white/50">School Education</span>
                  <span className="text-white font-semibold bg-white/10 px-3 py-1 rounded-full">Completed • 74.5%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
