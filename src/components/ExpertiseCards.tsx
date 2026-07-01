import { expertiseCards } from "@/lib/content";

export function ExpertiseCards() {
  return (
    <div className="capability-architecture">
      {expertiseCards.map((area, index) => (
        <div className="capability-card" key={area.title}>
          <span className="capability-index">{String(index + 1).padStart(2, "0")}</span>
          <div className="capability-main">
            <h3>{area.title}</h3>
            <p>{area.body}</p>
          </div>
          <ul className="capability-levers">
            {area.levers.map((lever) => (
              <li key={lever}>{lever}</li>
            ))}
          </ul>
          <div className="capability-result">
            <span>Outcome</span>
            <strong>{area.leadsTo}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
