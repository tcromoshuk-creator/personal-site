import Image from "next/image";
import Link from "next/link";
import type { CaseStudyMedia, CaseStudyPageContent } from "@/lib/case-study-pages";
import { caseStudyPages } from "@/lib/case-study-pages";

function CaseStudyLogo({ study }: { study: CaseStudyPageContent }) {
  return (
    <span className={`case-detail-logo ${study.logoClass ?? ""}`}>
      <Image src={study.logo} alt="" width={190} height={72} sizes="190px" />
    </span>
  );
}

function CaseDetailsList({ study }: { study: CaseStudyPageContent }) {
  return (
    <dl>
      <div>
        <dt>Company</dt>
        <dd>{study.company}</dd>
      </div>
      <div>
        <dt>My Role</dt>
        <dd>{study.role}</dd>
      </div>
      <div>
        <dt>Year / Timeframe</dt>
        <dd>{study.timeframe}</dd>
      </div>
      <div>
        <dt>Category</dt>
        <dd>{study.category}</dd>
      </div>
    </dl>
  );
}

function PlatformTags({ study }: { study: CaseStudyPageContent }) {
  return (
    <div className="tag-list">
      {study.platforms.map((platform) => (
        <span className="tag" key={platform}>
          {platform}
        </span>
      ))}
    </div>
  );
}

function MobileCaseContext({ study }: { study: CaseStudyPageContent }) {
  return (
    <div className="case-mobile-context" aria-label="Case study context">
      <details className="case-mobile-drawer">
        <summary>Case Details</summary>
        <div className="case-snapshot">
          <CaseDetailsList study={study} />
        </div>
      </details>
      <details className="case-mobile-drawer">
        <summary>Platforms / Tools</summary>
        <div className="case-tools">
          <PlatformTags study={study} />
        </div>
      </details>
    </div>
  );
}

function MediaBlock({ media, priority = false }: { media: CaseStudyMedia; priority?: boolean }) {
  const className = `case-media ${media.orientation === "portrait" ? "portrait" : "landscape"}`;

  return (
    <figure className={className}>
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          width={media.orientation === "portrait" ? 760 : 1280}
          height={media.orientation === "portrait" ? 1400 : 760}
          sizes={media.orientation === "portrait" ? "(max-width: 900px) 92vw, 420px" : "(max-width: 900px) 92vw, 900px"}
          priority={priority}
        />
      ) : media.type === "video" ? (
        <video controls muted playsInline preload="metadata" poster={media.poster}>
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="case-pdf-frame">
          <object data={media.src} type="application/pdf" aria-label={media.alt}>
            <p>
              <a href={media.src}>Open PDF</a>
            </p>
          </object>
          <a className="case-pdf-link" href={media.src}>
            Open PDF
          </a>
        </div>
      )}
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}

function getMobileFeaturedMediaIndex(study: CaseStudyPageContent, mediaAssets: CaseStudyMedia[]) {
  if (study.slug === "mad-engine-tiktok-shop") {
    const redTeeIndex = mediaAssets.findIndex((media) => media.src.includes("creator-video-02"));
    return redTeeIndex >= 0 ? redTeeIndex : 0;
  }

  if (study.slug === "menlo-club") {
    const launchVisualIndex = mediaAssets.findIndex((media) => media.src.includes("menlo-premium-video-still"));
    return launchVisualIndex >= 0 ? launchVisualIndex : 0;
  }

  return 0;
}

