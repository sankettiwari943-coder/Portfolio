import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, MessageSquare, Linkedin, Github, Code, Instagram,
  ExternalLink, ArrowRight, Phone
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = memo(() => {
  const socialGrid = [
    {
      name: 'LinkedIn',
      handle: 'sanket-tiwari-5771a9380',
      desc: 'Connect professionally & view certifications',
      url: PORTFOLIO_DATA.contacts.linkedin,
      btnText: 'Connect on LinkedIn',
      icon: <Linkedin className="w-6 h-6 text-[#00E5FF]" />
    },
    {
      name: 'GitHub',
      handle: 'sankettiwari943-coder',
      desc: 'Explore source code & repositories',
      url: PORTFOLIO_DATA.contacts.github,
      btnText: 'Explore My GitHub',
      icon: <Github className="w-6 h-6 text-[#00E5FF]" />
    },
    {
      name: 'LeetCode',
      handle: 'sanket_xtr',
      desc: 'Problem solving & algorithmic challenges',
      url: PORTFOLIO_DATA.contacts.leetcode,
      btnText: 'View My LeetCode',
      icon: <Code className="w-6 h-6 text-[#00E5FF]" />
    },
    {
      name: 'Instagram',
      handle: '@sanketyrrr',
      desc: 'Behind the scenes & tech updates',
      url: PORTFOLIO_DATA.contacts.instagram,
      btnText: 'Follow on Instagram',
      icon: <Instagram className="w-6 h-6 text-[#00E5FF]" />
    },
    {
      name: 'WhatsApp',
      handle: PORTFOLIO_DATA.contacts.phone,
      desc: 'Quick direct messaging',
      url: PORTFOLIO_DATA.contacts.whatsappUrl,
      btnText: 'Chat on WhatsApp',
      icon: <Phone className="w-6 h-6 text-[#00E5FF]" />
    },
    {
      name: 'Email',
      handle: PORTFOLIO_DATA.contacts.email,
      desc: 'Inquiries, projects & opportunities',
      url: PORTFOLIO_DATA.contacts.emailMailto,
      btnText: 'Send an Email',
      icon: <Mail className="w-6 h-6 text-[#00E5FF]" />
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-6 z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>06 // GET IN TOUCH</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-cyan-300">Extraordinary Together</span>
        </h2>
      </div>

      {/* Quick Action Button Group */}
      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href={PORTFOLIO_DATA.contacts.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 text-xs font-semibold text-white hover:text-[#00E5FF] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
        >
          <span>💼 Connect on LinkedIn</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href={PORTFOLIO_DATA.contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 text-xs font-semibold text-white hover:text-[#00E5FF] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
        >
          <span>💻 View GitHub</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href={PORTFOLIO_DATA.contacts.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 text-xs font-semibold text-white hover:text-[#00E5FF] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
        >
          <span>🧩 Solve with Me on LeetCode</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href={PORTFOLIO_DATA.contacts.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 text-xs font-semibold text-white hover:text-[#00E5FF] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
        >
          <span>📸 Follow on Instagram</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href={PORTFOLIO_DATA.contacts.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 text-xs font-semibold text-white hover:text-[#00E5FF] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
        >
          <span>💬 Chat on WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href={PORTFOLIO_DATA.contacts.emailMailto}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 text-xs font-semibold text-white hover:text-[#00E5FF] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
        >
          <span>✉️ Send an Email</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Social Cards Grid - Spans 3 columns evenly across full container width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialGrid.map((item, idx) => (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300 shadow-lg group relative flex flex-col justify-between gpu-accelerated"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#0F0F0F] border border-[#00E5FF]/30 group-hover:border-[#00E5FF] transition-colors">
                  {item.icon}
                </div>
                <ExternalLink className="w-4 h-4 text-[#A5A5A5] group-hover:text-[#00E5FF] transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400 truncate">{item.handle}</p>
              </div>
              <p className="text-xs text-[#A5A5A5] leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-[#00E5FF] group-hover:translate-x-1 transition-transform">
              <span>{item.btnText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
