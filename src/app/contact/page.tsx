import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Tyrell Cromoshuk about full-time growth and e-commerce leadership roles, selective advisory work, project-based growth work, or professional growth conversations.",
  path: "/contact",
});

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.75 6.75h14.5v10.5H4.75z" />
      <path d="m5.25 7.25 6.75 5 6.75-5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.5 9.75v7.5" />
      <path d="M10.75 17.25v-7.5" />
      <path d="M10.75 13.25c0-2.1 1.05-3.5 3-3.5 1.75 0 2.75 1.15 2.75 3.25v4.25" />
      <path d="M6.5 6.75h.01" />
      <path d="M4.75 3.75h14.5v16.5H4.75z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="contact-page page-shell-compact">
      <section className="page-hero contact-page-hero">
        <div className="section-inner">
          <p className="eyebrow">Contact</p>
          <h1>Start a conversation.</h1>
          <p className="lede">
            Reach out about full-time leadership roles, selective advisory work,
            or just to talk growth.
          </p>
        </div>
      </section>

      <section className="section alt contact-page-section">
        <div className="section-inner contact-page-grid">
          <div className="contact-page-copy">
            <div>
              <h2>Tell me what you&apos;re trying to grow.</h2>
            </div>
            <p>
              Whether you&apos;re hiring for a full-time growth, e-commerce,
              marketplace, or marketing leader, or looking for senior advisory
              support on a specific growth problem, the best conversations
              usually start with the business goal, the constraint, and what
              needs to change.
            </p>
            <div className="contact-methods">
              <a
                aria-label={`Email ${site.email}`}
                className="card contact-method-card"
                href={`mailto:${site.email}`}
              >
                <span className="contact-method-icon">
                  <EmailIcon />
                </span>
                <span className="contact-method-text">
                  <span>Email</span>
                  <strong>{site.email}</strong>
                </span>
              </a>
              <a
                aria-label="View Tyrell Cromoshuk on LinkedIn"
                className="card contact-method-card"
                href={site.linkedin}
              >
                <span className="contact-method-icon">
                  <LinkedInIcon />
                </span>
                <span className="contact-method-text">
                  <span>LinkedIn</span>
                  <strong>View Profile</strong>
                </span>
              </a>
            </div>
          </div>
          <div className="card contact-form-card">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section contact-page-cta">
        <div className="section-inner case-detail-cta card">
          <div>
            <p className="eyebrow">Case Studies</p>
            <h2>Want to see the work first?</h2>
          </div>
          <p>
            Review selected examples across TikTok Shop, Netflix.Shop, Menlo
            Club, and Veestro before starting the conversation.
          </p>
          <Link className="button secondary" href="/case-studies">
            View Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}
