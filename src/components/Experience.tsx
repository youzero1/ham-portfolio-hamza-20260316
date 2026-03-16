'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  accomplishments: string[];
  current: boolean;
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch('/api/experience');
        if (res.ok) {
          const data = await res.json();
          setExperiences(data);
        }
      } catch (error) {
        console.error('Failed to fetch experience:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div className="section-padding bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">Career</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mt-2">
            Work
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            My professional journey building impactful products for diverse companies and teams.
          </p>
        </motion.div>

        {loading ? (
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-8 animate-pulse">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="w-0.5 h-40 bg-slate-200 dark:bg-slate-700 mt-2" />
                </div>
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-6 space-y-3">
                  <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* Timeline line (desktop) */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-400 opacity-30" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <TimelineItem key={exp.id} exp={exp} index={i} isInView={isInView} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TimelineItem({
  exp,
  index,
  isInView,
}: {
  exp: ExperienceItem;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex gap-6 md:gap-8"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 ${
            exp.current
              ? 'bg-blue-500 border-blue-300 text-white shadow-lg shadow-blue-500/40'
              : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400'
          }`}
        >
          <FiBriefcase size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.role}</h3>
              {exp.current && (
                <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full border border-green-200 dark:border-green-800">
                  Current
                </span>
              )}
            </div>
            <p className="text-blue-500 dark:text-blue-400 font-semibold">{exp.company}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <FiCalendar size={13} /> {exp.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin size={13} /> {exp.location}
            </span>
          </div>
        </div>

        <ul className="space-y-2">
          {exp.accomplishments.map((acc, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <FiCheckCircle
                size={15}
                className="text-green-500 flex-shrink-0 mt-0.5"
              />
              <span>{acc}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
