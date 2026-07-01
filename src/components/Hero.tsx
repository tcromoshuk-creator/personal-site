import Link from "next/link";
import { GrowthOperatingSystemMap } from "@/components/GrowthOperatingSystem";

type HeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  availability?: string;
  showSystemMap?: boolean;
};

export function Hero({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  availability,
  showSystemMap = false,
}: HeroProps) {
  return (
    <section className={showSystemMap ? "section hero" : "page-hero"}>
      <div className={showSystemMap ? "section-inner hero-grid" : "section-inner"}>
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{intro}</p>
          {(primaryCta || secondaryCta) && (
            <div className="button-row">
          {primaryCta && (
                <Link className="button primary" href={primaryCta.href}>
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link className="button secondary" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {availability && <p className="availability-line">{availability}</p>}
        </div>
        {showSystemMap && <GrowthOperatingSystemMap />}
      </div>
    </section>
  );
}
