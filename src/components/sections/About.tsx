import { motion } from 'framer-motion';
import { Target, Compass, Zap, ArrowRight } from 'lucide-react';
import { ABOUT_PILLARS } from '../../lib/constants';

export default function About() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-primary" />;
      case 'Target':
        return <Target className="w-6 h-6 text-cyan" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-electric" />;
      default:
        return <Target className="w-6 h-6 text-primary" />;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-light-blue/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-blue border border-blue-200/50 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">About Genze Technologies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-['Outfit',sans-serif] mb-6"
          >
            Building Digital Experiences{' '}
            <span className="gradient-blue-text">That Matter.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-body-text leading-relaxed"
          >
            Genze Technologies is a digital solutions company focused on helping businesses, startups, entrepreneurs and students transform their ideas into meaningful digital experiences.
            We combine creativity, technology and practical thinking to deliver modern websites, student project solutions and professional digital experiences.
          </motion.p>
        </div>

        {/* Three Attractive Cards: Mission, Vision, Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass-card p-8 flex flex-col justify-between border border-blue-100/80 hover:border-blue-400/40 transition-all duration-300"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:via-primary transition-all duration-300" />

              <div>
                {/* 3D Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-light-blue p-0.5 shadow-md shadow-blue-500/10 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center border border-blue-100">
                    {getIcon(pillar.iconName)}
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  {pillar.subtitle}
                </div>

                <h3 className="text-2xl font-extrabold text-navy font-['Outfit',sans-serif] mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-body-text leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-primary">
                <span>Core Pillar</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl p-8 sm:p-10 liquid-glass-accent border border-white/90 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-primary">Our Philosophy</span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-navy font-['Outfit',sans-serif] mt-1">
              Build • Grow • Thrive
            </h4>
            <p className="text-sm text-body-text max-w-xl mt-1">
              Whether you need an enterprise digital presence or hands-on college project guidance, we stand beside you with genuine support and verified quality.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white gradient-bg shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Partner With Us</span>
            <ArrowRight size={15} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
