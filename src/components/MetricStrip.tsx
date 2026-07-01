import { proofMetrics } from "@/lib/content";

type Metric = {
  value: string;
  label: string;
  support?: string;
};

export function MetricStrip({
  metrics = proofMetrics,
  columns = "four",
}: {
  metrics?: Metric[];
  columns?: "four" | "five";
}) {
  return (
    <div className={`grid ${columns === "five" ? "five-col" : "four-col"}`}>
      {metrics.map((metric) => (
        <div className="metric-card card" key={metric.value}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          {metric.support && <p>{metric.support}</p>}
        </div>
      ))}
    </div>
  );
}
