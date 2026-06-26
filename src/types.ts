export interface ClientProject {
  id: string;
  clientName: string;
  businessType: string;
  niche: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl: string;
  techStack: string[];
  metrics: {
    speedBoost: string; // e.g., "99/100 Lighthouse" or "0.4s load time"
    conversionChange: string; // e.g., "+240% Phone Calls"
    seoRank: string; // e.g., "Page #1 Google"
  };
  beforeAfter?: {
    beforeDesc: string;
    beforeSpeed?: string;
    afterDesc: string;
    afterSpeed?: string;
  };
}

export interface PersonalProject {
  id: string;
  title: string;
  niche: string;
  duration: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  techStack: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  businessName: string;
  businessType: string;
  avatar: string;
  rating: number; // e.g. 5
  review: string;
  date: string;
}
