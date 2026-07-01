import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { CompanyStrip } from "@/components/CompanyStrip";
import { ExpertiseCards } from "@/components/ExpertiseCards";
import { GrowthOperatingSystem } from "@/components/GrowthOperatingSystem";
import { Hero } from "@/components/Hero";
import { MetricStrip } from "@/components/MetricStrip";
import { PlatformEcosystem } from "@/components/PlatformEcosystem";
import { Section } from "@/components/Section";
import {
  caseStudies,
  homepageAudiences,
  homepageProofMetrics,
  industries,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero
        title="I build the operating systems behind profitable digital commerce growth."
        intro="Growth and e-commerce leadership across DTC, marketplaces, retail media, lifecycle, forecasting, and executive reporting."
        primaryCta={{ href: "/experience", label: "View Experience" }}
        secondaryCta={{ href: "/contact", label: "Start a Conversation" }}
        showSystemMap
      />

      <Section tone="alt" className="kpi-proof-section">
        <MetricStrip metrics={homepageProofMetrics} columns="four" />
      </Section>

      <Section
        className="credibility-section"
        eyebrow="Company and category experience"
        title="Proven builder across direct-to-consumer, entertainment, marketplace, and subscription businesses."
        intro="I believe growth touches more than marketing channels. It connects product experience, merchandising, operations, finance, analytics, retention, and executive decision-making."
      >
        <CompanyStrip />
        <div className="industry-tags-block section-after">
          <span className="industry-tags-label">Industries Spanned</span>
          <div className="tag-list">
            {industries.map((industry) => (
              <span className="tag" key={industry}>
                {industry}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section
        tone="soft"
        className="capabilities-section"
        eyebrow="Growth & E-Commerce Expertise"
        title="Core areas of growth and e-commerce expertise."
        intro="These are the functions and systems I use to lead growth across e-commerce, marketplaces, acquisition, retention, analytics, forecasting, and AI-enabled workflows."
      >
        <ExpertiseCards />
        <div className="button-row section-action">
          <Link className="button secondary" href="/services">
            View Services
          </Link>
        </div>
      </Section>

      <Section
        className="case-proof-section"
        eyebrow="Selected case studies"
        title="Selected growth and e-commerce outcomes."
        intro="These examples highlight the business problems I have worked on, the growth systems I helped build, and the measurable outcomes behind the work."
      >
        <div className="grid case-grid">
          {caseStudies.slice(0, 4).map((study) => (
            <CaseCard key={study.slug} study={study} variant="homepage" />
          ))}
        </div>
        <div className="button-row case-button-row">
          <Link className="button secondary" href="/case-studies">
            View all case studies
          </Link>
        </div>
      </Section>

      <Section
        tone="alt"
        className="process-section"
        eyebrow="Growth operating system"
        title="How I turn growth problems into operating systems."
        intro="My framework starts with the real constraint - revenue, margin, retention, reporting, or ownership - then turns it into a clear operating cadence for prioritizing work, measuring performance, and scaling what works."
      >
        <GrowthOperatingSystem />
      </Section>

      <Section
        className="matrix-section"
        eyebrow="Platform and channel ecosystem"
        title="Platforms and systems I have operated across."
        intro="A curated view of the channels, tools, and operating systems behind the work."
      >
        <PlatformEcosystem />
      </Section>

      <Section
        tone="soft"
        className="audience-section"
        eyebrow="Full-time or fractional"
        title="Explore full-time leadership or strategic advisory support."
        intro="Start with the path that fits your need: full-time growth, e-commerce, marketplace, or marketing leadership - or fractional/advisory support for senior strategic growth mandates."
      >
        <div className="grid two-col">
          {homepageAudiences.map((audience) => (
            <div className="card audience-card" key={audience.title}>
              <div>
                <p className="case-card-meta">{audience.subtitle}</p>
                <h3>{audience.title}</h3>
                <p>{audience.body}</p>
              </div>
              <ul>
                {audience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link className="button secondary" href={audience.href}>
                {audience.cta}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="contact-section"
        eyebrow="Contact"
        title="Start a conversation about growth leadership or advisory support."
        intro="Reach out about full-time growth, e-commerce, marketplace, or marketing leadership, fractional advisory, or project-based work across commerce, acquisition, lifecycle, forecasting, reporting, and AI-enabled workflows."
      >
        <div className="button-row">
          <Link className="button primary" href="/contact">
            Start a Conversation
          </Link>
          <Link className="button secondary" href="/case-studies">
            View Case Studies
          </Link>
        </div>
      </Section>
    </>
  );
}
