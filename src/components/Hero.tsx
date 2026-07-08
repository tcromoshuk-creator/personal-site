import Image from "next/image";
import Link from "next/link";
import { homepageProofMetrics } from "@/lib/content";

type HeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  primaryCta?: {
    analyticsEvent?: string;
    analyticsLinkLocation?: string;
    href: string;
    label: string;
  };
  secondaryCta?: {
    analyticsEvent?: string;
    analyticsLinkLocation?: string;
    href: string;
    label: string;
  };
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
  const useMobileHeroBreak = title === "Growth and e-commerce leadership for brands.";

  return (
    <section className={showSystemMap ? "section hero" : "page-hero"}>
      <div className={showSystemMap ? "section-inner hero-grid" : "section-inner"}>
        <div className="hero-heading">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>
            {useMobileHeroBreak ? (
              <>
                <span className="hero-title-desktop">{title}</span>
                <span className="hero-title-mobile">
                  Growth and e-commerce
                  <br />
                  leadership for brands.
                </span>
              </>
            ) : (
              title
            )}
          </h1>
        </div>
        <div className="hero-lower-copy">
          <p className="lede">{intro}</p>
          {(primaryCta || secondaryCta) && (
            <div className="button-row">
              {primaryCta && (
                <Link
                  className="button primary"
                  data-analytics-event={primaryCta.analyticsEvent}
                  data-analytics-link-location={primaryCta.analyticsLinkLocation}
                  href={primaryCta.href}
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  className="button secondary"
                  data-analytics-event={secondaryCta.analyticsEvent}
                  data-analytics-link-location={secondaryCta.analyticsLinkLocation}
                  href={secondaryCta.href}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {availability && <p className="availability-line">{availability}</p>}
        </div>
        {showSystemMap && (
          <aside className="hero-proof" aria-label="Executive growth proof points">
            <div className="hero-metric-grid">
              {homepageProofMetrics.map((metric) => (
                <div
                  className={`hero-metric-card${metric.filled ? " filled" : ""}`}
                  key={metric.label}
                >
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
              <div className="hero-portrait-card">
                <Image
                  src="/images/tyrell-headshot.jpg"
                  alt="Tyrell Cromoshuk"
                  fill
                  sizes="(max-width: 760px) 60vw, 420px"
                  priority
                />
              </div>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}
