import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu } from 'lucide-react';
import { profileData } from '../../data/profile';
import { useScrollSpy } from '../../hooks/useScrollSpy';

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'RESUME', href: '#resume', id: 'resume' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const activeSection = useScrollSpy(
    ['hero', 'about', 'projects', 'skills', 'achievements', 'experience', 'resume', 'contact'],
    160
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 max-w-7xl w-full ${
          isScrolled
            ? 'glass-pill shadow-2xl shadow-black/80 bg-obsidian/85 border border-white/10'
            : 'bg-void/40 backdrop-blur-md border border-white/[0.06]'
        }`}
      >
        {/* Left: Monogram / Name & Role Ticker */}
        <a
          href="#hero"
          className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full pr-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-extrabold text-xs tracking-tighter">
            AD
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-silver-300 transition-colors">
              {profileData.name.toUpperCase()}
            </span>
            <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] text-silver-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI ENGINEER / DEV</span>
            </div>
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-1 rounded-full bg-charcoal/60 px-3 py-1.5 border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors duration-300 rounded-full ${
                  isActive ? 'text-white font-semibold' : 'text-silver-400 hover:text-silver-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-black px-4 sm:px-5 py-1.5 sm:py-2 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-silver-200 transition-all shadow-md shadow-white/5 active:scale-95"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full bg-surface-light border border-white/10 text-white hover:bg-surface focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </motion.nav>
    </header>
  );
};
