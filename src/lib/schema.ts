import { siteConfig } from '@/data/site-config';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    founder: {
      '@type': 'Person',
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.jobTitle,
      url: siteConfig.founder.personalUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: [
      'AI Consultancy',
      'AI Strategy',
      'AI Implementation',
      'Generative AI',
      'Agentic AI',
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
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
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
