import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Layout, Wrench, Terminal } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { skillsData } from '../../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL SKILLS', icon: Terminal },
    { id: 'ai-ml', label: 'AI & MACHINE LEARNING', icon: Brain },
    { id: 'backend', label: 'BACKEND', icon: Server },
    { id: 'frontend', label: 'FRONTEND', icon: Layout },
    { id: 'cloud-tools', label: 'CLOUD & TOOLS', icon: Wrench },
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-void border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          tag="SKILLS & STACK"
          title="Technical"
          italicWord="arsenal & competencies"
          subtitle="A curated toolset focused on artificial intelligence, asynchronous backend systems, and modern web architectures."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-4 border-b border-white/10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/5'
                    : 'bg-charcoal/60 text-silver-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Sections */}
        <div className="space-y-12">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Subtitle */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="font-mono text-xs text-silver-400 mt-1">
                    {category.subtitle}
                  </p>
                </div>
                <span className="font-mono text-xs text-silver-500 bg-charcoal px-3 py-1 rounded-full border border-white/5">
                  {category.skills.length} TECHNOLOGIES
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <GlassCard
                    key={skill.name}
                    className="p-5 sm:p-6 flex flex-col justify-between group hover:border-white/25"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-silver-200 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                      </div>
                      <p className="text-silver-400 text-xs leading-relaxed mb-6 font-normal">
                        {skill.description}
                      </p>
                    </div>

                    {skill.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] text-silver-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
