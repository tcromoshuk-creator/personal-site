import type { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Case Studies",
  description:
    "Growth and e-commerce case studies across Mad Engine, Netflix.Shop, Five Four / Menlo Club, Veestro, and Echo Base / Paxful.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        eyebrow="Case Studies"
        title="Specific growth problems, operating changes, and measurable outcomes."
        intro="These are structured around the business problem, the operating changes made, and the metrics that matter."
      />

      <Section tone="alt">
        <div className="grid two-col">
          {caseStudies.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>
    </>
  );
}
