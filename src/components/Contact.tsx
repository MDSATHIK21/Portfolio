import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface ContactProps {
  onOpenResume?: () => void;
}

const contacts = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "mohammedsathik000@gmail.com",
    href: "mailto:mohammedsathik000@gmail.com"
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 76049 00883",
    href: "tel:+917604900883"
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/mohammedsathik",
    href: "https://linkedin.com/in/mohammedsathik",
    target: "_blank"
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/MDSATHIK21",
    href: "https://github.com/MDSATHIK21",
    target: "_blank"
  }
];

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">Let's work together</h2>
          <p className="text-xl text-white/40">Have a project or opportunity? Reach out.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target={contact.target}
              rel={contact.target === "_blank" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass glass-hover p-6 rounded-2xl flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white transition-colors duration-300">
                {contact.icon}
              </div>
              <div>
                <p className="text-sm text-white/40 mb-1">{contact.label}</p>
                <p className="font-medium text-white/90 truncate">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <button 
            onClick={onOpenResume}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors duration-300"
          >
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};
