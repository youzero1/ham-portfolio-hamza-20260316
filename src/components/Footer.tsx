'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const socialLinks = [
  {
    icon: FiGithub,
    href: 'https://github.com/alexmorgan',
    label: 'GitHub',
    color: 'hover:text-slate-200 hover:bg-slate-700',
  },
  {
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/alexmorgan',
    label: 'LinkedIn',
    color: 'hover:text-blue-400 hover:bg-blue-900/30',
  },
  {
    icon: FiTwitter,
    href: 'https://twitter.com/alexmorgan_dev',
    label: 'Twitter',
    color: 'hover:text-sky-400 hover:bg-sky-900/30',
  },
  {
    icon: FiMail,
    href: 'mailto:alex.morgan@example.com',
    label: 'Email',
    color: 'hover:text-red-400 hover:bg-red-900/30',
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black gradient-text mb-3">&lt;AlexMorgan /&gt;</div>
            <p className="text-sm leading-relaxed mb-4">
              Full Stack MERN Developer passionate about building scalable, performant web applications
              that make a difference.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border border-slate-700 text-slate-400 transition-all duration-200 ${color}`}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-white font-semibold mb-4">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'Next.js', 'TypeScript', 'Docker', 'AWS'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-slate-800 text-slate-400 rounded-md text-xs font-medium border border-slate-700"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Alex Morgan. All rights reserved. Built with Next.js &amp; Tailwind CSS.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 text-sm font-medium transition-all duration-200"
            aria-label="Back to top"
          >
            <FiArrowUp size={16} /> Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
