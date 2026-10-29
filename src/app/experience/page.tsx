import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExpertiseCards } from "@/components/ExpertiseCards";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { coreExpertiseCards, site } from "@/lib/content";
import { fullTimeRoles } from "@/lib/public-career";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Growth & Marketing Executive Experience",
  description:
    "Tyrell Cromoshuk's executive experience across Netflix, Mad Engine, Paxful, Veestro, and Menlo Club. VP, SVP, and Head of Growth, Marketing, and E-Commerce leadership.",
  path: "/experience",
});

const proofMetrics = [
  {
    value: "$300M+",
    label: "Revenue Contribution",
    support: "DTC, marketplace, subscription, and digital commerce businesses.",
  },
  {
    value: "$90M+",
    label: "Growth Budgets Managed",
    support: "Paid acquisition, retail media, lifecycle, launch, and growth programs.",
  },
  {
    value: "15+ Years",
    label: "Growth Leadership",
    support: "Consumer, entertainment, fintech, fashion, food, technology, DTC, and marketplaces.",
  },
  {
    value: "$8M–$120M+",
    label: "Business Sizes Led",
    support:
      "Led growth across DTC, subscription, and marketplace businesses at multiple stages of scale.",
  },
];

const advisoryClients = [
  {
    company: "Ocean / Yotpo",
    logo: "/logos/ocean-yotpo-linkedin-logo.jpg",
    logoClassName: "advisory-logo-square",
    focus:
      "Ocean is a subscription platform offering free 2-day shipping across 10,000+ Shopify brands. I advised on acquisition, retention, and growth strategy across consumer-facing and merchant-facing motions, helping connect DTC customer growth with the broader Shopify ecosystem.",
  },
  {
    company: "Jason of Beverly Hills",
    logo: "/logos/jason-of-beverly-hills-square.png",
    logoClassName: "advisory-logo-jason-square",
    focus:
      "Luxury jewelry brand where I supported paid acquisition strategy, conversion optimization, and homepage/landing page redevelopment to improve the path from brand discovery to digital commerce conversion.",
  },
  {
    company: "Keith James",
    logo: "/logos/keith-james.png",
    logoClassName: "advisory-logo-wide",
    focus:
      "Luxury headwear brand selling through retail and e-commerce. I advised across conversion optimization, landing page development, CRM/email flows, abandoned-cart recovery, and payment-provider improvements to strengthen the purchase journey.",
  },
  {
    company: "LSTN Sound Co.",
    logo: "/logos/lstn-sound-co-linkedin-logo.jpg",
    logoClassName: "advisory-logo-square",
    focus:
      "Mission-driven headphone and speaker brand that contributes a portion of sales toward hearing aids for people in developing countries. I supported paid acquisition and landing page testing while balancing commerce performance with social-impact positioning.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="experience-page page-shell-compact">
      <Hero
        eyebrow="Experience"
        title="A deeper look at the growth systems I have led."
        intro="A web version of my resume across full-time leadership roles, advisory work, and the operating systems I've built across my career."
        primaryCta={{ href: "/contact", label: "Start a Conversation" }}
        secondaryCta={{
          analyticsEvent: "linkedin_click external_link_click",
          analyticsLinkLocation: "experience_hero",
          href: site.linkedin,
          label: "View LinkedIn",
        }}
      />

      <Section className="experience-proof-section">
        <div className="experience-metric-grid">
          {proofMetrics.map((metric) => (
            <article className="metric-card card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.support}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="experience-expertise-section"
        eyebrow="Core Expertise"
        title="The functions I lead across growth and commerce."
      >
        <ExpertiseCards items={coreExpertiseCards} />
      </Section>

      <Section
        className="selected-experience-section"
        eyebrow="Selected Experience"
        title="Roles, mandates, and measured outcomes."
      >
        <div className="selected-role-list selected-role-list-desktop">
          {fullTimeRoles.map((role, index) => (
            <article className="selected-role-card card" key={`${role.company}-${role.role}`}>
              <div className="selected-role-heading">
                <p className="case-card-meta">
                  {String(index + 1).padStart(2, "0")} / {role.type}
                </p>
                <h3>{role.company}</h3>
                <p>{role.role}</p>
                <span>{role.dates}</span>
              </div>
              <div className="selected-role-body">
                {role.context.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="case-card-capabilities">
                  {role.capabilities.map((capability) => (
                    <span className="mini-chip" key={capability}>
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
              <div className="selected-role-outcomes" aria-label={`${role.company} outcomes`}>
                {role.outcomes.map((outcome) => (
                  <div
                    className={`selected-result-tile${
                      outcome.value === "$300+ → $120" ? " result-nowrap" : ""
                    }`}
                    key={outcome.label}
                  >
                    <strong>{outcome.value}</strong>
                    <span>{outcome.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="selected-role-mobile-list">
          {fullTimeRoles.map((role) => (
            <details className="selected-role-drawer" key={`${role.company}-${role.role}-mobile`}>
              <summary>
                <span>{role.dates}</span>
                <strong>{role.company}</strong>
                <small>{role.role}</small>
              </summary>
              <div className="selected-role-drawer-body">
                {role.context.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="case-card-capabilities">
                  {role.capabilities.map((capability) => (
                    <span className="mini-chip" key={capability}>
                      {capability}
                    </span>
                  ))}
                </div>
                <div className="selected-role-outcomes">
                  {role.outcomes.map((outcome) => (
                    <div
                      className={`selected-result-tile${
                        outcome.value === "$300+ → $120" ? " result-nowrap" : ""
                      }`}
                      key={outcome.label}
                    >
                      <strong>{outcome.value}</strong>
                      <span>{outcome.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section
        className="advisory-experience-section"
        eyebrow="Consulting and Advisory"
        title="Selective advisory work across consumer, DTC, subscription, and luxury brands."
      >
        <div className="advisory-client-grid advisory-client-grid-desktop">
          {advisoryClients.map((client) => (
            <article className="card advisory-client-card" key={client.company}>
              <div className={`advisory-client-logo ${client.logoClassName}`} aria-hidden="true">
                <Image src={client.logo} alt="" width={120} height={52} sizes="120px" />
              </div>
              <p className="case-card-meta">{client.company}</p>
              <p>{client.focus}</p>
            </article>
          ))}
        </div>
        <div className="advisory-client-mobile-list">
          {advisoryClients.map((client) => (
            <details className="advisory-client-drawer" key={`${client.company}-mobile`}>
              <summary>
                <strong>{client.company}</strong>
              </summary>
              <p>{client.focus}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section
        className="contact-section"
        eyebrow="Resume and Contact"
        title="Interested in the full resume? Start here."
        intro="Reach out about full-time leadership roles, selective advisory work, or a deeper review of my experience."
      >
        <div className="button-row contact-button-row">
          <Link className="button primary" href="/contact">
            Start a Conversation
          </Link>
          <a
            className="button secondary"
            data-analytics-event="linkedin_click external_link_click"
            data-analytics-link-location="experience_bottom_cta"
            href={site.linkedin}
          >
            View LinkedIn
          </a>
        </div>
      </Section>
    </div>
  );
}
