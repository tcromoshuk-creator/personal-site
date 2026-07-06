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
        <summary>Details &amp; Tools</summary>
        <div className="case-mobile-context-grid">
          <div className="case-snapshot">
            <h2>Details</h2>
            <CaseDetailsList study={study} />
          </div>
          <div className="case-tools">
            <h2>Platforms / Tools</h2>
            <PlatformTags study={study} />
          </div>
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
          width={media.width ?? (media.orientation === "portrait" ? 760 : 1280)}
          height={media.height ?? (media.orientation === "portrait" ? 1400 : 760)}
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

const netflixInvasionVideos = [
  {
    label: "Part One",
    src: "https://player.vimeo.com/video/961414740?title=0&byline=0&portrait=0",
  },
  {
    label: "Part Two",
    src: "https://player.vimeo.com/video/961414677?title=0&byline=0&portrait=0",
  },
  {
    label: "Part Three",
    src: "https://player.vimeo.com/video/961414591?title=0&byline=0&portrait=0",
  },
];

function NetflixShopMediaAssets({ mediaAssets }: { mediaAssets: CaseStudyMedia[] }) {
  return (
    <div className="case-netflix-media-showcase">
      <div className="case-netflix-media-group">
        <div className="case-netflix-media-heading">
          <h3>The Invasion Series</h3>
          <p>The three-part hero video series used as the core creative hook for the Netflix.Shop BFCM campaign.</p>
        </div>
        <div className="case-vimeo-grid">
          {netflixInvasionVideos.map((video) => (
            <article className="case-vimeo-card" key={video.src}>
              <div className="case-vimeo-frame">
                <iframe
                  src={video.src}
                  title={`Netflix.Shop Invasion Series ${video.label}`}
                  loading="lazy"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h4>{video.label}</h4>
            </article>
          ))}
        </div>
      </div>

      {mediaAssets.length > 0 && (
        <div className="case-netflix-media-group">
          <div className="case-netflix-media-heading">
            <h3>Influencer and social support</h3>
          </div>
          <div className="case-media-grid case-netflix-support-grid">
            {mediaAssets.map((media) => (
              <MediaBlock media={media} key={media.src} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ResultsBand({ study }: { study: CaseStudyPageContent }) {
  const metrics = study.metrics.filter(
    (metric) => !(study.slug === "mad-engine-tiktok-shop" && metric.value === "No paid media"),
  );

  return (
    <div className="case-result-band card" aria-label={`${study.companyLabel} results`}>
      {metrics.slice(0, 6).map((metric) => (
        <div className="case-result-tile" key={`${study.slug}-${metric.value}-${metric.label}`}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          {metric.support && <p>{metric.support}</p>}
        </div>
      ))}
    </div>
  );
}

const madEngineChartMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const madEngineBaselineCumulative = [
  2437.36, 4267.87, 8315.55, 16257.96, 25515.51, 35204.9, 45939.73, 58112.04, 71852.52, 87030.48, 103123.2,
  120000,
];
const madEngineActualForecastCumulative = [
  14624.13, 25607.21, 49893.3, 97547.77, 153093.06, 211229.39, 275638.37, 348672.25, 431115.1, 522182.86,
  618739.18, 720000,
];
const madEngineChartMax = 720000;
const madEngineChartLeft = 52;
const madEngineChartRight = 652;
const madEngineChartTop = 38;
const madEngineChartBottom = 246;

function getMadEngineChartPoint(value: number, index: number) {
  const x =
    madEngineChartLeft + (index * (madEngineChartRight - madEngineChartLeft)) / (madEngineChartMonths.length - 1);
  const y = madEngineChartBottom - (value / madEngineChartMax) * (madEngineChartBottom - madEngineChartTop);

  return { x, y };
}

function getMadEngineChartPath(values: number[], startIndex = 0) {
  return values
    .map((value, valueIndex) => {
      const { x, y } = getMadEngineChartPoint(value, startIndex + valueIndex);
      return `${valueIndex === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function MadEngineRunRateChart() {
  const baselinePath = getMadEngineChartPath(madEngineBaselineCumulative);
  const actualPath = getMadEngineChartPath(madEngineActualForecastCumulative.slice(0, 5));
  const forecastPath = getMadEngineChartPath(madEngineActualForecastCumulative.slice(4), 4);
  const forecastStartPoint = getMadEngineChartPoint(madEngineActualForecastCumulative[5], 5);
  const baselineEndPoint = getMadEngineChartPoint(madEngineBaselineCumulative[11], 11);
  const forecastEndPoint = getMadEngineChartPoint(madEngineActualForecastCumulative[11], 11);

  return (
    <figure className="case-run-rate-chart card" aria-labelledby="mad-engine-run-rate-title">
      <div className="case-run-rate-chart-copy">
        <h3 id="mad-engine-run-rate-title">TikTok Shop 2026 forecast vs. pacing</h3>
      </div>
      <div className="case-run-rate-chart-visual">
        <svg
          viewBox="0 0 720 320"
          role="img"
          aria-label="Twelve-month cumulative GMV chart showing a seasonally weighted prior baseline ending at $120K and actual plus forecast ending at $720K"
        >
          <line className="chart-axis-line" x1={madEngineChartLeft} x2={madEngineChartRight} y1={madEngineChartBottom} y2={madEngineChartBottom} />
          <line className="chart-axis-line" x1={madEngineChartLeft} x2={madEngineChartLeft} y1={madEngineChartTop} y2={madEngineChartBottom} />
          {[0, 360000, 720000].map((value) => {
            const y = getMadEngineChartPoint(value, 0).y;

            return (
              <g key={value}>
                <line className="chart-grid-line" x1={madEngineChartLeft} x2={madEngineChartRight} y1={y} y2={y} />
                <text className="chart-axis-label" x="40" y={y + 4} textAnchor="end">
                  {value === 0 ? "$0" : `$${value / 1000}K`}
                </text>
              </g>
            );
          })}
          <path className="chart-baseline-line" d={baselinePath} />
          <path className="chart-actual-line" d={actualPath} />
          <path className="chart-forecast-line" d={forecastPath} />
          {madEngineActualForecastCumulative.map((value, index) => {
            const { x, y } = getMadEngineChartPoint(value, index);

            return <circle className="chart-point chart-point-small" cx={x} cy={y} key={`forecast-${madEngineChartMonths[index]}`} r="3.2" />;
          })}
          {madEngineBaselineCumulative.map((value, index) => {
            const { x, y } = getMadEngineChartPoint(value, index);

            return <circle className="chart-point chart-point-baseline" cx={x} cy={y} key={`baseline-${madEngineChartMonths[index]}`} r="2.4" />;
          })}
          {madEngineChartMonths.map((month, index) => {
            const { x } = getMadEngineChartPoint(0, index);

            return (
              <text className="chart-month-label" x={x} y="274" key={month} textAnchor="middle">
                {month}
              </text>
            );
          })}
          <g className="chart-forecast-marker">
            <line x1={forecastStartPoint.x} x2={forecastStartPoint.x} y1="58" y2="246" />
            <text x={forecastStartPoint.x + 8} y="68">
              Forecast begins
            </text>
          </g>
          <text className="chart-end-label chart-end-label-baseline" x={baselineEndPoint.x - 8} y={baselineEndPoint.y + 22} textAnchor="end">
            $120K baseline
          </text>
          <text className="chart-end-label chart-end-label-forecast" x={forecastEndPoint.x - 6} y={forecastEndPoint.y - 12} textAnchor="end">
            $720K revised forecast
          </text>
        </svg>
      </div>
      <p className="case-run-rate-chart-callout">6x full-year GMV vs. prior baseline</p>
    </figure>
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
                {section.id === "results" && study.slug === "mad-engine-tiktok-shop" && <MadEngineRunRateChart />}
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
                {study.slug === "netflix-shop" ? (
                  <NetflixShopMediaAssets mediaAssets={mediaAssets} />
                ) : (
                  <>
                    <div className="case-media-grid case-media-grid-desktop">
                      {mediaAssets.map((media) => (
                        <MediaBlock media={media} key={media.src} />
                      ))}
                    </div>
                    <MobileMediaAssets study={study} mediaAssets={mediaAssets} />
                  </>
                )}
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
