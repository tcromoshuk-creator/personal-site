import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Career story, operating style, and growth leadership background for Tyrell Cromoshuk, Growth & E-Commerce Executive.",
  path: "/about",
});

const careerChapters = [
  {
    period: "2011-2016",
    company: "adParlor / adMixt",
    role: "Agency, paid media, and growth consulting foundation",
    body:
      "Built the early operating muscle in paid acquisition, client strategy, optimization, reporting, and growth consulting across consumer, entertainment, fashion, food, and technology accounts.",
  },
  {
    period: "2016-2021",
    company: "Five Four Group / Menlo Club",
    role: "Subscription and e-commerce growth leadership",
    body:
      "Scaled from channel execution into broader growth leadership across acquisition, CRM, subscription economics, retention, e-commerce, team building, and operating cadence.",
  },
  {
    period: "2021-2022",
    company: "Veestro",
    role: "VP Marketing, acquisition efficiency, and repositioning",
    body:
      "Led a plant-based repositioning, rebuilt acquisition economics, improved segmentation, and strengthened the marketing foundation for a DTC food subscription business.",
  },
  {
    period: "2022-2024",
    company: "Netflix / Netflix.Shop",
    role: "DTC commerce, streaming acquisition, and global growth work",
    body:
      "Built and scaled the Netflix.Shop growth function while partnering across streaming acquisition, lifecycle, product launch marketing, CRO, reporting, and global campaign strategy.",
  },
  {
    period: "2024-2025",
    company: "Echo Base / Paxful",
    role: "Fintech marketplace growth",
    body:
      "Led post-relaunch growth across paid acquisition, organic/product marketing, CRM, reactivation, and practical AI-enabled workflows in a global P2P fintech marketplace.",
  },
  {
    period: "2025-Present",
    company: "Mad Engine Global",
    role: "Marketplace and e-commerce portfolio leadership",
    body:
      "Lead growth strategy across a $120M+ e-commerce portfolio spanning Amazon, Walmart, Target+, TikTok Shop, retail media, analytics, merchandising, catalog quality, and executive reporting.",
  },
];

const operatingPrinciples = [
  {
    title: "Diagnose the constraint",
    body:
      "Start with the real business constraint: revenue, margin, retention, reporting, ownership, channel mix, or execution quality.",
  },
  {
    title: "Build the cadence",
    body:
      "Translate strategy into owners, scorecards, pacing views, priorities, and a rhythm leadership can use to make decisions.",
  },
  {
    title: "Connect the system",
    body:
      "Align acquisition, lifecycle, commerce, merchandising, analytics, finance, creative, and executive reporting around the same growth plan.",
  },
  {
    title: "Make growth measurable",
    body:
      "Turn work into clear metrics, sharper tradeoffs, better forecasts, and performance stories that explain what to do next.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A growth operator built through commerce, acquisition, and operating cadence."
        intro="I am a Growth & E-Commerce Executive with 15+ years of experience building profitable revenue engines across DTC, marketplaces, subscriptions, retail media, lifecycle, analytics, and executive reporting."
        primaryCta={{ href: "/experience", label: "View Experience" }}
        secondaryCta={{ href: "/contact", label: "Start a Conversation" }}
      />

      <Section
        className="about-narrative-section"
        eyebrow="Career Arc"
        title="From media depth to broader growth leadership."
      >
        <div className="about-narrative-grid">
          <p className="about-narrative-lede">
            My career started with paid media and agency-side growth consulting,
            where I learned how performance systems break, how budgets move, and
            how reporting shapes decisions. Over time, the work expanded into
            revenue leadership: e-commerce, marketplaces, subscription growth,
            lifecycle, CRO, forecasting, team building, and operating cadence.
          </p>
          <div className="about-narrative-card card">
            <span className="case-card-meta">Where the work sits now</span>
            <p>
              I am strongest when growth is not isolated to one channel. The
              work usually spans acquisition, retention, marketplace or commerce
              performance, analytics, merchandising, finance, and executive
              decision-making.
            </p>
          </div>
        </div>
      </Section>

      <Section
        className="about-timeline-section"
        eyebrow="Career Timeline"
        title="Major chapters in the operating path."
      >
        <div className="career-chapter-list">
          {careerChapters.map((chapter, index) => (
            <article className="career-chapter-card card" key={chapter.company}>
              <div className="career-chapter-index">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{chapter.period}</p>
              </div>
              <div className="career-chapter-main">
                <p className="case-card-meta">{chapter.company}</p>
                <h3>{chapter.role}</h3>
                <p>{chapter.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="about-operating-section process-section"
        eyebrow="Operating Style"
        title="How I turn growth work into an operating system."
      >
        <div className="operating-principle-grid">
          {operatingPrinciples.map((principle, index) => (
            <article className="operating-principle" key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="about-focus-section audience-section"
        eyebrow="Current Focus"
        title="Full-time leadership first, selective advisory second."
      >
        <div className="grid two-col">
          <div className="card audience-card">
            <div className="audience-copy">
              <p className="case-card-meta">Primary path</p>
              <h3>Full-time growth, e-commerce, or marketplace leadership</h3>
              <p>
                Best fit is a VP, SVP, Head of Growth, E-Commerce,
                Marketplace Growth, or Marketing role where the company needs a
                senior operator to own the broader growth system.
              </p>
            </div>
          </div>
          <div className="card audience-card">
            <div className="audience-copy">
              <p className="case-card-meta">Secondary path</p>
              <h3>Selective advisory or fractional support</h3>
              <p>
                Advisory work is a fit when the mandate is senior, specific, and
                commercially meaningful: marketplace growth, acquisition
                efficiency, lifecycle, reporting cadence, or AI-enabled
                workflows.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="contact-section"
        eyebrow="Start a Conversation"
        title="Building a growth engine? Let's talk."
        intro="Reach out about full-time leadership roles, selective advisory work, or just to talk growth."
      >
        <div className="button-row contact-button-row">
          <Link className="button primary" href="/contact">
            Start a Conversation
          </Link>
          <Link className="button secondary" href="/experience">
            View Experience
          </Link>
        </div>
      </Section>
    </>
  );
}
