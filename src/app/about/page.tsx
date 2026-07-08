import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GrowthOperatingSystem } from "@/components/GrowthOperatingSystem";
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
    logos: [
      {
        src: "/logos/adparlor-logo.png",
        alt: "adParlor",
        className: "timeline-logo-wide",
      },
      {
        src: "/logos/admixt-linkedin-logo.jpg",
        alt: "adMixt",
        className: "timeline-logo-square",
      },
    ],
    body:
      "Built the early operating muscle in paid acquisition, client strategy, optimization, reporting, and growth consulting across consumer, entertainment, fashion, food, and technology accounts.",
  },
  {
    period: "2016-2021",
    company: "Five Four Group / Menlo Club",
    role: "Subscription and e-commerce growth leadership",
    logos: [
      {
        src: "/logos/menlo-club-linkedin-logo.jpg",
        alt: "Menlo Club",
        className: "timeline-logo-menlo",
      },
    ],
    body:
      "Scaled from channel execution into broader growth leadership across acquisition, CRM, subscription economics, retention, e-commerce, team building, and operating cadence for a portfolio of DTC apparel companies.",
  },
  {
    period: "2021-2022",
    company: "Veestro",
    role: "VP Marketing, acquisition efficiency, and repositioning",
    logos: [
      {
        src: "/logos/veestro-gray.png",
        alt: "Veestro",
        className: "timeline-logo-veestro",
      },
    ],
    body:
      "Led a plant-based repositioning, rebuilt acquisition economics, improved segmentation, and strengthened the marketing foundation for a DTC food subscription business.",
  },
  {
    period: "2022-2024",
    company: "Netflix / Netflix.Shop",
    role: "DTC commerce, streaming acquisition, and global growth work",
    logos: [
      {
        src: "/logos/netflix.svg",
        alt: "Netflix",
        className: "timeline-logo-wide",
      },
    ],
    body: [
      "Built and scaled the Netflix.Shop growth function, owning acquisition, lifecycle, CRO, product-launch marketing, reporting, and growth experimentation for Netflix's DTC commerce business.",
      "Also advised on growth strategy across Netflix Streaming, Live Experiences, Consumer Products, Tudum, and Payments. Helped write the playbook for relaunching global acquisition for Netflix Streaming, including an 11-country strategy across a $6M/month media budget.",
    ],
  },
  {
    period: "2024-2025",
    company: "Echo Base / Paxful",
    role: "Fintech marketplace growth",
    logos: [
      {
        src: "/logos/echo-base-global-linkedin-logo.jpg",
        alt: "Echo Base",
        className: "timeline-logo-square timeline-logo-echo",
      },
    ],
    body:
      "Joined after the Paxful marketplace had shut down and been revived under Echo Base, with a mandate to rebuild the marketing and growth foundation for a global P2P fintech marketplace. Led post-relaunch growth across acquisition, lifecycle, CRM, reactivation, compliance-sensitive messaging, and practical AI-enabled workflows.",
  },
  {
    period: "2025-Present",
    company: "Mad Engine Global",
    role: "Marketplace and e-commerce portfolio leadership",
    logos: [
      {
        src: "/logos/mad-engine-global.jpg",
        alt: "Mad Engine Global",
        className: "timeline-logo-square",
      },
    ],
    body:
      "Lead growth strategy and operating transformation across a $120M+ e-commerce portfolio spanning Amazon, Walmart, Target+, TikTok Shop, retail media, analytics, merchandising, catalog quality, and executive reporting. Built stronger operating cadence, clearer ownership, improved retail media efficiency, and marketplace growth systems across cross-functional teams.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page page-shell-compact">
      <Hero
        eyebrow="About"
        title="From scrappy startups to $100M+ commerce portfolios."
        intro="Over 15+ years, I've built profitable revenue engines across DTC, subscription, and marketplace brands — moving from hands-on acquisition into growth leadership and P&L-level decision-making."
        primaryCta={{
          analyticsEvent: "view_experience_click",
          analyticsLinkLocation: "about_hero",
          href: "/experience",
          label: "View Experience",
        }}
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
            where I learned how performance systems function, how budgets move,
            and how reporting shapes decisions. Over time, the work expanded
            into revenue leadership: e-commerce, marketplaces, subscription
            growth, lifecycle, CRO, forecasting, team building, and operating
            cadence.
          </p>
          <div className="about-narrative-card card">
            <span className="case-card-meta">Where the work sits now</span>
            <p>
              I am strongest when growth is not isolated to one channel. The
              work usually spans acquisition, retention, marketplace or commerce
              performance, analytics, merchandising, finance, operations,
              product, creative, and the cross-functional decision-making needed
              to move teams toward shared business goals.
            </p>
          </div>
        </div>
      </Section>

      <Section
        className="about-timeline-section"
        eyebrow="Career Timeline"
        title="Major chapters in the career path."
      >
        <div className="career-timeline-rail" aria-label="Career timeline">
          {careerChapters.map((chapter, index) => (
            <article className="career-timeline-item" key={chapter.company}>
              <div className="career-timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="career-timeline-content card">
                <div className="career-timeline-topline">
                  <p>{chapter.period}</p>
                  <div className="career-timeline-logos" aria-hidden="true">
                    {chapter.logos.map((logo) => (
                      <span className={`career-timeline-logo ${logo.className}`} key={logo.src}>
                        <Image src={logo.src} alt={logo.alt} width={150} height={60} sizes="150px" />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="career-chapter-main">
                  <p className="case-card-meta">{chapter.company}</p>
                  <h3>{chapter.role}</h3>
                  {Array.isArray(chapter.body) ? (
                    chapter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  ) : (
                    <p>{chapter.body}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="career-timeline-mobile" aria-label="Career timeline">
          {careerChapters.map((chapter) => (
            <details className="career-timeline-drawer" key={chapter.company}>
              <summary>
                <span>{chapter.period}</span>
                <strong>{chapter.company}</strong>
                <small>{chapter.role}</small>
              </summary>
              <div>
                {Array.isArray(chapter.body) ? (
                  chapter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                ) : (
                  <p>{chapter.body}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section
        className="process-section"
        eyebrow="Operating Style"
        title="Six steps I run inside every P&L."
      >
        <GrowthOperatingSystem />
      </Section>

      <Section
        className="about-focus-section audience-section"
        eyebrow="Current Focus"
        title="Two ways to work together."
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
            <Link
              className="button secondary"
              data-analytics-event="view_experience_click"
              data-analytics-link-location="about_current_focus"
              href="/experience"
            >
              View Experience
            </Link>
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
            <Link className="button secondary" href="/contact">
              Start a Conversation
            </Link>
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
          <Link
            className="button secondary"
            data-analytics-event="view_experience_click"
            data-analytics-link-location="about_bottom_cta"
            href="/experience"
          >
            View Experience
          </Link>
        </div>
      </Section>
    </div>
  );
}
