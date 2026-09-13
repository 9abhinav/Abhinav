import React from 'react';
import { FileText, Download, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { MagneticButton } from '../common/MagneticButton';
import { profileData } from '../../data/profile';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-void border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="06"
          tag="CURRICULUM VITAE"
          title="Professional"
          italicWord="resume & credentials"
          subtitle="A comprehensive single-page summary engineered for technical recruiters, hiring managers, and engineering leads."
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 sm:p-12 border-white/15 bg-gradient-to-br from-charcoal/80 to-void">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Document Icon & Preview Info */}
              <div className="md:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-void/60 border border-white/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h4 className="font-display text-base font-bold text-white mb-1">
                  {profileData.name} — Resume
                </h4>
                <span className="font-mono text-xs text-silver-400 mb-4">
                  AI Engineer & Software Dev
                </span>

                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ATS-COMPLIANT PDF</span>
                </div>
              </div>

              {/* Highlights & Metadata */}
              <div className="md:col-span-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-silver-400 mb-4">
                    <span>FORMAT: PDF</span>
                    <span>•</span>
                    <span>UPDATED: 2026</span>
                    <span>•</span>
                    <span>LOCATION: public/resume.pdf</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                    Engineered for Instant Technical Evaluation
                  </h3>

                  <p className="text-silver-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    Contains in-depth breakdowns of real-time computer vision implementations, FastAPI backend services, 300+ solved algorithmic problems, core competencies, and academic background.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-silver-400 mb-6 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Python & ML Stack</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>FastAPI Backend</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>React & TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>300+ DSA Solutions</span>
                    </div>
                  </div>
                </div>

                {/* Download and View Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <MagneticButton
                    href="/resume.pdf"
                    isExternal
                    variant="primary"
                    size="md"
                    id="view-resume-btn"
                  >
                    <span>VIEW RESUME</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </MagneticButton>

                  <MagneticButton
                    href="/resume.pdf"
                    download="Abhinav_Dewangan_Resume.pdf"
                    variant="outline"
                    size="md"
                    id="download-resume-btn"
                  >
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD PDF</span>
                  </MagneticButton>
                </div>
              </div>

            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
