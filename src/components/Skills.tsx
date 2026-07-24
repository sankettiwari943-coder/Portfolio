import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Wrench, Globe, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = memo(() => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code className="w-5 h-5 text-[#00E5FF]" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-[#00E5FF]" />;
      case 'Artificial Intelligence':
        return <Cpu className="w-5 h-5 text-[#00E5FF]" />;
      case 'Developer Tools & Platforms':
        return <Wrench className="w-5 h-5 text-[#00E5FF]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00E5FF]" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 px-6 z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>02 // TECHNICAL SKILLS & CAPABILITIES</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Tools & Languages <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-cyan-300">I Empower Projects With</span>
        </h2>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.skills.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6 hover:border-[#00E5FF]/30 transition-all duration-300 shadow-xl group relative overflow-hidden gpu-accelerated"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00E5FF]/15 transition-all" />

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#0F0F0F] border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                {getCategoryIcon(category.category)}
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {category.category}
              </h3>
            </div>

            {/* Capsules Grid */}
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="interactive flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0F0F0F]/80 border border-white/10 hover:border-[#00E5FF]/60 hover:bg-white/10 transition-all duration-300 shadow-md group/capsule cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] group-hover/capsule:animate-ping" />
                  <span className="text-sm font-semibold text-white group-hover/capsule:text-[#00E5FF] transition-colors">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#A5A5A5] border border-white/5">
                      {skill.level}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
