import { platformEcosystem } from "@/lib/content";

export function PlatformEcosystem() {
  return (
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
  );
}
