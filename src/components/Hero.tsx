import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowUpRight, ChevronDown, Sparkles, Code2, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = memo(() => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PORTFOLIO_DATA.personalInfo.typingRoles;

  useEffect(() => {
    const currentRole = roles[typingIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTypingIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingIndex, roles]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 z-10 text-center overflow-hidden">
      {/* Subtle Grid Vignette Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 z-10">
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F0F0F]/80 border border-[#00E5FF]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.2)]"
        >
          <Cpu className="w-4 h-4 text-[#00E5FF] animate-pulse" />
          <span className="text-xs font-mono text-[#00E5FF] tracking-wider uppercase">
            B.Tech Computer Science & Engineering • Class of 2029
          </span>
        </motion.div>

        {/* Hero Name Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-none">
            Sanket <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-[#00E5FF] text-glow-cyan">Tiwari</span>
          </h1>
          <p className="text-sm sm:text-lg text-[#A5A5A5] font-medium max-w-2xl mx-auto pt-2">
            {PORTFOLIO_DATA.personalInfo.institution}
          </p>
        </motion.div>

        {/* Dynamic Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-2 text-lg sm:text-2xl font-mono font-semibold"
        >
          <span className="text-white">Specialized in</span>
          <span className="px-3 py-1 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/40 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.3)] flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#00E5FF]" />
            {displayText}
            <span className="w-0.5 h-6 bg-[#00E5FF] animate-pulse" />
          </span>
        </motion.div>

        {/* Subtitle Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-xl text-[#A5A5A5] max-w-3xl leading-relaxed"
        >
          {PORTFOLIO_DATA.personalInfo.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* Connect on LinkedIn */}
          <a
            href={PORTFOLIO_DATA.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#00E5FF] text-black font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.8)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* GitHub / Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] transform hover:-translate-y-1"
          >
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span>Explore Projects</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-xs font-mono text-[#A5A5A5] hover:text-[#00E5FF] transition-colors group cursor-pointer"
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="p-2 rounded-full border border-white/10 group-hover:border-[#00E5FF]/40 bg-[#0F0F0F]/60 backdrop-blur-md animate-bounce shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <ChevronDown className="w-4 h-4 text-[#00E5FF]" />
        </div>
      </motion.a>
    </section>
  );
});

Hero.displayName = 'Hero';
