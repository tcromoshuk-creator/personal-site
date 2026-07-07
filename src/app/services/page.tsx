import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import {
  EngagementModels,
  GrowthSystemMap,
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
        title="Find the business problem first."
        intro="Use this as a quick map of the service areas. Each one ties back to a mandate, deliverables, and proof from past work."
      >
        <ServiceNavigator />
      </Section>

      <Section
        tone="alt"
        className="growth-system-section"
        eyebrow="Operating Pattern"
        title="A growth system, not disconnected tactics."
        intro="Most mandates move through the same rhythm: diagnose the constraint, plan the work, build the system, measure performance, and scale what works."
      >
        <GrowthSystemMap />
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
        intro="Fractional and interim leadership belong here: as engagement models, not service categories."
      >
        <EngagementModels />
      </Section>

      <Section className="services-faq-section" eyebrow="FAQ" title="How to think about fit and scope.">
        <FAQ />
      </Section>

      <ContactCTA
        eyebrow="Next step"
        title="Bring me the business problem, not just the channel problem."
        intro="The right conversation usually starts with what the company is trying to improve: revenue, retention, acquisition efficiency, marketplace performance, forecasting, or the operating cadence around growth."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />
    </>
  );
}
