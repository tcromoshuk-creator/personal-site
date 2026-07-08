import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExpertiseCards } from "@/components/ExpertiseCards";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { coreExpertiseCards, site } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Web resume for Tyrell Cromoshuk, Growth & E-Commerce Executive across DTC, marketplaces, retail media, lifecycle, analytics, and executive reporting.",
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

const fullTimeRoles = [
  {
    company: "Mad Engine Global",
    role: "SVP, Growth",
    dates: "Sept 2025 - Present",
    type: "Full-time leadership",
    context: [
      "Mad Engine is a scaled licensed apparel and commerce business with marketplace complexity across Amazon, Walmart, Target+, TikTok Shop, retail media, merchandising, catalog quality, and analytics.",
      "I lead the growth function as a full-time executive across a $120M+ e-commerce portfolio, with a mandate to improve marketplace performance, retail media efficiency, ownership, team rhythm, and the operating cadence needed to align cross-functional teams around commerce performance.",
    ],
    outcomes: [
      { value: "$120K → ~$720K", label: "TikTok Shop run rate" },
      { value: "~8%", label: "MER improvement" },
      { value: "120% / 130%", label: "Walmart / Target+ revenue goals achieved" },
    ],
    capabilities: ["Marketplace Growth", "Retail Media", "Marketplace Operations", "Team Building"],
  },
  {
    company: "Echo Base / Paxful",
    role: "VP, Growth",
    dates: "Jul 2024 - Mar 2025",
    type: "Full-time leadership",
    context: [
      "Paxful was a global P2P fintech marketplace that was revived under Echo Base after a shutdown. I joined as VP Growth with a full-time mandate to rebuild the marketing and growth foundation after relaunch.",
      "The role spanned acquisition, product-led growth, lifecycle, CRM, dormant-user reactivation, organic marketing, compliance-sensitive messaging, and practical AI-enabled workflows for a global marketplace environment.",
    ],
    outcomes: [
      { value: "150+", label: "Countries served" },
      { value: "~$3M", label: "Cumulative paid media" },
      { value: "AI-enabled", label: "Copy, targeting, CRM, and analysis workflows" },
    ],
    capabilities: ["Fintech Marketplace", "Lifecycle", "Reactivation", "AI Workflows"],
  },
  {
    company: "Netflix / Netflix.Shop",
    role: "Head of Growth, Netflix.Shop",
    dates: "Mar 2022 - Jul 2024",
    type: "Full-time leadership",
    context: [
      "I was brought in to lead growth for Netflix's official DTC commerce business, owning acquisition, lifecycle, CRO, product-launch marketing, reporting, and experimentation for Netflix.Shop.",
      "Beyond Netflix.Shop, I advised teams across Streaming, Live Experiences, Consumer Products, Tudum, and Payments, including helping establish the playbook for relaunching global acquisition for Netflix Streaming across 11 countries.",
    ],
    outcomes: [
      { value: "6-fig → 8-fig", label: "Netflix.Shop revenue" },
      { value: "$6M/mo", label: "Streaming media budget managed across 11 countries" },
      { value: "3–9x", label: "Incremental ROAS" },
    ],
    capabilities: ["DTC Commerce", "Global Acquisition", "CRO", "Lifecycle"],
  },
  {
    company: "Veestro",
    role: "VP, Marketing",
    dates: "Aug 2021 - Jan 2022",
    type: "Full-time leadership",
    context: [
      "Veestro was a plant-based meal delivery brand navigating the post-iOS 14.5 acquisition environment. I joined as VP Marketing to rebuild acquisition economics and broaden the brand beyond a saturated vegan-first audience.",
      "The full-time mandate combined brand repositioning, paid media, Shopify/CRO work, segmentation, retention, affiliate, PR, influencer, and organic channel refreshes.",
    ],
    outcomes: [
      { value: "$300+ → $120", label: "CPA reduction" },
      { value: "+1 month", label: "Retention extension" },
      { value: "<90 days", label: "CPA and retention gains realized" },
    ],
    capabilities: ["Food Subscription", "Acquisition", "Rebrand", "Retention"],
  },
  {
    company: "Five Four Group / Menlo Club",
    role: "Director, Growth",
    dates: "Jul 2016 - Aug 2021",
    type: "Full-time leadership",
    context: [
      "I joined Five Four Group / Menlo Club as Growth Marketing Manager and was promoted to Director of Growth, moving from paid acquisition ownership into broader marketing and growth leadership for a portfolio of DTC apparel companies.",
      "The role expanded across acquisition, CRM/lifecycle, retention, funnel strategy, creative testing, merchandising/customer experience, team building, and a major multi-year subscription relaunch where I served as GM of the monthly-to-quarterly model transition.",
    ],
    outcomes: [
      { value: "$8M → $65M+", label: "Revenue scale" },
      { value: "-52%", label: "Churn reduction" },
      { value: "+$90", label: "LTV increase" },
    ],
    capabilities: ["Subscription", "Lifecycle", "Paid Acquisition", "Team Building"],
  },
  {
    company: "adMixt",
    role: "Growth Consultant",
    dates: "Feb 2015 - Jul 2016",
    type: "Full-time client management",
    context: [
      "adMixt was a performance-marketing agency where I worked across paid acquisition and media strategy for e-commerce and consumer clients.",
      "I managed $750K+ in monthly media spend while supporting strategy, optimization, reporting, and product/feature development for the FlightPlan self-serve platform.",
    ],
    outcomes: [
      { value: "$750K+", label: "Monthly media spend managed" },
      { value: "5+", label: "E-commerce client accounts" },
      { value: "2015", label: "Facebook Innovation of the Year" },
    ],
    capabilities: ["Performance Marketing", "Paid Acquisition", "Product Requirements", "Media Strategy"],
  },
  {
    company: "adParlor",
    role: "Senior Account Manager",
    dates: "Nov 2011 - Dec 2014",
    type: "Full-time client management",
    context: [
      "adParlor was the first Facebook media agency in Canada and the early paid social foundation for my career, spanning Fortune 500 brands, media agencies, direct-response campaigns, and brand/awareness programs.",
      "I managed paid social across mobile app acquisition, online sales, and in-store visit campaigns, while also leading the expansion of our partnership with Twitter Canada and bringing Twitter ads into the client portfolio.",
    ],
    outcomes: [
      { value: "$1.5M+", label: "Quarterly media spend managed" },
      { value: "80%+", label: "KPI targets achieved" },
      { value: "20–25", label: "Client book of business" },
    ],
    capabilities: ["Paid Social", "Performance Marketing", "Platform Partnerships", "Client Strategy"],
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
