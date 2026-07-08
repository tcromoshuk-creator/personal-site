"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { CaseStudyMedia } from "@/lib/case-study-pages";

const lookbookPages = Array.from({ length: 27 }, (_, index) => {
  const pageNumber = index + 1;
  return {
    alt: `Premium Seasonal magazine page ${pageNumber}`,
    pageNumber,
    src: `/case-studies/menlo-club/lookbook/page-${String(pageNumber).padStart(2, "0")}.jpg`,
  };
});

function MediaBlock({ media }: { media: CaseStudyMedia }) {
  return (
    <figure className="case-media landscape">
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width ?? 1280}
        height={media.height ?? 760}
        sizes="(max-width: 900px) 92vw, 520px"
      />
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}

export function MenloClubMediaShowcase({ mediaAssets }: { mediaAssets: CaseStudyMedia[] }) {
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const supportingAssets = useMemo(
    () =>
      mediaAssets.filter((media) =>
        ["menlo-premium-social-02", "menlo-premium-social-01"].some((asset) => media.src.includes(asset)),
      ),
    [mediaAssets],
  );

  useEffect(() => {
    if (!isLookbookOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLookbookOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setActivePageIndex((current) => Math.max(0, current - 1));
      }

      if (event.key === "ArrowRight") {
        setActivePageIndex((current) => Math.min(lookbookPages.length - 1, current + 1));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLookbookOpen]);

  const activePage = lookbookPages[activePageIndex];

  return (
    <div className="case-menlo-media-showcase">
      <div className="case-menlo-media-group">
        <div className="case-menlo-media-heading">
          <h3>Launch Video</h3>
        </div>
        <figure
          className="case-menlo-video"
          data-analytics-case-study-slug="menlo-club"
          data-analytics-event="video_click"
          data-analytics-video-title="Menlo Club Premium Seasonal launch video"
        >
          <div className="case-menlo-video-frame">
            <iframe
              src="https://www.youtube.com/embed/0mqC60QsVDo"
              title="Menlo Club Premium Seasonal launch video"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <figcaption>Launch video explaining the Premium Seasonal model and previewing the first collection.</figcaption>
        </figure>
      </div>

      <div className="case-menlo-media-group case-desktop-only-media-group">
        <div className="case-menlo-media-heading">
          <h3>Premium Seasonal Magazine / Lookbook</h3>
        </div>
        <figure className="case-menlo-lookbook">
          <button
            className="case-menlo-lookbook-cover"
            data-analytics-asset-title="Premium Seasonal Magazine / Lookbook"
            data-analytics-case-study-slug="menlo-club"
            data-analytics-event="lookbook_open"
            type="button"
            onClick={() => {
              setActivePageIndex(0);
              setIsLookbookOpen(true);
            }}
          >
            <Image
              src={lookbookPages[0].src}
              alt="Premium Seasonal magazine cover"
              width={880}
              height={1100}
              sizes="(max-width: 900px) 82vw, 320px"
            />
          </button>
          <div className="case-menlo-lookbook-actions">
            <button
              className="case-menlo-lookbook-trigger"
              data-analytics-asset-title="Premium Seasonal Magazine / Lookbook"
              data-analytics-case-study-slug="menlo-club"
              data-analytics-event="lookbook_open"
              type="button"
              onClick={() => {
                setActivePageIndex(0);
                setIsLookbookOpen(true);
              }}
            >
              View Lookbook
            </button>
            <a
              className="case-menlo-pdf-link"
              data-analytics-asset-title="Premium Seasonal magazine PDF"
              data-analytics-case-study-slug="menlo-club"
              data-analytics-event="pdf_open"
              href="/case-studies/menlo-club/premium-seasonal-magazine.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open PDF
            </a>
          </div>
          <figcaption>
            Premium Seasonal magazine/lookbook used to preview each collection and support the upgraded subscription
            experience.
          </figcaption>
        </figure>
      </div>

      {supportingAssets.length > 0 && (
        <div className="case-menlo-media-group case-desktop-only-media-group">
          <div className="case-menlo-media-heading">
            <h3>Supporting Launch Assets</h3>
          </div>
          <div className="case-media-grid case-menlo-support-grid">
            {supportingAssets.map((media) => (
              <MediaBlock media={media} key={media.src} />
            ))}
          </div>
        </div>
      )}

      <details className="case-mobile-media case-mobile-drawer case-mobile-media-drawer case-special-mobile-media">
        <summary>More launch assets</summary>
        <div className="case-mobile-media-list">
          <div className="case-menlo-media-group">
            <div className="case-menlo-media-heading">
              <h3>Premium Seasonal Magazine / Lookbook</h3>
            </div>
            <figure className="case-menlo-lookbook">
              <button
                className="case-menlo-lookbook-cover"
                data-analytics-asset-title="Premium Seasonal Magazine / Lookbook"
                data-analytics-case-study-slug="menlo-club"
                data-analytics-event="lookbook_open"
                type="button"
                onClick={() => {
                  setActivePageIndex(0);
                  setIsLookbookOpen(true);
                }}
              >
                <Image
                  src={lookbookPages[0].src}
                  alt="Premium Seasonal magazine cover"
                  width={880}
                  height={1100}
                  sizes="(max-width: 900px) 82vw, 320px"
                />
              </button>
              <div className="case-menlo-lookbook-actions">
                <button
                  className="case-menlo-lookbook-trigger"
                  data-analytics-asset-title="Premium Seasonal Magazine / Lookbook"
                  data-analytics-case-study-slug="menlo-club"
                  data-analytics-event="lookbook_open"
                  type="button"
                  onClick={() => {
                    setActivePageIndex(0);
                    setIsLookbookOpen(true);
                  }}
                >
                  View Lookbook
                </button>
                <a
                  className="case-menlo-pdf-link"
                  data-analytics-asset-title="Premium Seasonal magazine PDF"
                  data-analytics-case-study-slug="menlo-club"
                  data-analytics-event="pdf_open"
                  href="/case-studies/menlo-club/premium-seasonal-magazine.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF
                </a>
              </div>
              <figcaption>
                Premium Seasonal magazine/lookbook used to preview each collection and support the upgraded subscription
                experience.
              </figcaption>
            </figure>
          </div>

          {supportingAssets.length > 0 && (
            <div className="case-menlo-media-group">
              <div className="case-menlo-media-heading">
                <h3>Supporting Launch Assets</h3>
              </div>
              <div className="case-media-grid case-menlo-support-grid">
                {supportingAssets.map((media) => (
                  <MediaBlock media={media} key={`mobile-${media.src}`} />
                ))}
              </div>
            </div>
          )}
        </div>
      </details>

      {isLookbookOpen && (
        <div
          className="case-menlo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Premium Seasonal magazine lookbook viewer"
        >
          <div className="case-menlo-lightbox-panel">
            <div className="case-menlo-lightbox-top">
              <p>
                Premium Seasonal Lookbook <span>{activePage.pageNumber} / {lookbookPages.length}</span>
              </p>
              <button type="button" onClick={() => setIsLookbookOpen(false)}>
                Close
              </button>
            </div>
            <div className="case-menlo-lightbox-stage">
              <button
                className="case-menlo-lightbox-nav"
                type="button"
                onClick={() => setActivePageIndex((current) => Math.max(0, current - 1))}
                disabled={activePageIndex === 0}
              >
                Prev
              </button>
              <Image
                src={activePage.src}
                alt={activePage.alt}
                width={880}
                height={1100}
                sizes="(max-width: 900px) 92vw, 62vw"
                priority
              />
              <button
                className="case-menlo-lightbox-nav"
                type="button"
                onClick={() => setActivePageIndex((current) => Math.min(lookbookPages.length - 1, current + 1))}
                disabled={activePageIndex === lookbookPages.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
