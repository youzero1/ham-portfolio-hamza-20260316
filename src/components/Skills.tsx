'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
      { name: 'Next.js', level: 92, color: 'from-slate-400 to-slate-600' },
      { name: 'TypeScript', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' },
      { name: 'HTML5', level: 98, color: 'from-orange-400 to-red-500' },
      { name: 'CSS3', level: 90, color: 'from-blue-400 to-cyan-500' },
      { name: 'Tailwind CSS', level: 93, color: 'from-teal-400 to-cyan-500' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 94, color: 'from-green-400 to-green-600' },
      { name: 'Express.js', level: 92, color: 'from-slate-300 to-slate-500' },
      { name: 'MongoDB', level: 91, color: 'from-green-500 to-emerald-600' },
      { name: 'REST APIs', level: 96, color: 'from-purple-400 to-purple-600' },
      { name: 'GraphQL', level: 82, color: 'from-pink-400 to-rose-500' },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 93, color: 'from-orange-400 to-red-500' },
      { name: 'Docker', level: 80, color: 'from-blue-400 to-blue-600' },
      { name: 'AWS', level: 75, color: 'from-orange-400 to-yellow-500' },
    ],
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{skill.name}</span>
        <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="section-padding bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">Skills</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mt-2">
            My Technical
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across the full stack, from frontend
            development to backend architecture and DevOps practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {category.category}
                </h3>
              </div>
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={catIdx * 0.15 + skillIdx * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm font-medium uppercase tracking-widest">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redis', 'PostgreSQL', 'MySQL', 'Prisma', 'Jest',
              'Cypress', 'Webpack', 'Vite', 'Nginx', 'Linux',
              'Socket.io', 'Stripe API', 'Firebase', 'Cloudinary',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm border border-slate-200 dark:border-slate-700 font-medium hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
