import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-void/90 py-16 px-6 sm:px-12 lg:px-20 text-silver-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              {profileData.name.toUpperCase()}
            </h3>
            <p className="text-silver-400 text-sm tracking-wide">
              AI ENGINEER · SOFTWARE DEVELOPER
            </p>
          </div>

          {/* Time and location pill */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col text-left">
              <span className="text-silver-500 uppercase tracking-widest text-[10px]">LOCAL TIME (IST)</span>
              <span className="text-white font-medium">{time || '01:25 AM'} · UTC+5:30</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-surface-light px-4 py-2 text-white hover:bg-surface hover:border-white/20 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-white/[0.06]" />

        {/* Bottom Tier: Socials & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profileData.socialLinks.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            {profileData.socialLinks.leetcode && (
              <a
                href={profileData.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>LeetCode</span>
              </a>
            )}
          </div>

          <div className="text-silver-500">
            <span>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
