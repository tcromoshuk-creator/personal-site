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
              <p className="eyebrow">Best-fit conversations</p>
              <h2>Full-time leadership first, with selective advisory support.</h2>
            </div>
            <p>
              The strongest fit is usually a Growth, E-Commerce, Marketplace
              Growth, or Marketing leadership mandate where acquisition,
              retention, marketplace performance, reporting, and operating
              cadence need to connect.
            </p>
            <div className="contact-methods">
              <a className="card contact-method-card" href={`mailto:${site.email}`}>
                <span>Email</span>
                <strong>{site.email}</strong>
              </a>
              <a className="card contact-method-card" href={site.linkedin}>
                <span>LinkedIn</span>
                <strong>View Profile</strong>
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
