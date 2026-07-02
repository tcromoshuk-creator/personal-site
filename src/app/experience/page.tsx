import type { Metadata } from "next";
import Link from "next/link";
import { ExpertiseCards } from "@/components/ExpertiseCards";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { site } from "@/lib/content";
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
    value: "$120M+",
    label: "Commerce Portfolio Leadership",
    support: "Amazon, Walmart, Target+, TikTok Shop, retail media, analytics, and catalog work.",
  },
];

const fullTimeRoles = [
  {
    company: "Mad Engine Global",
    role: "SVP, Growth",
    dates: "Sept 2025 - Present",
    type: "Full-time leadership",
    context:
      "Mad Engine is a scaled licensed apparel and commerce business with marketplace complexity across Amazon, Walmart, Target+, TikTok Shop, retail media, merchandising, catalog quality, and analytics. I lead growth strategy and operating transformation across a $120M+ e-commerce portfolio, with a mandate to improve marketplace performance, retail media efficiency, ownership, reporting, and executive cadence. This is a full-time leadership role spanning direct reports and dotted-line contributors across cross-functional teams.",
    responsibilities: [
      "Improved MER from 7.5% to 6.9% while scaling marketing investment from $5M to $7.5M.",
      "Drove Walmart to 120% of 2025 goal and Target+ to 130% of 2025 goal.",
      "Scaled TikTok Shop run rate from $120K to approximately $720K.",
      "Reduced agency costs by approximately $20K-$40K per month while building stronger internal cadence.",
    ],
    outcomes: [
      { value: "$120M+", label: "E-commerce portfolio" },
      { value: "7.5% -> 6.9%", label: "MER improvement" },
      { value: "120% / 130%", label: "Walmart / Target+ goals" },
    ],
    capabilities: ["Marketplace Commerce", "Retail Media", "Executive Reporting", "Team Building"],
  },
  {
    company: "Echo Base / Paxful",
    role: "VP, Growth",
    dates: "Jul 2024 - Mar 2025",
    type: "Full-time leadership",
    context:
      "Paxful is a global P2P fintech marketplace serving 150+ countries. I joined after the marketplace had shut down and been revived under Echo Base, with a mandate to rebuild the marketing and growth foundation after relaunch. This was a full-time VP Growth role across acquisition, lifecycle, CRM, reactivation, marketplace growth, and compliance-sensitive messaging.",
    responsibilities: [
      "Led paid acquisition, product-led growth, lifecycle, organic marketing, CRM, and dormant-user reactivation.",
      "Managed a five-person growth team across performance, organic/product marketing, and lifecycle work.",
      "Oversaw approximately $3M in cumulative paid media across the post-relaunch period.",
      "Introduced AI-enabled workflows across copy, targeting, CRM sequencing, analysis, and recommendations.",
    ],
    outcomes: [
      { value: "150+", label: "Countries served" },
      { value: "~$3M", label: "Cumulative paid media" },
      { value: "5-person", label: "Growth team" },
    ],
    capabilities: ["Fintech Marketplace", "Lifecycle", "Reactivation", "AI Workflows"],
  },
  {
    company: "Netflix / Netflix.Shop",
    role: "Head of Growth, Netflix.Shop",
    dates: "Mar 2022 - Jul 2024",
    type: "Full-time leadership",
    context:
      "Netflix.Shop is Netflix's DTC commerce business, operating inside a broader global entertainment company. I built and scaled the Netflix.Shop growth function, owning acquisition, lifecycle, CRO, product-launch marketing, reporting, and growth experimentation. In parallel, I advised across Netflix Streaming, Live Experiences, Consumer Products, Tudum, and Payments.",
    responsibilities: [
      "Scaled Netflix.Shop from six-figure annual revenue to eight figures.",
      "Reduced average CPA by 46% across global streaming acquisition tests.",
      "Drove 3x-9x incremental ROAS through acquisition and testing work.",
      "Improved checkout conversion by 27% and helped write an 11-country global streaming acquisition strategy across a $6M/month media budget.",
    ],
    outcomes: [
      { value: "6-figure -> 8-figure", label: "Netflix.Shop revenue" },
      { value: "-46%", label: "Avg. CPA reduction" },
      { value: "+27%", label: "Checkout conversion" },
    ],
    capabilities: ["DTC Commerce", "Global Acquisition", "CRO", "Lifecycle"],
  },
  {
    company: "Veestro",
    role: "VP, Marketing",
    dates: "Aug 2021 - Jan 2022",
    type: "Full-time leadership",
    context:
      "Veestro was a plant-based meal delivery brand navigating the post-iOS 14.5 acquisition environment. I joined as VP Marketing to rebuild acquisition economics, broaden the brand beyond a saturated vegan-first audience, and strengthen the retention and conversion foundation. The mandate combined repositioning, paid media, Shopify/CRO work, segmentation, and channel refreshes.",
    responsibilities: [
      "Reduced CPA from $300+ to $120 within three months.",
      "Extended customer retention by one month while widening the addressable audience.",
      "Led brand repositioning, messaging pillars, segmentation, paid media testing, and channel optimization.",
      "Supported Shopify 2.0 transition, CRO work, affiliate, PR, influencer, and organic channel refreshes.",
    ],
    outcomes: [
      { value: "$300+ -> $120", label: "CPA reduction" },
      { value: "+1 month", label: "Retention extension" },
      { value: "3 months", label: "Time to impact" },
    ],
    capabilities: ["Food Subscription", "Acquisition", "Repositioning", "Retention"],
  },
  {
    company: "Five Four Group / Menlo Club",
    role: "Director, Growth",
    dates: "Jul 2016 - Aug 2021",
    type: "Full-time leadership",
    context:
      "Five Four Group / Menlo Club was a portfolio of DTC apparel businesses built around subscription, e-commerce, and paid acquisition. I moved from channel depth into broader growth leadership, owning acquisition, CRM, subscription economics, retention, funnel strategy, and team building. The role evolved from scaling acquisition to rebuilding the customer value and operating model behind the business.",
    responsibilities: [
      "Scaled subscription and e-commerce revenue from $8M to $65M+.",
      "Reduced churn by 52% through the Premium Seasonal subscription model relaunch.",
      "Increased LTV by $90+ while directing a $12M+ annual marketing budget.",
      "Built the internal growth team and led acquisition, CRM, funnel strategy, creative testing, and retention work.",
    ],
    outcomes: [
      { value: "$8M -> $65M+", label: "Revenue scale" },
      { value: "-52%", label: "Churn reduction" },
      { value: "+$90", label: "LTV increase" },
    ],
    capabilities: ["Subscription", "Lifecycle", "Paid Acquisition", "Team Building"],
  },
  {
    company: "adMixt",
    role: "Growth Consultant",
    dates: "2014 - 2016",
    type: "Agency / consulting foundation",
    context:
      "adMixt was a growth agency environment where I built the consulting and paid acquisition foundation that later expanded into executive growth leadership. The work covered consumer brands, performance programs, reporting, optimization, client advisory, and hands-on acquisition strategy. It was agency-side work, not a full-time in-house growth leadership role.",
    responsibilities: [
      "Built acquisition strategies, reporting systems, test plans, and paid media optimization processes.",
      "Worked across performance channels and client business problems that later shaped broader growth leadership.",
      "Helped translate campaign performance into clearer client decisions and prioritization.",
    ],
    outcomes: [
      { value: "Agency", label: "Growth consulting" },
      { value: "Paid media", label: "Acquisition depth" },
      { value: "Reporting", label: "Client systems" },
    ],
    capabilities: ["Agency", "Paid Acquisition", "Reporting", "Client Strategy"],
  },
  {
    company: "adParlor",
    role: "Senior Account Manager",
    dates: "2011 - 2014",
    type: "Agency / paid media foundation",
    context:
      "adParlor was the early paid social and performance marketing foundation for my career. I worked across entertainment, consumer, technology, and commerce accounts, building the channel discipline behind budget management, optimization, reporting, and client communication. It established the technical acquisition depth that later supported broader growth leadership.",
    responsibilities: [
      "Managed paid social strategy, performance reporting, optimization, and client communication.",
      "Built the channel depth that became the technical foundation for later growth leadership roles.",
      "Developed a practical understanding of how media performance, creative, budgets, and reporting connect.",
    ],
    outcomes: [
      { value: "Paid social", label: "Channel foundation" },
      { value: "Optimization", label: "Performance depth" },
      { value: "Client strategy", label: "Advisory base" },
    ],
    capabilities: ["Agency", "Paid Social", "Optimization", "Reporting"],
  },
];

