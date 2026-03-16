'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiLayers } from 'react-icons/fi';

const stats = [
  { label: 'Years Experience', value: '6+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Technologies', value: '20+' },
];

const expertise = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description: 'Crafting beautiful, responsive UIs with React, Next.js, and TypeScript. Focused on performance and user experience.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description: 'Building robust RESTful APIs and GraphQL services with Node.js, Express.js, and secure authentication.',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: FiDatabase,
    title: 'Database Design',
    description: 'Designing efficient schemas with MongoDB and SQL databases. Expert in query optimization and data modeling.',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: FiLayers,
    title: 'Full Stack Architecture',
    description: 'Architecting scalable, cloud-native applications with Docker, AWS, and modern DevOps practices.',
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="section-padding bg-white dark:bg-slate-800/50 transition-colors duration-300">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mt-2">
            Passionate about building
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
            great software
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-8xl font-black mb-2">AM</div>
                    <div className="text-lg font-semibold opacity-80">Alex Morgan</div>
                    <div className="text-sm opacity-60">MERN Developer</div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-20 h-20 border-4 border-dashed border-blue-500/40 rounded-full"
              />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                6+
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Hi, I&apos;m Alex Morgan 👋
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              I&apos;m a passionate Full Stack MERN Developer with over 6 years of experience building
              scalable web applications. I specialize in creating end-to-end solutions that deliver
              exceptional user experiences while maintaining clean, maintainable code.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              My expertise spans the entire JavaScript ecosystem — from crafting pixel-perfect React
              interfaces to architecting robust Node.js backends and designing efficient MongoDB schemas.
              I thrive in collaborative environments and am always eager to tackle complex technical
              challenges with innovative solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Team Player', 'Continuous Learner', 'Open Source Contributor'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200/50 dark:border-slate-600/50"
            >
              <div className="text-4xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl ${item.bg} border border-slate-200/50 dark:border-slate-600/50 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} border border-current/20 flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon size={24} />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-2">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
