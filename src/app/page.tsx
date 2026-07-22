import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { CompanyStrip } from "@/components/CompanyStrip";
import { GrowthSystemComparison } from "@/components/GrowthSystemComparison";
import { GrowthOperatingSystem } from "@/components/GrowthOperatingSystem";
import { Hero } from "@/components/Hero";
import { PlatformEcosystem } from "@/components/PlatformEcosystem";
import { Section } from "@/components/Section";
import { caseStudies, homepageAudiences, industries, site } from "@/lib/content";

const homepageCaseStudySlugs = ["mad-engine-tiktok-shop", "netflix-shop"];

export default function Home() {
  return (
    <>
      <Hero
        title="Growth leadership for brands."
        intro="I help brands scale by building profitable revenue engines. Over 15+ years, I've led hands-on growth across DTC, subscription, retail, marketplaces, entertainment, fintech, food, fashion, and technology."
        primaryCta={{
          analyticsEvent: "view_experience_click",
          analyticsLinkLocation: "homepage_hero",
          href: "/experience",
          label: "View Experience",
        }}
        secondaryCta={{ href: "/contact", label: "Start a Conversation" }}
        showSystemMap
      />

      <Section className="logo-section">
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
        className="growth-philosophy-section"
        eyebrow="Growth Philosophy"
        title="Growth is more than a channel. I build the system."
        intro="Many companies define growth too narrowly. I connect the full customer journey—from demand generation through activation, engagement, and retention—to create long-term value."
      >
        <GrowthSystemComparison />
      </Section>

      <Section className="case-proof-section" eyebrow="Case Studies" title="A few highlights of my work">
        <div className="grid case-grid homepage-case-grid">
          {caseStudies
            .filter((study) => homepageCaseStudySlugs.includes(study.slug))
            .map((study) => (
              <CaseCard key={study.slug} study={study} variant="homepage" />
            ))}
        </div>
        <div className="button-row case-button-row">
          <Link
            className="button secondary"
            data-analytics-event="view_case_studies_click"
            data-analytics-link-location="homepage_case_studies_section"
            href="/case-studies"
          >
            View all case studies
          </Link>
        </div>
      </Section>

      <Section
        className="matrix-section"
        eyebrow="Platform Ecosystem"
        title="The stack I operate."
        intro="A curated view of the channels, tools, and operating systems behind the work."
      >
        <PlatformEcosystem />
      </Section>

      <Section
        className="process-section"
        eyebrow="Growth Operating System"
        title="Six steps I run inside every P&L."
      >
        <GrowthOperatingSystem />
      </Section>

      <Section
        className="audience-section"
        eyebrow="Engagement Models"
        title="Two ways to work together."
      >
        <div className="grid two-col">
          {homepageAudiences.map((audience) => (
            <div className="card audience-card" key={audience.title}>
              <div className="audience-copy">
                <p className="case-card-meta">{audience.subtitle}</p>
                <h3>{audience.title}</h3>
                <p>{audience.body}</p>
              </div>
              <ul>
                {audience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link
                className="button secondary"
                data-analytics-event={audience.href === "/experience" ? "view_experience_click" : undefined}
                data-analytics-link-location={
                  audience.href === "/experience" ? "homepage_engagement_models" : undefined
                }
                href={audience.href}
              >
                {audience.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="contact-section"
        eyebrow="Start a Conversation"
        title="Building a growth engine? Let’s talk."
        intro="Reach out about full-time leadership roles, selective advisory work, or just to talk growth."
      >
        <div className="button-row contact-button-row">
          <Link className="button primary" href="/contact">
            Contact Me
            <span aria-hidden="true">→</span>
          </Link>
          <a
            className="button secondary"
            data-analytics-event="linkedin_click external_link_click"
            data-analytics-link-location="homepage_contact_section"
            href={site.linkedin}
          >
            LinkedIn
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="contact-email">{site.email}</p>
      </Section>
    </>
  );
}
