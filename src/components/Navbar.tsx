import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenAiGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = memo(({ onOpenAiGuide }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audio] = useState(() => new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    if (audioPlaying) {
      audio.pause();
    } else {
      audio.volume = 0.2;
      audio.play().catch(() => {});
    }
    setAudioPlaying(!audioPlaying);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 px-6 py-3.5 flex items-center justify-between border ${
          scrolled
            ? 'glass-panel bg-[#050505]/80 border-[#00E5FF]/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl'
            : 'bg-[#0F0F0F]/40 border-white/10 backdrop-blur-md'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0F0F0F] border border-[#00E5FF]/40 shadow-[0_0_15px_rgba(0,229,255,0.25)] group-hover:border-[#00E5FF] transition-all duration-300">
            <span className="font-sans font-bold text-lg text-white group-hover:text-[#00E5FF] transition-colors">
              ST
            </span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-sm text-white tracking-tight group-hover:text-[#00E5FF] transition-colors">
              Sanket Tiwari
            </span>
            <span className="text-[10px] font-mono text-[#A5A5A5] tracking-wider">
              AI & CSE '29
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-1 bg-[#0F0F0F]/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-medium text-[#A5A5A5] hover:text-[#00E5FF] transition-colors duration-200 rounded-full hover:bg-white/5 relative"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Status Indicator Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[11px] font-mono text-[#00E5FF]">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
            <span>Available for Work</span>
          </div>

          {/* AI Companion Quick Trigger */}
          {onOpenAiGuide && (
            <button
              onClick={onOpenAiGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#00E5FF]/20 to-cyan-500/20 border border-[#00E5FF]/40 text-xs font-medium text-[#00E5FF] hover:bg-[#00E5FF]/30 transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              title="Ask Sanket's AI Guide"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span className="hidden sm:inline">AI Guide</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            onClick={toggleAudio}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#A5A5A5] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all"
            title={audioPlaying ? "Mute Ambient Sound" : "Play Ambient Sound"}
          >
            {audioPlaying ? (
              <Volume2 className="w-4 h-4 text-[#00E5FF] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* LinkedIn / Resume Button */}
          <a
            href={PORTFOLIO_DATA.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00E5FF] text-black font-semibold text-xs hover:bg-[#00E5FF]/90 transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] active:scale-95"
          >
            <span>Connect</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-50 rounded-2xl glass-panel border border-[#00E5FF]/30 p-6 md:hidden shadow-2xl bg-[#050505]/95 backdrop-blur-2xl"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-[#A5A5A5] hover:text-[#00E5FF] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={PORTFOLIO_DATA.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#00E5FF] text-black text-center font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                >
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Navbar.displayName = 'Navbar';
