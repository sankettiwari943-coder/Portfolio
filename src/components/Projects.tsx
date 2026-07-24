import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Terminal, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Projects: React.FC = memo(() => {
  const project = PORTFOLIO_DATA.project;

  return (
    <section id="projects" className="relative py-28 px-6 z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>03 // FEATURED SOFTWARE PROJECT</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineered With <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-cyan-300">Precision & Architecture</span>
        </h2>
      </div>

      {/* Premium Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl relative group hover:border-[#00E5FF]/50 transition-all duration-500 gpu-accelerated"
      >
        {/* Background Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00E5FF]/20 transition-all duration-500" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Details & Tech Badges */}
          <div className="lg:col-span-6 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              <span>CORE PYTHON ARCHITECTURE</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {project.title}
            </h3>

            <p className="text-[#A5A5A5] text-base sm:text-lg leading-relaxed font-normal">
              {project.fullDesc}
            </p>

            {/* Tech Badges */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-[#A5A5A5] uppercase tracking-wider block">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF] shadow-sm hover:border-[#00E5FF]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Link Button */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[#00E5FF] text-black font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.8)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
                <span>Explore Repository on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High Quality SaaS Product Graphic Mockup */}
          <div className="lg:col-span-6 relative group/img">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0F0F0F] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Graphic Mockup Image with Lazy Load & Async Decoding */}
              <img
                src={project.mockupIllustration}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover/img:scale-105"
              />

              {/* Cyan Neon Border Frame Effect */}
              <div className="absolute inset-0 border border-[#00E5FF]/20 rounded-2xl pointer-events-none group-hover/img:border-[#00E5FF]/60 transition-colors" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050505]/90 border border-white/10 backdrop-blur-md flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00E5FF]" />
                  <span className="text-xs font-mono text-white">CLI Operations • Attendance • Records</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  VERIFIED REPO
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Projects.displayName = 'Projects';
