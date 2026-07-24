import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Compass, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = memo(() => {
  return (
    <section id="about" className="relative py-28 px-6 z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
          <Terminal className="w-3.5 h-3.5" />
          <span>01 // ABOUT ME</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Architecting Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-cyan-300">Digital Reality</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Storytelling Narrative Glass Box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6 relative overflow-hidden group hover:border-[#00E5FF]/40 transition-all duration-500 shadow-2xl gpu-accelerated"
        >
          {/* Subtle Ambient Glow Pill */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00E5FF]/20 transition-all duration-500" />

          <div className="flex items-center gap-3 text-xs font-mono text-[#00E5FF]">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>MY PHILOSOPHY & MOTIVATION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            {PORTFOLIO_DATA.personalInfo.aboutText[0]}
          </h3>

          <p className="text-[#A5A5A5] leading-relaxed text-base sm:text-lg">
            {PORTFOLIO_DATA.personalInfo.aboutText[1]}
          </p>

          <p className="text-[#A5A5A5] leading-relaxed text-base sm:text-lg">
            {PORTFOLIO_DATA.personalInfo.aboutText[2]}
          </p>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center space-y-1">
              <span className="text-2xl font-bold text-[#00E5FF]">B.Tech</span>
              <p className="text-xs text-[#A5A5A5]">CSE Student</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center space-y-1">
              <span className="text-2xl font-bold text-white">2029</span>
              <p className="text-xs text-[#A5A5A5]">Graduation Year</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center space-y-1">
              <span className="text-2xl font-bold text-[#00E5FF]">AI & SE</span>
              <p className="text-xs text-[#A5A5A5]">Core Focus</p>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline Overview Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-white/10 space-y-6 relative gpu-accelerated"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION TIMELINE</span>
            </div>
            <span className="text-xs font-mono text-[#A5A5A5]">NIET Greater Noida</span>
          </div>

          <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#00E5FF] before:via-cyan-600 before:to-white/10">
            {PORTFOLIO_DATA.education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-10 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00E5FF] group-hover:scale-125 group-hover:bg-[#00E5FF] transition-all shadow-[0_0_10px_#00E5FF]" />

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-[#00E5FF]/30 transition-all space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#00E5FF] font-semibold">
                      {item.period}
                    </span>
                    <span className="text-base">{item.icon}</span>
                  </div>
                  <h4 className="text-base font-bold text-white">{item.degree}</h4>
                  <p className="text-xs font-medium text-[#A5A5A5]">{item.institution}</p>
                  <p className="text-[11px] text-zinc-400 font-mono pt-1">{item.boardOrDetails}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

About.displayName = 'About';
