'use client';

import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-4 leading-tight"
          >
            Alex{' '}
            <span className="gradient-text">Morgan</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
              <span className="text-blue-400">&lt;</span>
              <span>MERN Stack Developer</span>
              <span className="text-blue-400">/&gt;</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Building scalable, high-performance web applications with{' '}
            <span className="text-blue-400 font-semibold">MongoDB</span>,{' '}
            <span className="text-green-400 font-semibold">Express.js</span>,{' '}
            <span className="text-cyan-400 font-semibold">React</span>, and{' '}
            <span className="text-lime-400 font-semibold">Node.js</span>.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59,130,246,0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-200 text-lg"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 border-2 border-blue-500/50 hover:border-blue-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-lg backdrop-blur-sm"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            {[
              { icon: FiGithub, href: 'https://github.com/alexmorgan', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/alexmorgan', label: 'LinkedIn' },
              { icon: FiTwitter, href: 'https://twitter.com/alexmorgan_dev', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 border border-white/20 text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={28} />
        </motion.div>
      </motion.button>
    </div>
  );
}
