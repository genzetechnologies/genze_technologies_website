export const COMPANY = {
  name: 'GENZE TECHNOLOGIES',
  shortName: 'Genze',
  tagline: 'Build • Grow • Thrive',
  email: 'genzetechnologies@gmail.com',
  phone: '9940379449',
  phoneDisplay: '+91 99403 79449',
  altPhone: '8072177892',
  altPhoneDisplay: '+91 80721 77892',
  location: 'Chennai, Tamil Nadu, India',
  whatsappUrl: 'https://wa.me/919940379449?text=Hello%20Genze%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.',
  trustLabel: 'Your Digital Growth Partner',
} as const;

export const FEEDBACK_FORM_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_FEEDBACK_FORM_URL) || 'https://forms.gle/genzetechnologies';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SERVICES = [
  {
    id: 'service-01',
    number: 'SERVICE 01',
    title: 'Business Website Development',
    description: 'Professional websites for businesses, startups and entrepreneurs designed to establish authority and drive growth.',
    iconName: 'Globe',
    accentColor: '#2563EB',
    features: [
      'Corporate Websites',
      'Business Websites',
      'Startup Websites',
      'Responsive Web Design',
      'Landing Pages',
    ],
  },
  {
    id: 'service-02',
    number: 'SERVICE 02',
    title: 'E-Commerce Website Development',
    description: 'Launch your own online store and take your business into the digital marketplace with modern e-commerce capabilities.',
    iconName: 'ShoppingCart',
    accentColor: '#38BDF8',
    features: [
      'Online Store Development',
      'Product Catalogue',
      'Shopping Cart',
      'Checkout Integration',
      'Payment Gateway Integration',
      'Order Management',
    ],
  },
  {
    id: 'service-03',
    number: 'SERVICE 03',
    title: 'Student Project Solutions',
    description: 'Practical project guidance and development support for school and college students. We encourage learning, understanding and customization.',
    iconName: 'GraduationCap',
    accentColor: '#3B82F6',
    features: [
      'School Science Projects',
      'Working Models',
      'College Mini Projects',
      'Final-Year Project Guidance',
      'Python and Java Projects',
      'AI/ML and GenAI Projects',
    ],
  },
  {
    id: 'service-04',
    number: 'SERVICE 04',
    title: 'Personal Portfolio Websites',
    description: 'Build a professional online identity and showcase your achievements to stand out to employers, clients and collaborators.',
    iconName: 'UserCheck',
    accentColor: '#2563EB',
    features: [
      'Student Portfolios',
      'Developer Portfolios',
      'Resume Websites',
      'Project Showcases',
      'GitHub Integration',
      'LinkedIn Integration',
    ],
  },
  {
    id: 'service-05',
    number: 'SERVICE 05',
    title: 'UI/UX Design',
    description: 'Create beautiful, intuitive and user-friendly digital experiences that turn visitors into loyal users.',
    iconName: 'Layout',
    accentColor: '#38BDF8',
    features: [
      'Website UI Design',
      'Mobile UI Design',
      'Figma Prototypes',
      'Dashboard Design',
      'Website Redesign',
    ],
  },
  {
    id: 'service-06',
    number: 'SERVICE 06',
    title: 'Custom Digital Solutions',
    description: 'Technology solutions designed around your ideas and requirements, built with scalability and performance in mind.',
    iconName: 'Cpu',
    accentColor: '#142D55',
    features: [
      'Custom Web Applications',
      'Frontend Development',
      'Backend Development',
      'Database Integration',
      'AI-Based Solutions',
    ],
  },
] as const;

