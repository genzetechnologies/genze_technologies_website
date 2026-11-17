import { motion } from 'framer-motion';
import { Search, FileText, Palette, Code, Rocket, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../../lib/constants';

export default function Process() {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-5 h-5 text-primary" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-cyan" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-electric" />;
      case 'Code':
        return <Code className="w-5 h-5 text-primary" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-emerald-500" />;
      default:
        return <Search className="w-5 h-5 text-primary" />;
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
    <section id="process" className="relative py-24 bg-white overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-light-blue/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-blue border border-blue-200/50 mb-4"
          >
            <Rocket size={14} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">How We Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-['Outfit',sans-serif] mb-6"
          >
            A Seamless Pathway from{' '}
            <span className="gradient-blue-text">Concept to Delivery.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-body-text leading-relaxed"
          >
            We maintain an agile, transparent 5-step development roadmap so you are always informed, confident, and satisfied with every release.
          </motion.p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 -translate-y-8 bg-gradient-to-r from-blue-200 via-primary/40 to-cyan z-0 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl glass-card p-6 border border-blue-100 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Pill & 3D Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-black tracking-wider text-primary bg-light-blue px-2.5 py-1 rounded-md">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-light-blue p-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-[9px] bg-white flex items-center justify-center border border-blue-100">
                        {getStepIcon(step.iconName)}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-navy font-['Outfit',sans-serif] mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-body-text leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Phase 0{index + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs text-white gradient-bg shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Start Step 01 With Us Today</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}