function MobileMediaAssets({ study, mediaAssets }: { study: CaseStudyPageContent; mediaAssets: CaseStudyMedia[] }) {
  if (!mediaAssets.length) return null;

  const featuredIndex = getMobileFeaturedMediaIndex(study, mediaAssets);
  const featuredMedia = mediaAssets[featuredIndex] ?? mediaAssets[0];
  const additionalMedia = mediaAssets.filter((_, index) => index !== featuredIndex);

  return (
    <div className="case-mobile-media">
      <MediaBlock media={featuredMedia} priority />
      {additionalMedia.length > 0 && (
        <details className="case-mobile-drawer case-mobile-media-drawer">
          <summary>More campaign assets</summary>
          <div className="case-mobile-media-list">
            {additionalMedia.map((media) => (
              <MediaBlock media={media} key={`mobile-${media.src}`} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function ResultsBand({ study }: { study: CaseStudyPageContent }) {
  return (
    <div className="case-result-band card" aria-label={`${study.companyLabel} results`}>
      {study.metrics.slice(0, 6).map((metric) => (
        <div className="case-result-tile" key={`${study.slug}-${metric.value}-${metric.label}`}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          {metric.support && <p>{metric.support}</p>}
        </div>
      ))}
    </div>
  );
}

function RelatedCaseStudies({ currentSlug, related }: { currentSlug: string; related: string[] }) {
  const relatedStudies = related
    .map((slug) => caseStudyPages.find((study) => study.slug === slug))
    .filter(Boolean) as CaseStudyPageContent[];

  if (!relatedStudies.length) return null;

  return (
    <section className="case-related" id="related-case-studies">
      <p className="eyebrow">Related Case Studies</p>
      <div className="case-related-grid">
        {relatedStudies.map((study) => (
          <Link className="card case-related-card" href={`/case-studies/${study.slug}`} key={`${currentSlug}-${study.slug}`}>
            <div className="case-related-brand-row">
              <CaseStudyLogo study={study} />
              <h3>{study.companyLabel}</h3>
            </div>
            <p>{study.indexSummary}</p>
            <span>Read Case Study</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyDetailPage({ study }: { study: CaseStudyPageContent }) {
  const heroMediaAsset = study.slug === "mad-engine-tiktok-shop" ? undefined : study.heroMedia;
  const mediaAssets = [heroMediaAsset, ...(study.media ?? [])].filter(Boolean) as CaseStudyMedia[];
  const mobileMenuItems = [
    ...study.sections.map((section) => ({ href: `#${section.id}`, label: section.title })),
    ...(mediaAssets.length > 0 ? [{ href: "#media-campaign-assets", label: "Media / Campaign Assets" }] : []),
    ...(study.related.length > 0 ? [{ href: "#related-case-studies", label: "Related Case Studies" }] : []),
  ];

  return (
    <article className="case-detail-page page-shell-compact">
      <section className="case-detail-hero page-hero">
        <div className="section-inner case-detail-hero-copy">
          <h1>{study.headline}</h1>
          <p className="lede">{study.subhead}</p>
        </div>
      </section>

      <section className="section alt case-detail-section">
        <div className="section-inner case-detail-layout">
          <aside className="case-detail-toc" aria-label="Case study contents">
            <p>Contents</p>
            <nav>
              {study.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="case-detail-main">
            <MobileCaseContext study={study} />

            <div className="case-mobile-section-menu" aria-label="Case study sections">
              <p>Jump to Section</p>
              <nav>
                {mobileMenuItems.map((item, index) => (
                <a href={item.href} key={item.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              ))}
              </nav>
            </div>

            {study.sections.map((section) => (
              <section className="case-story-section" id={section.id} key={section.id}>
                <p className="eyebrow">{section.title}</p>
                {section.id === "results" && <ResultsBand study={study} />}
                <div className="case-story-copy">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {mediaAssets.length > 0 && (
              <section className="case-story-section" id="media-campaign-assets">
                <p className="eyebrow">Media / Campaign Assets</p>
                <div className="case-media-grid case-media-grid-desktop">
                  {mediaAssets.map((media) => (
                    <MediaBlock media={media} key={media.src} />
                  ))}
                </div>
                <MobileMediaAssets study={study} mediaAssets={mediaAssets} />
              </section>
            )}

            <RelatedCaseStudies currentSlug={study.slug} related={study.related} />

            <section className="case-end-actions" aria-label="Case study actions">
              <Link className="button primary" href="/contact">
                Start a Conversation
              </Link>
              <Link className="button secondary" href="/case-studies">
                View All Case Studies
              </Link>
            </section>
          </div>

          <aside className="case-detail-sidebar">
            <div className="card case-snapshot">
              <h2>Details</h2>
              <CaseDetailsList study={study} />
            </div>

            <div className="card case-tools">
              <h2>Platforms / Tools</h2>
              <PlatformTags study={study} />
            </div>

            {study.relevantLinks && study.relevantLinks.length > 0 && (
              <div className="card case-links">
                <h2>Relevant Links</h2>
                <div className="case-link-list">
                  {study.relevantLinks.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                      <span>{link.label}</span>
                      {link.note && <small>{link.note}</small>}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </article>
  );
}
