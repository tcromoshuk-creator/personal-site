import { operatingSystemSteps } from "@/lib/content";

export function GrowthOperatingSystem() {
  return (
    <div className="operating-grid">
      {operatingSystemSteps.map((step, index) => (
        <div className="operating-card" key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </div>
      ))}
    </div>
  );
}
