import { siteConfig } from '@/data/site-config';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    foundingDate: '2026',
    founder: {
      '@type': 'Person',
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.jobTitle,
      url: siteConfig.founder.personalUrl,
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressLocality: 'United Kingdom',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: siteConfig.contact.email,
      url: `${siteConfig.url}/contact/`,
      areaServed: 'GB',
    },
    serviceType: 'AI Consulting',
    sameAs: [
      'https://www.linkedin.com/company/agenticai-associates',
      'https://agenticai.associates',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Agentic AI',
      'Generative AI',
      'AI Strategy',
      'AI Implementation',
    ],
  };
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.jobTitle,
    url: siteConfig.founder.personalUrl,
    sameAs: [
      siteConfig.founder.personalUrl,
      'https://www.linkedin.com/in/sunnypatel',
    ],
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Agentic AI',
      'Generative AI',
      'SEO',
      'Data Engineering',
      'AI Strategy',
      'AI Implementation',
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  };
}

export function buildArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.publishedAt,
    ...(opts.updatedAt && { dateModified: opts.updatedAt }),
    author: {
      '@type': 'Person',
      name: siteConfig.founder.name,
      url: siteConfig.founder.personalUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
  };
}

export function buildDefinedTermSchema(opts: {
  term: string;
  definition: string;
  url: string;
  inDefinedTermSet?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: opts.term,
    description: opts.definition,
    url: opts.url,
    inDefinedTermSet: opts.inDefinedTermSet || `${siteConfig.url}/#glossary`,
    ...(opts.sameAs && opts.sameAs.length > 0 && { sameAs: opts.sameAs }),
  };
}

export function buildSpeakableSchema(opts: {
  url: string;
  cssSelectors: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: opts.url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: opts.cssSelectors,
    },
  };
}

export function buildHowToSchema(opts: {
  name: string;
  description: string;
  url: string;
  totalTime?: string;
  steps: { name: string; text: string; url?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.totalTime && { totalTime: opts.totalTime }),
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url && { url: s.url }),
    })),
  };
}

export function buildLocalBusinessSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed: string;
  region?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${siteConfig.name} — ${opts.areaServed}`,
    description: opts.description,
    url: opts.url,
    areaServed: {
      '@type': 'Place',
      name: opts.areaServed,
      ...(opts.region && {
        containedInPlace: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
      }),
    },
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
  };
}
