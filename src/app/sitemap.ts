import type { MetadataRoute } from "next";
import { caseStudyPages } from "@/lib/case-study-pages";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/about", "/experience", "/services", "/case-studies", "/contact", "/agents",
    ...caseStudyPages.map((study) => `/case-studies/${study.slug}`),
  ];
  // Only canonical HTML pages. Do not invent last-modified dates on each build.
  return paths.map((path) => ({ url: `${site.url}${path || "/"}` }));
}
