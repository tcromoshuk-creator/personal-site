import Link from "next/link";

const serviceAreas = [
  {
    id: "growth-strategy",
    title: "Growth Strategy & Revenue Planning",
    shortProblem: "Unclear priorities, weak forecast logic, or budget decisions not tied to business goals.",
    positioning:
      "Diagnose where growth is coming from, where the business is leaking opportunity, and what the next revenue stage should be built around.",
    problem:
      "The business has activity across channels, teams, and agencies, but the revenue plan is not clear enough to guide decisions.",
    fit:
      "Best when leadership needs sharper growth priorities, budget logic, forecasting, or a senior operator who can connect marketing to the broader business.",
    action:
      "I audit the current growth system, identify the real constraints, build a clearer revenue plan, and translate it into operating rhythms teams can follow.",
    deliverables: [
      "Growth audit",
      "90-day plan",
      "Revenue model",
      "Budget logic",
      "Operating roadmap",
      "Executive narrative",
    ],
    proof: [
      { label: "Mad Engine", href: "/case-studies/mad-engine-tiktok-shop" },
      { label: "Netflix.Shop", href: "/case-studies/netflix-shop" },
      { label: "Paxful / Echo Base" },
      { label: "Menlo Club", href: "/case-studies/menlo-club" },
    ],
    navProof: "Mad Engine / Netflix.Shop",
  },
  {
    id: "acquisition-demand",
    title: "Acquisition, Media & Demand Generation",
    shortProblem: "High CAC, unclear MER/ROAS, weak channel mix, or creative learning that is not compounding.",
    positioning:
      "Scale paid, organic, influencer, affiliate, retail media, and creative testing against business economics.",
    problem:
      "Spend is either under-scaled, inefficient, over-reliant on one channel, or not tied cleanly to margin-aware goals.",
    fit:
      "Best when a company needs to improve CAC, ROAS, MER, tACOS, spend allocation, creative testing, or channel diversification.",
    action:
      "I assess spend quality, build test structure, improve creative and audience learning, and connect performance to business economics.",
    deliverables: [
      "Channel audit",
      "Media plan",
      "Testing roadmap",
      "Budget allocation model",
      "Creative learning agenda",
    ],
    proof: [
      { label: "Netflix.Shop", href: "/case-studies/netflix-shop" },
      { label: "Scoops Ahoy", href: "/case-studies/scoops-ahoy" },
      { label: "Veestro", href: "/case-studies/veestro" },
      { label: "Mad Engine", href: "/case-studies/mad-engine-tiktok-shop" },
    ],
    navProof: "Netflix.Shop / Scoops Ahoy",
  },
  {
    id: "lifecycle-retention",
    title: "Lifecycle, CRM & Retention",
    shortProblem: "Acquisition does not compound, CRM is weak, churn is high, or repeat purchase is low.",
    positioning:
      "Improve retention, reactivation, churn, customer value, and lifecycle systems that make acquisition more valuable.",
    problem:
      "The company is acquiring customers but not doing enough to retain, reactivate, increase LTV, or build a better customer relationship.",
    fit:
      "Best when a subscription, marketplace, or DTC business needs better lifecycle flows, win-back programs, churn reduction, or segmentation.",
    action:
      "I map the customer journey, diagnose retention leaks, and build CRM programs that connect customer behavior to revenue.",
    deliverables: [
      "Lifecycle audit",
      "Flow map",
      "Segmentation plan",
      "Win-back strategy",
      "Retention test roadmap",
    ],
    proof: [
      { label: "Menlo Club", href: "/case-studies/menlo-club" },
      { label: "Veestro", href: "/case-studies/veestro" },
    ],
    navProof: "Menlo Club / Veestro",
  },
  {
    id: "cro-testing",
    title: "CRO, Funnel Optimization & Testing",
    shortProblem: "Traffic is expensive, but the site, checkout, offer, landing pages, or PDPs are not converting.",
    positioning:
      "Improve conversion across landing pages, PDPs, checkout, merchandising, and offer flow.",
    problem:
      "Traffic is expensive, but the site, PDPs, checkout, or landing pages are not converting strongly enough.",
    fit:
      "Best when a company needs a practical testing system for landing pages, PDPs, checkout, creative-message match, or merchandising flow.",
    action:
      "I identify the highest-value conversion problems, prioritize tests, and work with product, merchandising, analytics, and creative teams to improve the funnel.",
    deliverables: [
      "Funnel audit",
      "Test backlog",
      "Landing page briefs",
      "PDP recommendations",
      "Measurement plan",
    ],
    proof: [
      { label: "Veestro", href: "/case-studies/veestro" },
      { label: "Netflix.Shop", href: "/case-studies/netflix-shop" },
    ],
    navProof: "Veestro / Netflix.Shop",
  },
  {
    id: "commerce-marketplace",
    title: "Commerce, Marketplace & Channel Growth",
    shortProblem: "Marketplace channels underperform because ownership, catalog quality, PDPs, or channel logic are fragmented.",
    positioning:
      "Improve DTC, marketplace, retail, TikTok Shop, Amazon, Walmart, Target+, catalog, PDP, and channel systems.",
    problem:
      "Marketplace and DTC performance is being limited by fragmented ownership, catalog quality, PDP experience, retail media structure, merchandising, or channel confusion.",
    fit:
      "Best when a business needs better performance across Shopify, Amazon, Walmart, Target+, TikTok Shop, retail media, or channel operations.",
    action:
      "I improve marketplace strategy, catalog/PDP standards, retail media testing, channel ownership, and the cadence around digital commerce performance.",
    deliverables: [
      "Marketplace audit",
      "PDP/catalog QA framework",
      "Channel scorecard",
      "Retail media plan",
      "Merchandising/growth cadence",
    ],
    proof: [
      { label: "Mad Engine / TikTok Shop", href: "/case-studies/mad-engine-tiktok-shop" },
      { label: "Mad Engine marketplace portfolio" },
      { label: "Netflix.Shop", href: "/case-studies/netflix-shop" },
    ],
    navProof: "Mad Engine / TikTok Shop",
  },
  {
    id: "analytics-cadence",
    title: "Analytics, Forecasting & Operating Cadence",
    shortProblem: "Dashboards are messy, pacing is unclear, meetings are reactive, or metrics are not defined.",
    positioning:
      "Make performance easier for leadership to understand, forecast, and act on.",
    problem:
      "Leadership cannot see performance clearly enough to know what is working, what is broken, and what decisions need to be made.",
    fit:
      "Best when a business needs better pacing, forecasting, dashboard requirements, AOP planning, or performance storytelling.",
    action:
      "I build the reporting requirements, meeting rhythm, and performance narrative that help teams move from reactive updates to better decisions.",
    deliverables: [
      "Dashboard requirements",
      "Weekly business review format",
      "Forecast model",
      "Metric definitions",
      "Executive readout template",
    ],
    proof: [
      { label: "Mad Engine", href: "/case-studies/mad-engine-tiktok-shop" },
      { label: "Netflix.Shop", href: "/case-studies/netflix-shop" },
      { label: "Menlo Club", href: "/case-studies/menlo-club" },
      { label: "Paxful / Echo Base" },
    ],
    navProof: "Mad Engine / Menlo Club",
  },
  {
    id: "ai-workflows",
    title: "AI-Enabled Marketing & Growth Systems",
    shortProblem: "AI usage is ad hoc, QA is manual, reporting is slow, and team workflows are inconsistent.",
    positioning:
      "Turn AI from casual usage into practical growth workflows that improve speed, analysis, QA, and execution quality.",
    problem:
      "Teams are using AI casually, but not turning it into repeatable workflows that improve speed, analysis, QA, or execution quality.",
    fit:
      "Best when a company wants practical AI systems for growth work without vague hype or disconnected experiments.",
    action:
      "I design workflows that make teams faster and more consistent across campaign analysis, CRM sequencing, PDP QA, reporting, forecasting, and growth research.",
    deliverables: [
      "AI workflow audit",
      "Prompt/process library",
      "Codex workflow specs",
      "Campaign analysis workflow",
      "Marketplace/PDP QA workflow",
      "CRM sequencing workflow",
    ],
    proof: [
      { label: "Paxful / Echo Base AI workflows" },
      { label: "Codex-enabled site and operating workflows" },
    ],
    navProof: "Paxful / Codex workflows",
  },
];

