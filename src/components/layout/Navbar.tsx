import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '../../lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-80px 0px -40% 0px',
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav-scrolled py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Genze Technologies Home"
          >
            <div className="relative w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-extrabold text-base tracking-wider">GT</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-navy text-base sm:text-lg tracking-tight group-hover:text-primary transition-colors flex items-center gap-1">
                GENZE <span className="text-primary font-medium">TECHNOLOGIES</span>
              </span>
              <span className="text-[10px] text-body-text/70 uppercase tracking-widest font-semibold">
                Build • Grow • Thrive
              </span>
            </div>
          </a>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/60 shadow-sm" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-body-text hover:text-navy hover:bg-slate-100/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 gradient-bg rounded-full shadow-md shadow-blue-500/25 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button - Let's Talk */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white gradient-bg shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => scrollToSection('#contact')}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white gradient-bg rounded-full shadow-sm"
            >
              Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-navy bg-white/80 hover:bg-white border border-slate-200 shadow-sm transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 mx-4 rounded-2xl glass-nav-scrolled border border-slate-200/90 shadow-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'gradient-bg text-white shadow-md shadow-blue-500/25'
                        : 'text-body-text hover:text-navy hover:bg-slate-100/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles size={14} className="text-white" />}
                  </button>
                );
              })}
              <div className="pt-3 mt-2 border-t border-slate-200/80">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white gradient-bg shadow-lg shadow-blue-500/30"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight size={16} />
                </button>
                <div className="mt-3 text-center text-[11px] text-body-text/60">
                  {COMPANY.email} • {COMPANY.phoneDisplay}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
