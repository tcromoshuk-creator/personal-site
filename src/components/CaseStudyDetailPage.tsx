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
      ) : (
        <video controls muted playsInline preload="metadata" poster={media.poster}>
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}

function RelatedCaseStudies({ currentSlug, related }: { currentSlug: string; related: string[] }) {
  const relatedStudies = related
    .map((slug) => caseStudyPages.find((study) => study.slug === slug))
    .filter(Boolean) as CaseStudyPageContent[];

  if (!relatedStudies.length) return null;

  return (
    <section className="case-related">
      <p className="eyebrow">Related Case Studies</p>
      <div className="case-related-grid">
        {relatedStudies.map((study) => (
          <Link className="card case-related-card" href={`/case-studies/${study.slug}`} key={`${currentSlug}-${study.slug}`}>
            <CaseStudyLogo study={study} />
            <div>
              <h3>{study.companyLabel}</h3>
              <p>{study.indexSummary}</p>
            </div>
            <span>Read Case Study</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyDetailPage({ study }: { study: CaseStudyPageContent }) {
  return (
    <article className="case-detail-page page-shell-compact">
      <section className="case-detail-hero page-hero">
        <div className="section-inner case-detail-hero-grid">
          <div className="case-detail-hero-copy">
            <div className="case-detail-company">
              <CaseStudyLogo study={study} />
              <p>{study.companyLabel}</p>
            </div>
            <h1>{study.headline}</h1>
            <p className="lede">{study.subhead}</p>
            <div className="button-row">
              <Link className="button primary" href="/contact">
                Start a Conversation
              </Link>
              <Link className="button secondary" href="/case-studies">
                View All Case Studies
              </Link>
            </div>
          </div>
          {study.heroMedia && <MediaBlock media={study.heroMedia} priority />}
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
            <div className="case-mobile-jump" aria-label="Case study jump menu">
              {study.sections.map((section) => (
                <a href={`#${section.id}`} key={`mobile-${section.id}`}>
                  {section.title}
                </a>
              ))}
            </div>

            <section className="case-result-band card" aria-label={`${study.companyLabel} results`}>
              {study.metrics.slice(0, 6).map((metric) => (
                <div className="case-result-tile" key={`${study.slug}-${metric.value}-${metric.label}`}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  {metric.support && <p>{metric.support}</p>}
                </div>
              ))}
            </section>

            {study.sections.map((section) => (
              <section className="case-story-section" id={section.id} key={section.id}>
                <p className="eyebrow">{section.title}</p>
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

            {study.media && study.media.length > 0 && (
              <section className="case-story-section">
                <p className="eyebrow">Media / Campaign Assets</p>
                <div className="case-media-grid">
                  {study.media.map((media) => (
                    <MediaBlock media={media} key={media.src} />
                  ))}
                </div>
              </section>
            )}

            <RelatedCaseStudies currentSlug={study.slug} related={study.related} />

            <section className="case-detail-cta card">
              <div>
                <p className="eyebrow">Start a Conversation</p>
                <h2>Have a growth problem that needs an operator?</h2>
              </div>
              <p>
                Reach out about full-time leadership roles, selective advisory work, or a
                specific growth mandate.
              </p>
              <Link className="button primary" href="/contact">
                Start a Conversation
              </Link>
            </section>
          </div>

          <aside className="case-detail-sidebar">
            <div className="card case-snapshot">
              <h2>Details</h2>
              <dl>
                <div>
                  <dt>Company</dt>
                  <dd>{study.company}</dd>
                </div>
                <div>
                  <dt>Role</dt>
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
            </div>

            <div className="card case-tools">
              <h2>Platforms / Tools</h2>
              <div className="tag-list">
                {study.platforms.map((platform) => (
                  <span className="tag" key={platform}>
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}
