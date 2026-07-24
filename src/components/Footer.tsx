import React, { memo, useCallback } from 'react';
import { Linkedin, Github, Code, Instagram, Phone, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = memo(() => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const footerSocials = [
    { label: 'LinkedIn', url: PORTFOLIO_DATA.contacts.linkedin, icon: <Linkedin className="w-4 h-4" /> },
    { label: 'GitHub', url: PORTFOLIO_DATA.contacts.github, icon: <Github className="w-4 h-4" /> },
    { label: 'LeetCode', url: PORTFOLIO_DATA.contacts.leetcode, icon: <Code className="w-4 h-4" /> },
    { label: 'Instagram', url: PORTFOLIO_DATA.contacts.instagram, icon: <Instagram className="w-4 h-4" /> },
    { label: 'WhatsApp', url: PORTFOLIO_DATA.contacts.whatsappUrl, icon: <Phone className="w-4 h-4" /> },
    { label: 'Email', url: PORTFOLIO_DATA.contacts.emailMailto, icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505]/90 backdrop-blur-xl py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side Info */}
        <div className="space-y-1">
          <p className="text-sm font-bold text-white tracking-wide">
            Designed & Developed by <span className="text-[#00E5FF]">Sanket Tiwari</span>
          </p>
          <p className="text-xs font-mono text-[#A5A5A5]">
            B.Tech CSE (2029) | NIET Greater Noida
          </p>
          <p className="text-[11px] font-mono text-zinc-500 pt-1">
            © 2026 Sanket Tiwari. All Rights Reserved.
          </p>
        </div>

        {/* Center Social Shortcuts */}
        <div className="flex items-center gap-3">
          {footerSocials.map((soc) => (
            <a
              key={soc.label}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#A5A5A5] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 hover:bg-white/10 transition-all shadow-sm"
              title={soc.label}
            >
              {soc.icon}
            </a>
          ))}
        </div>

        {/* Right Scroll to Top Trigger */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#A5A5A5] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all group"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-[#00E5FF]" />
        </button>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
