export type AnalyticsEventName =
  | "generate_lead"
  | "email_click"
  | "linkedin_click"
  | "case_study_click"
  | "service_discuss_click"
  | "view_experience_click"
  | "view_case_studies_click"
  | "video_click"
  | "pdf_open"
  | "lookbook_open"
  | "external_link_click"
  | "virtual_page_view";

type AnalyticsValue = string | number | boolean | null | undefined;
export type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function getSafePagePath() {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

export function getSafePageLocation(pathname = getSafePagePath()) {
  if (typeof window === "undefined") return pathname;
  return `${window.location.origin}${pathname}`;
}

export function getLinkDomain(href?: string | null) {
  if (!href || typeof window === "undefined") return "";

  try {
    return new URL(href, window.location.origin).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !window.dataLayer) return;

  const safeParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  );

  window.dataLayer.push({
    event: eventName,
    ...safeParams,
  });
}
