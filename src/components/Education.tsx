import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = memo(() => {
  return (
    <section id="education" className="relative py-28 px-6 z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>05 // ACADEMIC MILESTONES</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-cyan-300">Foundation</span>
        </h2>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2.5 sm:before:left-4 before:top-2 before:bottom-2 before:w-1 before:bg-gradient-to-b before:from-[#00E5FF] before:via-cyan-600 before:to-white/10">
        {PORTFOLIO_DATA.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-8 sm:pl-10 group"
          >
            {/* Glowing Milestone Marker Node */}
            <div className="absolute left-0 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_#00E5FF] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] group-hover:bg-black transition-colors" />
            </div>

            {/* Glassmorphism Education Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl group-hover:shadow-[0_10px_35px_rgba(0,229,255,0.25)] gpu-accelerated">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[11px] font-mono text-[#00E5FF] flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-[#00E5FF]" />
                  <span>{edu.status}</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#00E5FF] transition-colors">
                  {edu.degree}
                </h3>
                <h4 className="text-base font-medium text-[#A5A5A5] flex items-center gap-2">
                  <span>{edu.institution}</span>
                </h4>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>{edu.boardOrDetails}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

Education.displayName = 'Education';
