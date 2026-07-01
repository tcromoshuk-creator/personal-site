import Link from "next/link";
import { Section } from "@/components/Section";

type ContactCTAProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function ContactCTA({
  eyebrow = "Full-time or fractional",
  title = "Built for executive growth roles first, with advisory support for senior growth mandates.",
  intro = "The primary fit is VP, SVP, Head of Growth, E-Commerce, Marketplace Growth, or Marketing leadership. Fractional, advisory, and project work makes sense when the mandate is strategic, commercially meaningful, and tied to growth systems.",
  secondaryHref = "/services",
  secondaryLabel = "Discuss consulting",
}: ContactCTAProps) {
  return (
    <Section tone="soft" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="button-row">
        <Link className="button primary" href="/contact">
          Start a conversation
        </Link>
        <Link className="button secondary" href={secondaryHref}>
          {secondaryLabel}
        </Link>
      </div>
    </Section>
  );
}
