import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_QUESTIONS } from '../../lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-light-blue/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-blue border border-blue-200/50 mb-4"
          >
            <HelpCircle size={14} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-['Outfit',sans-serif] mb-4"
          >
            Everything You Need{' '}
            <span className="gradient-blue-text">To Know.</span>
          </motion.h2>

          <p className="text-sm sm:text-base text-body-text max-w-2xl mx-auto leading-relaxed">
            Have questions about our development process, pricing, or student mentorship? Find transparent answers below.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="space-y-4">
          {FAQ_QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-gradient-to-r from-blue-50/60 to-white border-blue-300 shadow-md'
                    : 'bg-white border-slate-200/80 hover:border-blue-200 hover:bg-slate-50/50 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-extrabold text-navy font-['Outfit',sans-serif] flex items-center gap-3">
                    <span className="text-xs font-bold text-primary shrink-0 w-6">
                      0{index + 1}
                    </span>
                    <span>{item.question}</span>
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'gradient-bg text-white rotate-180 shadow-xs'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={17} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-body-text leading-relaxed border-t border-blue-100/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-blue border border-blue-200/70 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-navy font-['Outfit',sans-serif]">Have a specific query not covered here?</h4>
            <p className="text-xs text-body-text mt-0.5">Reach out directly via WhatsApp or our instant inquiry form.</p>
          </div>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white gradient-bg shadow-sm hover:shadow-md transition-all shrink-0"
          >
            <MessageSquare size={14} />
            <span>Ask Us Directly</span>
          </button>
        </div>

      </div>
    </section>
  );
}
