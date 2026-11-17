export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  features: readonly string[];
  accentColor: string;
}

export interface WhyUsPoint {
  iconName: string;
  title: string;
  description: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  tag: string;
  imageUrl: string;
}

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  description: string;
}
