import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/content";

function CategoryMeta({ category, limit }: { category: string; limit?: number }) {
  const parts = category
    .split("/")
    .map((part) => part.trim())
    .slice(0, limit);

  return (
    <span className="case-card-meta">
      {parts.map((part) => (
        <span className="meta-segment" key={part}>
          {part}
        </span>
      ))}
    </span>
  );
}

function CompanyMark({ company }: { company: string }) {
  return (
    <span className="case-company-mark" aria-hidden="true">
      {company
        .split(/[\s/.]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")}
    </span>
  );
}

function CaseLogo({ study }: { study: CaseStudy }) {
  const logos: Record<string, string> = {
    "netflix-shop": "/logos/netflix.svg",
    "five-four-menlo-club": "/logos/menlo-club-linkedin-logo.jpg",
    veestro: "/logos/veestro-gray.png",
  };
  const logo = logos[study.slug];

  if (!logo) {
    return <CompanyMark company={study.company} />;
  }

  return (
    <span
      className={`case-logo-mark case-logo-${study.slug}`}
    >
      <Image src={logo} alt="" width={120} height={48} sizes="120px" />
    </span>
  );
}

export function CaseCard({
  study,
  variant = "default",
}: {
  study: CaseStudy;
  variant?: "default" | "homepage";
}) {
  const homepageOutcomes: Array<{ metric: string; label: string; context?: string }> =
    study.homepageOutcomes ??
    study.metrics.slice(0, 3).map((metric) => ({
      metric,
      label: "Outcome",
    }));

  if (variant === "homepage") {
    return (
      <article className="card case-card case-card-compact">
        <div className="case-card-company">
          <div className="case-title-row">
            <CaseLogo study={study} />
            <h3>{study.company}</h3>
          </div>
          <p>{study.title}</p>
        </div>
        <div className="case-card-body">
          <p>{study.summary}</p>
          <div className="case-card-capabilities">
            {study.services.slice(0, 3).map((service) => (
              <span className="mini-chip" key={service}>
                {service}
              </span>
            ))}
          </div>
        </div>
        <div className="outcome-tile-grid" aria-label={`${study.company} outcomes`}>
          {homepageOutcomes.slice(0, 3).map((outcome) => (
            <div className="outcome-tile" key={`${study.slug}-${outcome.metric}`}>
              <strong>{outcome.metric}</strong>
              <span>{outcome.label}</span>
              {outcome.context && <small>{outcome.context}</small>}
            </div>
          ))}
        </div>
        <details className="mobile-outcomes">
          <summary>View results</summary>
          <div className="mobile-outcome-list" aria-label={`${study.company} outcomes`}>
            {homepageOutcomes.slice(0, 3).map((outcome) => (
              <div className="outcome-tile" key={`${study.slug}-${outcome.metric}-mobile`}>
                <strong>{outcome.metric}</strong>
                <span>{outcome.label}</span>
                {outcome.context && <small>{outcome.context}</small>}
              </div>
            ))}
          </div>
        </details>
        <Link className="case-card-link" href={`/case-studies/${study.slug}`}>
          Read case study →
        </Link>
      </article>
    );
  }

  return (
    <Link className="card case-card" href={`/case-studies/${study.slug}`}>
      <CategoryMeta category={study.category} />
      <div className="case-card-title">
        <h3>{study.company}</h3>
        <p>{study.title}</p>
      </div>
      <div className="case-card-section">
        <span>Challenge</span>
        <p>{study.challenge}</p>
      </div>
      <div className="case-card-section">
        <span>Role</span>
        <p>{study.role}</p>
      </div>
      <div className="case-card-levers">
        <span>Levers</span>
        <div className="tag-list compact-tags">
          {study.services.slice(0, 3).map((service) => (
            <span className="tag" key={service}>
              {service}
            </span>
          ))}
        </div>
      </div>
      <div className="case-card-metrics">
        <span>Outcomes</span>
        <div>
          {study.metrics.slice(0, 3).map((metric) => (
            <strong key={metric}>{metric}</strong>
          ))}
        </div>
      </div>
      <span className="case-card-link">Read full case study →</span>
    </Link>
  );
}
