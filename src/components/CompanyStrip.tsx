import Image from "next/image";
import { companyStrip } from "@/lib/content";

function CompanyMark({
  company,
}: {
  company: (typeof companyStrip)[number];
}) {
  const logoTone = "logoTone" in company ? company.logoTone : "";

  return (
    <span className={`company-mark${logoTone ? ` ${logoTone}` : ""}`}>
      {company.logo ? (
        <Image
          src={company.logo}
          alt={company.name}
          width={180}
          height={72}
          sizes="180px"
        />
      ) : (
        <strong>{company.mark}</strong>
      )}
    </span>
  );
}

export function CompanyStrip() {
  const marqueeCompanies = [...companyStrip, ...companyStrip];

  return (
    <div className="company-roster" aria-label="Companies and teams">
      <span className="roster-label">Selected Company Experience</span>
      <div className="company-marquee-viewport" aria-hidden="true">
        <div className="company-marquee-track">
          {marqueeCompanies.map((company, index) => (
            <CompanyMark company={company} key={`${company.name}-${index}`} />
          ))}
        </div>
      </div>
      <div className="sr-only">
        {companyStrip.map((company) => company.name).join(", ")}
      </div>
    </div>
  );
}
