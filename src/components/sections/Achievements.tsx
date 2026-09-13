import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, CheckCircle, ArrowUpRight, GitBranch, Cpu } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { achievementsData } from '../../data/achievements';
import { profileData } from '../../data/profile';

export const Achievements: React.FC = () => {
  const achievement = achievementsData[0];

  const focusAreas = [
    {
      title: 'Data Structures & Trees',
      desc: 'Binary trees, Segment trees, Heaps, and Trie data structures.',
      icon: GitBranch,
    },
    {
      title: 'Dynamic Programming',
      desc: 'State transitions, memoization, knapsack, and grid optimization.',
      icon: Cpu,
    },
    {
      title: 'Graph Algorithms',
      desc: 'BFS, DFS, Dijkstra, Topological sort, and cycle detection.',
      icon: Code2,
    },
    {
      title: 'Binary Search & Pointers',
      desc: 'Search spaces, monotonic conditions, and sliding window paradigms.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-void border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          tag="COMPETITIVE CODING"
          title="Algorithmic"
          italicWord="discipline & problem solving"
          subtitle="Continuous practice in asymptotic complexity reduction, mathematical logic, and robust edge-case handling."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Stat Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 rounded-3xl border border-white/15 bg-gradient-to-br from-charcoal via-charcoal/80 to-void p-8 sm:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-ultra-wide text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                  <Award className="w-3.5 h-3.5" />
                  <span>VERIFIED PROBLEM SOLVER</span>
                </div>
                <span className="font-mono text-xs text-silver-500">LEETCODE + CODECHEF</span>
              </div>

              <div className="mb-8">
                <span className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-none block">
                  {achievement.stat}
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-silver-300 mt-2 block">
                  {achievement.metricLabel}
                </span>
              </div>

              <p className="text-silver-400 text-sm sm:text-base leading-relaxed mb-8">
                {achievement.description}
              </p>
            </div>

            {profileData.socialLinks.leetcode && (
              <a
                href={profileData.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-emerald-400 transition-colors pt-4 border-t border-white/10"
              >
                <Code2 className="w-4 h-4" />
                <span>VIEW LEETCODE PROFILE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </motion.div>

          {/* Core Problem Solving Domains */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <GlassCard className="h-full flex flex-col justify-between p-6">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white mb-4">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display text-base font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-silver-400 text-xs leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-silver-500 uppercase tracking-widest">
                      OPTIMAL TIME & SPACE
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
