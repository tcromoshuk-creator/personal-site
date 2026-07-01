import { companyStrip } from "@/lib/content";

export function CompanyStrip() {
  return (
    <div className="company-roster" aria-label="Companies and teams">
      <span className="roster-label">Selected Companies</span>
      <div className="company-strip">
        {companyStrip.map((company) => (
          <span className="company-mark" key={company.name}>
            <strong>{company.mark}</strong>
            <small>{company.name}</small>
          </span>
        ))}
      </div>
    </div>
  );
}
