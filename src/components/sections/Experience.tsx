import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { educationData, targetOpportunities, experienceData } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-void border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          tag="ACADEMICS & ROLES"
          title="Academic foundation"
          italicWord="& opportunity focus"
          subtitle="Rigorous computer science education paired with targeted capabilities for modern engineering teams."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <GlassCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-silver-500 block">
                      UNDERGRADUATE DEGREE
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      B.Tech in Computer Science
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-silver-300 text-sm leading-relaxed">
                    Comprehensive study in artificial intelligence, computational algorithms, discrete mathematics, and software design principles.
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-silver-400 block mb-3">
                      KEY COURSEWORK & FOCUS:
                    </span>
                    <ul className="space-y-2">
                      {educationData.focusAreas.map((area) => (
                        <li key={area} className="flex items-center gap-2 text-xs text-silver-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-silver-500">
                <span>STATUS: FINAL YEAR CANDIDATE</span>
                <span className="text-emerald-400">READY FOR ROLES</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Target Opportunities Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-ultra-wide text-silver-400 block">
                // TARGET ROLES & VALUE DELIVERED
              </span>
            </div>

            {targetOpportunities.map((opp, idx) => (
              <motion.div
                key={opp.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                <GlassCard className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="font-display text-base sm:text-lg font-bold text-white">
                      {opp.role}
                    </h4>
                    <div className="flex items-center gap-2">
                      {opp.types.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-silver-400 text-xs sm:text-sm leading-relaxed">
                    {opp.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* If user adds experience items in the future, render them here seamlessly */}
        {experienceData.length > 0 && (
          <div className="space-y-6 pt-12 border-t border-white/10">
            <h3 className="font-display text-xl font-bold text-white">Work Experience</h3>
            {experienceData.map((exp) => (
              <GlassCard key={exp.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-silver-400 text-sm">{exp.companyOrOrg}</p>
                  </div>
                  <span className="font-mono text-xs text-silver-500">{exp.period}</span>
                </div>
                <p className="text-silver-300 text-sm mt-3">{exp.description}</p>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
