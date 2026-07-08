"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  type AnalyticsEventName,
  getLinkDomain,
  getSafePageLocation,
  getSafePagePath,
  trackEvent,
} from "@/lib/analytics";

const analyticsEventNames = new Set<AnalyticsEventName>([
  "generate_lead",
  "email_click",
  "linkedin_click",
  "case_study_click",
  "service_discuss_click",
  "view_experience_click",
  "view_case_studies_click",
  "video_click",
  "pdf_open",
  "lookbook_open",
  "external_link_click",
  "virtual_page_view",
]);

function toAnalyticsEventNames(value: string | undefined) {
  if (!value) return [];

  return value
    .split(/[,\s]+/)
    .map((eventName) => eventName.trim())
    .filter((eventName): eventName is AnalyticsEventName =>
      analyticsEventNames.has(eventName as AnalyticsEventName),
    );
}

function datasetValue(element: HTMLElement, key: keyof DOMStringMap) {
  const value = element.dataset[key];
  return value && value.trim() ? value.trim() : undefined;
}

function buildParams(element: HTMLElement, eventName: AnalyticsEventName) {
  const params: Record<string, string> = {
    page_path: getSafePagePath(),
  };

  const safeParams: Array<[keyof DOMStringMap, string]> = [
    ["analyticsLeadSource", "lead_source"],
    ["analyticsReasonType", "reason_type"],
    ["analyticsLinkLocation", "link_location"],
    ["analyticsCaseStudySlug", "case_study_slug"],
    ["analyticsCaseStudyTitle", "case_study_title"],
    ["analyticsServiceArea", "service_area"],
    ["analyticsVideoTitle", "video_title"],
    ["analyticsAssetTitle", "asset_title"],
  ];

  safeParams.forEach(([datasetKey, paramKey]) => {
    const value = datasetValue(element, datasetKey);
    if (value) params[paramKey] = value;
  });

  if (eventName === "external_link_click") {
    const link = element instanceof HTMLAnchorElement ? element : element.closest("a");
    const domain = getLinkDomain(link?.getAttribute("href"));
    if (domain) params.link_domain = domain;
  }

  return params;
}

function shouldDelayNavigation(eventNames: AnalyticsEventName[]) {
  return eventNames.some((eventName) =>
    ["email_click", "service_discuss_click", "view_case_studies_click", "video_click"].includes(eventName),
  );
}

function isPlainPrimaryClick(event: MouseEvent) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

export function AnalyticsEvents() {
  const pathname = usePathname();
  const router = useRouter();
  const hasLoadedInitialPage = useRef(false);

  useEffect(() => {
    if (!pathname) return;

    if (!hasLoadedInitialPage.current) {
      hasLoadedInitialPage.current = true;
      return;
    }

    trackEvent("virtual_page_view", {
      page_path: pathname,
      page_title: document.title,
      page_location: getSafePageLocation(pathname),
    });
  }, [pathname]);

  useEffect(() => {
    function navigateAfterTracking(link: HTMLAnchorElement) {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      const target = link.getAttribute("target");
      const url = new URL(href, window.location.href);
      const isInternal = url.origin === window.location.origin && !href.startsWith("mailto:");
      const destination = isInternal ? `${url.pathname}${url.search}${url.hash}` : href;

      window.setTimeout(() => {
        if (target === "_blank") {
          window.open(destination, "_blank", "noopener,noreferrer");
          return;
        }

        if (isInternal) {
          router.push(destination);
          return;
        }

        window.location.href = destination;
      }, 150);
    }

    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const analyticsElement = target?.closest<HTMLElement>("[data-analytics-event]");
      if (!analyticsElement) return;

      const eventNames = toAnalyticsEventNames(analyticsElement.dataset.analyticsEvent);
      const link = analyticsElement instanceof HTMLAnchorElement ? analyticsElement : analyticsElement.closest("a");

      eventNames.forEach((eventName) => {
        trackEvent(eventName, buildParams(analyticsElement, eventName));
      });

      if (link && !link.getAttribute("target") && isPlainPrimaryClick(event) && shouldDelayNavigation(eventNames)) {
        event.preventDefault();
        event.stopPropagation();
        navigateAfterTracking(link);
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
