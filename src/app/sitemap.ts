import type { MetadataRoute } from "next";
import { caseStudyPages } from "@/lib/case-study-pages";
import { site } from "@/lib/content";

const staticRoutes = [
  "/",
  "/about",
  "/experience",
  "/services",
  "/case-studies",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-07");
  const routes = [
    ...staticRoutes,
    ...caseStudyPages.map((study) => `/case-studies/${study.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified,
  }));
}
