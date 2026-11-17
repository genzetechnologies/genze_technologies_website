import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, FolderCheck } from 'lucide-react';
import { SAMPLE_PROJECTS } from '../../lib/constants';

const CATEGORIES = ['All', 'Business Website', 'E-Commerce Solution', 'Student Project Solution', 'Personal Portfolio'] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? SAMPLE_PROJECTS
    : SAMPLE_PROJECTS.filter((p) => p.category === activeCategory);

  const scrollToContact = (title: string) => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: 'smooth',
      });
      const descInput = document.getElementById('project-desc') as HTMLTextAreaElement | null;
      if (descInput) {
        descInput.value = `Hi Genze Technologies, I am interested in building a solution similar to ${title}.`;
      }
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#F7FAFF] overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-blue border border-blue-200/50 mb-4"
          >
            <FolderCheck size={14} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Portfolio Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-['Outfit',sans-serif] mb-6"
          >
            Work Demonstrations &amp;{' '}
            <span className="gradient-blue-text">Project Concepts.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-body-text leading-relaxed"
          >
            Explore our curated project blueprints. These sample demonstrators showcase our frontend finesse, modern architectures, and engineering versatility.
          </motion.p>

          <div className="mt-4 inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-medium">
            Note: Showcasing sample preview demonstrators. Custom projects built on demand.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? 'gradient-bg text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-white text-body-text hover:text-navy hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl glass-card overflow-hidden border border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header / Real Project Mockup Banner */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900 group">
                  {/* Real-time Project Screenshot Image */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay for Readability & Liquid Glass Tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-slate-950/60 pointer-events-none" />

                  {/* Top Bar with Category & Status */}
                  <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 text-navy shadow-md backdrop-blur-md border border-white/80">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold text-white bg-black/40 backdrop-blur-md border border-white/20">
                      0{project.id}
                    </span>
                  </div>

                  {/* Bottom Bar over Image with Browser Dots & Sub-Tag */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                      <Layers size={13} className="text-cyan" />
                      <span>{project.tag}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
                      <div className="w-2 h-2 rounded-full bg-rose-400" />
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-xl font-extrabold text-navy font-['Outfit',sans-serif] mb-2 group-hover:text-primary transition-colors tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-body-text leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies Tag Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => scrollToContact(project.title)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white gradient-bg shadow-sm hover:shadow-md transition-all"
                    >
                      <span>Build Similar</span>
                      <ExternalLink size={13} />
                    </button>

                    {project.githubUrl && (
                      <button
                        onClick={() => scrollToContact(project.title)}
                        className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-navy hover:bg-slate-50 transition-colors"
                        title="Inquire Project Architecture"
                        aria-label="Inquire Project Architecture"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
