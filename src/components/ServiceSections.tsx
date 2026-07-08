"use client";

import Link from "next/link";
import { useState } from "react";

const problemCards = [
  {
    id: "problem-growth-priorities",
    href: "#growth-strategy",
    title: "Growth priorities are unclear",
    problem:
      "The team is active across channels, agencies, and ideas, but the revenue plan is not clear enough to guide decisions.",
    help:
      "I diagnose where growth is actually coming from, identify the biggest constraints, and turn that into a sharper 90-day plan, budget logic, and operating rhythm.",
  },
  {
    id: "problem-acquisition",
    href: "#acquisition-demand",
    title: "Acquisition is inefficient or over-reliant",
    problem:
      "CAC is high, channel mix is unclear, creative learning is not compounding, or spend is not tied cleanly to business economics.",
    help:
      "I assess spend quality, channel roles, creative testing, and media economics, then build a plan for more accountable acquisition.",
  },
  {
    id: "problem-retention",
    href: "#lifecycle-retention",
    title: "Retention is not compounding",
    problem:
      "The business is acquiring customers but not doing enough to keep, reactivate, increase value, or build stronger customer relationships.",
    help:
      "I map the customer journey, identify lifecycle leaks, and build CRM, segmentation, win-back, churn, and retention systems that make acquisition more valuable.",
  },
  {
    id: "problem-conversion",
    href: "#cro-testing",
    title: "Traffic is not converting",
    problem:
      "Paid and organic traffic is expensive, but landing pages, PDPs, checkout, merchandising, or offers are not converting strongly enough.",
    help:
      "I identify the highest-value conversion problems, prioritize tests, and work with product, creative, analytics, and merchandising teams to improve the funnel.",
  },
  {
    id: "problem-channels",
    href: "#commerce-marketplace",
    title: "Channels are underperforming",
    problem:
      "Marketplace, retail, DTC, affiliate, influencer, or social commerce channels are underperforming because ownership, catalog quality, PDPs, or channel logic are fragmented.",
    help:
      "I help define channel roles, improve the operating system around the channel, and build the scorecards, workflows, and execution cadence needed to scale.",
  },
  {
    id: "problem-reporting",
    href: "#analytics-cadence",
    title: "Reporting does not drive decisions",
    problem:
      "Dashboards are messy, pacing is unclear, meetings are reactive, or metrics are not defined.",
    help:
      "I define what success looks like, clarify the reporting stack, and help build dashboards, pacing views, and operating reviews that give leadership a clearer picture of the business.",
  },
  {
    id: "problem-ai",
    href: "#ai-workflows",
    title: "AI is being used casually, not operationally",
    problem:
      "Teams are experimenting with AI, but workflows remain inconsistent, QA is manual, and reporting, research, or execution still take too long.",
    help:
      "I turn AI usage into practical workflows for analysis, QA, CRM sequencing, PDP/catalog review, reporting, and research.",
  },
  {
    id: "problem-launches",
    href: "#acquisition-demand",
    title: "Launches need stronger commercial execution",
    problem:
      "A new product, channel, campaign, or business model is launching, but the growth plan, owner map, channel mix, and measurement plan are not clear.",
    help:
      "I help translate the launch into a commercial operating plan across acquisition, lifecycle, creative, reporting, and cross-functional execution.",
  },
  {
    id: "problem-leadership",
    href: "#engagement-models",
    title: "Teams need senior growth leadership",
    problem:
      "The company needs experienced growth judgment before a full-time hire, between leaders, or around a defined strategic mandate.",
    help:
      "I can step in as an advisor, fractional operator, interim leader, or project lead to bring structure, prioritization, and senior decision-making to the work.",
  },
];

