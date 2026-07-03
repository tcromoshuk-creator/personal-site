export type CaseStudyMetric = {
  value: string;
  label: string;
  support?: string;
};

export type CaseStudyMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  caption?: string;
  orientation?: "landscape" | "portrait";
};

export type CaseStudySection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type CaseStudyPageContent = {
  slug: string;
  company: string;
  companyLabel: string;
  logo: string;
  logoClass?: string;
  headline: string;
  subhead: string;
  indexSummary: string;
  role: string;
  timeframe: string;
  category: string;
  platforms: string[];
  tags: string[];
  metrics: CaseStudyMetric[];
  heroMedia?: CaseStudyMedia;
  media?: CaseStudyMedia[];
  sections: CaseStudySection[];
  related: string[];
  seo: {
    title: string;
    description: string;
  };
};

export const caseStudyAliases: Record<string, string> = {
  "mad-engine": "mad-engine-tiktok-shop",
  "five-four-menlo-club": "menlo-club",
};

export const caseStudyPages: CaseStudyPageContent[] = [
  {
    slug: "mad-engine-tiktok-shop",
    company: "Mad Engine Global",
    companyLabel: "Mad Engine / TikTok Shop",
    logo: "/logos/mad-engine-global.jpg",
    headline: "Building TikTok Shop into a Creator-Led Growth Channel",
    subhead:
      "I took over TikTok Shop as an under-managed channel and helped turn it into a meaningful creator-led revenue engine without paid media.",
    indexSummary:
      "A social commerce build across creator activation, SKU expansion, storefront quality, fulfillment reliability, and executive reporting cadence.",
    role: "SVP, Growth",
    timeframe: "2026",
    category: "Marketplace Growth / Social Commerce / Creator-Affiliate / TikTok Shop",
    platforms: [
      "TikTok Shop Seller Center",
      "TikTok Shop Affiliate",
      "TikTok Creator Marketplace",
      "Creator outreach",
      "PDP optimization",
      "SKU prioritization",
      "BI reporting",
      "FedEx fulfillment",
    ],
    tags: ["TikTok Shop", "Social commerce", "Creator-led growth", "Marketplace operations"],
    metrics: [
      { value: "6x", label: "Revenue run-rate growth" },
      { value: "720%", label: "Of original AOP goal" },
      { value: "9x", label: "SKU expansion" },
      { value: "100-200", label: "Creators activated monthly" },
      { value: "+53%", label: "AOV increase" },
      { value: "No paid media", label: "Creator-led growth" },
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/mad-engine-tiktok-shop/storefront-02.png",
      alt: "Mad Engine TikTok Shop storefront screenshot",
      caption: "TikTok Shop storefront experience for Mad Engine licensed apparel.",
      orientation: "portrait",
    },
    media: [
      {
        type: "image",
        src: "/case-studies/mad-engine-tiktok-shop/storefront-01.png",
        alt: "Mad Engine TikTok Shop product grid screenshot",
        caption: "Storefront product coverage and shopping modules.",
        orientation: "portrait",
      },
      {
        type: "video",
        src: "/case-studies/mad-engine-tiktok-shop/creator-video-01.MP4",
        poster: "/case-studies/mad-engine-tiktok-shop/creator-video-01-thumbnail.png",
        alt: "Creator video featuring licensed apparel",
        caption: "Creator-led product content used to drive social commerce discovery.",
        orientation: "portrait",
      },
      {
        type: "video",
        src: "/case-studies/mad-engine-tiktok-shop/creator-video-02.MP4",
        poster: "/case-studies/mad-engine-tiktok-shop/creator-video-02-thumbnail.png",
        alt: "Creator video featuring a Spider-Man shirt",
        caption: "Affiliate creator content connected product discovery to TikTok Shop checkout.",
        orientation: "portrait",
      },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "TikTok Shop was already live, but the channel was operating largely on autopilot and driving very little meaningful monthly sales when I took it over.",
          "The business question was whether TikTok Shop could become a real revenue channel with efficient margin, rather than an experimental marketplace add-on. Mad Engine sells licensed apparel across major IP and brand portfolios, with top TikTok Shop sellers including Disney apparel such as Star Wars, Marvel, and Mickey Mouse.",
        ],
      },
      {
        id: "goals",
        title: "Goals",
        body: [
          "The mandate was to prove TikTok Shop could become a meaningful sales channel before layering in paid media.",
        ],
        bullets: [
          "Scale revenue efficiently without paid media first.",
          "Increase product catalog coverage.",
          "Build a creator and affiliate engine around brand-relevant products.",
          "Improve storefront, category, and PDP shopping experience.",
          "Build weekly cross-functional reporting and monthly executive reporting.",
          "Improve fulfillment reliability after prior delivery and shipment issues.",
        ],
      },
      {
        id: "strategy",
        title: "Strategy",
        body: [
          "I treated TikTok Shop as a marketplace and social-commerce business, not a passive product feed. That meant connecting catalog expansion, creator activation, merchandising, storefront quality, fulfillment, and reporting into one operating system.",
          "We prioritized high-demand licensed apparel categories, expanded product coverage so creators and shoppers had more relevant SKUs, partnered with TikTok to increase creator commissions from 10% to 25%, and used free shipping as a conversion lever.",
        ],
      },
      {
        id: "execution",
        title: "Execution / What I Did",
        body: [
          "I owned the TikTok Shop sales channel at the executive level, created and led the strategy, and transferred an internal employee into the day-to-day TikTok Shop Manager role.",
          "I partnered directly with the TikTok Shop team and coordinated cross-functionally with Sales, Merchandising, Ops, Data, Finance, and Growth. The work included product catalog expansion, SKU prioritization, affiliate and creator growth, storefront and PDP improvements, coupons and promotional planning, inventory coordination, and reporting cadence.",
          "We also fixed fulfillment reliability by transitioning delivery to FedEx, reducing lost deliveries to almost 0% and getting orders to customers within 3 business days.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "TikTok Shop moved from a sub-$100K to roughly $120K baseline to a forecasted 2026 GMV/revenue run rate of approximately $720K.",
          "The channel reached 720% of the original $100K AOP goal, expanded SKU coverage from 10,000 products to 90,000 products, increased AOV from $17 to $26, and grew affiliate creator activation from roughly 5-10 creators per month to 100-200 creators per month.",
        ],
      },
      {
        id: "why-it-mattered",
        title: "Why It Mattered",
        body: [
          "TikTok Shop became a real social-commerce growth channel, not just an experimental marketplace. The work created a repeatable playbook for scaling social commerce efficiently before layering in paid media.",
          "It also showed that marketplace growth requires cross-functional operating cadence: creator activation, catalog expansion, marketplace operations, merchandising, fulfillment, and executive visibility all had to work together.",
        ],
      },
    ],
    related: ["netflix-shop", "menlo-club"],
    seo: {
      title: "Mad Engine TikTok Shop Case Study",
      description:
        "A marketplace growth case study on scaling TikTok Shop into a creator-led social commerce revenue channel across SKU expansion, creators, PDPs, fulfillment, and reporting.",
    },
  },
  {
    slug: "netflix-shop",
    company: "Netflix.Shop",
    companyLabel: "Netflix.Shop",
    logo: "/logos/netflix.svg",
    headline: "Cutting Through BFCM Noise for Netflix.Shop",
    subhead:
      "A two-week awareness campaign built to teach fans that Netflix had an official shop and turn attention into traffic and sales.",
    indexSummary:
      "A BFCM campaign across hero video, paid social, paid search, PMAX, influencer seeding, direct mail, email, and organic social.",
    role: "Head of Growth, Netflix.Shop",
    timeframe: "2023",
    category: "DTC Commerce / Acquisition / BFCM",
    platforms: [
      "Paid social",
      "Paid search",
      "Google PMAX",
      "Influencer seeding",
      "Direct mail",
      "Email",
      "Organic social",
      "YouTube",
      "TikTok",
      "Instagram",
    ],
    tags: ["DTC commerce", "BFCM", "Paid social", "Influencer"],
    metrics: [
      { value: "250%", label: "Increase in reach" },
      { value: "110%", label: "To BFCM sales goal" },
      { value: "100%", label: "Increase to ROAS" },
      { value: "30+", label: "Campaign assets deployed" },
      { value: "35-40", label: "Influencers seeded" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "The Netflix.Shop campaign started from a repeated customer insight: a lot of Netflix fans still did not know Netflix had an official shop.",
          "BFCM created the right moment to make the shop visible, introduce the breadth of the product catalog, and connect attention to the strongest promotions of the year.",
        ],
      },
      {
        id: "goals",
        title: "Goals",
        body: [
          "The work had two core goals: increase awareness that Netflix.Shop existed and drive sales during a highly competitive retail window.",
        ],
        bullets: [
          "Reach the broader Netflix demographic with a memorable awareness campaign.",
          "Drive traffic to the shop during BFCM.",
          "Convert attention into sales across discounted products tied to fan-favorite shows and movies.",
        ],
      },
      {
        id: "strategy",
        title: "Strategy",
        body: [
          "I led my team and agency partners in building the campaign around a three-part hero video series, supported by supplementary content across the two-week BFCM period.",
          "The channel plan connected organic social, paid social, paid search, PMAX, influencer seeding, direct mail, and email so the campaign could drive awareness and conversion at the same time.",
        ],
      },
      {
        id: "execution",
        title: "Execution / What I Did",
        body: [
          "I led the campaign planning across Netflix and Netflix.Shop organic channels on YouTube, TikTok, and Instagram, with near-daily shop content during the campaign window.",
          "Paid social was structured by funnel stage: video views at the top, link clicks in the middle, and purchases at the bottom. Paid search used Google-specific PMAX assets across awareness and sales objectives, leveraging the product catalog where applicable.",
          "The team seeded roughly 35-40 influencers, created mini direct-mail catalogues for existing Netflix subscribers, and used email to push promotions and referrals to shoppers already familiar with the shop.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "During the two weeks the campaign was live, the team deployed more than 30 assets across multiple digital channels.",
          "The campaign increased reach by 250%, reached 110% of the BFCM sales goal, increased ROAS by 100% during the BFCM campaign, and generated record CTRs, viewing time, time on site, and organic editorial pickup.",
        ],
      },
      {
        id: "why-it-mattered",
        title: "Why It Mattered",
        body: [
          "The campaign showed how a DTC commerce business inside a major entertainment brand could use the brand's own audience, product catalog, creators, paid channels, direct mail, and lifecycle messaging as one coordinated retail moment.",
        ],
      },
    ],
    related: ["mad-engine-tiktok-shop", "menlo-club"],
    seo: {
      title: "Netflix.Shop Case Study",
      description:
        "A DTC commerce and BFCM acquisition case study for Netflix.Shop across paid social, paid search, Google PMAX, influencer seeding, direct mail, email, and organic social.",
    },
  },
  {
    slug: "menlo-club",
    company: "Menlo Club / Five Four Group",
    companyLabel: "Menlo Club / Five Four Group",
    logo: "/logos/menlo-club-linkedin-logo.jpg",
    logoClass: "case-logo-square",
    headline: "Relaunching Subscription Growth Around a Seasonal Model",
    subhead:
      "A quarterly subscription launch designed to reduce churn, increase LTV, and upgrade the customer experience.",
    indexSummary:
      "A subscription relaunch across BigCommerce, email/SMS, paid and organic channels, fulfillment, merchandising, packaging, and customer experience.",
    role: "Director, Growth",
    timeframe: "2020-2021",
    category: "Subscription Growth / Retention / BigCommerce",
    platforms: [
      "BigCommerce",
      "Email/SMS",
      "Paid social",
      "Paid search",
      "Influencer seeding",
      "Direct mail",
      "Customer experience",
      "Fulfillment",
      "Merchandising",
    ],
    tags: ["Subscription", "Retention", "BigCommerce", "Lifecycle"],
    metrics: [
      { value: "52%", label: "Decrease in churn" },
      { value: "$65", label: "AOV increase" },
      { value: "10,000+", label: "Members in first quarter" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Menlo Club's monthly subscription had quality and frequency issues: customers were complaining about receiving clothes too often and not consistently getting the quality they expected.",
          "The quarterly subscription launch was built to upgrade the assortment, improve customer experience, reduce churn, increase LTV, and create a stronger acquisition story.",
        ],
      },
      {
        id: "goals",
        title: "Goals",
        body: [
          "The business needed to improve subscription economics without losing the existing customer base.",
        ],
        bullets: [
          "Increase LTV through a higher-priced base subscription and add-to-box shopping.",
          "Reduce churn by solving the core pain points of the monthly box.",
          "Create a stronger acquisition offer with healthier margin and better customer-facing features.",
        ],
      },
      {
        id: "strategy",
        title: "Strategy",
        body: [
          "Acting as the General Manager for the launch, I collaborated with Logistics, Merchandising, Customer Service, Product, Engineering, and Marketing to identify pain points and design the upgraded subscription experience.",
          "The strategy connected the product experience, website experience, shipping, packaging, merchandising, and go-to-market plan instead of treating the launch as a campaign alone.",
        ],
      },
      {
        id: "execution",
        title: "Execution / What I Did",
        body: [
          "I built a go-to-market plan across paid, organic, email, SMS, and influencer seeding to drive awareness, traffic, and conversion.",
          "The team built a new BigCommerce experience, dedicated shopping and add-to-box portals, and self-service tools so customers could customize shipments more easily.",
          "I negotiated with UPS to improve fulfillment timing, worked with packaging on a premium box, partnered with Merchandising on upgraded apparel categories and materials, and supported personal stylist service for order issues and future shipment customization.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "The launch delivered a 52% decrease in churn, a $65 increase in AOV per customer, and more than 10,000 members within the first quarter.",
          "The upgraded model included premium seasonal apparel, custom packaging, improved fulfillment, a rebuilt BigCommerce site, a collection-preview magazine, personal stylists, and improved self-service tools.",
        ],
      },
      {
        id: "why-it-mattered",
        title: "Why It Mattered",
        body: [
          "The project showed that subscription growth is not only acquisition. The business needed merchandising, fulfillment, customer service, product, packaging, and lifecycle systems working together to improve retention and customer value.",
        ],
      },
    ],
    related: ["netflix-shop", "veestro"],
    seo: {
      title: "Menlo Club Case Study",
      description:
        "A subscription growth case study on Menlo Club's quarterly subscription launch, BigCommerce rebuild, churn reduction, AOV lift, lifecycle marketing, and customer experience.",
    },
  },
  {
    slug: "veestro",
    company: "Veestro",
    companyLabel: "Veestro",
    logo: "/logos/veestro-gray.png",
    logoClass: "case-logo-wide",
    headline: "Repositioning a Plant-Based Subscription Brand for Efficient Growth",
    subhead:
      "A brand and performance reset that expanded the audience, improved conversion, and reduced acquisition costs.",
    indexSummary:
      "A plant-based rebrand and Shopify 2.0 rebuild across research, messaging, CRO, paid media, affiliate, PR, influencer, and organic channels.",
    role: "VP, Marketing",
    timeframe: "2021-2022",
    category: "Rebrand / CAC Reduction / Shopify 2.0",
    platforms: [
      "Shopify 2.0",
      "CRO",
      "Paid media",
      "Affiliate",
      "PR",
      "Influencer",
      "Organic channels",
      "Brand guide",
      "Customer segmentation",
    ],
    tags: ["Rebrand", "Shopify 2.0", "CRO", "Acquisition"],
    metrics: [
      { value: "60%", label: "CAC drop" },
      { value: "15%", label: "Sitewide CVR lift" },
      { value: "50%+", label: "Engagement-rate lift" },
      { value: "$300 -> $120", label: "CPA reduction" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Veestro had built a following around being vegan-first, but rising CAC and reduced reach suggested that audience was becoming saturated.",
          "I came in to overhaul the brand image, open up the total addressable market, reduce acquisition costs, and preserve customer value through stronger value-based messaging.",
        ],
      },
      {
        id: "goals",
        title: "Goals",
        body: [
          "The rebrand needed to expand the audience without alienating existing customers.",
        ],
        bullets: [
          "Maintain or improve LTV by keeping current customers confident in the product quality.",
          "Reduce CAC by shifting from vegan-first messaging toward broader plant-based benefits.",
          "Improve conversion through a stronger website experience and clearer brand system.",
        ],
      },
      {
        id: "strategy",
        title: "Strategy",
        body: [
          "I studied competitors and the broader meal delivery category to understand why customers were signing up and what plant-based eating offered beyond a vegan niche.",
          "Using those learnings, I created new messaging pillars with internal and agency partners, then built an updated brand style guide for content, paid channels, organic channels, and the new website experience.",
        ],
      },
      {
        id: "execution",
        title: "Execution / What I Did",
        body: [
          "I introduced the new assets in controlled paid media tests before rolling the rebrand out company-wide after five months as VP.",
          "The team transitioned from an older Shopify experience to Shopify 2.0, applied CRO best practices, modernized subscription and e-commerce flows, rebuilt paid and organic creative, added an affiliate program, and seeded PR and influencer activity.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "Within three months of launching the rebrand, Veestro saw a 60% CAC drop, 15% lift in sitewide CVR, and 50%+ increase in engagement rate.",
          "CPA dropped from about $300 to $120 as the new audience produced healthier click and conversion rates and benefited from improved conversion flows.",
        ],
      },
      {
        id: "why-it-mattered",
        title: "Why It Mattered",
        body: [
          "The work widened the audience while keeping existing customers loyal. It connected brand positioning, channel economics, CRO, customer segmentation, and Shopify execution into one growth reset.",
        ],
      },
    ],
    related: ["menlo-club", "netflix-shop"],
    seo: {
      title: "Veestro Case Study",
      description:
        "A plant-based subscription and e-commerce case study on rebranding, Shopify 2.0, CRO, CAC reduction, paid media, affiliate, PR, influencer, and customer segmentation.",
    },
  },
];

export function getCaseStudyPage(slug: string) {
  const canonicalSlug = caseStudyAliases[slug] ?? slug;
  return caseStudyPages.find((study) => study.slug === canonicalSlug);
}
