import servicesData from '@/data/services.json';
import industriesData from '@/data/industries.json';
import solutionsData from '@/data/solutions.json';
import businessSizesData from '@/data/business-sizes.json';
import learnData from '@/data/learn.json';
import locationsData from '@/data/locations.json';

export type HubMeta = {
  title: string;
  description: string;
  primaryKeyword: string;
};

export type ServicePage = (typeof servicesData.pages)[number];
export type IndustryPage = (typeof industriesData.pages)[number];
export type SolutionPage = (typeof solutionsData.pages)[number];
export type BusinessSizePage = (typeof businessSizesData.pages)[number];
export type LearnPage = (typeof learnData.pages)[number];
export type LocationPage = (typeof locationsData.pages)[number];

// getStaticPaths generators
export function getServicePaths() {
  return servicesData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: servicesData.hub },
  }));
}

export function getIndustryPaths() {
  return industriesData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: industriesData.hub },
  }));
}

export function getSolutionPaths() {
  return solutionsData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: solutionsData.hub },
  }));
}

export function getBusinessSizePaths() {
  return businessSizesData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page },
  }));
}

export function getLearnPaths() {
  return learnData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: learnData.hub },
  }));
}

export function getLocationPaths() {
  return locationsData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: locationsData.hub },
  }));
}

// Hub data accessors
export function getServicesHub() { return servicesData; }
export function getIndustriesHub() { return industriesData; }
export function getSolutionsHub() { return solutionsData; }
export function getBusinessSizesHub() { return businessSizesData; }
export function getLearnHub() { return learnData; }
export function getLocationsHub() { return locationsData; }

// Cross-link helpers
export function getRelatedServices(slugs: string[]): ServicePage[] {
  return servicesData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedIndustries(slugs: string[]): IndustryPage[] {
  return industriesData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedSolutions(slugs: string[]): SolutionPage[] {
  return solutionsData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedLearnPages(slugs: string[]): LearnPage[] {
  return learnData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedLocations(slugs: string[]): LocationPage[] {
  return locationsData.pages.filter((p) => slugs.includes(p.slug));
}
