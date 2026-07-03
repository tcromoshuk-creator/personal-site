import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudyPages } from "@/lib/case-study-pages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Growth & E-Commerce Case Studies",
  description:
    "Case studies across marketplace growth, TikTok Shop, DTC commerce, subscription growth, lifecycle marketing, CRO, acquisition, and e-commerce operating systems.",
  path: "/case-studies",
});

function CaseStudyIndexLogo({
  logo,
  logoClass,
  label,
}: {
  logo: string;
  logoClass?: string;
  label: string;
}) {
  return (
    <span className={`case-index-logo ${logoClass ?? ""}`}>
      <Image src={logo} alt="" width={180} height={70} sizes="180px" />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="case-index-page page-shell-compact">
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Case Studies</p>
          <h1>Selected growth systems and outcomes.</h1>
          <p className="lede">
            A closer look at marketplace growth, DTC commerce, subscription
            retention, acquisition, CRO, and operating cadence work across
            consumer commerce businesses.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner case-index-layout">
          <aside className="case-index-toc" aria-label="Case study contents">
            <p>Contents</p>
            <nav>
              {caseStudyPages.map((study, index) => (
                <a href={`#${study.slug}`} key={study.slug}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {study.companyLabel}
                </a>
              ))}
            </nav>
          </aside>

          <div className="case-index-main">
            <div className="case-index-mobile-nav" aria-label="Case study jump menu">
              {caseStudyPages.map((study) => (
                <a href={`#${study.slug}`} key={`mobile-${study.slug}`}>
                  {study.companyLabel}
                </a>
              ))}
            </div>

            <div className="case-index-grid">
              {caseStudyPages.map((study, index) => (
                <article
                  className={`card case-index-card${study.heroMedia ? " has-media" : ""}`}
                  id={study.slug}
                  key={study.slug}
                >
                  <div className="case-index-card-top">
                    <p className="case-card-meta">
                      {String(index + 1).padStart(2, "0")} / {study.category}
                    </p>
                    <CaseStudyIndexLogo
                      logo={study.logo}
                      logoClass={study.logoClass}
                      label={study.companyLabel}
                    />
                  </div>
                  <div className="case-index-card-body">
                    <div>
                      <h2>{study.headline}</h2>
                      <p>{study.indexSummary}</p>
                    </div>
                    <div className="case-index-results" aria-label={`${study.companyLabel} outcomes`}>
                      {study.metrics.slice(0, 3).map((metric) => (
                        <div className="case-result-tile" key={`${study.slug}-${metric.value}`}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="tag-list">
                      {study.tags.slice(0, 4).map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {study.heroMedia && (
                    <div className={`case-index-media ${study.heroMedia.orientation ?? "landscape"}`}>
                      <Image
                        src={study.heroMedia.src}
                        alt={study.heroMedia.alt}
                        width={study.heroMedia.orientation === "portrait" ? 560 : 920}
                        height={study.heroMedia.orientation === "portrait" ? 920 : 560}
                        sizes="(max-width: 900px) 100vw, 360px"
                      />
                    </div>
                  )}
                  <Link className="case-card-link" href={`/case-studies/${study.slug}`}>
                    Read Case Study
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