const serviceAreas = [
  {
    id: "growth-strategy",
    title: "Growth Strategy & Revenue Planning",
    positioning:
      "Diagnose where growth is coming from, where the business is leaking opportunity, and what the next revenue stage should be built around.",
    problem:
      "The business has activity across channels, teams, and agencies, but the revenue plan is not clear enough to guide decisions.",
    fit:
      "Best when leadership needs sharper growth priorities, budget logic, forecasting, or a senior operator who can connect marketing to the broader business.",
    action:
      "I audit the current growth system, identify the real constraints, build a clearer revenue plan, and translate it into operating rhythms teams can follow.",
    outputs: [
      "Growth audit",
      "90-day plan",
      "Revenue model",
      "Budget logic",
      "Operating roadmap",
      "Executive narrative",
    ],
  },
  {
    id: "acquisition-demand",
    title: "Acquisition, Media & Demand Generation",
    positioning:
      "Scale paid, organic, influencer, affiliate, retail media, and creative testing against business economics.",
    problem:
      "Spend is either under-scaled, inefficient, over-reliant on one channel, or not tied cleanly to margin-aware goals.",
    fit:
      "Best when a company needs to improve CAC, ROAS, MER, tACOS, spend allocation, creative testing, or channel diversification.",
    action:
      "I assess spend quality, build test structure, improve creative and audience learning, and connect performance to business economics.",
    outputs: [
      "Channel audit",
      "Media plan",
      "Testing roadmap",
      "Budget allocation model",
      "Creative learning agenda",
    ],
  },
  {
    id: "lifecycle-retention",
    title: "Lifecycle, CRM & Retention",
    positioning:
      "Improve retention, reactivation, churn, customer value, and lifecycle systems that make acquisition more valuable.",
    problem:
      "The company is acquiring customers but not doing enough to retain, reactivate, increase LTV, or build a better customer relationship.",
    fit:
      "Best when a subscription, marketplace, or DTC business needs better lifecycle flows, win-back programs, churn reduction, or segmentation.",
    action:
      "I map the customer journey, diagnose retention leaks, and build CRM programs that connect customer behavior to revenue.",
    outputs: [
      "Lifecycle audit",
      "Flow map",
      "Segmentation plan",
      "Win-back strategy",
      "Retention test roadmap",
    ],
  },
  {
    id: "cro-testing",
    title: "CRO, Funnel Optimization & Testing",
    positioning:
      "Improve conversion across landing pages, PDPs, checkout, merchandising, and offer flow.",
    problem:
      "Traffic is expensive, but the site, PDPs, checkout, or landing pages are not converting strongly enough.",
    fit:
      "Best when a company needs a practical testing system for landing pages, PDPs, checkout, creative-message match, or merchandising flow.",
    action:
      "I identify the highest-value conversion problems, prioritize tests, and work with product, merchandising, analytics, and creative teams to improve the funnel.",
    outputs: [
      "Funnel audit",
      "Test backlog",
      "Landing page briefs",
      "PDP recommendations",
      "Measurement plan",
    ],
  },
  {
    id: "commerce-marketplace",
    title: "Commerce, Marketplace & Channel Growth",
    positioning:
      "Improve DTC, marketplace, retail, TikTok Shop, Amazon, Walmart, Target+, catalog, PDP, and channel systems.",
    problem:
      "Marketplace and DTC performance is being limited by fragmented ownership, catalog quality, PDP experience, retail media structure, merchandising, or channel confusion.",
    fit:
      "Best when a business needs better performance across Shopify, Amazon, Walmart, Target+, TikTok Shop, retail media, or channel operations.",
    action:
      "I improve marketplace strategy, catalog/PDP standards, retail media testing, channel ownership, and the cadence around digital commerce performance.",
    outputs: [
      "Marketplace audit",
      "PDP/catalog QA framework",
      "Channel scorecard",
      "Retail media plan",
      "Merchandising/growth cadence",
    ],
  },
  {
    id: "analytics-cadence",
    title: "Analytics, Forecasting & Operating Cadence",
    positioning:
      "Make performance easier for leadership to understand, forecast, and act on.",
    problem:
      "Leadership cannot see performance clearly enough to know what is working, what is broken, and what decisions need to be made.",
    fit:
      "Best when a business needs better pacing, forecasting, dashboard requirements, AOP planning, or performance storytelling.",
    action:
      "I build the reporting requirements, meeting rhythm, and performance narrative that help teams move from reactive updates to better decisions.",
    outputs: [
      "Dashboard requirements",
      "Weekly business review format",
      "Forecast model",
      "Metric definitions",
      "Executive readout template",
    ],
  },
  {
    id: "ai-workflows",
    title: "AI-Enabled Marketing & Growth Systems",
    positioning:
      "Turn AI from casual usage into practical growth workflows that improve speed, analysis, QA, and execution quality.",
    problem:
      "Teams are using AI casually, but not turning it into repeatable workflows that improve speed, analysis, QA, or execution quality.",
    fit:
      "Best when a company wants practical AI systems for growth work without vague hype or disconnected experiments.",
    action:
      "I design workflows that make teams faster and more consistent across campaign analysis, CRM sequencing, PDP QA, reporting, forecasting, and growth research.",
    outputs: [
      "AI workflow audit",
      "Prompt/process library",
      "Codex workflow specs",
      "Campaign analysis workflow",
      "Marketplace/PDP QA workflow",
      "CRM sequencing workflow",
    ],
  },
];

