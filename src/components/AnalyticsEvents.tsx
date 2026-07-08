"use client";

import { usePathname } from "next/navigation";
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

export function AnalyticsEvents() {
  const pathname = usePathname();
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
    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const analyticsElement = target?.closest<HTMLElement>("[data-analytics-event]");
      if (!analyticsElement) return;

      const eventNames = toAnalyticsEventNames(analyticsElement.dataset.analyticsEvent);
      eventNames.forEach((eventName) => {
        trackEvent(eventName, buildParams(analyticsElement, eventName));
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
