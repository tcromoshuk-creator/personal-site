import type { Metadata } from "next";
import Link from "next/link";
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
    label: "E-Commerce Portfolio",
    support: "Amazon, Walmart, Target+, TikTok Shop, retail media, analytics, and catalog work.",
  },
];

const coreExpertise = [
  "Growth Strategy & Revenue Planning",
  "E-Commerce & Marketplace Growth",
  "Acquisition & Retail Media",
  "Lifecycle, CRM & Retention",
  "Analytics, Forecasting & Operating Cadence",
  "AI-Enabled Growth Systems",
];

const fullTimeRoles = [
  {
    company: "Mad Engine Global",
    role: "SVP, Growth",
    dates: "Sept 2025 - Present",
    type: "Full-time leadership",
    context:
      "Growth strategy and operating transformation across a $120M+ e-commerce portfolio spanning Amazon, Walmart, Target+, TikTok Shop, retail media, analytics, merchandising, catalog optimization, and cross-functional teams.",
    responsibilities: [
      "Lead marketplace growth, retail media, analytics, catalog quality, and operating cadence.",
      "Partner across merchandising, marketplace operations, analytics, finance, and executive leadership.",
      "Build clearer reporting, forecasting, budget logic, and channel-review rhythms.",
    ],
    outcomes: [
      "$120M+ e-commerce portfolio",
      "MER improved from 7.5% to 6.9%",
      "Walmart 120% of goal; Target+ 130%",
    ],
    capabilities: ["Marketplace Growth", "Retail Media", "Executive Reporting"],
  },
  {
    company: "Echo Base / Paxful",
    role: "VP, Growth",
    dates: "Jul 2024 - Mar 2025",
    type: "Full-time leadership",
    context:
      "Post-relaunch growth for a global P2P fintech marketplace serving 150+ countries, balancing acquisition, organic/product marketing, CRM, reactivation, compliance-sensitive messaging, and marketplace dynamics.",
    responsibilities: [
      "Led paid acquisition, product-led growth, lifecycle, organic marketing, and reactivation work.",
      "Introduced AI-enabled workflows across copy, targeting, CRM sequencing, analysis, and recommendations.",
      "Built operating structure for a marketplace environment that needed speed and consistency.",
    ],
    outcomes: [
      "150+ countries served",
      "Five-person growth team",
      "~$3M cumulative paid media",
    ],
    capabilities: ["Marketplace Growth", "Lifecycle", "AI Workflows"],
  },
  {
    company: "Netflix / Netflix.Shop",
    role: "Head of Growth, Netflix.Shop",
    dates: "Mar 2022 - Jul 2024",
    type: "Full-time leadership",
    context:
      "Built and scaled the Netflix.Shop growth function while advising broader Netflix teams on streaming acquisition, live experiences, lifecycle, CRO, product-launch marketing, and performance infrastructure.",
    responsibilities: [
      "Owned acquisition, lifecycle, CRO, launch marketing, reporting, and growth experimentation for Netflix.Shop.",
      "Developed a global streaming acquisition strategy across 11 countries on a $6M/month media budget.",
      "Partnered across product, consumer products, finance-adjacent teams, agencies, and creative partners.",
    ],
    outcomes: [
      "Six-figure annual revenue to eight figures",
      "46% average CPA reduction",
      "27% checkout conversion improvement",
    ],
    capabilities: ["DTC Commerce", "Acquisition", "CRO"],
  },
  {
    company: "Veestro",
    role: "VP, Marketing",
    dates: "Aug 2021 - Jan 2022",
    type: "Full-time leadership",
    context:
      "Rebuilt acquisition strategy and repositioned a plant-based meal delivery brand during a difficult post-iOS 14.5 acquisition environment.",
    responsibilities: [
      "Led brand repositioning, messaging pillars, customer segmentation, paid media testing, and channel optimization.",
      "Supported Shopify 2.0 transition, CRO work, affiliate, PR, influencer, and organic channel refreshes.",
      "Balanced acquisition efficiency with retention and broader market expansion.",
    ],
    outcomes: [
      "CPA reduced from $300+ to $120",
      "Retention extended by one month",
      "Impact within three months",
    ],
    capabilities: ["Acquisition", "Repositioning", "Retention"],
  },
  {
    company: "Five Four Group / Menlo Club",
    role: "Director, Growth",
    dates: "Jul 2016 - Aug 2021",
    type: "Full-time leadership",
    context:
      "Scaled subscription and e-commerce revenue while evolving the business from acquisition-heavy growth toward retention, lifecycle, team building, and broader operating discipline.",
    responsibilities: [
      "Directed paid social, search, affiliate, influencer, direct mail, CRM, funnel strategy, and retention work.",
      "Built the internal growth team and helped reposition subscription and e-commerce growth around customer value.",
      "Acted as GM for a quarterly subscription launch across merchandising, logistics, customer service, product, engineering, and marketing.",
    ],
    outcomes: [
      "$8M to $65M+ revenue scale",
      "52% churn reduction",
      "$12M+ annual marketing budget",
    ],
    capabilities: ["Subscription", "Lifecycle", "Team Building"],
  },
  {
    company: "adMixt",
    role: "Growth Consultant",
    dates: "2014 - 2016",
    type: "Agency / consulting foundation",
    context:
      "Growth consulting and paid media strategy across consumer brands, performance programs, reporting, optimization, and client advisory work.",
    responsibilities: [
      "Built acquisition strategies, reporting systems, test plans, and paid media optimization processes.",
      "Worked across performance channels and client business problems that later shaped broader growth leadership.",
    ],
    outcomes: ["Growth consulting foundation", "Paid acquisition depth", "Client reporting systems"],
    capabilities: ["Paid Acquisition", "Reporting", "Client Strategy"],
  },
  {
    company: "adParlor",
    role: "Senior Account Manager",
    dates: "2011 - 2014",
    type: "Agency / paid media foundation",
    context:
      "Early paid social and performance marketing foundation across entertainment, consumer, technology, and commerce accounts.",
    responsibilities: [
      "Managed paid social strategy, performance reporting, optimization, and client communication.",
      "Built the channel depth that became the technical foundation for later growth leadership roles.",
    ],
    outcomes: ["Paid media foundation", "Performance optimization", "Client strategy"],
    capabilities: ["Paid Social", "Optimization", "Reporting"],
  },
];

