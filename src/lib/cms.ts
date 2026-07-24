/**
 * CMS Client Utility (Stub for Sanity/Contentful)
 * 
 * This file is designed to be easily swappable with a real Headless CMS client 
 * (like next-sanity or contentful) once the API keys are provided.
 */

// import { createClient } from 'next-sanity'
// export const client = createClient({ projectId: 'YOUR_ID', dataset: 'production', useCdn: false })

import { caseStudies } from '@/data/case-studies';
import { blogPosts } from '@/data/blog';
import { services } from '@/data/services';

export async function getCaseStudies() {
  // TODO: Replace with real CMS fetch
  // return client.fetch('*[_type == "caseStudy"]')
  
  return caseStudies;
}

export async function getBlogPosts() {
  // TODO: Replace with real CMS fetch
  return blogPosts;
}

export async function getServices() {
  // TODO: Replace with real CMS fetch
  return services;
}
