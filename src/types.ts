export interface ServicePillar {
  id: string;
  pillarNumber: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: 'cyan' | 'magenta' | 'purple';
  services: {
    name: string;
    description: string;
    features: string[];
  }[];
}

export interface WebsiteProject {
  id: string;
  title: string;
  category: 'SITE INSTITUCIONAL' | 'LANDING PAGE' | 'LOJA VIRTUAL' | 'SITE PERSONALIZADO';
  niche: string;
  description: string;
  tags: string[];
  client: string;
  year: string;
  aspectRatio?: string;
  liveUrl?: string;
  isFlagship?: boolean;
  sectionsPreview?: string[];
  deliverables?: string[];
  fullHeightPreview: {
    heroHeading: string;
    heroSub: string;
    themeColor: string;
    accentColor: string;
    sections: {
      type: string;
      title: string;
      description?: string;
      items?: string[];
    }[];
  };
}

export interface GraphicDesignProject {
  id: string;
  title: string;
  category: string;
  classification: 'PROJETO COMERCIAL' | 'ESTUDO VISUAL' | 'CONCEITO';
  description: string;
  deliverables: string[];
  colors: string[];
  thumbnailGradient: string;
  details: string;
}

export interface TestimonialFeedback {
  id: string;
  clientName: string;
  role: string;
  project: string;
  messageText: string;
  context: string;
  time: string;
  verified: boolean;
  avatarText: string;
  attachmentName?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  duration?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
