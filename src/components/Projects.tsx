import React, { memo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, Cpu, Gamepad2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glowX: 50, glowY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({
      x: rotateX,
      y: rotateY,
      glowX: (x / rect.width) * 100,
      glowY: (y / rect.height) * 100,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glowX: 50, glowY: 50 });
  }, []);

  const getCategoryIcon = (id: string) => {
    if (id === 'nexus-ai') return <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />;
    if (id === 'developer-portfolio') return <Cpu className="w-3.5 h-3.5 text-purple-400 animate-pulse" />;
    return <Gamepad2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-label={`Project: ${project.title}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out, border-color 0.5s ease, box-shadow 0.5s ease',
      }}
      className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl relative group hover:border-[#00E5FF]/50 hover:shadow-[0_20px_50px_rgba(0,229,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] gpu-accelerated cursor-pointer"
    >
      {/* Radial Hover Glow Background */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-3xl opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(0, 229, 255, 0.12), transparent 40%)`,
        }}
      />

      {/* Top Section: Image & Details */}
      <div className="space-y-5">
        {/* Project Image Container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F0F0F] aspect-[16/9] shadow-lg group/img">
          <img
            src={project.mockupIllustration}
            alt={`${project.title} Preview`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-108 group-hover:scale-105"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          
          {/* Category Badge Floating over Image */}
          <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050505]/85 border border-white/15 backdrop-blur-md text-[11px] font-mono text-white shadow-md">
            {getCategoryIcon(project.id)}
            <span>{project.category}</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2.5">
          <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-[#00E5FF] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[#A5A5A5] text-sm leading-relaxed font-normal">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom Section: Technologies & Action Buttons */}
      <div className="mt-6 pt-5 border-t border-white/10 space-y-5">
        {/* Technology Badges */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider block">
            Technologies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#00E5FF] transition-all duration-300 group-hover:border-[#00E5FF]/30 group-hover:bg-[#00E5FF]/5 group-hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Single Action Button: GitHub Repository */}
        <div className="pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub Repository for ${project.title}`}
            className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-xs tracking-wide hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 hover:text-[#00E5FF] shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 group/btn"
          >
            <Github className="w-4 h-4 text-[#00E5FF] group-hover/btn:scale-110 transition-transform duration-300" />
            <span>GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = 'ProjectCard';

export const Projects: React.FC = memo(() => {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="relative py-28 px-6 z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>03 // FEATURED SOFTWARE PROJECTS</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineered With <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-cyan-300">Precision & Architecture</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;
