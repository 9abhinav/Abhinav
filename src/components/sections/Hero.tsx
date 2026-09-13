import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { profileData } from '../../data/profile';
import { HeroVisual } from '../common/HeroVisual';
import { MagneticButton } from '../common/MagneticButton';
import { GithubIcon } from '../common/Icons';
import { useMousePosition } from '../../hooks/useMousePosition';

export const Hero: React.FC = () => {
  const mousePos = useMousePosition();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden bg-void"
    >
      {/* Background Visual Layer with Depth and Parallax */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-50 pointer-events-none">
        <HeroVisual mouseParallax={{ x: mousePos.normalizedX, y: mousePos.normalizedY }} />
      </div>

      {/* Main Grid: Left/Center Content + Right Metadata */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left / Center: Oversized Editorial Typography & CTAs */}
        <div className="lg:col-span-8 flex flex-col justify-center text-left">
          
          {/* Small Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-ultra-wide text-silver-400 mb-6 bg-charcoal/60 border border-white/10 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{profileData.name.toUpperCase()} · AI / ML & SOFTWARE</span>
          </motion.div>

          {/* Large Oversized Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-8"
          >
            {profileData.headlineTitle}{' '}
            <span className="font-serif italic font-normal text-silver-300 block sm:inline">
              {profileData.editorialAccent}
            </span>{' '}
            <span className="text-white block sm:inline">
              {profileData.headlineRest}
            </span>
          </motion.h1>

          {/* Concise, impactful introduction */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-silver-300 font-normal leading-relaxed max-w-2xl mb-10"
          >
            {profileData.subIntro}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <MagneticButton href="#projects" variant="primary" size="md" id="hero-view-projects">
              <span>VIEW PROJECTS</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </MagneticButton>

            <MagneticButton href="#resume" variant="secondary" size="md" id="hero-view-resume">
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME ↗</span>
            </MagneticButton>

            <MagneticButton
              href={profileData.socialLinks.github}
              isExternal
              variant="outline"
              size="md"
              id="hero-github"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB ↗</span>
            </MagneticButton>

            <MagneticButton href="#contact" variant="ghost" size="md" id="hero-get-in-touch">
              <span>GET IN TOUCH →</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Minimalist Metadata Column (Exact reference inspiration) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col justify-center"
        >
          <div className="rounded-2xl border border-white/10 bg-charcoal/50 backdrop-blur-xl p-6 sm:p-8 space-y-6">
            
            {/* Role */}
            <div className="border-b border-white/5 pb-4">
              <span className="font-mono text-[10px] tracking-ultra-wide uppercase text-silver-500 block mb-1">
                ROLE
              </span>
              <span className="font-display text-sm sm:text-base font-bold text-white tracking-tight">
                {profileData.metadata.role}
              </span>
            </div>

            {/* Focus */}
            <div className="border-b border-white/5 pb-4">
              <span className="font-mono text-[10px] tracking-ultra-wide uppercase text-silver-500 block mb-1">
                FOCUS
              </span>
              <span className="font-display text-sm sm:text-base font-medium text-silver-200 tracking-tight">
                {profileData.metadata.focus}
              </span>
            </div>

            {/* Education */}
            <div className="border-b border-white/5 pb-4">
              <span className="font-mono text-[10px] tracking-ultra-wide uppercase text-silver-500 block mb-1">
                EDUCATION
              </span>
              <span className="font-display text-sm sm:text-base font-medium text-silver-200 tracking-tight">
                {profileData.metadata.education}
              </span>
            </div>

            {/* Competitive Programming */}
            <div className="border-b border-white/5 pb-4">
              <span className="font-mono text-[10px] tracking-ultra-wide uppercase text-silver-500 block mb-1">
                COMPETITIVE
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-emerald-400 tracking-tight flex items-center gap-2">
                <span>{profileData.metadata.competitive}</span>
                <span className="text-[11px] font-mono text-silver-400">(LeetCode + CodeChef)</span>
              </span>
            </div>

            {/* Status */}
            <div>
              <span className="font-mono text-[10px] tracking-ultra-wide uppercase text-silver-500 block mb-1">
                STATUS
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-silver-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{profileData.metadata.availability}</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom: Scroll to explore indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center pt-8"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 font-mono text-[10px] tracking-mega-wide uppercase text-silver-500 hover:text-white transition-colors"
          aria-label="Scroll to explore"
        >
          <span>SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-7 w-4 items-start justify-center rounded-full border border-white/20 p-1"
          >
            <div className="h-1.5 w-1 rounded-full bg-white" />
          </motion.div>
        </a>
      </motion.div>

    </section>
  );
};
