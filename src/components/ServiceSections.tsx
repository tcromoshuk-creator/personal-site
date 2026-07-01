import { services } from "@/lib/content";

export function ServiceSections() {
  return (
    <div className="service-list">
      {services.map((service) => (
        <article className="service-item" key={service.title}>
          <div>
            <h3>{service.title}</h3>
          </div>
          <div className="role-detail">
            <p>
              <strong>Business problem:</strong> {service.problem}
            </p>
            <p>
              <strong>When a company needs it:</strong> {service.when}
            </p>
            <p>
              <strong>What I do:</strong> {service.what}
            </p>
            <p>
              <strong>Relevant proof:</strong> {service.proof}
            </p>
            <div>
              <p>
                <strong>Example deliverables:</strong>
              </p>
              <ul>
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
