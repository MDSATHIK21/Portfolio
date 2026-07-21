import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const certs = [
  {
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle"
  },
  {
    title: "Salesforce Training",
    issuer: "Salesforce Ecosystem"
  },
  {
    title: "Ethical Hacking & Vulnerability Assessment",
    issuer: "Cybersecurity Certification"
  },
  {
    title: "Data Analytics Internship",
    issuer: "Power BI & Tableau"
  }
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

export const Certifications: React.FC = () => {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white">Certificates</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certs.map((cert, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass glass-hover rounded-3xl p-8 flex items-start gap-4 border border-slate-200/80 dark:border-white/10">
              <CheckCircle2 className="text-blue-600 dark:text-white/80 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-slate-500 dark:text-white/40">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

