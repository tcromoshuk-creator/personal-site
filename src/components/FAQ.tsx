const faqGroups = [
  {
    topic: "Fit & Engagement",
    items: [
      {
        question: "What kinds of companies are the strongest fit?",
        answer:
          "The strongest fit is a brand with real commercial complexity: multiple channels, revenue pressure, retention questions, marketplace or commerce operations, or leadership that needs a clearer growth operating system.",
      },
      {
        question: "Do you work with early-stage brands?",
        answer:
          "Yes, when the business has enough traction or complexity for senior growth support to matter. The work is usually most useful when there is already customer, channel, or revenue signal to diagnose.",
      },
      {
        question: "Do you work with larger organizations?",
        answer:
          "Yes. Larger organizations are often a fit when the problem involves cross-functional alignment, reporting, forecasting, channel ownership, marketplace operations, or growth leadership across teams.",
      },
      {
        question: "Can you help if we do not know the growth problem yet?",
        answer:
          "Yes. That is usually a diagnostic sprint or advisory starting point: identify the real constraint before committing the team to channel-specific work.",
      },
    ],
  },
  {
    topic: "Services & Scope",
    items: [
      {
        question: "Is this mainly paid media consulting?",
        answer:
          "No. Paid media is a deep foundation, but the broader work is growth leadership across acquisition, retention, lifecycle, CRO, commerce, marketplace mechanics, analytics, and operating cadence.",
      },
      {
        question: "Do you manage channels directly or only advise?",
        answer:
          "It depends on the mandate. Some work is advisory and operating-system focused; other work can include more hands-on channel, testing, CRM, reporting, or marketplace support.",
      },
      {
        question: "Can you work with our existing team or agencies?",
        answer:
          "Yes. A lot of the work is helping internal teams, agencies, and leadership operate from clearer priorities, better metrics, stronger briefs, and a cleaner decision rhythm.",
      },
      {
        question: "Which services are most relevant for marketplaces or e-commerce?",
        answer:
          "Commerce, Marketplace & Channel Growth is the most direct fit, but marketplace work often connects to acquisition, catalog quality, PDP/CRO, analytics, retail media, and operating cadence.",
      },
    ],
  },
  {
    topic: "Full-Time vs Advisory",
    items: [
      {
        question: "Do you do full-time roles or consulting?",
        answer:
          "Yes to both, depending on fit. Full-time leadership is a real conversation path, while consulting, advisory, fractional, and project work can make sense for defined growth mandates.",
      },
      {
        question: "What is the difference between advisory, fractional, and project work?",
        answer:
          "Advisory is ongoing senior guidance, fractional work adds more operating ownership, and project work is scoped around a specific problem or deliverable.",
      },
      {
        question: "When does fractional leadership make sense?",
        answer:
          "Fractional or interim leadership makes sense when a company needs senior ownership before or between hires, during a transition, or around a growth function that needs structure quickly.",
      },
    ],
  },
  {
    topic: "Process & Deliverables",
    items: [
      {
        question: "What does a growth audit include?",
        answer:
          "A growth audit usually reviews channels, economics, funnel performance, retention, reporting, team cadence, and the decision-making system around growth.",
      },
      {
        question: "What information should we bring to the first conversation?",
        answer:
          "Bring the business problem, current goals, channel mix, major constraints, and any context on revenue, acquisition, retention, reporting, or team structure that helps frame the issue.",
      },
      {
        question: "How long do projects usually take?",
        answer:
          "Timing depends on scope, access, team needs, and whether the work is diagnostic, advisory, project-based, or fractional. I do not use rigid public duration packages.",
      },
      {
        question: "What does success look like?",
        answer:
          "Success should be tied to the mandate: clearer priorities, better economics, stronger retention, improved conversion, cleaner reporting, or a more effective growth operating cadence.",
      },
    ],
  },
  {
    topic: "AI Workflows",
    items: [
      {
        question: "How do you approach AI-enabled growth workflows?",
        answer:
          "I focus on practical workflows that make teams faster and more consistent: analysis, QA, research, reporting, CRM sequencing, marketplace checks, and internal operating tools.",
      },
      {
        question: "What kinds of AI workflows are actually useful for marketing teams?",
        answer:
          "Useful workflows include campaign analysis, creative QA, PDP/catalog QA, CRM sequencing support, competitive research, reporting automation, and repeatable briefing systems.",
      },
    ],
  },
  {
    topic: "Pricing / Next Steps",
    items: [
      {
        question: "Do you offer public pricing packages?",
        answer:
          "No. Scope depends on the business problem, engagement model, urgency, and level of operating ownership required.",
      },
      {
        question: "What happens after I submit the contact form?",
        answer:
          "The first step is understanding the problem and context. From there, the right next step may be a role conversation, advisory discussion, diagnostic scope, or project brief.",
      },
      {
        question: "Which case studies should I review first?",
        answer:
          "Start with Mad Engine for marketplace growth, Netflix.Shop for demand generation, Menlo Club for retention/subscription work, and Veestro for repositioning, CRO, and lifecycle.",
      },
    ],
  },
];

export function FAQ() {
  return (
    <div className="faq-group-list">
      {faqGroups.map((group) => (
        <section className="faq-group" key={group.topic}>
          <h3>{group.topic}</h3>
          <div className="faq-list">
            {group.items.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