const proofTiles = [
  {
    company: "Mad Engine Global",
    href: "/case-studies/mad-engine-tiktok-shop",
    slug: "mad-engine-tiktok-shop",
    metrics: [
      { value: "$120K → $720K", label: "Revenue run-rate" },
      { value: "10K → 90K", label: "SKU expansion" },
      { value: "$17 → $26", label: "AOV increase" },
    ],
    problems: [
      { label: "Commerce, Marketplace & Channel Growth", href: "#commerce-marketplace" },
      { label: "Acquisition, Media & Demand Generation", href: "#acquisition-demand" },
      { label: "Analytics, Forecasting & Operating Cadence", href: "#analytics-cadence" },
    ],
  },
  {
    company: "Netflix.Shop",
    href: "/case-studies/netflix-shop",
    slug: "netflix-shop",
    metrics: [
      { value: "13M+", label: "Consumers reached" },
      { value: "2.5M", label: "Visitors" },
      { value: "7 figures", label: "Revenue" },
    ],
    problems: [
      { label: "Acquisition, Media & Demand Generation", href: "#acquisition-demand" },
      { label: "Growth Strategy & Revenue Planning", href: "#growth-strategy" },
      { label: "CRO, Funnel Optimization & Testing", href: "#cro-testing" },
    ],
  },
  {
    company: "Menlo Club",
    href: "/case-studies/menlo-club",
    slug: "menlo-club",
    metrics: [
      { value: "25% → 12%", label: "Churn rate" },
      { value: "+$65", label: "AOV" },
      { value: "+$90", label: "LTV per user" },
    ],
    problems: [
      { label: "Lifecycle, CRM & Retention", href: "#lifecycle-retention" },
      { label: "Growth Strategy & Revenue Planning", href: "#growth-strategy" },
      { label: "Commerce, Marketplace & Channel Growth", href: "#commerce-marketplace" },
    ],
  },
  {
    company: "Veestro",
    href: "/case-studies/veestro",
    slug: "veestro",
    metrics: [
      { value: "60%", label: "CAC drop" },
      { value: "15%", label: "Sitewide CVR lift" },
      { value: "6 figures/mo", label: "Winback revenue" },
    ],
    problems: [
      { label: "CRO, Funnel Optimization & Testing", href: "#cro-testing" },
      { label: "Lifecycle, CRM & Retention", href: "#lifecycle-retention" },
      { label: "Acquisition, Media & Demand Generation", href: "#acquisition-demand" },
    ],
  },
];

const engagementModels = [
  {
    title: "Diagnostic Sprint",
    bestFit:
      "Best fit when the problem is unclear and the first job is to identify the real constraint.",
  },
  {
    title: "Strategic Project",
    bestFit:
      "Best fit when there is a defined growth, CRM, CRO, marketplace, reporting, channel, or AI workflow mandate.",
  },
  {
    title: "Advisory Retainer",
    bestFit:
      "Best fit when leadership or a growth team needs ongoing senior guidance, decision rhythm, and operating support.",
  },
  {
    title: "Fractional / Interim Leadership",
    bestFit:
      "Best fit when a company needs temporary senior ownership, transition support, or leadership before or between full-time hires.",
  },
];

