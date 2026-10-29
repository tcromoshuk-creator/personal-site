import { site } from "@/lib/content";
import { fullTimeRoles } from "@/lib/public-career";

// Public content only. Never import the private Job Hunting vault at build time.
// Provenance and publication boundaries are documented in docs/discovery-content.md.
export const publicProfile = {
  reviewed: "2026-10-29",
  location: "Los Angeles, California",
  summary:
    "I am a growth and e-commerce executive with 15+ years of experience connecting acquisition, retention, product experience, marketplaces, and commercial planning. I have managed $90M+ in growth and marketing budgets contributing to $300M+ in revenue across consumer, DTC, subscription, entertainment, fintech, fashion, food, and technology businesses.",
  engagements: [
    {
      title: "Full-time growth and marketing leadership",
      body: "VP, SVP, and Head of Growth, Marketing, E-Commerce, or Marketplace Growth roles where I can own the growth function, develop the team, and connect strategy to revenue, customer economics, and execution.",
      href: "/experience",
      label: "Explore leadership experience",
    },
    {
      title: "Fractional, interim, and advisory work",
      body: "Senior growth support for companies that need leadership before or between full-time hires, or around a defined mandate. Work can include a growth audit, revenue plan, marketplace strategy, lifecycle program, reporting system, or operating cadence.",
      href: "/services",
      label: "Explore fractional and advisory services",
    },
  ],
  capabilities: [
    {
      title: "Revenue leadership and team development",
      body: "I connect marketing investment, forecasting, customer economics, and executive reporting. I have led teams across Menlo Club, Veestro, Netflix.Shop, Paxful, and Mad Engine, including six direct reports and 15+ dotted-line contributors at Mad Engine.",
    },
    {
      title: "E-commerce and marketplace growth",
      body: "My experience spans DTC, subscription, Amazon, Walmart, Target+, TikTok Shop, and retail media. At Mad Engine I led growth across a $120M+ e-commerce portfolio. At Netflix.Shop I owned the e-commerce P&L and scaled annual revenue from six figures to eight figures.",
    },
    {
      title: "Acquisition, creative, brand, and product marketing",
      body: "I connect paid media, creative testing, positioning, partnerships, and product launches to the customer journey. I led Creative, Brand, and Product Marketing at Menlo Club, Veestro, Netflix.Shop, and Paxful.",
    },
    {
      title: "Lifecycle, retention, and subscription economics",
      body: "I build email, SMS, CRM, reactivation, and referral programs alongside acquisition. At Menlo Club I transformed the monthly subscription into a quarterly model, reducing churn from 25% to 12%, increasing AOV by $65 and LTV by $90 per customer. Separately, I created Menlo Club Premium Seasonal, owned its P&L, and served as GM; it reached 10,000+ members in its first quarter.",
    },
    {
      title: "Product partnership and measurement",
      body: "I work with Product and Engineering on sprint planning, specifications, testing guidelines, and data integrations. At Five Four, Veestro, and Netflix.Shop I partnered on server-side tracking and dashboards and established measurement frameworks. My experience also includes campaign and digital-channel incrementality tests.",
    },
    {
      title: "Practical AI workflows",
      body: "I use AI for campaign analysis, CRM sequencing, reporting, research, and catalog QA. At Paxful this included ad copy, targeting, CRM, and analysis workflows, with lifecycle ownership spanning email, SMS, and mobile and web push.",
    },
  ],
  consulting:
    "I have advised consumer, DTC, marketplace, subscription, and luxury brands on growth strategy, customer acquisition, lifecycle/CRM, e-commerce optimization, positioning, executive reporting, and go-to-market systems. Selected clients include Ocean / Yotpo, Jason of Beverly Hills, Keith James, and LSTN.",
  contact:
    "Email me with the company, role or business problem, and the scope of the engagement. For a leadership role, include the role description and working arrangement. For advisory work, include the priorities and timing.",
};

export function profileMarkdown() {
  return [
    `# ${site.name} — ${site.title}`,
    `Public profile: ${site.url}/agents`,
    `Last reviewed: ${publicProfile.reviewed}`,
    `Location: ${publicProfile.location}`,
    "## Overview",
    publicProfile.summary,
    "## Ways to work together",
    ...publicProfile.engagements.flatMap((item) => [
      `### ${item.title}`, item.body, `[${item.label}](${site.url}${item.href})`,
    ]),
    "## Capabilities and evidence",
    ...publicProfile.capabilities.flatMap((item) => [`### ${item.title}`, item.body]),
    "## Career history",
    ...fullTimeRoles.flatMap((role) => [
      `### ${role.role} — ${role.company}`,
      `${role.dates} | ${role.type}`,
      ...role.context,
      ...role.outcomes.map((outcome) => `- ${outcome.value}: ${outcome.label}`),
    ]),
    "## Independent consulting",
    publicProfile.consulting,
    "## Supporting work",
    `[Case studies](${site.url}/case-studies)`,
    `[Experience](${site.url}/experience)`,
    `[Services](${site.url}/services)`,
    "## Contact",
    publicProfile.contact,
    `Email: ${site.email}`,
    `LinkedIn: ${site.linkedin}`,
    `Contact page: ${site.url}/contact`,
  ].join("\n\n") + "\n";
}
