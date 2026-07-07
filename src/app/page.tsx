import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { CompanyStrip } from "@/components/CompanyStrip";
import { ExpertiseCards } from "@/components/ExpertiseCards";
import { GrowthOperatingSystem } from "@/components/GrowthOperatingSystem";
import { Hero } from "@/components/Hero";
import { PlatformEcosystem } from "@/components/PlatformEcosystem";
import { Section } from "@/components/Section";
import { caseStudies, homepageAudiences, industries, site } from "@/lib/content";

const homepageCaseStudySlugs = ["mad-engine-tiktok-shop", "netflix-shop"];

const homepageExpertiseCards = [
  {
    title: "Growth Strategy & Revenue Planning",
    body: "Diagnose where growth is really coming from, where the business is leaking opportunity, and what the next stage of revenue should be built around.",
    levers: ["Revenue planning", "Forecasting", "Budget logic"],
    leadsTo: "Sharper priorities, budget logic, and leadership alignment.",
  },
  {
    title: "Commercial Growth & Channel Strategy",
    body: "Build the right growth system across DTC, retail, marketplaces, partnerships, product/catalog, and conversion without making the business dependent on one channel.",
    levers: ["Channel strategy", "Conversion", "Partnerships"],
    leadsTo: "A healthier channel mix and fewer single-channel dependencies.",
  },
  {
    title: "Acquisition, Media & Demand Generation",
    body: "Scale paid social, search, affiliate, influencer, retail media, and creative testing against margin-aware CAC, MER, ROAS, and revenue goals.",
    levers: ["Paid media", "Creative testing", "MER / ROAS"],
    leadsTo: "More accountable spend, cleaner tests, and stronger media economics.",
  },
  {
    title: "Lifecycle, CRM & Retention",
    body: "Build CRM, retention, reactivation, churn, subscription, and customer-value systems that make acquisition more valuable.",
    levers: ["CRM sequencing", "Retention programs", "Win-back"],
    leadsTo: "Higher LTV, stronger retention, and more useful customer journeys.",
  },
  {
    title: "Performance Systems, Forecasting & Operating Cadence",
    body: "Build dashboards, pacing, forecasts, budget logic, metric definitions, and decision rhythms that help leadership act faster and with more confidence.",
    levers: ["Dashboards", "Pacing", "Decision rhythm"],
    leadsTo: "Clearer executive decisions and fewer reactive performance reviews.",
  },
  {
    title: "AI-Enabled Marketing & Growth Systems",
    body: "Use practical AI workflows to make growth teams faster and more consistent across analysis, reporting, CRM sequencing, creative QA, PDP/catalog QA, and research.",
    levers: ["Codex workflows", "Creative QA", "Research automation"],
    leadsTo: "Faster analysis, repeatable workflows, and better operating consistency.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Growth leadership for brands."
        intro="I help brands scale by building profitable revenue engines. Over 15+ years, I've led hands-on growth across DTC, subscription, retail, marketplaces, entertainment, fintech, food, fashion, and technology."
        primaryCta={{ href: "/experience", label: "View Experience" }}
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
        className="capabilities-section"
        eyebrow="Core Expertise"
        title="Growth functions I lead end-to-end."
      >
        <ExpertiseCards items={homepageExpertiseCards} />
        <div className="button-row section-action">
          <Link className="button secondary" href="/services">
            View Services
          </Link>
        </div>
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
          <Link className="button secondary" href="/case-studies">
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
              <Link className="button secondary" href={audience.href}>
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
          <a className="button secondary" href={site.linkedin}>
            LinkedIn
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="contact-email">{site.email}</p>
      </Section>
    </>
  );
}
