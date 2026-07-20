import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, GraduationCap, Code, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    const resumeText = `
MOHAMMED SATHIK
Software Engineer & AI Developer
Email: mohammedsathik000@gmail.com | Phone: +91 76049 00883

SUMMARY
Passionate final-year Computer Science Engineering student with expertise in Artificial Intelligence, Software Engineering, Flutter Development, and building impactful real-world solutions.

EDUCATION
Bachelor of Engineering — Computer Science and Engineering
CSI College of Engineering, Ketti, The Nilgiris
CGPA: 7.87 | Final Year

Higher Secondary School (HSC & SSLC) — State Board
Percentage: 74.5% | Completed

PROJECTS
1. Personal Portfolio Website (Completed)
   Technologies: React, TypeScript, Tailwind CSS, Framer Motion

2. ClassBot — Customizable College Management Platform (Ongoing)
   Technologies: Flutter, Firebase, ChatGPT, Antigravity
   Features: Student Auth, Announcements, Notes, Results, Timetable, AI Chatbot, Staff Dashboard

3. Smart Unified Education Platform (Final Year Project)
   AI-powered educational platform with research, quiz, theory, journal, and search modules.

TECHNICAL SKILLS
Programming: Python, Java, C, Flutter, HTML, SQL, Power BI
Tools: VS Code, GitHub, Antigravity, ChatGPT, Claude, Gemini

CERTIFICATIONS
- Oracle Cloud Infrastructure Foundations Associate
- Ethical Hacking & Vulnerability Assessment
- Salesforce Training
- Data Analytics Internship (Power BI & Tableau)

LANGUAGES
Tamil (Native) | English (Fluent)
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mohammed_Sathik_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-3xl p-8 border border-white/10"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white/60" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Resume</h3>
                <p className="text-xs text-white/40">Mohammed Sathik — Software Engineer</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <h4 className="text-lg font-bold mb-1">Mohammed Sathik</h4>
                <p className="text-sm text-white/40 mb-3">Software Engineer & AI Developer</p>
                <p className="text-xs text-white/30 leading-relaxed">
                  Final-year CS Engineering student passionate about AI, Flutter, and building impactful solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/60 mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Education
                  </div>
                  <div className="text-xs text-white/40 space-y-1">
                    <div className="text-white/70 font-medium">BE Computer Science Engineering</div>
                    <div>CSI College of Engineering • CGPA 7.87</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/60 mb-2">
                    <Code className="w-3.5 h-3.5" />
                    Projects
                  </div>
                  <div className="text-xs text-white/40 space-y-1">
                    <div className="text-white/70 font-medium">ClassBot (Ongoing)</div>
                    <div>Smart Unified Education Platform (FYP)</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-white/60 mb-2">
                  <Award className="w-3.5 h-3.5" />
                  Certifications
                </div>
                <ul className="text-xs text-white/40 space-y-1 list-disc list-inside">
                  <li>Oracle Cloud Infrastructure Foundations Associate</li>
                  <li>Ethical Hacking & Vulnerability Assessment</li>
                  <li>Salesforce Training</li>
                  <li>Data Analytics Internship (Power BI & Tableau)</li>
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <button onClick={onClose} className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Close
              </button>
              <button
                onClick={handleDownload}
                className="btn-magnetic flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