const systemSteps = ["Diagnose", "Plan", "Build", "Measure", "Scale"];

const proofTiles = [
  {
    company: "Mad Engine / TikTok Shop",
    href: "/case-studies/mad-engine-tiktok-shop",
    metrics: [
      { value: "$120K → $720K", label: "Revenue run-rate" },
      { value: "10K → 90K", label: "SKU expansion" },
      { value: "$17 → $26", label: "AOV increase" },
    ],
  },
  {
    company: "Netflix.Shop",
    href: "/case-studies/netflix-shop",
    metrics: [
      { value: "13M+", label: "Consumers reached" },
      { value: "2.5M", label: "Visitors" },
      { value: "7 figures", label: "Revenue" },
    ],
  },
  {
    company: "Menlo Club",
    href: "/case-studies/menlo-club",
    metrics: [
      { value: "25% → 12%", label: "Churn rate" },
      { value: "+$65", label: "AOV" },
      { value: "+$90", label: "LTV per user" },
    ],
  },
  {
    company: "Veestro",
    href: "/case-studies/veestro",
    metrics: [
      { value: "60%", label: "CAC drop" },
      { value: "15%", label: "Sitewide CVR lift" },
      { value: "6 figures/mo", label: "Winback revenue" },
    ],
  },
];

const engagementModels = [
  {
    title: "Diagnostic Sprint",
    bestFit:
      "Best fit when the problem is unclear and the first job is to identify the real constraint.",
    includes: ["Growth audit", "Priority map", "Decision readout"],
  },
  {
    title: "Strategic Project",
    bestFit:
      "Best fit when there is a defined growth, CRM, CRO, marketplace, reporting, channel, or AI workflow mandate.",
    includes: ["Scoped workstream", "Execution plan", "Operator-ready deliverables"],
  },
  {
    title: "Advisory Retainer",
    bestFit:
      "Best fit when leadership or a growth team needs ongoing senior guidance, decision rhythm, and operating support.",
    includes: ["Senior counsel", "Team support", "Performance cadence"],
  },
  {
    title: "Fractional / Interim Leadership",
    bestFit:
      "Best fit when a company needs temporary senior ownership, transition support, or leadership before or between full-time hires.",
    includes: ["Function ownership", "Cross-functional cadence", "Hiring support"],
  },
];

