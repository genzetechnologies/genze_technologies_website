import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Smartphone, 
  HeartHandshake, 
  BookOpenCheck, 
  Sliders, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../../lib/constants';

export default function WhyUs() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-primary" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-electric" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-5 h-5 text-primary" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-cyan" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-primary" />;
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
    <section id="why-us" className="relative py-24 bg-white overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-light-blue/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

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
            <ShieldCheck size={14} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">The Genze Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-['Outfit',sans-serif] mb-6"
          >
            Why Businesses and Students{' '}
            <span className="gradient-blue-text">Choose Us.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-body-text leading-relaxed"
          >
            We focus on authentic value, honest technical guidance, and responsive design systems that help creators and founders thrive without friction.
          </motion.p>
        </div>

        {/* 6 Core Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-7 glass-card border border-blue-100/80 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-light-blue p-0.5 shadow-sm mb-5 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center border border-blue-100">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-navy font-['Outfit',sans-serif] mb-2.5 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-body-text leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Value Pillar 0{index + 1}</span>
                <span className="text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Verified Standard &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl glass-blue border border-blue-200/60 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs sm:text-sm font-semibold text-navy text-left">
            <span className="text-primary font-bold">Our Promise:</span> Transparent communication, clear milestone tracking, zero inflated claims, and dedicated post-delivery support.
          </p>
          <button
            onClick={scrollToContact}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white gradient-bg shadow-sm hover:shadow-md transition-all"
          >
            <span>Talk to Us</span>
            <ArrowRight size={13} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