const advisoryClients = [
  {
    company: "Ocean / Yotpo",
    focus:
      "Ocean is a subscription service offering free 2-day shipping across 10,000+ Shopify brands. I supported acquisition of new customers, retention of existing customers, and growth work across both B2B and DTC functions.",
  },
  {
    company: "Jason of Beverly Hills",
    focus:
      "Luxury jewelry producer where I supported paid acquisition strategy, CRO, and rebuilds of homepage and landing page experiences.",
  },
  {
    company: "Keith James",
    focus:
      "Luxury headwear brand selling in-store and online. I supported CRO, landing page development, marketing emails, CRM flows such as abandoned cart, and payment provider work.",
  },
  {
    company: "LSTN",
    focus:
      "Headphone and speaker brand that donates a portion of sales toward hearing aids for people in developing countries. I supported paid acquisition and landing page testing.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="experience-page page-shell-compact">
      <Hero
        eyebrow="Experience"
        title="A deeper look at the growth systems I have led."
        intro="A web version of my resume across full-time leadership roles, advisory work, and the operating systems I've built across growth, e-commerce, marketplaces, lifecycle, analytics, retail media, and AI-enabled workflows."
        primaryCta={{ href: "/contact", label: "Start a Conversation" }}
        secondaryCta={{ href: site.linkedin, label: "View LinkedIn" }}
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
        <ExpertiseCards />
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
                <p>{role.context}</p>
                <ul>
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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
                  <div className="selected-result-tile" key={outcome.label}>
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
                <p>{role.context}</p>
                <ul>
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="case-card-capabilities">
                  {role.capabilities.map((capability) => (
                    <span className="mini-chip" key={capability}>
                      {capability}
                    </span>
                  ))}
                </div>
                <div className="selected-role-outcomes">
                  {role.outcomes.map((outcome) => (
                    <div className="selected-result-tile" key={outcome.label}>
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
          <a className="button secondary" href={site.linkedin}>
            View LinkedIn
          </a>
        </div>
      </Section>
    </div>
  );
}
