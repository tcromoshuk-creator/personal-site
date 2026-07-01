export const site = {
  name: "Tyrell Cromoshuk",
  title: "Growth & E-Commerce Executive",
  email: "tcromoshuk@gmail.com",
  linkedin: "https://www.linkedin.com/in/tyrellcromoshuk/",
  url: "https://tyrellcromoshuk.com",
  description:
    "Growth & E-Commerce Executive with 15 years of experience building revenue engines across marketplaces, DTC, subscription, retail media, lifecycle, CRO, and AI-enabled growth systems.",
};

export const proofMetrics = [
  {
    value: "15",
    label: "Years of experience",
    support:
      "Consumer, commerce, marketplaces, subscription, fintech, entertainment, fashion, food, and technology.",
  },
  {
    value: "$90M+",
    label: "Budgets managed",
    support: "Paid media, retail media, lifecycle, launch, and acquisition programs.",
  },
  {
    value: "$300M+",
    label: "Revenue contribution",
    support: "DTC, marketplace, subscription, and digital commerce businesses.",
  },
  {
    value: "$120M+",
    label: "E-commerce portfolio",
    support: "Amazon, Walmart, Target+, TikTok Shop, retail media, analytics, and catalog optimization.",
  },
];

export const homepageProofMetrics = [
  {
    value: "15 years",
    label: "Operating growth systems",
    support: "Consumer, marketplace, DTC, subscription, fintech, and entertainment.",
  },
  {
    value: "$90M+",
    label: "Growth and marketing budgets",
    support: "Paid media, retail media, lifecycle, launch, and acquisition programs.",
  },
  {
    value: "$300M+",
    label: "Revenue contribution",
    support: "DTC, marketplace, subscription, and digital commerce.",
  },
  {
    value: "$120M+",
    label: "E-commerce portfolio scope",
    support: "Amazon, Walmart, Target+, TikTok Shop, and retail media.",
  },
];

export const industries = [
  "Consumer",
  "Entertainment",
  "Marketplaces",
  "DTC",
  "Subscription",
  "Retail Media",
  "Fintech",
  "Fashion",
  "Food",
  "Technology",
];

export const companyStrip = [
  { name: "Mad Engine", mark: "ME" },
  { name: "Netflix", mark: "N" },
  { name: "Paxful", mark: "PX" },
  { name: "Veestro", mark: "VE" },
  { name: "Menlo Club (Five Four Group)", mark: "MC" },
  { name: "adMixt", mark: "AX" },
  { name: "adParlor", mark: "AP" },
];

export const expertiseCards = [
  {
    title: "Growth Strategy & Revenue Planning",
    body: "Diagnose where growth is really coming from, where the business is leaking opportunity, and what the next stage of revenue should be built around.",
    levers: ["Revenue planning", "Forecasting", "Budget logic"],
    leadsTo: "Sharper priorities, budget logic, and leadership alignment.",
  },
  {
    title: "E-Commerce & Marketplace Growth",
    body: "Improve the full system around DTC, Amazon, Walmart, Target+, TikTok Shop, PDPs, catalog quality, merchandising, retail media, and conversion.",
    levers: ["Marketplace execution", "PDP/catalog quality", "Retail media"],
    leadsTo: "Better marketplace execution, PDP quality, and commerce performance.",
  },
  {
    title: "Acquisition & Retail Media",
    body: "Connect Margin-Aware Acquisition, retail media, creative testing, channel mix, CAC, ROAS, MER, and spend allocation to business economics.",
    levers: ["Channel mix", "Creative testing", "MER / ROAS"],
    leadsTo: "More accountable spend, cleaner tests, and stronger media economics.",
  },
  {
    title: "Lifecycle, CRM & Retention",
    body: "Build CRM, retention, reactivation, churn, subscription, and customer-value systems that make acquisition more valuable.",
    levers: ["CRM sequencing", "Retention programs", "Win-back"],
    leadsTo: "Higher LTV, stronger retention, and more useful customer journeys.",
  },
  {
    title: "Analytics, Forecasting & Operating Cadence",
    body: "Build dashboards, pacing, forecasting, budget logic, metric definitions, and executive reporting cadences that leadership can act on.",
    levers: ["Executive reporting", "Pacing", "AOP planning"],
    leadsTo: "Clearer executive decisions and fewer reactive performance reviews.",
  },
  {
    title: "AI-Enabled Growth Systems",
    body: "Use practical AI workflows to make growth teams faster and more consistent across analysis, reporting, CRM sequencing, PDP QA, and research.",
    levers: ["Codex workflows", "PDP QA", "Research automation"],
    leadsTo: "Faster analysis, repeatable workflows, and better operating consistency.",
  },
];