export const ABOUT_PILLARS = [
  {
    title: 'Our Mission',
    subtitle: 'Purpose-Driven Development',
    description: 'To empower businesses, startups, entrepreneurs, and students with high-impact digital solutions, bridging creativity and engineering to transform ambitious ideas into reality.',
    iconName: 'Compass',
  },
  {
    title: 'Our Vision',
    subtitle: 'Future-Ready Technology',
    description: 'To become a globally recognized digital partner celebrated for intuitive UI/UX, dependable modern software architectures, and transparent guidance for emerging creators.',
    iconName: 'Target',
  },
  {
    title: 'Our Approach',
    subtitle: 'Practical & Collaborative',
    description: 'We combine clear communication, modular engineering, and agile feedback loops. From discovery to deployment, we build solutions that deliver measurable long-term value.',
    iconName: 'Zap',
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    iconName: 'Sparkles',
    title: 'Creative and Modern Designs',
    description: 'Contemporary aesthetic with liquid glass, sleek typography, and thoughtful interactions that elevate your brand reputation.',
  },
  {
    iconName: 'Smartphone',
    title: 'Responsive Development',
    description: 'Flawlessly adaptive across all viewports—from 375px mobile screens to 1440px+ ultra-wide desktop monitors.',
  },
  {
    iconName: 'HeartHandshake',
    title: 'User-Friendly Experiences',
    description: 'Intuitive navigation hierarchies, accessible contrast, and frictionless user flows designed for real human engagement.',
  },
  {
    iconName: 'BookOpenCheck',
    title: 'Practical Project Support',
    description: 'Comprehensive guidance for students and beginners, focusing on core understanding, code walkthroughs, and confidence.',
  },
  {
    iconName: 'Sliders',
    title: 'Personalized Solutions',
    description: 'No cookie-cutter templates. Every website and digital architecture is custom-crafted around your specific requirements.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Focus on Quality',
    description: 'Strict attention to clean code, semantic structure, speed optimization, and production-ready dependability.',
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 'STEP 01',
    title: 'DISCOVER',
    description: "Understand the client's idea and requirements in depth through clear, structured consultation.",
    iconName: 'Search',
  },
  {
    step: 'STEP 02',
    title: 'PLAN',
    description: 'Prepare the project structure, milestones, architecture stack, and design direction.',
    iconName: 'FileText',
  },
  {
    step: 'STEP 03',
    title: 'DESIGN',
    description: 'Create a modern UI/UX experience with interactive prototypes and design system tokens.',
    iconName: 'Palette',
  },
  {
    step: 'STEP 04',
    title: 'DEVELOP',
    description: 'Build and rigorously test the solution with modern code, responsive layouts, and optimization.',
    iconName: 'Code',
  },
  {
    step: 'STEP 05',
    title: 'DELIVER',
    description: 'Deliver the completed project, assist with deployment, and provide post-launch support as agreed.',
    iconName: 'Rocket',
  },
] as const;

export const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: 'Nexus Venture Landing',
    category: 'Business Website',
    tag: 'Corporate & Startup',
    description: 'High-converting interactive corporate website featuring glassmorphism micro-interactions and lead qualification engine.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-blue-600 via-electric to-cyan',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Aura Artisan Marketplace',
    category: 'E-Commerce Solution',
    tag: 'Online Storefront',
    description: 'Modern e-commerce platform prototype featuring live product catalog filtering, cart state management, and streamlined checkout UI.',
    technologies: ['React', 'Next.js', 'Stripe UI', 'Tailwind'],
    gradient: 'from-cyan via-blue-500 to-indigo-600',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'VisionAI Object Classifier',
    category: 'Student Project Solution',
    tag: 'AI/ML Final Year Project',
    description: 'Computer vision working model demo with interactive Python/Flask API, model confidence meters, and clear documentation.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    gradient: 'from-indigo-600 via-primary to-blue-400',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'DevFolio Interactive Resume',
    category: 'Personal Portfolio',
    tag: 'Developer Brand',
    description: 'Dynamic personal developer identity showcasing live project demos, GitHub statistics integration, and instant inquiry modal.',
    technologies: ['React', 'Framer Motion', 'Lucide', 'Tailwind'],
    gradient: 'from-blue-500 via-sky-400 to-teal-400',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
] as const;

export const FAQ_QUESTIONS = [
  {
    question: 'What services does Genze Technologies provide?',
    answer: 'Genze Technologies provides end-to-end digital solutions including Business Website Development, E-Commerce Website Development, Student Project Solutions (school & college), Personal Portfolio Websites, UI/UX Design, and Custom Web Applications.',
  },
  {
    question: 'Do you develop e-commerce websites?',
    answer: 'Yes. We build complete, scalable e-commerce websites tailored to your brand, including product catalogues, shopping carts, checkout workflows, and available payment gateway integrations.',
  },
  {
    question: 'Do you create websites for startups?',
    answer: 'Absolutely. We specialize in fast, high-impact MVP websites and corporate landing pages designed to help early-stage ventures attract users, present credibility, and communicate their unique value proposition.',
  },
  {
    question: 'Do you provide school and college project guidance?',
    answer: 'Yes. We offer practical guidance and development support for school science projects, working models, college mini projects, and final-year engineering projects across Python, Java, AI/ML, and GenAI—emphasizing hands-on understanding and customization.',
  },
  {
    question: 'Can students get personal portfolio websites?',
    answer: 'Yes! We craft polished, recruiter-ready developer and student portfolios with resume hosting, interactive project showcases, and direct links to GitHub and LinkedIn.',
  },
  {
    question: 'How can I discuss my project requirements?',
    answer: 'You can submit our contact form right here on the website, chat with us directly via WhatsApp at +91 99403 79449, or email us at genzetechnologies@gmail.com. We usually respond within a few hours.',
  },
  {
    question: 'How can I get a quotation?',
    answer: 'Simply share a brief summary of your project idea via our contact form or WhatsApp. We will evaluate your requirements, suggest an optimal technical scope, and provide a transparent, customized quotation with no hidden costs.',
  },
] as const;
