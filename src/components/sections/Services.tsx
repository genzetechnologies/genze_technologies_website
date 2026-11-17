import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  ShoppingCart, 
  GraduationCap, 
  UserCheck, 
  Layout, 
  Cpu, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  X 
} from 'lucide-react';
import { SERVICES } from '../../lib/constants';
import type { Service } from '../../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-primary" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-cyan" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-primary" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-navy" />;
      default:
        return <Globe className="w-6 h-6 text-primary" />;
    }
  };

  const scrollToContact = (serviceTitle?: string) => {
    setSelectedService(null);
    const element = document.getElementById('contact');
    if (element) {
      const navOffset = 80;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: 'smooth',
      });
      // Pre-select service in form if possible
      if (serviceTitle) {
        const select = document.getElementById('service-select') as HTMLSelectElement | null;
        if (select) {
          select.value = serviceTitle;
        }
      }
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#F7FAFF] overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

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
            <Sparkles size={13} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">What We Offer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-['Outfit',sans-serif] mb-6"
          >
            Solutions Designed to{' '}
            <span className="gradient-blue-text">Move You Forward.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-body-text leading-relaxed"
          >
            From modern responsive business websites to hands-on student engineering project guidance, explore our six core development verticals.
          </motion.p>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass-card p-8 flex flex-col justify-between border border-blue-100/70 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Header: Service Number & 3D Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-extrabold tracking-widest text-primary/80 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
                    {service.number}
                  </span>
                  
                  {/* 3D Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-white to-light-blue p-0.5 shadow-md shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center border border-blue-100/80">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-extrabold text-navy font-['Outfit',sans-serif] mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-body-text leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature List */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More Button */}
              <button
                onClick={() => setSelectedService(service as unknown as Service)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-navy bg-slate-50 hover:bg-primary hover:text-white border border-slate-200/80 hover:border-primary transition-all duration-200 group/btn"
              >
                <span>Learn More</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal for Service Deep Dive (Learn More) */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-blue-100 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-extrabold text-primary bg-light-blue px-2.5 py-1 rounded-md">
                    {selectedService.number}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold uppercase">Details &amp; Capabilities</span>
                </div>

                <h3 className="text-2xl font-black text-navy font-['Outfit',sans-serif] mb-3">
                  {selectedService.title}
                </h3>

                <p className="text-sm text-body-text leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-bold text-navy uppercase tracking-wider mb-3">
                    Available Deliverables &amp; Features:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((item) => (
                      <div key={item} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs text-slate-800 font-medium">
                        <CheckCircle size={14} className="text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => scrollToContact(selectedService.title)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white gradient-bg shadow-md shadow-blue-500/25 hover:shadow-lg text-center"
                  >
                    Request Quotation for This
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="py-3 px-4 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 text-center"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
