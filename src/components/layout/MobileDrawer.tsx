import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { profileData } from '../../data/profile';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const menuLinks = [
    { label: 'ABOUT', href: '#about', number: '01' },
    { label: 'PROJECTS', href: '#projects', number: '02' },
    { label: 'SKILLS', href: '#skills', number: '03' },
    { label: 'ACHIEVEMENTS', href: '#achievements', number: '04' },
    { label: 'EXPERIENCE', href: '#experience', number: '05' },
    { label: 'RESUME', href: '#resume', number: '06' },
    { label: 'CONTACT', href: '#contact', number: '07' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col bg-void/95 backdrop-blur-2xl p-6 sm:p-10 justify-between overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-extrabold text-xs">
                AD
              </div>
              <span className="font-display text-sm font-bold tracking-tight text-white">
                {profileData.name}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-light border border-white/10 text-white hover:bg-surface focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <div className="flex flex-col gap-4 my-8">
            {menuLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group flex items-baseline justify-between py-2 border-b border-white/5"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-silver-500">{item.number}</span>
                  <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-silver-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-silver-600 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Bottom Info & Socials */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-silver-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Available for AI / Software Engineering Roles</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="text-silver-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-silver-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.socialLinks.email}`}
                className="text-silver-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
