import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { MagneticButton } from '../common/MagneticButton';
import { ProjectVisual } from '../common/ProjectVisual';
import { GithubIcon } from '../common/Icons';
import { projectsData } from '../../data/projects';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features'>('overview');
  const flagship = projectsData[0];

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-void border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="02"
          tag="FEATURED WORK"
          title="Engineered"
          italicWord="case studies"
          subtitle="Real-world intelligent systems built with low latency, robust pipelines, and production-grade architectures."
        />

        {/* Flagship Case Study Presentation */}
        {flagship && (
          <div className="relative rounded-3xl border border-white/15 bg-charcoal/40 backdrop-blur-2xl p-6 sm:p-10 lg:p-14 overflow-hidden mb-16 shadow-2xl">
            {/* Top Bar: Number & Category */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold text-sm sm:text-base">PROJECT {flagship.number}</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="text-silver-400 uppercase tracking-widest">{flagship.category}</span>
              </div>

              <div className="flex items-center gap-3">
                {flagship.githubUrl && (
                  <MagneticButton
                    href={flagship.githubUrl}
                    isExternal
                    variant="outline"
                    size="sm"
                    id="project-github-btn"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>VIEW GITHUB ↗</span>
                  </MagneticButton>
                )}
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="max-w-4xl mb-10">
              <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                {flagship.title}
              </h3>
              <p className="text-silver-300 text-sm sm:text-lg font-normal leading-relaxed">
                {flagship.tagline}
              </p>
            </div>

            {/* Visual Interface Showcase */}
            <div className="mb-12">
              <ProjectVisual />
            </div>

            {/* Case Study Interactive Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 mb-8 pb-3 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-white text-black font-bold'
                    : 'text-silver-400 hover:text-white bg-transparent'
                }`}
              >
                01 // OVERVIEW & IMPACT
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'architecture'
                    ? 'bg-white text-black font-bold'
                    : 'text-silver-400 hover:text-white bg-transparent'
                }`}
              >
                02 // SYSTEM ARCHITECTURE
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('features')}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'features'
                    ? 'bg-white text-black font-bold'
                    : 'text-silver-400 hover:text-white bg-transparent'
                }`}
              >
                03 // KEY CAPABILITIES
              </button>
            </div>

            {/* Tab Content Panes */}
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div className="p-6 rounded-2xl border border-white/10 bg-void/50">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-red-400 block mb-2">
                      // THE PROBLEM
                    </span>
                    <h4 className="font-display text-lg font-bold text-white mb-2">
                      Latency & Multi-Vehicle Occlusion
                    </h4>
                    <p className="text-silver-400 text-xs sm:text-sm leading-relaxed">
                      {flagship.problem}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-white/10 bg-void/50">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 block mb-2">
                      // THE ENGINEERING SOLUTION
                    </span>
                    <h4 className="font-display text-lg font-bold text-white mb-2">
                      Geometric Calibration & Asynchronous Dispatch
                    </h4>
                    <p className="text-silver-400 text-xs sm:text-sm leading-relaxed">
                      {flagship.solution}
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'architecture' && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {flagship.architectureSteps.map((step, idx) => (
                    <div
                      key={step.title}
                      className="p-5 rounded-2xl border border-white/10 bg-void/60 flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-mono text-[10px] text-silver-500 uppercase tracking-widest block mb-2">
                          PHASE 0{idx + 1}
                        </span>
                        <h4 className="font-display text-sm font-bold text-white mb-2">
                          {step.title}
                        </h4>
                        <p className="text-silver-400 text-xs leading-relaxed mb-4">
                          {step.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/5">
                        <span className="font-mono text-[10px] text-silver-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          {step.tech}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'features' && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {flagship.keyFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="p-4 rounded-xl border border-white/10 bg-void/50 flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-silver-300 text-xs sm:text-sm leading-relaxed font-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Tech Pills */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-silver-500 mr-2 uppercase tracking-wider">
                  TECHNOLOGIES:
                </span>
                {flagship.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-silver-300 bg-white/[0.06] px-3 py-1 rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {flagship.githubUrl && (
                <a
                  href={flagship.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-silver-300 transition-colors"
                >
                  <span>EXPLORE REPOSITORY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
