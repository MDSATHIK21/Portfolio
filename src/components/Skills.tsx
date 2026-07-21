import React from 'react';
import { motion } from 'framer-motion';

const programming = [
  "Python", "Java", "C", "Flutter", "HTML", "SQL", "Power BI"
];

const tools = [
  "VS Code", "GitHub", "Antigravity", "ChatGPT", "Claude", "Gemini"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">Skills</h2>
          <p className="text-xl text-slate-500 dark:text-white/40">Technologies & tools I work with</p>
        </motion.div>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-medium text-slate-700 dark:text-white/80 mb-6">Programming</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {programming.map((skill, idx) => (
                <motion.div key={idx} variants={itemVariants} className="glass glass-hover rounded-2xl p-6 flex items-center justify-center border border-slate-200/80 dark:border-white/10">
                  <span className="font-semibold text-slate-800 dark:text-white/90">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-slate-700 dark:text-white/80 mb-6">Tools & AI Platforms</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {tools.map((skill, idx) => (
                <motion.div key={idx} variants={itemVariants} className="glass glass-hover rounded-2xl p-6 flex items-center justify-center border border-slate-200/80 dark:border-white/10">
                  <span className="font-semibold text-slate-800 dark:text-white/90">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

