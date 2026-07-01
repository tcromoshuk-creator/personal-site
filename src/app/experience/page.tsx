import type { Metadata } from "next";
import { CareerTimeline } from "@/components/CareerTimeline";
import { Hero } from "@/components/Hero";
import { MetricStrip } from "@/components/MetricStrip";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Resume-style experience for Tyrell Cromoshuk across growth, e-commerce, marketplace, DTC, lifecycle, retail media, and executive reporting.",
  path: "/experience",
});

const expertise = [
  "Growth Strategy",
  "Revenue Leadership",
  "E-Commerce P&L",
  "Marketplace Growth",
  "Retail Media",
  "Margin-Aware Acquisition",
  "DTC Growth",
  "Lifecycle / CRM",
  "CRO",
  "Forecasting",
  "AOP Planning",
  "Executive Reporting",
  "AI Marketing Workflows",
];

export default function ExperiencePage() {
  return (
    <>
      <Hero
        eyebrow="Experience / Resume"
        title="Growth, commerce, marketplace, and retention leadership."
        intro="15 years building profitable revenue engines across Shopify, Amazon, Walmart, Target+, TikTok Shop, Netflix.Shop, global acquisition, subscription, fintech, fashion, food, and technology."
      />

      <Section tone="alt">
        <MetricStrip />
      </Section>

      <Section
        eyebrow="Core expertise"
        title="Commercial growth work with real operating depth."
      >
        <div className="tag-list">
          {expertise.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="Professional experience" title="Recent roles">
        <CareerTimeline mode="resume" />
      </Section>

      <Section
        eyebrow="Consulting experience"
        title="Advisory work across consumer, DTC, marketplace, subscription, and luxury brands."
        intro="Consulting and agency experience includes growth strategy, customer acquisition, lifecycle/CRM, e-commerce optimization, paid media, positioning, executive reporting, and scalable go-to-market systems."
      >
        <div className="tag-list">
          {["Ocean / Yotpo", "Jason of Beverly Hills", "Keith James", "LSTN"].map(
            (client) => (
              <span className="tag" key={client}>
                {client}
              </span>
            ),
          )}
        </div>
      </Section>
    </>
  );
}
