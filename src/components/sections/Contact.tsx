import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ExternalLink,
  Clock
} from 'lucide-react';
import { COMPANY, SERVICES } from '../../lib/constants';
import type { ContactFormData } from '../../types';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!formData.phone.trim() || phoneClean.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.service) {
      errs.service = 'Please select a service required.';
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = 'Please describe your project idea or questions (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSendWhatsApp = () => {
    setSubmitError(null);
    if (!validate()) return;

    const whatsappMessage = encodeURIComponent(
      `*🚀 New Project Inquiry - Genze Technologies*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Project Budget:* ${formData.budget || 'Not specified'}\n\n` +
      `*Project Description:*\n${formData.description}`
    );
    window.open(`https://wa.me/919940379449?text=${whatsappMessage}`, '_blank');
    setSubmitted(true);
  };

  const handleSendEmail = () => {
    setSubmitError(null);
    if (!validate()) return;

    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Hello Genze Technologies,\n\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Required: ${formData.service}\n` +
      `Budget: ${formData.budget || 'Not specified'}\n\n` +
      `Project Description:\n${formData.description}\n\n` +
      `Sent to: genzetechnologies@gmail.com`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=genzetechnologies@gmail.com&su=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const getWhatsAppPrefilledUrl = () => {
    const text = encodeURIComponent(
      `*🚀 New Project Inquiry - Genze Technologies*\n\n` +
      `*Name:* ${formData.fullName || '[Your Name]'}\n` +
      `*Email:* ${formData.email || ''}\n` +
      `*Phone:* ${formData.phone || ''}\n` +
      `*Service Required:* ${formData.service || 'General Inquiry'}\n` +
      `*Budget:* ${formData.budget || 'Not specified'}\n\n` +
      `*Project Description:*\n${formData.description || 'I would like to discuss a project with you.'}`
    );
    return `https://wa.me/919940379449?text=${text}`;
  };

  const getGmailWebUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Hello Genze Technologies,\n\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Required: ${formData.service}\n` +
      `Budget: ${formData.budget || 'Not specified'}\n\n` +
      `Project Description:\n${formData.description}\n\n` +
      `Sent to: genzetechnologies@gmail.com`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=genzetechnologies@gmail.com&su=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-[#F7FAFF] overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/15 rounded-full blur-[140px] pointer-events-none" />

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
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-['Outfit',sans-serif] mb-6"
          >
            Have an Idea?{' '}
            <span className="gradient-blue-text">Let's Build It Together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-body-text leading-relaxed"
          >
            Tell us about your project vision, timeline, and goals. We respond promptly with thoughtful consultation and transparent pricing.
          </motion.p>
        </div>

        {/* Contact Grid: Details Column + Interactive Form Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Card (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info Card */}
            <div className="rounded-2xl glass-card p-8 border border-blue-100/90 shadow-md">
              <h3 className="text-xl font-extrabold text-navy font-['Outfit',sans-serif] mb-6">
                Official Contact Channels
              </h3>

              <div className="space-y-6">
                {/* Primary Phone */}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <Phone size={19} />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Primary Phone</div>
                    <div className="text-base font-bold text-navy group-hover:text-primary transition-colors">
                      {COMPANY.phoneDisplay}
                    </div>
                    <div className="text-xs text-slate-500">Direct calls &amp; WhatsApp</div>
                  </div>
                </a>

                {/* Alternate Phone */}
                <a
                  href={`tel:${COMPANY.altPhone}`}
                  className="flex items-start gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <Phone size={19} />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Alternate Phone</div>
                    <div className="text-base font-bold text-navy group-hover:text-primary transition-colors">
                      {COMPANY.altPhoneDisplay}
                    </div>
                    <div className="text-xs text-slate-500">Secondary contact line</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <Mail size={19} />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Official Email</div>
                    <div className="text-sm sm:text-base font-bold text-navy group-hover:text-primary transition-colors break-all">
                      {COMPANY.email}
                    </div>
                    <div className="text-xs text-slate-500">Official proposals &amp; quotations</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-xl">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Headquarters</div>
                    <div className="text-base font-bold text-navy">
                      {COMPANY.location}
                    </div>
                    <div className="text-xs text-slate-500">Serving clients across India &amp; globally</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Instant Action Card */}
            <div className="rounded-2xl p-7 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/20 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-3">
                  <Clock size={12} />
                  <span>Rapid Response Desk</span>
                </div>
                <h4 className="text-xl font-black font-['Outfit',sans-serif] mb-2">
                  Need an Instant Reply on WhatsApp?
                </h4>
                <p className="text-xs text-emerald-50 leading-relaxed mb-6">
                  Chat directly with our development lead for rapid consultations, student project guidelines, and quick pricing estimates.
                </p>
              </div>

              <a
                href={getWhatsAppPrefilledUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white text-emerald-700 font-extrabold text-xs shadow-md hover:bg-emerald-50 transition-all hover:scale-[1.02]"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp (+91 99403 79449)</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>

          {/* Right Column: Working Contact Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-card p-8 sm:p-10 border border-blue-100 shadow-xl relative">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-navy font-['Outfit',sans-serif] mb-2">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-body-text max-w-md mx-auto mb-6">
                    Your inquiry for <strong className="text-navy">{formData.service}</strong> has been prepared and dispatched. Our team will review your specifications and contact you shortly at <strong className="text-navy">{formData.email}</strong>.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto mb-6 text-left">
                    <div><strong>Name:</strong> {formData.fullName}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    <div><strong>Service:</strong> {formData.service}</div>
                    {formData.budget && <div><strong>Budget:</strong> {formData.budget}</div>}
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                    <a
                      href={getWhatsAppPrefilledUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp (+91 99403 79449)</span>
                    </a>
                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                    >
                      <Mail size={16} />
                      <span>Open in Gmail Web</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          service: '',
                          budget: '',
                          description: '',
                        });
                      }}
                      className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    💬 <strong>WhatsApp delivers instantly</strong> to our phone. If opening Gmail, click the blue <strong>"Send"</strong> button inside Gmail to complete delivery to <strong>genzetechnologies@gmail.com</strong>.
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); handleSendWhatsApp(); }} noValidate className="space-y-6">
                  
                  <div>
                    <h3 className="text-2xl font-extrabold text-navy font-['Outfit',sans-serif] mb-1">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-body-text">
                      Fill out the details below. All fields marked with * are required.
                    </p>
                  </div>

                  {submitError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-700 text-xs">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <div>{submitError}</div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe / Sarah Smith"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-primary'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-500 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-primary'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9940379449"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-primary'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service Required */}
                    <div>
                      <label htmlFor="service-select" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        Service Required *
                      </label>
                      <select
                        id="service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                          errors.service ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-primary'
                        }`}
                      >
                        <option value="">-- Choose a Service --</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-rose-500 font-medium">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Budget (Optional) */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Project Budget <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-navy focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="">-- Select Budget Range --</option>
                      <option value="Student Project (Budget Friendly)">Student Project (Budget Friendly)</option>
                      <option value="Starter Website (₹10,000 - ₹25,000)">Starter Website (₹10,000 - ₹25,000)</option>
                      <option value="Standard Business (₹25,000 - ₹60,000)">Standard Business (₹25,000 - ₹60,000)</option>
                      <option value="Custom E-Commerce / Web App (₹60,000+)">Custom E-Commerce / Web App (₹60,000+)</option>
                      <option value="To Be Discussed">To Be Discussed</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="project-desc" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="project-desc"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Briefly describe what you would like to build, your goals, key features, and any preferred timeline..."
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-y ${
                        errors.description ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-primary'
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">{errors.description}</p>
                    )}
                  </div>

                  {/* Two Separate Sending Options */}
                  <div className="pt-2 space-y-3">
                    <div className="text-xs font-bold text-navy uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={13} className="text-primary" />
                      <span>Choose Your Preferred Sending Option:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Option 1: WhatsApp */}
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        className="p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer group hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                          <MessageSquare size={17} />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-black">Option 1: Send via WhatsApp</div>
                          <div className="text-[10px] text-emerald-100 font-medium">To +91 99403 79449 (Instant)</div>
                        </div>
                      </button>

                      {/* Option 2: Email */}
                      <button
                        type="button"
                        onClick={handleSendEmail}
                        className="p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer group hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                          <Mail size={17} />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-black">Option 2: Send via Email</div>
                          <div className="text-[10px] text-blue-100 font-medium">To genzetechnologies@gmail.com</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="text-center text-[11px] text-slate-400 pt-2">
                    🔒 We respect your privacy. Inquiries are handled strictly confidentially.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
