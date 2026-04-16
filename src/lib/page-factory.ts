import whatWeDoData from '@/data/what-we-do.json';
import industriesData from '@/data/industries.json';
import businessSizesData from '@/data/business-sizes.json';
import learnData from '@/data/learn.json';
import locationsData from '@/data/locations.json';
import resultsData from '@/data/results.json';

export type HubMeta = {
  title: string;
  description: string;
  primaryKeyword: string;
};

export type WhatWeDoPage = (typeof whatWeDoData.pages)[number];
export type IndustryPage = (typeof industriesData.pages)[number];
export type BusinessSizePage = (typeof businessSizesData.pages)[number];
export type LearnPage = (typeof learnData.pages)[number];
export type LocationPage = (typeof locationsData.pages)[number];
export type ResultItem = (typeof resultsData.results)[number];

// getStaticPaths generators
export function getWhatWeDoPaths() {
  return whatWeDoData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: whatWeDoData.hub },
  }));
}

export function getIndustryPaths() {
  return industriesData.pages.map((page) => ({
    params: { slug: page.slug },
    props: { page, hub: industriesData.hub },
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
export function getWhatWeDoHub() { return whatWeDoData; }
export function getIndustriesHub() { return industriesData; }
export function getBusinessSizesHub() { return businessSizesData; }
export function getLearnHub() { return learnData; }
export function getLocationsHub() { return locationsData; }
export function getResults() { return resultsData.results; }

// Cross-link helpers
export function getRelatedWhatWeDo(slugs: string[]): WhatWeDoPage[] {
  return whatWeDoData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedIndustries(slugs: string[]): IndustryPage[] {
  return industriesData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedLearnPages(slugs: string[]): LearnPage[] {
  return learnData.pages.filter((p) => slugs.includes(p.slug));
}

export function getRelatedLocations(slugs: string[]): LocationPage[] {
  return locationsData.pages.filter((p) => slugs.includes(p.slug));
}
