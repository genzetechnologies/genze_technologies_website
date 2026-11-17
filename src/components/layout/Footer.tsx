import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '../../lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <footer className="relative bg-[#142D55] text-white pt-20 pb-12 overflow-hidden border-t border-blue-900/40">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-white font-extrabold text-base">GT</span>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif]">
                    GENZE <span className="text-cyan font-normal">TECHNOLOGIES</span>
                  </h3>
                  <p className="text-xs text-blue-200/70 font-semibold tracking-wider uppercase">
                    Build • Grow • Thrive
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Genze Technologies is a digital solutions company focused on helping businesses, startups, entrepreneurs and students transform their ideas into meaningful digital experiences.
              </p>
            </div>

            {/* Direct Connect Pills */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium hover:bg-emerald-500/25 transition-colors"
              >
                <span>WhatsApp Instant</span>
                <ExternalLink size={12} />
              </a>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-400/30 text-cyan text-xs font-medium">
                <span>Chennai, India</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation (Cols 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-cyan mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services (Cols 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-cyan mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left line-clamp-1"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Cols 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-cyan mb-5">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm text-slate-300">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/20 transition-colors">
                  <Phone size={15} className="text-cyan" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Primary Phone</div>
                  <div className="font-medium text-white">{COMPANY.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY.altPhone}`}
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/20 transition-colors">
                  <Phone size={15} className="text-cyan" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Alternate Phone</div>
                  <div className="font-medium text-white">{COMPANY.altPhoneDisplay}</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/20 transition-colors">
                  <Mail size={15} className="text-cyan" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Official Email</div>
                  <div className="font-medium text-white break-all">{COMPANY.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin size={15} className="text-cyan" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                  <div className="font-medium text-white">{COMPANY.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span className="font-semibold text-white">GENZE TECHNOLOGIES</span> – Build • Grow • Thrive &copy; {new Date().getFullYear()}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400">Chennai, Tamil Nadu, India</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
