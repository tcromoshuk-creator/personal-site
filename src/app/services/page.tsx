import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import {
  EngagementModels,
  ServiceNavigator,
  ServiceProofTiles,
  ServiceSections,
} from "@/components/ServiceSections";
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
        title="Senior growth support for brands with real commercial complexity."
        intro="I help companies diagnose growth constraints, build profitable revenue systems, and improve the operating cadence around acquisition, retention, commerce, analytics, and AI-enabled workflows."
        primaryCta={{ href: "/contact", label: "Start a Conversation" }}
        secondaryCta={{ href: "/case-studies", label: "View Case Studies" }}
      />

      <Section
        className="service-nav-section"
        eyebrow="How I Can Help"
        title="Types of problems I tackle"
      >
        <ServiceNavigator />
      </Section>

      <Section
        className="service-areas-section"
        eyebrow="Core Service Areas"
        title="Senior growth support by mandate."
      >
        <ServiceSections />
      </Section>

      <Section
        tone="alt"
        className="service-proof-section"
        eyebrow="Proof by Business Problem"
        title="Selected outcomes tied to the work."
      >
        <ServiceProofTiles />
      </Section>

      <Section
        className="engagement-model-section"
        eyebrow="Engagement Models"
        title="Different ways the work can take shape."
      >
        <EngagementModels />
      </Section>

      <Section className="services-faq-section" eyebrow="FAQ" title="How to think about fit and scope.">
        <FAQ />
      </Section>

      <Section className="services-bottom-cta">
        <Link className="button primary" href="/contact">
          Contact Me
        </Link>
      </Section>
    </>
  );
}
