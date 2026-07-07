"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const brandGuidePages = Array.from({ length: 10 }, (_, index) => {
  const pageNumber = index + 1;
  return {
    alt: `Veestro brand guide page ${pageNumber}`,
    pageNumber,
    src: `/case-studies/veestro/brand-guide/page-${String(pageNumber).padStart(2, "0")}.jpg`,
  };
});

export function VeestroMediaShowcase() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);

  useEffect(() => {
    if (!isViewerOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsViewerOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setActivePageIndex((current) => Math.max(0, current - 1));
      }

      if (event.key === "ArrowRight") {
        setActivePageIndex((current) => Math.min(brandGuidePages.length - 1, current + 1));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isViewerOpen]);

  const activePage = brandGuidePages[activePageIndex];

  return (
    <div className="case-veestro-media-showcase">
      <div className="case-veestro-media-group">
        <div className="case-veestro-media-heading">
          <h3>Brand Guide / Rebrand Deck</h3>
        </div>
        <figure className="case-veestro-brand-guide">
          <button
            className="case-veestro-brand-guide-cover"
            type="button"
            onClick={() => {
              setActivePageIndex(0);
              setIsViewerOpen(true);
            }}
          >
            <Image
              src={brandGuidePages[0].src}
              alt="Veestro Brand Style Guide cover"
              width={1920}
              height={1080}
              sizes="(max-width: 900px) 92vw, 760px"
            />
          </button>
          <div className="case-veestro-brand-guide-actions">
            <button
              className="case-veestro-brand-guide-trigger"
              type="button"
              onClick={() => {
                setActivePageIndex(0);
                setIsViewerOpen(true);
              }}
            >
              View Brand Guide
            </button>
            <a className="case-veestro-pdf-link" href="/case-studies/veestro/veestro-rebrand.pdf" target="_blank" rel="noreferrer">
              Open PDF
            </a>
          </div>
          <figcaption>
            Brand guide used to reposition Veestro from vegan-only messaging toward broader plant-based eating.
          </figcaption>
        </figure>
      </div>

      <div className="case-veestro-media-group">
        <div className="case-veestro-media-heading">
          <h3>Influencer / Social Support</h3>
        </div>
        <div className="case-media-grid case-veestro-influencer-grid">
          <figure className="case-media landscape case-veestro-influencer-card">
            <Image
              src="/case-studies/veestro/veestro-lifestyle-box.jpg"
              alt="Veestro influencer content with plant-based meals and packaging"
              width={1600}
              height={1067}
              sizes="(max-width: 900px) 92vw, 560px"
            />
            <figcaption>
              Influencer content helped introduce the refreshed plant-based positioning through product and lifestyle
              storytelling.
            </figcaption>
          </figure>
        </div>
      </div>

      {isViewerOpen && (
        <div
          className="case-veestro-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Veestro brand guide viewer"
        >
          <div className="case-veestro-lightbox-panel">
            <div className="case-veestro-lightbox-top">
              <p>
                Veestro Brand Guide <span>{activePage.pageNumber} / {brandGuidePages.length}</span>
              </p>
              <button type="button" onClick={() => setIsViewerOpen(false)}>
                Close
              </button>
            </div>
            <div className="case-veestro-lightbox-stage">
              <button
                className="case-veestro-lightbox-nav"
                type="button"
                onClick={() => setActivePageIndex((current) => Math.max(0, current - 1))}
                disabled={activePageIndex === 0}
              >
                Prev
              </button>
              <Image
                src={activePage.src}
                alt={activePage.alt}
                width={1920}
                height={1080}
                sizes="(max-width: 900px) 92vw, 82vw"
                priority
              />
              <button
                className="case-veestro-lightbox-nav"
                type="button"
                onClick={() => setActivePageIndex((current) => Math.min(brandGuidePages.length - 1, current + 1))}
                disabled={activePageIndex === brandGuidePages.length - 1}
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
