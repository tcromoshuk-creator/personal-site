import { timeline } from "@/lib/content";

type CareerTimelineProps = {
  mode?: "about" | "resume";
};

export function CareerTimeline({ mode = "about" }: CareerTimelineProps) {
  return (
    <div className="timeline">
      {timeline.map((item) => (
        <article className="timeline-item" key={`${item.company}-${item.date}`}>
          <div>
            <p className="timeline-date">{item.date}</p>
          </div>
          <div className={mode === "resume" ? "role-detail" : undefined}>
            <h3>{mode === "resume" ? item.company : item.role}</h3>
            <p>{mode === "resume" ? item.role : item.company}</p>
            <p>{item.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
