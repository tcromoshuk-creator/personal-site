type GrowthPillar =
  | "Acquisition"
  | "Activation"
  | "Engagement"
  | "Retention"
  | "Monetization"
  | "Operations";

type GrowthComparisonRow = {
  pillar: GrowthPillar;
  common: string;
  connected: string;
};

const comparisonRows = [
  {
    pillar: "Acquisition",
    common: "Paid media and CAC",
    connected:
      "Paid, organic, partnerships, marketplaces, and brand working as one demand engine",
  },
  {
    pillar: "Activation",
    common: "Landing pages and conversion",
    connected:
      "Turn intent into a first purchase, first action, or clear moment of value",
  },
  {
    pillar: "Engagement",
    common: "Campaigns, promotions, and content",
    connected:
      "Connect lifecycle, merchandising, and product experiences that drive return visits",
  },
  {
    pillar: "Retention",
    common: "Email, SMS, and subscriptions",
    connected:
      "Drive repeat purchase, loyalty, reactivation, reduced churn, and lifetime value",
  },
  {
    pillar: "Monetization",
    common: "Topline revenue",
    connected:
      "Improve AOV, pricing, margin, frequency, channel mix, and unit economics",
  },
  {
    pillar: "Operations",
    common: "Separate teams and metrics",
    connected:
      "Unify strategy, ownership, analytics, forecasting, testing, and reporting",
  },
] satisfies readonly GrowthComparisonRow[];

function CheckMarker() {
  return <span className="growth-comparison-check" aria-hidden="true" />;
}

function PillarIcon({ pillar }: { pillar: GrowthPillar }) {
  const sharedProps = {
    "aria-hidden": true,
    className: "growth-comparison-icon",
    fill: "none",
    focusable: "false" as const,
    viewBox: "0 0 24 24",
  };

  switch (pillar) {
    case "Acquisition":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      );
    case "Activation":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="7.5" r="3.25" />
          <path d="M5.5 20c.45-4.1 2.8-6.15 6.5-6.15S18.05 15.9 18.5 20" />
        </svg>
      );
    case "Engagement":
      return (
        <svg {...sharedProps}>
          <path d="M4 5.5h16v10H10l-5 3v-3H4z" />
        </svg>
      );
    case "Retention":
      return (
        <svg {...sharedProps}>
          <path d="M19.4 8.5A8 8 0 0 0 6.2 5.2L4 7.4" />
          <path d="M4 3.8v3.6h3.6M4.6 15.5a8 8 0 0 0 13.2 3.3l2.2-2.2" />
          <path d="M20 20.2v-3.6h-3.6" />
        </svg>
      );
    case "Monetization":
      return (
        <svg {...sharedProps}>
          <path d="M4 20v-5h4v5M10 20V9h4v11M16 20V4h4v16M2 20h20" />
        </svg>
      );
    case "Operations":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="m9.4 3.7.65-1.2h3.9l.65 1.2 1.75.75 1.3-.4 2.75 2.75-.4 1.3.75 1.75 1.2.65v3.9l-1.2.65-.75 1.75.4 1.3-2.75 2.75-1.3-.4-1.75.75-.65 1.2h-3.9l-.65-1.2-1.75-.75-1.3.4-2.75-2.75.4-1.3-.75-1.75-1.2-.65v-3.9l1.2-.65.75-1.75-.4-1.3 2.75-2.75 1.3.4z" />
        </svg>
      );
  }
}

export function GrowthSystemComparison() {
  return (
    <div className="growth-comparison">
      <div className="growth-comparison-desktop-frame">
        <table className="growth-comparison-desktop">
          <caption className="sr-only">
            Comparison of a common growth scope with an integrated growth leadership system
          </caption>
          <colgroup>
            <col className="growth-comparison-pillar-column" />
            <col className="growth-comparison-common-column" />
            <col className="growth-comparison-connected-column" />
          </colgroup>
          <thead>
            <tr>
              <th className="growth-comparison-scope-heading" colSpan={2} scope="colgroup">
                How Growth Is Often Scoped
              </th>
              <th className="growth-comparison-connected" scope="col">
                <span className="growth-comparison-connected-kicker">Connected system</span>
                <span>How I Build Growth</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.pillar}>
                <th scope="row">
                  <PillarIcon pillar={row.pillar} />
                  <span className="growth-comparison-pillar-name">{row.pillar}</span>
                </th>
                <td className="growth-comparison-common">{row.common}</td>
                <td className="growth-comparison-connected">
                  <div className="growth-comparison-connected-copy">
                    <CheckMarker />
                    <span>{row.connected}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="growth-comparison-neutral-outcome" colSpan={2} scope="row">
                Outcome: Local optimization
              </th>
              <td className="growth-comparison-connected">
                Outcome: A compounding growth engine
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <ul className="growth-comparison-pillar-line" aria-label="Connected growth pillars">
        {comparisonRows.map((row) => (
          <li key={row.pillar}>{row.pillar}</li>
        ))}
      </ul>

      <div className="growth-comparison-mobile">
        <ol className="growth-comparison-pillar-grid" aria-label="Six connected growth pillars">
          {comparisonRows.map((row, index) => (
            <li key={row.pillar}>
              <span className="growth-comparison-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{row.pillar}</span>
            </li>
          ))}
        </ol>

        <div className="growth-comparison-summary-panel">
          <span className="growth-comparison-summary-label">Connected Growth</span>
          <p className="growth-comparison-summary-statement">
            Many growth roles optimize individual pieces. I connect the full customer journey.
          </p>
          <p className="growth-comparison-summary-outcome">
            <CheckMarker />
            <span>A compounding growth engine</span>
          </p>
        </div>

        <details className="growth-comparison-details">
          <summary>See the full comparison</summary>
          <div className="growth-comparison-details-list">
            {comparisonRows.map((row) => (
              <div className="growth-comparison-detail-row" key={row.pillar}>
                <h3>{row.pillar}</h3>
                <p>
                  <span>Often Scoped As</span>
                  {row.common}
                </p>
                <p>
                  <span>How I Lead It</span>
                  {row.connected}
                </p>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