const advisoryClients = [
  {
    company: "Ocean / Yotpo",
    focus: "Growth, retention, and commerce advisory",
  },
  {
    company: "Jason of Beverly Hills",
    focus: "Luxury consumer growth and acquisition support",
  },
  {
    company: "Keith James",
    focus: "Consumer growth and go-to-market support",
  },
  {
    company: "LSTN",
    focus: "Consumer product growth and channel support",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Hero
        eyebrow="Experience"
        title="A deeper look at the growth systems I have led."
        intro="A web version of my experience across growth strategy, e-commerce, marketplaces, retail media, lifecycle, analytics, forecasting, AI-enabled workflows, and executive operating cadence."
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
        <div className="experience-expertise-grid">
          {coreExpertise.map((item, index) => (
            <article className="experience-expertise-card card" key={item}>
              <span className="capability-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="selected-experience-section"
        eyebrow="Selected Experience"
        title="Roles, mandates, and measured outcomes."
      >
        <div className="selected-role-list">
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
                  <strong key={outcome}>{outcome}</strong>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="advisory-experience-section"
        eyebrow="Consulting and Advisory"
        title="Selective advisory work across consumer, DTC, subscription, and luxury brands."
        intro="This work is separate from my full-time leadership roles. It is included for context around category range and advisory experience, not as the primary identity of the site."
      >
        <div className="advisory-client-grid">
          {advisoryClients.map((client) => (
            <article className="card advisory-client-card" key={client.company}>
              <p className="case-card-meta">{client.company}</p>
              <p>{client.focus}</p>
            </article>
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
    </>
  );
}
