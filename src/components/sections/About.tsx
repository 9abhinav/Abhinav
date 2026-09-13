import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Layout } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Machine Learning & Computer Vision',
      description:
        'Architecting deep learning and vision pipelines with Python and OpenCV. Experienced in real-time object detection, multi-object tracking, and mathematical coordinate transformation for automated spatial analytics.',
      tags: ['Computer Vision', 'Deep Learning', 'Python', 'Inference Optimization'],
    },
    {
      icon: Server,
      title: 'High-Throughput Backend Architecture',
      description:
        'Building asynchronous, non-blocking REST microservices using FastAPI and Python. Implementing structured SQL database schemas, background worker pipelines, and deterministic API contracts.',
      tags: ['FastAPI', 'Python Backend', 'SQL', 'RESTful APIs'],
    },
    {
      icon: Layout,
      title: 'Modern Full-Stack & Systems Integration',
      description:
        'Developing responsive, type-safe frontend web applications using React and TypeScript. Seamlessly connecting complex AI backend pipelines to intuitive, real-time client interfaces.',
      tags: ['React', 'TypeScript', 'JavaScript', 'System Architecture'],
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-void border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          tag="ABOUT ME"
          title="Architecting"
          italicWord="intelligent systems"
          subtitle="A disciplined software engineer driven by machine intelligence, clean architecture, and rigorous problem-solving."
        />

        {/* Big Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-silver-200 font-medium leading-relaxed">
              I bridge the gap between theoretical machine learning and production-grade software engineering. Rather than treating AI as a black box, I focus on <span className="text-white underline decoration-white/20 underline-offset-8">scalable inference pipelines</span>, predictable latencies, and mathematically sound implementations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between text-silver-400 text-sm sm:text-base leading-relaxed space-y-4 font-normal"
          >
            <p>
              My engineering approach is rooted in algorithmic discipline, having solved <strong>300+ problems</strong> across LeetCode and CodeChef. Whether building computer vision systems for traffic surveillance or architecting FastAPI services, I prioritize clean separation of concerns, testability, and deterministic performance.
            </p>
            <div className="p-4 rounded-xl border border-white/10 bg-charcoal/40 font-mono text-xs text-silver-300">
              <span className="text-white font-semibold block mb-1">// TARGET ROLES</span>
              <span>AI Engineer · Software Engineer · Backend Developer · AI/ML & SWE Internships</span>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
              >
                <GlassCard className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-silver-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-silver-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
