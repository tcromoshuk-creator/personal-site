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
  const isFeaturedHomepageCase =
    variant === "homepage" && ["mad-engine", "netflix-shop"].includes(study.slug);

  if (variant === "homepage") {
    return (
      <Link
        className={`card case-card case-card-compact${
          isFeaturedHomepageCase ? " case-card-featured" : ""
        }`}
        href={`/case-studies/${study.slug}`}
      >
        <CategoryMeta category={study.category} limit={2} />
        <div className="case-card-title">
          <div className="case-title-row">
            <CompanyMark company={study.company} />
            <h3>{study.company}</h3>
          </div>
          <p>{study.homepageContext ?? study.summary}</p>
        </div>
        <div className="outcome-tile-grid" aria-label={`${study.company} outcomes`}>
          {homepageOutcomes.slice(0, 3).map((outcome) => (
            <div className="outcome-tile" key={`${study.slug}-${outcome.metric}`}>
              <span>{outcome.label}</span>
              <strong>{outcome.metric}</strong>
              {outcome.context && <small>{outcome.context}</small>}
            </div>
          ))}
        </div>
        <div className="case-card-capabilities">
          {study.services.slice(0, 2).map((service) => (
            <span className="mini-chip" key={service}>
              {service}
            </span>
          ))}
        </div>
        <span className="case-card-link">Read case study →</span>
      </Link>
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
