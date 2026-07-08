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
    <svg aria-hidden="true" viewBox="0 0 100 100">
      <rect fill="#0a66c2" height="100" rx="17" width="100" />
      <circle cx="29" cy="27" fill="#ffffff" r="10" />
      <rect fill="#ffffff" height="43" rx="3" width="15" x="21.5" y="43" />
      <path
        d="M45 43h14v6.1c2-3.6 6.1-7.1 13-7.1 13.8 0 16.5 9.1 16.5 20.8V86h-15V65.4c0-5.1-.1-11.6-7.1-11.6-7.1 0-8.2 5.5-8.2 11.2V86H45z"
        fill="#ffffff"
      />
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
              <h2>Let&apos;s talk growth.</h2>
            </div>
            <p>
              Whether you&apos;re hiring for a full-time growth/marketing leader
              or looking for senior advisory support on a specific growth
              problem, I&apos;m always open to chatting. Reach out with the form
              to help set the context of what you&apos;d like to talk about.
            </p>
            <div className="contact-methods">
              <a
                aria-label={`Email ${site.email}`}
                className="card contact-method-card"
                data-analytics-event="email_click"
                data-analytics-link-location="contact_methods"
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
                data-analytics-event="linkedin_click external_link_click"
                data-analytics-link-location="contact_methods"
                href={site.linkedin}
              >
                <span className="contact-method-icon contact-method-icon-linkedin">
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
          <Link
            className="button secondary"
            data-analytics-event="view_case_studies_click"
            data-analytics-link-location="contact_page_cta"
            href="/case-studies"
          >
            View Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}
