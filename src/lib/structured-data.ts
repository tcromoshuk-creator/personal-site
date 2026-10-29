import { site } from "@/lib/content";
import { publicProfile } from "@/lib/public-profile";

export const personId = `${site.url}/#person`;

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: { "@id": personId },
};

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}/agents#profile`,
  url: `${site.url}/agents`,
  name: `${site.name} — Detailed Career Profile`,
  dateModified: publicProfile.reviewed,
  isPartOf: { "@id": `${site.url}/#website` },
  mainEntity: {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    url: site.url,
    jobTitle: site.title,
    description: publicProfile.summary,
    email: site.email,
    sameAs: [site.linkedin],
    homeLocation: { "@type": "Place", name: publicProfile.location },
    knowsAbout: publicProfile.capabilities.map((item) => item.title),
  },
};
