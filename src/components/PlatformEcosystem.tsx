import { platformEcosystem } from "@/lib/content";

export function PlatformEcosystem() {
  return (
    <div className="platform-matrix-layout">
      <div className="platform-system-panel" aria-label="Commerce operating system">
        <span>Operating environment</span>
        <strong>Systems connected around revenue, margin, retention, reporting, and cadence.</strong>
        <div className="platform-outcome-map" aria-hidden="true">
          <div className="platform-outcome-core">
            <span>Revenue</span>
          </div>
          <span className="platform-node margin">Margin</span>
          <span className="platform-node retention">Retention</span>
          <span className="platform-node reporting">Reporting</span>
          <span className="platform-node cadence">Cadence</span>
        </div>
        <p>
          The tools matter because they make the operating rhythm visible: where demand is coming
          from, what it costs, what customers do next, and what leadership should adjust.
        </p>
      </div>
      <div className="platform-grid">
        {platformEcosystem.map((group) => (
          <div className="card platform-card" key={group.group}>
            <h3>{group.group}</h3>
            <ul className="platform-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
