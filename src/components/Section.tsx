type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "default" | "alt" | "soft";
  className?: string;
};

export function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
  className,
}: SectionProps) {
  const sectionClassName = [
    "section",
    tone === "alt" ? "alt" : "",
    tone === "soft" ? "soft" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="section-inner">
        {(eyebrow || title || intro) && (
          <div className="section-heading">
            <div>
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && <h2>{title}</h2>}
            </div>
            {intro && <p>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
