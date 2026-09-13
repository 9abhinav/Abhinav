import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  italicWord,
  subtitle,
  align = 'left',
}) => {
  return (
    <div className={`mb-12 md:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'}`}>
      {/* Small uppercase metadata label with letter-spacing */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-ultra-wide text-silver-400 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="text-white font-semibold">{`// ${number}`}</span>
        <span className="h-[1px] w-6 bg-white/20" />
        <span>{tag}</span>
      </motion.div>

      {/* Main oversized editorial heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
      >
        {title}{' '}
        {italicWord && (
          <span className="font-serif italic font-normal text-silver-300">
            {italicWord}
          </span>
        )}
      </motion.h2>

      {/* Supporting subtitle if provided */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base sm:text-lg text-silver-400 font-normal leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
