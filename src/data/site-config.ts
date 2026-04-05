export const siteConfig = {
  name: 'Agentic AI Associates',
  shortName: 'AgenticAI',
  url: 'https://agenticai.associates',
  description: 'UK AI consultancy specialising in agentic AI, generative AI, and applied AI solutions. We help businesses implement AI strategy, automation, and intelligent systems that deliver measurable results.',
  tagline: 'AI consultancy that delivers results.',
  founder: {
    name: 'Sunny Patel',
    jobTitle: 'AI Consultant',
    personalUrl: 'https://sunnypatel.co.uk',
  },
  contact: {
    email: 'hello@agenticai.associates',
    calendlyUrl: 'https://calendly.com/agenticai',
    staticFormsKey: 'sf_9e906eb6c00416b9d3354749',
  },
  social: {
    linkedin: '',
    twitter: '',
  },
  ga4Id: '',
} as const;

export const mainNav = [
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Solutions', href: '/solutions/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'About', href: '/about/' },
  { label: 'Pricing', href: '/pricing/' },
] as const;

export const footerNav = {
  services: [
    { label: 'AI Strategy & Roadmaps', href: '/services/ai-strategy/' },
    { label: 'AI Implementation', href: '/services/ai-implementation/' },
    { label: 'Agentic AI', href: '/services/agentic-ai/' },
    { label: 'Generative AI', href: '/services/generative-ai/' },
    { label: 'Data & AI', href: '/services/data-and-ai/' },
    { label: 'AI Training', href: '/services/ai-training/' },
  ],
  industries: [
    { label: 'Healthcare', href: '/industries/healthcare/' },
    { label: 'Legal', href: '/industries/legal/' },
    { label: 'Finance', href: '/industries/finance/' },
    { label: 'Retail', href: '/industries/retail/' },
    { label: 'Manufacturing', href: '/industries/manufacturing/' },
    { label: 'Education', href: '/industries/education/' },
  ],
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Case Studies', href: '/case-studies/' },
    { label: 'Pricing', href: '/pricing/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
} as const;
