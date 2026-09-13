import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Send, ArrowUpRight, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { profileData } from '../../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#a1a1aa', '#34d399', '#38bdf8'],
      });
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-void border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="07"
          tag="INITIATE CONTACT"
          title="Let's build"
          italicWord="something worth shipping."
          subtitle="Currently open to full-time engineering roles, high-impact internships, and collaborative AI/software projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact & Social Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <GlassCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-ultra-wide text-silver-400 block mb-3">
                  // DIRECT INBOX
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                  Start a conversation.
                </h3>

                <p className="text-silver-300 text-sm leading-relaxed mb-8">
                  Whether you are hiring for an AI/ML or Software Engineering role, or exploring a technical collaboration, my inbox is always open.
                </p>

                {/* Interactive Copy Email Pill */}
                <div className="p-4 rounded-xl bg-void/70 border border-white/10 mb-8">
                  <span className="font-mono text-[10px] text-silver-500 uppercase tracking-wider block mb-1">
                    PRIMARY EMAIL
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs sm:text-sm text-white font-medium truncate">
                      {profileData.socialLinks.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-surface-light hover:bg-surface text-silver-300 hover:text-white transition-colors cursor-pointer shrink-0"
                      aria-label="Copy email to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {copied && (
                    <span className="font-mono text-[10px] text-emerald-400 block mt-1">
                      ✓ Copied to clipboard!
                    </span>
                  )}
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-6 border-t border-white/10 space-y-3 font-mono text-xs">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-colors text-silver-300 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4" />
                    <span>GITHUB</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-silver-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-colors text-silver-300 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LINKEDIN</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-silver-500 group-hover:text-white transition-colors" />
                </a>

                {profileData.socialLinks.leetcode && (
                  <a
                    href={profileData.socialLinks.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-colors text-silver-300 hover:text-white group"
                  >
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4" />
                      <span>LEETCODE (300+)</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-silver-500 group-hover:text-white transition-colors" />
                  </a>
                )}
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Quick Contact Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-ultra-wide text-silver-400 block mb-2">
                  // QUICK DISPATCH
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
                  Send a Direct Message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center my-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mx-auto mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white mb-2">
                      Message Dispatched!
                    </h4>
                    <p className="text-silver-300 text-xs sm:text-sm">
                      Thank you for reaching out. I'll get back to you promptly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-mono text-[10px] uppercase tracking-wider text-silver-400 mb-2"
                      >
                        YOUR NAME
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full rounded-xl bg-void/70 border border-white/10 px-4 py-3 text-sm text-white placeholder-silver-600 focus:border-white/40 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-mono text-[10px] uppercase tracking-wider text-silver-400 mb-2"
                      >
                        YOUR EMAIL *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full rounded-xl bg-void/70 border border-white/10 px-4 py-3 text-sm text-white placeholder-silver-600 focus:border-white/40 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block font-mono text-[10px] uppercase tracking-wider text-silver-400 mb-2"
                      >
                        YOUR MESSAGE *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Discussing an engineering role, project, or technical challenge..."
                        className="w-full rounded-xl bg-void/70 border border-white/10 px-4 py-3 text-sm text-white placeholder-silver-600 focus:border-white/40 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider hover:bg-silver-200 transition-colors shadow-lg shadow-white/5 active:scale-95 disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>DISPATCHING...</span>
                        ) : (
                          <>
                            <span>SEND MESSAGE</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="pt-6 border-t border-white/5 font-mono text-[11px] text-silver-500 mt-6">
                <span>REPLY TIME: TYPICALLY WITHIN 24 HOURS</span>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