export const operatingSystemSteps = [
  {
    title: "Diagnose",
    body: "Find the real constraint across channels, funnel, catalog, retention, reporting, or ownership.",
  },
  {
    title: "Model",
    body: "Translate the constraint into revenue, budget, CAC/LTV, MER, ROAS, and forecast logic.",
  },
  {
    title: "Prioritize",
    body: "Separate near-term revenue work from system work that compounds over time.",
  },
  {
    title: "Execute",
    body: "Turn strategy into owners, requirements, tests, programs, and weekly priorities.",
  },
  {
    title: "Measure",
    body: "Create scorecards, pacing views, and readouts that make performance legible.",
  },
  {
    title: "Scale",
    body: "Expand what is working while reducing waste, ambiguity, and one-off habits.",
  },
];

export const platformEcosystem = [
  {
    group: "Commerce",
    items: [
      "Shopify",
      "Amazon",
      "Walmart",
      "Target+",
      "TikTok Shop",
      "DTC",
      "PDPs",
      "Catalog QA",
      "Merchandising",
      "CRO",
      "Product launches",
    ],
  },
  {
    group: "Acquisition",
    items: [
      "Meta",
      "Google",
      "Retail media",
      "Affiliate",
      "Influencer",
      "Partnerships",
      "Paid social",
      "Paid search",
      "Direct mail",
      "PR",
    ],
  },
  {
    group: "Lifecycle",
    items: [
      "CRM",
      "Email/SMS",
      "Klaviyo",
      "Segmentation",
      "Win-back",
      "Retention",
      "Reactivation",
      "Lifecycle testing",
      "Churn reduction",
      "Subscription",
    ],
  },
  {
    group: "Analytics",
    items: [
      "GA4",
      "Dashboards",
      "CAC/LTV",
      "MER",
      "ROAS",
      "tACOS",
      "Forecasting",
      "AOP planning",
      "Executive reporting",
      "Pacing",
    ],
  },
  {
    group: "AI Workflows",
    items: [
      "ChatGPT",
      "Codex",
      "Automation",
      "Campaign analysis",
      "CRM sequencing",
      "PDP QA",
      "Executive reporting",
      "Forecasting",
      "Growth research",
      "Workflow systems",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  company: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  role: string;
  metrics: string[];
  context: string;
  moves: string[];
  outcome: string;
  services: string[];
  homepageContext?: string;
  homepageOutcomes?: Array<{
    metric: string;
    label: string;
    context?: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mad-engine",
    company: "Mad Engine",
    title: "Building the Growth Foundation for a $120M+ Marketplace Portfolio",
    category: "Marketplace Growth / Retail Media / Operating Cadence",
    summary:
      "I led growth strategy and operating transformation across Amazon, Walmart, Target+, TikTok Shop, retail media, analytics, content optimization, merchandising, and cross-functional teams.",
    homepageContext:
      "Marketplace growth and operating cadence across a $120M+ e-commerce portfolio.",
    challenge:
      "A large marketplace business needed stronger growth levers, better reporting, clearer ownership, and improved retail media efficiency.",
    role:
      "I led growth strategy, marketplace commerce, retail media, analytics, catalog optimization, and cross-functional operating cadence as SVP.",
    metrics: [
      "$120M+ e-commerce portfolio",
      "MER improved from 7.5% to 6.9%",
      "Walmart 120% of goal; Target+ 130%",
      "$20K-$40K monthly agency cost reduction",
    ],
    context:
      "The business had meaningful marketplace scale but needed a stronger growth foundation across acquisition, product detail pages, catalog experience, reporting, and operating discipline.",
    moves: [
      "I built the growth plan across marketing efficiency, PDP/catalog quality, and analytics infrastructure.",
      "I helped establish reporting, forecasting, budget planning, retail media testing, PDP optimization, and channel-review cadence.",
      "I partnered with analytics and engineering teams to scope executive and day-to-day dashboard requirements.",
      "I improved internal ownership across a six-person direct team and 15+ dotted-line contributors.",
    ],
    outcome:
      "I helped the e-commerce business exceed its goal in 2025 and 4 of the first 5 months in 2026, pacing 9.8% above plan while marketplace and retail media performance improved.",
    services: [
      "E-Commerce & Marketplace Growth",
      "Executive Reporting, Forecasting & Operating Cadence",
      "Paid Acquisition, Retail Media & Channel Strategy",
    ],
    homepageOutcomes: [
      {
        metric: "$120M+",
        label: "E-commerce portfolio",
      },
      {
        metric: "7.5% → 6.9%",
        label: "MER improvement",
      },
      {
        metric: "120% / 130%",
        label: "Walmart / Target+ goal attainment",
      },
    ],
  },
  {
    slug: "netflix-shop",
    company: "Netflix.Shop",
    title: "Scaling Netflix.Shop and Building a Global Acquisition Framework",
    category: "DTC Commerce / Acquisition / CRO",
    summary:
      "I built and scaled the Netflix.Shop growth function while advising broader Netflix teams on streaming acquisition, live experiences, lifecycle, and performance infrastructure.",
    homepageContext:
      "Built the growth function for a startup-like DTC commerce business inside Netflix.",
    challenge:
      "A startup-like DTC commerce business inside Netflix needed a growth function across acquisition, retention, CRO, product-launch marketing, and reporting.",
    role:
      "I led growth for Netflix.Shop, with advisory and test-campaign work across broader Netflix acquisition and commerce initiatives.",
    metrics: [
      "Six-figure to eight-figure revenue growth",
      "46% average CPA reduction in global streaming acquisition tests",
      "3x-9x incremental ROAS",
      "27% checkout conversion improvement",
    ],
    context:
      "Netflix.Shop operated like a startup inside a much larger company, requiring practical growth leadership across acquisition, retention, product-launch marketing, experimentation, and reporting.",
    moves: [
      "I built acquisition, retention, lifecycle, CRO, product-launch marketing, reporting, and experimentation systems.",
      "I led acquisition across Meta, Google, influencer, affiliate, and partnerships.",
      "I partnered with product, merchandising, creative, analytics, and operations teams on funnel experimentation and UX recommendations.",
      "I helped establish test campaigns for broader Netflix streaming acquisition across global markets.",
    ],
    outcome:
      "I scaled Netflix.Shop to eight figures and helped produce a streaming acquisition framework that proved modern paid acquisition could support larger budgets.",
    services: [
      "Growth Strategy & Revenue Planning",
      "Paid Acquisition, Retail Media & Channel Strategy",
      "CRO, Funnel Optimization & Testing",
    ],
    homepageOutcomes: [
      {
        metric: "6-figure → 8-figure",
        label: "Revenue scale",
      },
      {
        metric: "-46%",
        label: "Avg. CPA reduction",
      },
      {
        metric: "3x-9x",
        label: "Incremental ROAS",
      },
    ],
  },
  {
    slug: "five-four-menlo-club",
    company: "Five Four / Menlo Club",
    title: "From Acquisition Growth to a Better Subscription Business",
    category: "Subscription / Retention / E-Commerce",
    summary:
      "I scaled the business from $8M to $65M+ and led the Premium Seasonal subscription launch to improve churn, LTV, customer experience, and monetization.",
    homepageContext:
      "Scaled acquisition and helped reposition the subscription model around retention and LTV.",
    challenge:
      "A subscription and e-commerce business needed to move beyond acquisition-heavy growth and improve retention, customer value, and subscription experience.",
    role:
      "I led growth and served as GM-style lead for Premium Seasonal, spanning marketing, product, merchandising, logistics, and customer experience.",
    metrics: [
      "$8M to $65M+ revenue scale",
      "52% churn reduction for Premium Seasonal",
      "$90+ LTV increase",
      "10,000+ members in the first quarter",
    ],
    context:
      "The business had grown quickly but needed to evolve from acquisition-heavy growth toward better retention, customer experience, subscription design, and broader operating discipline.",
    moves: [
      "I led paid social, paid search, affiliate, influencer, direct mail, CRM, and owned channels.",
      "I built the go-to-market plan and owned P&L for the Premium Seasonal launch.",
      "I partnered with merchandising, product, engineering, logistics, customer service, and marketing.",
      "I helped build a new BigCommerce customer experience, self-service platform, and add-to-box portal.",
    ],
    outcome:
      "I helped shift the subscription model from discounted monthly boxes to a higher-value quarterly premium offering, improving churn, AOV, and the customer experience.",
    services: [
      "Lifecycle, CRM & Retention",
      "Growth Strategy & Revenue Planning",
      "CRO, Funnel Optimization & Testing",
    ],
    homepageOutcomes: [
      {
        metric: "$8M → $65M+",
        label: "Revenue scale",
      },
      {
        metric: "-52%",
        label: "Churn reduction",
      },
      {
        metric: "+$90",
        label: "LTV increase",
      },
    ],
  },
  {
    slug: "veestro",
    company: "Veestro",
    title: "Rebuilding Acquisition Economics for a Plant-Based Subscription Brand",
    category: "Subscription / Acquisition / Brand Repositioning",
    summary:
      "I improved paid media economics, rebuilt acquisition and lifecycle foundations, and helped reposition the brand during a difficult post-iOS acquisition environment.",
    homepageContext:
      "Rebuilt acquisition economics for a plant-based subscription brand.",
    challenge:
      "A plant-based meal delivery subscription brand needed to expand beyond a saturated vegan-first audience while improving acquisition economics.",
    role:
      "I led acquisition, segmentation, lifecycle testing, brand repositioning, and Shopify/CRO improvements as VP Marketing.",
    metrics: [
      "$300+ to $120 CPA in three months",
      "One-month retention extension",
      "15% sitewide conversion improvement from the current site case study",
    ],
    context:
      "The brand had saturated a vegan-first audience and needed to expand the customer base without weakening retention or the subscription value proposition.",
    moves: [
      "I helped reposition messaging from vegan-only to broader plant-based meal delivery.",
      "I led customer segmentation, lifecycle testing, and acquisition channel optimization.",
      "I partnered with the team to move the website and customer experience toward a more modern Shopify foundation.",
      "I built tests across creative, landing page, affiliate, PR, and influencer angles.",
    ],
    outcome:
      "I improved acquisition economics while keeping the retention story intact, creating a healthier foundation for growth.",
    services: [
      "Paid Acquisition, Retail Media & Channel Strategy",
      "Lifecycle, CRM & Retention",
      "CRO, Funnel Optimization & Testing",
    ],
    homepageOutcomes: [
      {
        metric: "$300+ → $120",
        label: "CPA reduction",
      },
      {
        metric: "+1 month",
        label: "Retention extension",
      },
    ],
  },
  {
    slug: "echo-base-paxful",
    company: "Echo Base / Paxful",
    title: "Rebuilding Growth for a Global P2P Fintech Marketplace",
    category: "Marketplace / Fintech / AI-Enabled Workflows",
    summary:
      "I led post-relaunch growth for a global P2P fintech marketplace serving 150+ countries, balancing acquisition, lifecycle, reactivation, and marketplace liquidity.",
    homepageContext:
      "Led post-relaunch growth foundations for a global P2P fintech marketplace.",
    challenge:
      "A global P2P fintech marketplace needed to rebuild marketing foundations after relaunch while balancing acquisition, reactivation, liquidity, and compliance-sensitive messaging.",
    role:
      "I led a five-person team across paid acquisition, product-led growth, lifecycle, organic marketing, and AI-enabled workflows as VP Growth.",
    metrics: [
      "150+ countries",
      "Team of 5",
      "Approximately $3M cumulative paid media",
      "AI-enabled workflows across copy, CRM, analysis, and recommendations",
    ],
    context:
      "The company needed a rebuilt growth function during a turnaround period, with acquisition, reactivation, marketplace dynamics, and compliance-sensitive messaging all moving at once.",
    moves: [
      "I built growth work across paid acquisition, organic/product marketing, CRM, and dormant-user reactivation.",
      "I helped establish AI-enabled workflows for ad copy, targeting, CRM sequencing, analysis, and recommendations.",
      "I partnered with the team to balance performance marketing with compliance-conscious messaging and marketplace liquidity.",
      "I built a learning system beyond paid acquisition alone.",
    ],
    outcome:
      "I helped establish core marketing foundations in a marketplace environment that needed more structure, speed, and operational consistency.",
    services: [
      "AI-Enabled Marketing & Growth Systems",
      "Lifecycle, CRM & Retention",
      "Growth Strategy & Revenue Planning",
    ],
    homepageOutcomes: [
      {
        metric: "150+",
        label: "Countries served",
      },
      {
        metric: "5",
        label: "Growth team led",
      },
      {
        metric: "~$3M",
        label: "Cumulative paid media",
      },
    ],
  },
];

export const homepageAudiences = [
  {
    title: "For full-time leadership roles",
    subtitle: "Growth, E-Commerce, Marketplace Growth, or Marketing",
    body: "For companies that need a senior operator to lead the broader growth system: revenue strategy, acquisition, retention, marketplace or digital commerce performance, forecasting, reporting, and cross-functional execution.",
    bullets: [
      "VP, SVP, Head of Growth, E-Commerce, or Marketing scope",
      "Budget, team, revenue, or P&L influence",
      "Consumer, marketplace, DTC, subscription, entertainment, or digital commerce complexity",
    ],
    cta: "View experience",
    href: "/experience",
  },
  {
    title: "For fractional or advisory work",
    subtitle: "Senior support for strategic growth mandates",
    body: "For brands that need senior support on strategic diagnosis, marketplace or e-commerce growth, reporting cadence, channel strategy, lifecycle planning, or project-based growth systems.",
    bullets: [
      "Growth audits, operating cadence, or revenue planning",
      "Marketplace, retail media, CRO, lifecycle, or acquisition projects",
      "AI-enabled workflows for analysis, reporting, QA, and team execution",
    ],
    cta: "Discuss consulting",
    href: "/services",
  },
];

export const services = [
  {
    title: "Growth Strategy & Revenue Planning",
    problem:
      "The business has activity across channels, teams, and agencies, but the revenue plan is not clear enough to guide decisions.",
    when: "A company needs sharper growth priorities, budget logic, forecasting, or a senior operator who can connect marketing to the broader business.",
    what:
      "I audit the current growth system, identify the real constraints, build a clearer revenue plan, and translate it into operating rhythms teams can follow.",
    proof:
      "Built operating cadences across Mad Engine, Netflix.Shop, Menlo Club, Paxful, and consulting clients.",
    deliverables: [
      "Growth diagnosis",
      "Revenue plan",
      "Budget model",
      "90-day operating roadmap",
      "Executive reporting narrative",
    ],
  },
  {
    title: "E-Commerce & Marketplace Growth",
    problem:
      "Marketplace and DTC performance is being limited by catalog quality, PDP experience, retail media structure, merchandising, or fragmented ownership.",
    when:
      "A business needs better performance across Shopify, Amazon, Walmart, Target+, TikTok Shop, or retail media.",
    what:
      "I improve marketplace strategy, catalog/PDP standards, retail media testing, channel ownership, and the cadence around digital commerce performance.",
    proof:
      "Led a $120M+ e-commerce portfolio at Mad Engine and built Netflix.Shop growth from six-figure annual revenue to eight figures.",
    deliverables: [
      "Marketplace audit",
      "PDP and catalog QA framework",
      "Retail media plan",
      "Channel scorecard",
      "Merchandising and growth operating cadence",
    ],
  },
  {
    title: "Paid Acquisition, Retail Media & Channel Strategy",
    problem:
      "Spend is either under-scaled, inefficient, over-reliant on one channel, or not tied cleanly to business economics.",
    when:
      "A company needs to improve CAC, ROAS, MER, tACOS, spend allocation, creative testing, or channel diversification.",
    what:
      "I assess spend quality, build test structure, improve creative and audience learning, and connect performance to margin-aware planning.",
    proof:
      "Managed $90M+ in growth and marketing budgets and improved Walmart ROAS from 3.0x to 4.5x and Target+ from 3.2x to 4.9x.",
    deliverables: [
      "Channel audit",
      "Testing roadmap",
      "Budget allocation model",
      "Creative learning agenda",
      "Retail media structure",
    ],
  },
  {
    title: "Lifecycle, CRM & Retention",
    problem:
      "The company is acquiring customers but not doing enough to retain, reactivate, increase LTV, or build a better customer relationship.",
    when:
      "A subscription, marketplace, or DTC business needs better lifecycle flows, win-back programs, churn reduction, or segmentation.",
    what:
      "I map the customer journey, diagnose retention leaks, and build CRM programs that connect customer behavior to revenue.",
    proof:
      "Reduced Menlo Club churn by 52% for Premium Seasonal and extended Veestro retention by one month.",
    deliverables: [
      "Lifecycle audit",
      "Flow map",
      "Segmentation plan",
      "Win-back strategy",
      "Retention test roadmap",
    ],
  },
  {
    title: "CRO, Funnel Optimization & Testing",
    problem:
      "Traffic is expensive, but the site, PDPs, checkout, or landing pages are not converting strongly enough.",
    when:
      "A company needs a practical testing system for landing pages, PDPs, checkout, creative-message match, or merchandising flow.",
    what:
      "I identify the highest-value conversion problems, prioritize tests, and work with product, merchandising, analytics, and creative teams to improve the funnel.",
    proof:
      "Improved Netflix.Shop checkout conversion by 27% through data-backed testing, UX recommendations, and cross-functional prioritization.",
    deliverables: [
      "Funnel audit",
      "Test backlog",
      "Landing page briefs",
      "PDP recommendations",
      "Measurement plan",
    ],
  },
  {
    title: "Executive Reporting, Forecasting & Operating Cadence",
    problem:
      "Leadership cannot see performance clearly enough to know what is working, what is broken, and what decisions need to be made.",
    when:
      "A business needs better pacing, forecasting, dashboard requirements, AOP planning, or performance storytelling.",
    what:
      "I build the reporting requirements, meeting rhythm, and performance narrative that help teams move from reactive updates to better decisions.",
    proof:
      "Scoped master dashboard requirements at Mad Engine and built growth dashboards and attribution analysis across Menlo Club and Netflix-related work.",
    deliverables: [
      "Dashboard requirements",
      "Weekly business review format",
      "Forecasting model",
      "Metric definitions",
      "Executive readout template",
    ],
  },
  {
    title: "AI-Enabled Marketing & Growth Systems",
    problem:
      "Teams are using AI casually, but not turning it into repeatable workflows that improve speed, analysis, QA, or execution quality.",
    when:
      "A company wants practical AI systems for growth work without vague hype or disconnected experiments.",
    what:
      "I design workflows that make teams faster and more consistent across campaign analysis, CRM sequencing, PDP QA, reporting, forecasting, and growth research.",
    proof:
      "Introduced AI-enabled workflows at Paxful and use Codex-powered workflows for scraping, research, site builds, dashboards, and operating-system work.",
    deliverables: [
      "AI workflow audit",
      "Prompt and process library",
      "Codex-powered internal tool spec",
      "Campaign analysis workflow",
      "Marketplace/PDP QA workflow",
    ],
  },
];

export const faqs = [
  {
    question: "What kinds of roles are the strongest fit?",
    answer:
      "Full-time VP, SVP, Head of Growth, E-Commerce, Marketplace Growth, or Marketing leadership roles where growth is tied to revenue, margin, retention, reporting, and cross-functional execution.",
  },
  {
    question: "When does fractional or advisory work make sense?",
    answer:
      "Fractional work is a fit when the problem is senior and strategic: diagnosing a growth engine, improving marketplace or e-commerce performance, building reporting cadence, mentoring a team, or fixing a specific revenue constraint.",
  },
  {
    question: "Is this mainly paid media consulting?",
    answer:
      "No. Paid media is a deep technical foundation, but the broader work is growth leadership across acquisition, lifecycle, CRO, marketplace mechanics, product experience, forecasting, and executive operating cadence.",
  },
  {
    question: "How should companies think about AI in this work?",
    answer:
      "AI should make growth teams faster, more analytical, and more operationally consistent. Useful applications include campaign analysis, CRM sequencing, PDP QA, executive reporting, forecasting, competitive research, and Codex-powered internal tools.",
  },
];

export const futureContent = {
  testimonials: [] as Array<{
    quote: string;
    name: string;
    role?: string;
    company?: string;
  }>,
  insights: [] as Array<{
    slug: string;
    title: string;
    summary: string;
    professionalOnly: true;
  }>,
  servicePagesEnabled: false,
  insightsEnabled: false,
};

export const timeline = [
  {
    date: "Sept 2025 - Present",
    role: "SVP, Growth Retail & Marketplace Commerce",
    company: "Mad Engine Global",
    detail:
      "Growth strategy and operating transformation across a $120M+ e-commerce portfolio spanning Amazon, Walmart, Target+, TikTok Shop, retail media, analytics, catalog optimization, merchandising, and cross-functional teams.",
  },
  {
    date: "Jul 2024 - Mar 2025",
    role: "VP, Growth Fintech & Global Marketplace",
    company: "Echo Base Holdings / Paxful",
    detail:
      "Post-relaunch growth for a global P2P fintech marketplace serving 150+ countries, including acquisition, organic/product marketing, CRM/reactivation, marketplace liquidity, and AI-enabled workflows.",
  },
  {
    date: "Mar 2022 - Jul 2024",
    role: "Head of Growth, Netflix.Shop",
    company: "Netflix",
    detail:
      "Built and scaled the Netflix.Shop growth function while advising streaming acquisition, live experiences, Tudum, consumer products, and finance-adjacent growth initiatives.",
  },
  {
    date: "Aug 2021 - Jan 2022",
    role: "VP, Marketing",
    company: "Veestro",
    detail:
      "Rebuilt acquisition strategy, repositioned the brand, improved customer segmentation, and strengthened lifecycle discipline for a plant-based meal delivery business.",
  },
  {
    date: "Jul 2016 - Aug 2021",
    role: "Director, Growth",
    company: "Five Four Group / Menlo Club",
    detail:
      "Scaled subscription and e-commerce revenue from $8M to $65M+ while evolving the business from acquisition-heavy growth toward retention, lifecycle, and broader business operations.",
  },
  {
    date: "2011 - 2016",
    role: "Growth Consultant / Senior Account Manager",
    company: "adMixt and adParlor",
    detail:
      "Built the early paid media, client strategy, reporting, optimization, and advisory foundation that later expanded into executive growth leadership.",
  },
];
