import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceSections } from "@/components/ServiceSections";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Consulting and advisory services across growth strategy, e-commerce, marketplace growth, paid acquisition, lifecycle, CRO, executive reporting, forecasting, and AI-enabled growth systems.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services / Consulting & Advisory"
        title="Senior growth support for companies with real commercial complexity."
        intro="The best fit is a company that needs senior diagnosis, operating structure, and practical growth leadership around a meaningful business problem."
        primaryCta={{ href: "/contact", label: "Discuss consulting" }}
        secondaryCta={{ href: "/case-studies", label: "View proof" }}
      />

      <Section tone="alt">
        <ServiceSections />
      </Section>

      <Section eyebrow="FAQ" title="How to think about fit and scope.">
        <FAQ />
      </Section>

      <ContactCTA
        eyebrow="Next step"
        title="Bring me the business problem, not just the channel problem."
        intro="The right consulting conversation starts with what the company is trying to improve: revenue, retention, marketplace performance, reporting, forecasting, or the operating cadence around growth."
        secondaryHref="/case-studies"
        secondaryLabel="View case studies"
      />
    </>
  );
}
