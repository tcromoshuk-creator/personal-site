import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { CaseStudyMedia, CaseStudyMetric } from "@/lib/case-study-pages";
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
  imageStyle,
  label,
}: {
  logo: string;
  logoClass?: string;
  imageStyle?: CSSProperties;
  label: string;
}) {
  return (
    <span className={`case-index-logo ${logoClass ?? ""}`}>
      <Image src={logo} alt="" width={180} height={70} sizes="180px" style={imageStyle} />
      <span className="sr-only">{label}</span>
    </span>
  );
}

type CaseStudyIndexOverride = {
  headline?: string;
  indexSummary?: string;
  metrics?: CaseStudyMetric[];
  tags?: string[];
  heroMedia?: CaseStudyMedia;
  logoImageStyle?: CSSProperties;
  mediaStyle?: CSSProperties;
  mediaFrameStyle?: CSSProperties;
};

const caseStudyIndexOverrides: Record<string, CaseStudyIndexOverride> = {
  "mad-engine-tiktok-shop": {
    headline: "Scaling TikTok Shop for Licensed Apparel",
    indexSummary:
      "I took over TikTok Shop as an under-managed sales channel and helped turn it into a creator-led marketplace engine for licensed apparel. The work combined SKU expansion, creator activation, storefront and PDP optimization, fulfillment improvements, and weekly operating cadence to prove TikTok Shop could become a meaningful revenue channel before paid media was even introduced.",
    metrics: [
      { value: "$120K → $720K", label: "Revenue run-rate" },
      { value: "7.2x", label: "Against AOP goal" },
      { value: "10K → 90K", label: "SKU expansion" },
    ],
    tags: ["TikTok Shop", "Social Commerce", "Creator-Led Growth", "Marketplace Growth"],
    heroMedia: {
      type: "image",
      src: "/case-studies/mad-engine-tiktok-shop/storefront-02.png",
      alt: "Mad Engine TikTok Shop storefront screenshot",
      orientation: "landscape",
    },
    mediaStyle: { objectPosition: "top center" },
  },
  "netflix-shop": {
    headline: "Turning Netflix.Shop Awareness Into BFCM Sales",
    indexSummary:
      "I turned the common reaction of 'Netflix has a shop?' into a BFCM campaign designed to build awareness and drive sales for Netflix.Shop. The campaign used a hero video series, paid social, Google PMax, influencer seeding, email, affiliate, direct mail, and organic social to convert fan attention into measurable commerce demand.",
    metrics: [
      { value: "13M+", label: "Consumers reached" },
      { value: "2.5M", label: "Visitors to Netflix.Shop" },
      { value: "7 figures", label: "Revenue" },
    ],
    tags: ["DTC Commerce", "BFCM", "Paid Social", "Influencer"],
    logoImageStyle: { maxHeight: 30, maxWidth: 112 },
    heroMedia: {
      type: "image",
      src: "/case-studies/netflix-shop/netflix-shop-floating-characters-square.png",
      alt: "Netflix.Shop BFCM campaign characters floating over a city skyline",
      orientation: "landscape",
    },
    mediaStyle: { objectPosition: "center center" },
  },
  "scoops-ahoy": {
    indexSummary:
      "I led performance and growth marketing for the Scoops Ahoy launch, helping translate a broader Netflix consumer-products campaign into measurable retail and digital demand. My work focused on traffic, paid social, paid search, organic support, influencer seeding, and commerce-oriented performance strategy, while also advising cross-functionally on the wider launch across Walmart, PR, activations, and product creative.",
    metrics: [
      { value: "93M+", label: "Consumers reached" },
      { value: "2.1M+", label: "Walmart visitors" },
      { value: "$0.37", label: "Cost per visit" },
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/scoops-ahoy/scoops-ahoy-pint.jpg",
      alt: "Scoops Ahoy ice cream product photography",
      orientation: "landscape",
    },
    logoImageStyle: { maxHeight: 30, maxWidth: 112 },
    mediaStyle: { objectPosition: "center center" },
  },
  "menlo-club": {
    headline: "Launching Menlo Club Premium Seasonal",
    indexSummary:
      "I acted as GM for the launch of Menlo Club Premium Seasonal, a three-year business-model shift from monthly subscription fatigue into a higher-value quarterly service. The launch combined a BigCommerce rebuild, add-to-box commerce, elevated packaging, new shipping methods, a digital magazine, personal stylists, and cross-functional execution across logistics, merchandising, product, engineering, customer service, and marketing.",
    metrics: [
      { value: "25% → 12%", label: "Churn rate improvement" },
      { value: "+$65", label: "AOV increase" },
      { value: "10,000+", label: "Members in first quarter" },
    ],
    tags: ["Subscription", "Retention", "BigCommerce", "Business Model Launch"],
    heroMedia: {
      type: "image",
      src: "/case-studies/menlo-club/menlo-premium-social-01.jpg",
      alt: "Menlo Club Premium Seasonal packaging and product social post",
      orientation: "landscape",
    },
    mediaStyle: { objectPosition: "left center" },
  },
  veestro: {
    headline: "Rebranding Veestro for Plant-Based Growth",
    indexSummary:
      "I led Veestro's shift from vegan-first positioning to a broader plant-based brand while rebuilding the website, acquisition strategy, CRO program, and lifecycle engine. The work connected Shopify 2.0, landing page testing, paid media, affiliate, PR, influencer, Klaviyo, Attentive, and new brand systems to improve acquisition efficiency and conversion.",
    metrics: [
      { value: "60%", label: "CAC drop" },
      { value: "15%", label: "Sitewide CVR lift" },
      { value: "6 figures/mo", label: "Winback revenue" },
    ],
    tags: ["Rebrand", "Shopify 2.0", "CRO", "Lifecycle"],
    heroMedia: {
      type: "image",
      src: "/case-studies/veestro/veestro-lifestyle-box.jpg",
      alt: "Veestro plant-based meals and packaging lifestyle image",
      orientation: "landscape",
    },
    mediaStyle: { objectPosition: "42% center" },
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="case-index-page page-shell-compact">
      <section className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">Case Studies</p>
          <h1>Highlights of my past work</h1>
          <p className="lede">
            These case studies show business problems I tackled across my
            career, the operating choices behind the work, and the measurable
            results that followed across marketplace, DTC, subscription, retail,
            and lifecycle growth.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner case-index-layout">
          <aside className="case-index-toc" aria-label="Case study contents">
            <p>Case Studies</p>
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
              {caseStudyPages.map((study) => {
                const override = caseStudyIndexOverrides[study.slug] ?? {};
                const headline = override.headline ?? study.headline;
                const indexSummary = override.indexSummary ?? study.indexSummary;
                const metrics = override.metrics ?? study.metrics;
                const tags = override.tags ?? study.tags;
                const heroMedia = override.heroMedia ?? study.heroMedia;

                return (
                  <article
                    className={`card case-index-card${heroMedia ? " has-media" : ""}`}
                    id={study.slug}
                    key={study.slug}
                  >
                    <div className="case-index-card-body">
                      <div>
                        <h2>{headline}</h2>
                        <p>{indexSummary}</p>
                      </div>
                      <div className="case-index-results" aria-label={`${study.companyLabel} outcomes`}>
                        {metrics.slice(0, 3).map((metric) => (
                          <div
                            className={`case-result-tile${metric.value.length > 10 ? " is-wide-metric" : ""}`}
                            key={`${study.slug}-${metric.value}`}
                          >
                            <strong style={{ whiteSpace: "nowrap" }}>{metric.value}</strong>
                            <span>{metric.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="tag-list">
                        {tags.slice(0, 4).map((tag) => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link className="case-card-link" href={`/case-studies/${study.slug}`}>
                        Read Case Study
                      </Link>
                    </div>
                    <div className="case-index-side">
                      <div className="case-detail-company case-index-company">
                        <CaseStudyIndexLogo
                          logo={study.logo}
                          logoClass={study.logoClass}
                          imageStyle={override.logoImageStyle}
                          label={study.companyLabel}
                        />
                        <p>{study.companyLabel}</p>
                      </div>
                      {heroMedia && (
                        <div
                          className="case-index-media square"
                          style={{
                            aspectRatio: "1 / 1",
                            alignSelf: "start",
                            minHeight: 0,
                            maxHeight: "none",
                            ...override.mediaFrameStyle,
                          }}
                        >
                          <Image
                            src={heroMedia.src}
                            alt={heroMedia.alt}
                            width={720}
                            height={720}
                            sizes="(max-width: 900px) 100vw, 360px"
                            style={override.mediaStyle}
                          />
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
