import { operatingSystemSteps } from "@/lib/content";

export function GrowthOperatingSystemMap() {
  const systemRows = [
    ["Commerce", "Shopify, Amazon, Walmart, Target+, TikTok Shop"],
    ["Acquisition", "Paid media, retail media, channel mix"],
    ["Lifecycle", "CRM, retention, churn, customer value"],
    ["Analytics", "Forecasting, MER, ROAS, executive reporting"],
    ["AI / Reporting", "Codex workflows, dashboards, operating cadence"],
  ];

  return (
    <aside className="commerce-os" aria-label="Executive commerce operating system">
      <div className="commerce-os-header">
        <span>Executive Summary</span>
      </div>
      <div className="commerce-kpis" aria-label="Executive scope metrics">
        <div>
          <span>Revenue contribution</span>
          <strong>$300M+</strong>
        </div>
        <div>
          <span>Budgets managed</span>
          <strong>$90M+</strong>
        </div>
        <div>
          <span>Portfolio scope</span>
          <strong>$120M+</strong>
        </div>
      </div>
      <div className="commerce-system">
        {systemRows.map(([label, detail]) => (
          <div className="commerce-system-row" key={label}>
            <span>{label}</span>
            <small>{detail}</small>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function GrowthOperatingSystem() {
  return (
    <div className="operating-framework" aria-label="Input to operating cadence framework">
      <div className="framework-context framework-input">
        <span>Input</span>
        <strong>Revenue constraint</strong>
      </div>
      <div className="operating-grid">
        {operatingSystemSteps.map((step) => (
          <div className="operating-card" key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
      <div className="framework-context framework-output">
        <span>Output</span>
        <strong>Operating cadence</strong>
      </div>
    </div>
  );
}
