import type { Metadata } from "next";
import { site } from "@/lib/content";

type PageMetadata = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = site.description,
  path = "/",
}: PageMetadata): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.title}`;

  return {
    metadataBase: new URL(site.url),
    title: title
      ? {
          absolute: fullTitle,
        }
      : {
          default: fullTitle,
          template: `%s | ${site.name}`,
        },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
