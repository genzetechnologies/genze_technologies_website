import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake, 
  MessageSquareCheck, 
  TrendingUp, 
  Sparkles,
  MessageCircleHeart,
  X,
  Star,
  CheckCircle2,
  MessageSquare,
  Mail
} from 'lucide-react';
import { FEEDBACK_FORM_URL } from '../../lib/constants';

interface FeatureCardProps {
  icon: React.ReactNode;
  stepNumber: string;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, stepNumber, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl p-8 glass-card border border-blue-100/80 hover:border-blue-400/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white/80"
    >
      <div>
        {/* Top Bar with Step Number and Gradient Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl gradient-bg p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center text-primary group-hover:text-electric transition-colors">
              {icon}
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-primary/70 bg-light-blue px-3 py-1 rounded-full border border-blue-200/50">
            {stepNumber}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-navy font-['Outfit',sans-serif] mb-3 group-hover:text-primary transition-colors tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-body-text leading-relaxed">
          {description}
        </p>
      </div>

      {/* Card Footer Indicator */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
        <span className="text-primary font-medium">Core Commitment</span>
        <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [clientName, setClientName] = useState('');
  const [projectType, setProjectType] = useState('Business Website Development');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Check if user set a custom valid Google Form URL (not a dummy shortlink)
  const hasCustomGoogleForm = 
    FEEDBACK_FORM_URL && 
    !FEEDBACK_FORM_URL.includes('genzetechnologies') && 
    (FEEDBACK_FORM_URL.includes('forms.gle') || FEEDBACK_FORM_URL.includes('docs.google.com/forms'));

  const handleSendWhatsAppReview = () => {
    if (!clientName.trim() || !feedback.trim()) return;
    const starsText = '⭐'.repeat(rating);
    const whatsappMessage = encodeURIComponent(
      `*🌟 Client Feedback & Rating - Genze Technologies*\n\n` +
      `*Client / Organization:* ${clientName}\n` +
      `*Service Completed:* ${projectType}\n` +
      `*Rating:* ${starsText} (${rating}/5 Stars)\n\n` +
      `*Review / Feedback:*\n"${feedback}"`
    );
    window.open(`https://wa.me/919940379449?text=${whatsappMessage}`, '_blank');
    setSubmitted(true);
  };

  const handleSendEmailReview = () => {
    if (!clientName.trim() || !feedback.trim()) return;
    const starsText = '⭐'.repeat(rating);
    const subject = encodeURIComponent(`Client Feedback (${starsText}) - ${clientName}`);
    const body = encodeURIComponent(
      `Genze Technologies Client Feedback:\n\n` +
      `Client / Organization: ${clientName}\n` +
      `Project Type: ${projectType}\n` +
      `Rating: ${rating}/5 Stars (${starsText})\n\n` +
      `Review / Feedback:\n${feedback}\n\n` +
      `Sent to: genzetechnologies@gmail.com`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=genzetechnologies@gmail.com&su=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const getWhatsAppReviewUrl = () => {
    const starsText = '⭐'.repeat(rating);
    const text = encodeURIComponent(
      `*🌟 Client Feedback & Rating - Genze Technologies*\n\n` +
      `*Client / Organization:* ${clientName || 'Partner'}\n` +
      `*Service Completed:* ${projectType}\n` +
      `*Rating:* ${starsText} (${rating}/5 Stars)\n\n` +
      `*Review / Feedback:*\n"${feedback || 'Great experience working with Genze Technologies!'}"`
    );
    return `https://wa.me/919940379449?text=${text}`;
  };

  const getGmailFeedbackUrl = () => {
    const starsText = '⭐'.repeat(rating);
    const subject = encodeURIComponent(`Client Feedback (${starsText}) - ${clientName}`);
    const body = encodeURIComponent(
      `Genze Technologies Client Feedback:\n\n` +
      `Client / Organization: ${clientName}\n` +
      `Project Type: ${projectType}\n` +
      `Rating: ${rating}/5 Stars (${starsText})\n\n` +
      `Review / Feedback:\n${feedback}\n\n` +
      `Sent to: genzetechnologies@gmail.com`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=genzetechnologies@gmail.com&su=${subject}&body=${body}`;
  };

  const openFeedback = () => {
    if (hasCustomGoogleForm) {
      window.open(FEEDBACK_FORM_URL, '_blank', 'noopener,noreferrer');
    } else {
      setModalOpen(true);
    }
  };

  return (
    <section id="feedback" className="relative py-24 bg-gradient-to-b from-[#F7FAFF] via-[#E8F1FF]/30 to-[#F7FAFF] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-primary/10 via-cyan/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-blue border border-blue-200/60 mb-4"
          >
            <MessageCircleHeart size={14} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Client Relationship &amp; Growth
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight font-['Outfit',sans-serif] mb-5"
          >
            Your Feedback Matters{' '}
            <span className="gradient-blue-text">to Us.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-body-text leading-relaxed"
          >
            We value every client relationship. Your feedback helps us improve our services and create better digital experiences.
          </motion.p>
        </div>

        {/* Three Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            delay={0.1}
            stepNumber="01"
            title="Client Satisfaction"
            description="Our highest priority is delivering digital products that exceed expectations. Every milestone is built to ensure you are fully confident, supported, and satisfied with the result."
            icon={<HeartHandshake size={26} className="text-primary" />}
          />

          <FeatureCard
            delay={0.2}
            stepNumber="02"
            title="Genuine Feedback"
            description="We believe in complete transparency and open conversations. Real feedback from real partners guides our evolution, helping us uphold authentic quality without compromise."
            icon={<MessageSquareCheck size={26} className="text-cyan" />}
          />

          <FeatureCard
            delay={0.3}
            stepNumber="03"
            title="Continuous Improvement"
            description="Every insight and suggestion shared helps us refine our workflows, elevate our engineering standards, and build even more seamless, impactful solutions."
            icon={<TrendingUp size={26} className="text-electric" />}
          />
        </div>

        {/* Prominent CTA: "Recently Completed a Project With Us?" */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl p-8 sm:p-12 liquid-glass-accent border border-white/90 shadow-2xl overflow-hidden"
        >
          {/* Subtle Accent Glows inside CTA */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-primary/20 via-cyan/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-3">
                <Sparkles size={13} />
                <span>Partner Voice</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy font-['Outfit',sans-serif] tracking-tight mb-3">
                Recently Completed a Project With Us?
              </h3>
              <p className="text-sm sm:text-base text-body-text leading-relaxed">
                Take a moment to share your experience. Your perspective directly helps our development team and assists future clients and students in choosing Genze Technologies.
              </p>
            </div>

            {/* Share Your Feedback Button */}
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={openFeedback}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white gradient-bg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Share Your Feedback</span>
                <MessageCircleHeart size={17} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Interactive Feedback Modal Dialog */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-100 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setModalOpen(false);
                  setSubmitted(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
                aria-label="Close feedback modal"
              >
                <X size={18} />
              </button>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-navy font-['Outfit',sans-serif] mb-2">
                    Thank You for Your Feedback!
                  </h3>
                  <p className="text-sm text-body-text mb-6">
                    Your thoughts are immensely appreciated and help us continue building exceptional digital experiences.
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
                    <a
                      href={getWhatsAppReviewUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                    >
                      <MessageSquare size={15} />
                      <span>Chat on WhatsApp (+91 99403 79449)</span>
                    </a>
                    <a
                      href={getGmailFeedbackUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                    >
                      <Mail size={15} />
                      <span>Open in Gmail Web</span>
                    </a>
                    <button
                      onClick={() => {
                        setModalOpen(false);
                        setSubmitted(false);
                        setClientName('');
                        setFeedback('');
                      }}
                      className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                    >
                      Done
                    </button>
                  </div>

                  <div className="mt-4 p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-xs text-slate-600 max-w-sm mx-auto">
                    💬 <strong>WhatsApp delivers instantly</strong>. If using Gmail, click the blue <strong>"Send"</strong> button to deliver to <strong>genzetechnologies@gmail.com</strong>.
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); handleSendWhatsAppReview(); }} className="space-y-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-light-blue px-3 py-1 rounded-full">
                      Client Review
                    </span>
                    <h3 className="text-2xl font-black text-navy font-['Outfit',sans-serif] mt-2 mb-1">
                      Share Your Experience
                    </h3>
                    <p className="text-xs text-body-text">
                      Let us know how your project with Genze Technologies went!
                    </p>
                  </div>

                  {/* Star Rating Selector */}
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Your Overall Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="p-1 transition-transform hover:scale-110 focus:outline-none"
                        >
                          <Star
                            size={28}
                            className={`transition-colors ${
                              (hoverRating !== null ? star <= hoverRating : star <= rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-200 fill-slate-100'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-slate-600 ml-2">
                        {rating} of 5 Stars
                      </span>
                    </div>
                  </div>

                  {/* Client Name */}
                  <div>
                    <label htmlFor="clientName" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                      Your Name / Organization *
                    </label>
                    <input
                      id="clientName"
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Rahul Sharma or TechVenture"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                      Service / Project Completed
                    </label>
                    <select
                      id="projectType"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-navy focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="Business Website Development">Business Website Development</option>
                      <option value="E-Commerce Website Development">E-Commerce Website Development</option>
                      <option value="Student Project Solution (AI/ML/Python)">Student Project Solution (AI/ML/Python)</option>
                      <option value="Personal Portfolio Website">Personal Portfolio Website</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Custom Digital Solution">Custom Digital Solution</option>
                    </select>
                  </div>

                  {/* Feedback Text */}
                  <div>
                    <label htmlFor="feedbackText" className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                      Your Feedback &amp; Comments *
                    </label>
                    <textarea
                      id="feedbackText"
                      required
                      rows={3}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Tell us what you liked about the project, the communication, and delivery..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
                    />
                  </div>

                  {/* Two Separate Sending Options */}
                  <div className="pt-2 space-y-3">
                    <div className="text-xs font-bold text-navy uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={13} className="text-primary" />
                      <span>Choose How to Send Your Feedback:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Option 1: WhatsApp */}
                      <button
                        type="button"
                        onClick={handleSendWhatsAppReview}
                        className="p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer group hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <MessageSquare size={16} />
                        <div className="text-left">
                          <div className="font-extrabold text-[11px]">Option 1: Send via WhatsApp</div>
                          <div className="text-[9px] text-emerald-100 font-medium">+91 99403 79449</div>
                        </div>
                      </button>

                      {/* Option 2: Email */}
                      <button
                        type="button"
                        onClick={handleSendEmailReview}
                        className="p-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer group hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Mail size={16} />
                        <div className="text-left">
                          <div className="font-extrabold text-[11px]">Option 2: Send via Email</div>
                          <div className="text-[9px] text-blue-100 font-medium">genzetechnologies@gmail.com</div>
                        </div>
                      </button>
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => setModalOpen(false)}
                        className="text-xs font-bold text-slate-500 hover:text-navy transition-colors py-1 px-3"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
