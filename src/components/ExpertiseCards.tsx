import { expertiseCards } from "@/lib/content";

type ExpertiseCard = (typeof expertiseCards)[number];

export function ExpertiseCards({ items = expertiseCards }: { items?: ExpertiseCard[] }) {
  return (
    <>
      <div className="capability-architecture">
        {items.map((area, index) => (
          <div className="capability-card" key={area.title}>
            <span className="capability-index">{String(index + 1).padStart(2, "0")}</span>
            <div className="capability-main">
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="capability-mobile-accordion" aria-label="Growth functions">
        {items.map((area, index) => (
          <details className="capability-drawer" key={area.title}>
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{area.title}</strong>
            </summary>
            <p>{area.body}</p>
          </details>
        ))}
      </div>
    </>
  );
}
