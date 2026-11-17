import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  GraduationCap, 
  Globe, 
  MessageSquare, 
  MapPin, 
  ShoppingCart,
  FileCheck
} from 'lucide-react';
import { COMPANY } from '../../lib/constants';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-gradient-to-b from-[#F7FAFF] via-[#E8F1FF]/40 to-[#F7FAFF]"
    >
      {/* 3D Background Lighting & Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-primary/15 via-cyan/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-[15%] w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 right-[12%] w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
            x: [-10, 10, -10],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-28 left-[20%] w-6 h-6 rounded-full bg-primary/20 blur-[1px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Small Trust Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue border border-blue-200/60 shadow-xs mb-6 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {COMPANY.trustLabel}
              </span>
              <Sparkles size={13} className="text-primary group-hover:rotate-12 transition-transform" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.12] mb-6 font-['Outfit',sans-serif]"
            >
              Transform Your Ideas{' '}
              <span className="block mt-1 gradient-blue-text">
                Into Digital Reality.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-body-text max-w-2xl leading-relaxed mb-8"
            >
              We build modern websites, creative digital experiences and innovative solutions that help businesses and individuals grow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm text-white gradient-bg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm text-navy bg-white/80 hover:bg-white border border-slate-200 hover:border-primary/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Start a Project</span>
                <ChevronRight size={17} className="text-primary" />
              </button>
            </motion.div>

            {/* Value Highlights Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Modern 3D &amp; Liquid Glass UI</span>
              </div>
              <div className="hidden sm:block text-slate-300">•</div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Responsive &amp; Production-Ready</span>
              </div>
              <div className="hidden sm:block text-slate-300">•</div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Verified Clean Architecture</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Floating Mockup Experience with RELATABLE INFORMATION (Cols 8-12) */}
          <div className="lg:col-span-5 relative perspective-1000 flex justify-center items-center">
            
            {/* 3D Floating Laptop Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: [5, -2, 5],
                rotateY: [-6, 5, -6],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[500px] preserve-3d"
            >
              {/* Laptop Body Shell */}
              <div className="relative rounded-2xl bg-[#0F1E36] p-3 shadow-2xl shadow-blue-900/35 border border-slate-700/70">
                
                {/* Screen Bezel & Camera */}
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  
                  {/* Top Window Bar */}
                  <div className="bg-[#142D55] px-3.5 py-2 flex items-center justify-between border-b border-blue-900/60">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-[10px] text-blue-200/90 font-mono tracking-wider flex items-center gap-1.5 bg-black/40 px-3 py-0.5 rounded-full border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>genzetechnologies.com</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-cyan font-bold bg-cyan/15 px-2 py-0.5 rounded">
                      <span>Chennai, TN</span>
                    </div>
                  </div>

                  {/* Browser Screen Content: Real Relatable Agency & Services Showcase */}
                  <div className="p-4 sm:p-5 bg-gradient-to-br from-[#0F2347] via-[#142D55] to-[#173866] text-white">
                    
                    {/* Inner Mini Nav */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center text-[10px] font-black shadow-xs">
                          GT
                        </div>
                        <span className="text-xs font-black tracking-tight font-['Outfit',sans-serif]">
                          GENZE <span className="text-cyan font-semibold">TECHNOLOGIES</span>
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 text-[9px] text-slate-200">
                        <span className="bg-white/10 px-2 py-0.5 rounded font-medium">Business Web</span>
                        <span className="bg-white/10 px-2 py-0.5 rounded font-medium">E-Commerce</span>
                        <span className="bg-primary/30 text-cyan border border-cyan/30 px-2 py-0.5 rounded font-bold">Student Projects</span>
                      </div>
                    </div>

                    {/* Inner Hero Intro */}
                    <div className="mb-3.5">
                      <div className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-cyan bg-cyan/15 border border-cyan/30 px-2 py-0.5 rounded-full mb-1">
                        <MapPin size={10} />
                        <span>Based in Chennai • Pan-India Delivery</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-white font-['Outfit',sans-serif] leading-tight">
                        Transforming Ideas into Real Web &amp; Student Solutions
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-blue-100/80 mt-1 leading-snug">
                        Custom websites, online stores, and hands-on guidance for school &amp; college final-year projects.
                      </p>
                    </div>

                    {/* 3 Relatable Mini Deliverable Cards */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      
                      {/* Card 1: Business Websites */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 transition-colors text-left flex flex-col justify-between">
                        <div>
                          <div className="w-5 h-5 rounded-md bg-blue-500/20 text-cyan flex items-center justify-center mb-1.5">
                            <Globe size={12} />
                          </div>
                          <div className="text-[10px] font-bold text-white font-['Outfit',sans-serif] leading-tight">
                            Business Web
                          </div>
                          <div className="text-[8px] text-blue-200/80 mt-0.5 leading-snug">
                            Startups &amp; Corporate
                          </div>
                        </div>
                        <div className="mt-2 text-[8px] font-semibold text-emerald-400 flex items-center gap-0.5">
                          <span>✓ 5-Day Launch</span>
                        </div>
                      </div>

                      {/* Card 2: E-Commerce */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-colors text-left flex flex-col justify-between">
                        <div>
                          <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center mb-1.5">
                            <ShoppingCart size={12} />
                          </div>
                          <div className="text-[10px] font-bold text-white font-['Outfit',sans-serif] leading-tight">
                            Online Store
                          </div>
                          <div className="text-[8px] text-blue-200/80 mt-0.5 leading-snug">
                            Cart, Catalog &amp; Pay
                          </div>
                        </div>
                        <div className="mt-2 text-[8px] font-semibold text-amber-300 flex items-center gap-0.5">
                          <span>✓ Modern UI</span>
                        </div>
                      </div>

                      {/* Card 3: Student Projects */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan/50 transition-colors text-left flex flex-col justify-between">
                        <div>
                          <div className="w-5 h-5 rounded-md bg-primary/30 text-cyan flex items-center justify-center mb-1.5">
                            <GraduationCap size={12} />
                          </div>
                          <div className="text-[10px] font-bold text-white font-['Outfit',sans-serif] leading-tight">
                            Student Projects
                          </div>
                          <div className="text-[8px] text-blue-200/80 mt-0.5 leading-snug">
                            Python, Java, AI/ML
                          </div>
                        </div>
                        <div className="mt-2 text-[8px] font-semibold text-cyan flex items-center gap-0.5">
                          <span>✓ Viva Prep &amp; Code</span>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Status Ticker inside Laptop */}
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[8px] sm:text-[9px] text-blue-200/90 font-medium">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Direct Support: +91 99403 79449</span>
                      </div>
                      <div className="flex items-center gap-1 text-cyan font-bold">
                        <span>genzetechnologies@gmail.com</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Laptop Base Hinge */}
                <div className="mt-2 h-2.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-b-xl flex justify-center items-center">
                  <div className="w-16 h-1 bg-slate-800 rounded-full" />
                </div>
              </div>

              {/* Floating Smartphone Mockup: Real Student & Mobile Delivery Preview */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotateZ: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-4 -bottom-6 w-44 rounded-2xl bg-slate-900 p-2.5 shadow-2xl shadow-black/50 border border-slate-700/90 z-20"
              >
                <div className="rounded-xl overflow-hidden bg-[#142D55] p-3 border border-blue-900/50 text-white">
                  
                  {/* Phone Notch & Status Bar */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[7px] text-slate-400 font-mono">9:41</span>
                    <div className="w-8 h-1.5 rounded-full bg-slate-800" />
                    <span className="text-[7px] text-emerald-400 font-bold">5G</span>
                  </div>

                  {/* Phone Content: Student Project Demo */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-4 h-4 rounded gradient-bg flex items-center justify-center text-[8px] font-bold">GT</div>
                    <span className="text-[10px] font-bold text-white">Student Project Desk</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 mb-2">
                    <div className="flex items-center justify-between text-[8px] text-cyan font-bold">
                      <span>Final-Year Project</span>
                      <span className="bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded">Complete</span>
                    </div>
                    <div className="text-[10px] font-bold text-white mt-1 font-['Outfit',sans-serif] leading-tight">
                      AI Disease Classifier
                    </div>
                    <div className="text-[8px] text-slate-300 mt-0.5">
                      Python • TensorFlow • React
                    </div>
                  </div>

                  {/* Relatable Deliverable Checkmarks */}
                  <div className="space-y-1 mb-2.5 text-[8px] text-slate-200">
                    <div className="flex items-center gap-1">
                      <FileCheck size={10} className="text-emerald-400 shrink-0" />
                      <span>Full Source Code &amp; PPT</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileCheck size={10} className="text-emerald-400 shrink-0" />
                      <span>1-on-1 Code Explanation</span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/919940379449?text=Hello%20Genze%20Technologies%2C%20I%20am%20looking%20for%20project%20guidance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-[8px] font-extrabold text-center shadow-xs transition-colors"
                  >
                    <MessageSquare size={10} />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </motion.div>

              {/* 3D Glass Badge 1: Top-Left (Student Project Guidance) */}
              <motion.div
                animate={{
                  y: [6, -6, 6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -left-6 -top-6 p-3 rounded-xl liquid-glass-accent border border-white/90 shadow-xl z-20 flex items-center gap-2.5"
              >
                <div className="p-2 rounded-lg bg-gradient-to-tr from-primary to-cyan text-white shadow-sm">
                  <GraduationCap size={16} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-navy font-['Outfit',sans-serif]">Student Projects</div>
                  <div className="text-[10px] text-primary font-bold">Python • Java • AI/ML</div>
                </div>
              </motion.div>

              {/* 3D Glass Badge 2: Bottom-Left (Startup & Business Sites) */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -left-5 bottom-8 p-3 rounded-xl glass border border-blue-200/80 shadow-xl z-20 flex items-center gap-2.5"
              >
                <div className="p-2 rounded-lg bg-blue-50 text-primary border border-blue-100">
                  <Globe size={15} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-navy font-['Outfit',sans-serif]">Startup &amp; Business Sites</div>
                  <div className="text-[10px] text-slate-500 font-medium">Responsive &amp; Fast Launch</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