export function ServiceNavigator() {
  return (
    <>
      <div className="service-nav-grid" aria-label="Business problems">
        {problemCards.map((card, index) => (
          <a className="service-nav-card card" href={card.href} id={card.id} key={card.id}>
            <div className="service-nav-heading">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{card.title}</strong>
            </div>
            <div className="service-nav-copy">
              <p>
                <b>Problem:</b> {card.problem}
              </p>
              <p>
                <b>How I help:</b> {card.help}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="service-problem-accordion" aria-label="Business problems">
        {problemCards.map((card, index) => (
          <details className="service-problem-item card" key={card.id}>
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{card.title}</strong>
            </summary>
            <div className="service-nav-copy">
              <p>
                <b>Problem:</b> {card.problem}
              </p>
              <p>
                <b>How I help:</b> {card.help}
              </p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

export function ServiceSections() {
  const [activeServiceId, setActiveServiceId] = useState(serviceAreas[0].id);

  return (
    <div className="service-explorer">
      <div className="service-explorer-desktop">
        <div className="service-tab-list" aria-label="Core service areas" role="tablist">
          {serviceAreas.map((service, index) => (
            <button
              aria-controls={`${service.id}-panel`}
              aria-selected={service.id === activeServiceId}
              className="service-tab-button"
              id={service.id}
              key={service.id}
              onClick={() => setActiveServiceId(service.id)}
              role="tab"
              type="button"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service.title}</strong>
            </button>
          ))}
        </div>
        <div className="service-panel-stack">
          {serviceAreas.map((service) => (
            <article
              aria-labelledby={service.id}
              className="service-panel card"
              hidden={service.id !== activeServiceId}
              id={`${service.id}-panel`}
              key={service.id}
              role="tabpanel"
            >
              <ServiceDetail service={service} />
            </article>
          ))}
        </div>
      </div>

      <div className="service-mobile-accordion">
        {serviceAreas.map((service, index) => (
          <details className="service-accordion-item card" key={service.id} open={index === 0}>
            <summary>{service.title}</summary>
            <ServiceDetail hideTitle service={service} />
          </details>
        ))}
      </div>
    </div>
  );
}

function ServiceDetail({
  hideTitle = false,
  service,
}: {
  hideTitle?: boolean;
  service: (typeof serviceAreas)[number];
}) {
  return (
    <>
      <div className="service-area-heading">
        {!hideTitle && <h3>{service.title}</h3>}
        <p>{service.positioning}</p>
      </div>
      <div className="service-area-details">
        <div>
          <span>Business problem</span>
          <p>{service.problem}</p>
        </div>
        <div>
          <span>When it fits</span>
          <p>{service.fit}</p>
        </div>
        <div>
          <span>What I do</span>
          <p>{service.action}</p>
        </div>
      </div>
      <div className="service-output-block">
        <span>Typical outputs</span>
        <ul className="service-output-list">
          {service.outputs.map((output) => (
            <li key={output}>{output}</li>
          ))}
        </ul>
      </div>
      <Link
        className="service-card-cta"
        data-analytics-event="service_discuss_click"
        data-analytics-service-area={service.title}
        href="/contact"
      >
        Discuss this service →
      </Link>
    </>
  );
}

export function ServiceProofTiles() {
  return (
    <div className="service-proof-grid">
      {proofTiles.map((tile) => (
        <article className="service-proof-tile card" key={tile.company}>
          <div className="service-proof-company">
            <span>Company</span>
            <h3>{tile.company}</h3>
          </div>
          <div className="service-proof-metrics">
            {tile.metrics.map((metric) => (
              <div key={`${tile.company}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="service-proof-problems">
            <span>Service Areas</span>
            <ul>
              {tile.problems.map((problem) => (
                <li key={`${tile.company}-${problem.label}`}>
                  <a href={problem.href}>{problem.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <Link
            className="service-proof-cta"
            data-analytics-case-study-slug={tile.slug}
            data-analytics-case-study-title={tile.company}
            data-analytics-event="case_study_click"
            data-analytics-link-location="services_proof_tile"
            href={tile.href}
          >
            View case study →
          </Link>
        </article>
      ))}
    </div>
  );
}

export function EngagementModels() {
  return (
    <div className="engagement-model-grid" id="engagement-models">
      {engagementModels.map((model) => (
        <article className="engagement-model-card card" key={model.title}>
          <h3>{model.title}</h3>
          <p>{model.bestFit}</p>
        </article>
      ))}
      <div className="engagement-model-cta card">
        <p className="case-card-meta">Next step</p>
        <h3>Not sure which model fits your problem?</h3>
        <p>No problem, reach out for a free advisory call and we can figure out what path makes sense for you.</p>
        <Link className="button primary" href="/contact">
          Start a Conversation
        </Link>
      </div>
    </div>
  );
}
