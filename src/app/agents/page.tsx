import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { StructuredData } from "@/components/StructuredData";
import { caseStudyPages } from "@/lib/case-study-pages";
import { site } from "@/lib/content";
import { fullTimeRoles } from "@/lib/public-career";
import { publicProfile } from "@/lib/public-profile";
import { createMetadata } from "@/lib/seo";
import { profileStructuredData } from "@/lib/structured-data";
import styles from "./profile.module.css";

const profileDescription = "Detailed career profile of Tyrell Cromoshuk: growth and marketing leadership, e-commerce, marketplaces, subscription, fractional and advisory work.";

export const metadata = {
  ...createMetadata({ title: "Growth & Marketing Executive — Detailed Profile", description: profileDescription, path: "/agents" }),
  alternates: {
    canonical: `${site.url}/agents`,
    types: { "text/markdown": `${site.url}/agents.md` },
  },
};

export default function AgentsPage() {
  return (
    <div className={styles.profile}>
      <StructuredData data={profileStructuredData} />
      <Hero
        eyebrow="Detailed Career Profile"
        title="Growth leadership. The full picture."
        intro={publicProfile.summary}
        primaryCta={{ href: "/contact", label: "Start a conversation" }}
        secondaryCta={{ href: "/experience", label: "View experience" }}
      />
      <Section>
        <div className={styles.profileMeta}>
          <p>{publicProfile.location} · Reviewed October 29, 2026</p>
          <a href="/agents.md">Read as plain text / Markdown</a>
        </div>
        <nav className={styles.contents} aria-label="Profile contents">
          <a href="#engagements">Ways to work together</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#career">Career history</a>
          <a href="#consulting">Consulting</a>
          <a href="#proof">Case studies</a>
          <a href="#contact">Contact</a>
        </nav>
      </Section>
      <div id="engagements" className={styles.anchor}>
        <Section eyebrow="Working Together" title="Full-time leadership and fractional growth support." tone="alt">
          <div className={styles.grid}>
            {publicProfile.engagements.map((item) => (
              <article className={styles.card} key={item.title}>
                <h3>{item.title}</h3><p>{item.body}</p>
                <Link href={item.href}>{item.label} →</Link>
              </article>
            ))}
          </div>
        </Section>
      </div>
      <div id="capabilities" className={styles.anchor}>
        <Section eyebrow="Capabilities" title="The work I lead, with evidence behind it.">
          <div className={styles.grid}>
            {publicProfile.capabilities.map((item) => (
              <article className={styles.card} key={item.title}>
                <h3>{item.title}</h3><p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>
      </div>
      <div id="career" className={styles.anchor}>
        <Section eyebrow="Career History" title="Roles, scope, and outcomes." tone="alt">
          <div className={styles.roles}>
            {fullTimeRoles.map((role) => (
              <article className={styles.role} key={role.company}>
                <div>
                  <p className="eyebrow">{role.dates}</p>
                  <h3>{role.company}</h3><p>{role.role}</p><p>{role.type}</p>
                </div>
                <div>
                  {role.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <ul>{role.outcomes.map((outcome) => <li key={outcome.label}><strong>{outcome.value}</strong> — {outcome.label}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </div>
      <div id="consulting" className={styles.anchor}>
        <Section eyebrow="Independent Consulting" title="Senior support across brands and business models.">
          <p className={styles.readable}>{publicProfile.consulting}</p>
          <Link href="/services">View services and engagement models →</Link>
        </Section>
      </div>
      <div id="proof" className={styles.anchor}>
        <Section eyebrow="Supporting Work" title="Go deeper into the results." tone="alt">
          <div className={styles.grid}>
            {caseStudyPages.map((study) => (
              <article className={styles.card} key={study.slug}>
                <h3><Link href={`/case-studies/${study.slug}`}>{study.companyLabel}</Link></h3>
                <p>{study.indexSummary}</p>
                <Link href={`/case-studies/${study.slug}`}>Read case study →</Link>
              </article>
            ))}
          </div>
        </Section>
      </div>
      <div id="contact" className={styles.anchor}>
        <Section eyebrow="Contact" title="Start with the role or business problem.">
          <p className={styles.readable}>{publicProfile.contact}</p>
          <div className="button-row">
            <a className="button primary" href={`mailto:${site.email}`}>Email Tyrell</a>
            <a className="button secondary" href={site.linkedin}>LinkedIn</a>
          </div>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
        </Section>
      </div>
    </div>
  );
}
