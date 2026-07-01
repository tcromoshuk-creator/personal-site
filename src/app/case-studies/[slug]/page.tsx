import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return createMetadata({
    title: `${study.company} Case Study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">{study.category}</p>
          <h1>{study.title}</h1>
          <p className="lede">{study.summary}</p>
          <div className="button-row">
            <Link className="button secondary" href="/case-studies">
              Back to case studies
            </Link>
            <Link className="button primary" href="/contact">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      <Section tone="alt">
        <div className="grid four-col">
          {study.metrics.map((metric) => (
            <div className="metric-card card" key={metric}>
              <span>{metric}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Context" title="The business problem">
        <p className="lede">{study.context}</p>
      </Section>

      <Section tone="soft" eyebrow="What changed" title="Operating moves">
        <div className="grid two-col">
          {study.moves.map((move) => (
            <div className="card soft-card" key={move}>
              <p>{move}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Outcome" title="Result">
        <p className="lede">{study.outcome}</p>
      </Section>

      <Section tone="alt" eyebrow="Related services" title="Where this work maps">
        <div className="tag-list">
          {study.services.map((service) => (
            <span className="tag" key={service}>
              {service}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
