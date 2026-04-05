const hubSpokes: Record<string, string[]> = {
  services: [
    'ai-strategy',
    'ai-implementation',
    'agentic-ai',
    'generative-ai',
    'conversational-ai',
    'data-and-ai',
    'applied-ai',
    'ai-training',
    'ethical-ai',
  ],
  industries: [
    'healthcare',
    'legal',
    'retail',
    'supply-chain',
    'finance',
    'education',
    'ecommerce',
    'hr',
    'real-estate',
    'manufacturing',
    'marketing',
    'government',
  ],
  solutions: [
    'automation',
    'data-analysis',
    'content-creation',
    'customer-support',
    'forecasting',
    'compliance-monitoring',
    'lead-generation',
    'report-generation',
    'inventory-management',
    'process-improvement',
  ],
  'for': [
    'small-business',
    'enterprise',
    'startups',
    'smes',
  ],
  learn: [
    'what-is-an-ai-consultant',
    'what-does-an-ai-consultant-do',
    'how-to-become-an-ai-consultant',
    'become-ai-consultant-no-experience',
    'ai-consultant-skills',
    'ai-consultant-career-path',
    'ai-consultant-certification',
    'ai-consultant-job-description',
    'ai-consultant-salary',
    'ai-consultant-hourly-rate',
    'how-to-choose-an-ai-consultant',
    'when-to-hire-an-ai-consultant',
    'benefits-of-hiring-an-ai-consultant',
    'ai-consultant-vs-vendor',
    'freelance-ai-consultant',
    'ai-consultant-interview-questions',
  ],
  locations: [
    'london',
    'manchester',
    'birmingham',
    'leeds',
    'bristol',
    'edinburgh',
    'glasgow',
    'reading',
    'leicester',
    'scotland',
    'northern-ireland',
    'norfolk',
  ],
};

const crossHubLinks: Record<string, string[]> = {
  services: ['industries', 'solutions'],
  industries: ['services', 'solutions'],
  solutions: ['services', 'industries'],
  'for': ['services', 'industries'],
  learn: ['services'],
  locations: ['services', 'industries'],
};

export function getHubSpokes(hub: string): string[] {
  return hubSpokes[hub] || [];
}

export function getCrossHubLinks(hub: string): string[] {
  return crossHubLinks[hub] || [];
}

export function getHubUrl(hub: string): string {
  if (hub === 'for') return '/for/';
  return `/${hub}/`;
}

export function getSpokeUrl(hub: string, slug: string): string {
  if (hub === 'for') return `/for/${slug}/`;
  return `/${hub}/${slug}/`;
}
