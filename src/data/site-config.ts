export const siteConfig = {
  name: 'Agentic AI Associates',
  shortName: 'AgenticAI',
  url: 'https://agenticai.associates',
  description: 'UK AI consultancy specialising in agentic AI systems, automation, and governance. We build AI that delivers measurable results from week one.',
  tagline: 'AI systems that deliver results from week one.',
  founder: {
    name: 'Sunny Patel',
    jobTitle: 'Founder & AI Consultant',
    personalUrl: 'https://sunnypatel.co.uk',
  },
  contact: {
    email: 'hello@agenticai.associates',
    bookingUrl: 'https://trafft.com/',
    staticFormsKey: 'sf_9e906eb6c00416b9d3354749',
  },
  social: {
    linkedin: '',
    twitter: '',
  },
  ga4Id: 'G-923Q4JQMH4',
} as const;

export const mainNav = [
  { label: 'What We Do', href: '/what-we-do/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'About', href: '/about/' },
  { label: 'Get Started', href: '/get-started/' },
] as const;

export const footerNav = {
  whatWeDo: [
    { label: 'AI Readiness Assessment', href: '/what-we-do/ai-readiness-assessment/' },
    { label: 'AI Strategy & Roadmaps', href: '/what-we-do/ai-strategy/' },
    { label: 'Agentic AI Systems', href: '/what-we-do/agentic-ai/' },
    { label: 'Generative AI & LLMs', href: '/what-we-do/generative-ai/' },
    { label: 'AI Automation', href: '/what-we-do/ai-automation/' },
    { label: 'AI Governance', href: '/what-we-do/ai-governance/' },
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
    { label: 'Insights', href: '/insights/' },
    { label: 'Results', href: '/about/results/' },
    { label: 'Get Started', href: '/get-started/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
} as const;
