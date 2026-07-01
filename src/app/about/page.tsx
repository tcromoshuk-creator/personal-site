import type { Metadata } from "next";
import { CareerTimeline } from "@/components/CareerTimeline";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Career timeline and operating style for Tyrell Cromoshuk, Growth & E-Commerce Executive.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About / Career Timeline"
        title="Senior growth operator with a commerce proof base."
        intro="My work sits at the intersection of growth marketing, marketplace operations, digital product, merchandising, lifecycle, analytics, finance, and executive planning."
      />

      <Section
        tone="alt"
        eyebrow="Operating style"
        title="Direct, practical, and focused on the business problem."
        intro="I am strongest when growth touches multiple functions and the company needs someone to connect the work: product, merchandising, marketplace operations, analytics, creative, lifecycle, finance, customer service, and leadership."
      >
        <div className="grid three-col">
          {[
            "Curious and willing to learn what I do not know.",
            "Direct about blockers, tradeoffs, data quality, and weak performance stories.",
            "Focused on unblocking teams and building a cadence that helps people execute.",
          ].map((item) => (
            <div className="card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Career timeline"
        title="A path from paid media depth to broader growth leadership."
      >
        <CareerTimeline />
      </Section>
    </>
  );
}
