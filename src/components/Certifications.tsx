import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Linkedin, ShieldCheck, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = memo(() => {
  const certInfo = PORTFOLIO_DATA.certificationsInfo;

  return (
    <section id="certifications" className="relative py-28 px-6 z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
          <Award className="w-3.5 h-3.5" />
          <span>04 // LEARNING & CREDENTIALS</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Continuous <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-cyan-300">Learning Journey</span>
        </h2>
      </div>

      {/* Main Glassmorphism Certifications Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl group hover:border-[#00E5FF]/40 transition-all duration-500 text-center sm:text-left gpu-accelerated"
      >
        {/* Ambient Radial Cyan Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00E5FF]/20 transition-all duration-500" />

        <div className="flex flex-col space-y-8 z-10 relative">
          {/* Top Info Area */}
          <div className="space-y-6">
            {/* Floating Achievement Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-4">
              {certInfo.achievementIcons.map((icon, idx) => (
                <motion.div
                  key={idx}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: idx * 0.4,
                    ease: "easeInOut"
                  }}
                  className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0F0F0F]/80 border border-[#00E5FF]/30 text-xl shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                >
                  {icon}
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {certInfo.title}
              </h3>
              <p className="text-[#A5A5A5] text-base sm:text-lg leading-relaxed max-w-3xl">
                {certInfo.description}
              </p>
            </div>

            {/* Credential Verification Highlights */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-[#00E5FF]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                <span>AI & GenAI Certifications</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                <span>Software Development</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                <span>Cloud & Cybersecurity</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Section: Side-by-side on desktop/tablet, stacked on mobile */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6">
            {/* LinkedIn Button */}
            <a
              href={certInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all certifications on LinkedIn"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#00E5FF] text-black font-extrabold text-sm tracking-wide shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.85)] transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden w-full sm:w-auto"
            >
              {/* Shine Sweep Overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              <Linkedin className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
              <span>{certInfo.linkedinButtonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-black" />
            </a>

            {/* Google Drive Certificates Button */}
            <a
              href={certInfo.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all certifications on Google Drive"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-white/5 border border-[#00E5FF]/40 text-white font-extrabold text-sm tracking-wide hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 hover:text-[#00E5FF] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(0,229,255,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden w-full sm:w-auto"
            >
              {/* Google Drive Folder SVG Icon */}
              <svg className="w-5 h-5 text-[#00E5FF] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                <path d="M12 11v6" />
                <path d="M9 14h6" />
              </svg>
              <span>{certInfo.driveButtonText}</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-[#00E5FF]" />
            </a>
          </div>

          {/* Caption */}
          <p className="text-xs font-mono text-[#888888] pt-1 text-center sm:text-left">
            {certInfo.caption}
          </p>
        </div>
      </motion.div>
    </section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