export function ServiceNavigator() {
  return (
    <div className="service-nav-grid" aria-label="Service areas">
      {serviceAreas.map((service, index) => (
        <a className="service-nav-card card" href={`#${service.id}`} key={service.id}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{service.title}</strong>
          <p>{service.shortProblem}</p>
          <em>{service.navProof}</em>
        </a>
      ))}
    </div>
  );
}

export function GrowthSystemMap() {
  return (
    <div className="growth-system-map" aria-label="Growth operating pattern">
      {systemSteps.map((step, index) => (
        <div className="growth-system-step" key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}

export function ServiceSections() {
  return (
    <div className="service-area-grid">
      {serviceAreas.map((service) => (
        <article className="service-area-card card" id={service.id} key={service.id}>
          <div className="service-area-heading">
            <p className="case-card-meta">Service area</p>
            <h3>{service.title}</h3>
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
          <div className="service-chip-group" aria-label={`${service.title} deliverables`}>
            {service.deliverables.map((deliverable) => (
              <span className="mini-chip" key={deliverable}>
                {deliverable}
              </span>
            ))}
          </div>
          <div className="service-proof-row">
            {service.proof.map((proof) =>
              proof.href ? (
                <Link href={proof.href} key={proof.label}>
                  {proof.label}
                </Link>
              ) : (
                <span key={proof.label}>{proof.label}</span>
              ),
            )}
          </div>
          <Link className="service-card-cta" href="/contact">
            Discuss this service →
          </Link>
        </article>
      ))}
    </div>
  );
}

export function ServiceProofTiles() {
  return (
    <div className="service-proof-grid">
      {proofTiles.map((tile) => (
        <Link className="service-proof-tile card" href={tile.href} key={tile.company}>
          <h3>{tile.company}</h3>
          <div className="service-proof-metrics">
            {tile.metrics.map((metric) => (
              <div key={`${tile.company}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <span>View case study →</span>
        </Link>
      ))}
    </div>
  );
}

export function EngagementModels() {
  return (
    <div className="engagement-model-grid">
      {engagementModels.map((model) => (
        <article className="engagement-model-card card" key={model.title}>
          <h3>{model.title}</h3>
          <p>{model.bestFit}</p>
          <div className="service-chip-group">
            {model.includes.map((item) => (
              <span className="mini-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
      <div className="engagement-model-cta card">
        <p className="case-card-meta">Next step</p>
        <h3>Not sure which model fits?</h3>
        <p>Start with the business problem. The engagement shape can follow once the scope is clear.</p>
        <Link className="button primary" href="/contact">
          Start a Conversation
        </Link>
      </div>
    </div>
  );
}
