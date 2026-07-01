import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Tyrell Cromoshuk about full-time executive growth roles, fractional consulting, advisory work, projects, or professional conversations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Start a practical conversation."
        intro="Reach out about full-time executive growth roles, fractional consulting, advisory work, projects, or professional conversations where growth, commerce, marketplace, lifecycle, or operating cadence are central to the problem."
      />

      <Section tone="alt">
        <div className="grid two-col">
          <div className="card">
            <h3>Best-fit conversations</h3>
            <p>
              VP, SVP, Head of Growth, E-Commerce, Marketplace Growth, and
              Marketing leadership roles. Consulting or advisory work is a fit
              when the work is senior, strategic, and tied to meaningful growth
              outcomes.
            </p>
          </div>
          <div className="card">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
