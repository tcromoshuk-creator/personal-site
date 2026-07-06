export type CaseStudyMetric = {
  value: string;
  label: string;
  support?: string;
};

export type CaseStudyMedia = {
  type: "image" | "video" | "pdf";
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
  relevantLinks?: {
    label: string;
    href: string;
    note?: string;
  }[];
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
  "scoops-ahoy-case-study": "scoops-ahoy",
  "scoops-ahoy-brand-launch": "scoops-ahoy",
  "netflix-shop-case-study": "netflix-shop",
  "menlo-club-case-study": "menlo-club",
  "veestro-case-study": "veestro",
};

export const caseStudyPages: CaseStudyPageContent[] = [
  {
    slug: "mad-engine-tiktok-shop",
    company: "Mad Engine Global",
    companyLabel: "Mad Engine / TikTok Shop",
    logo: "/logos/mad-engine-global.jpg",
    headline: "Scaling TikTok Shop into a meaningful marketplace channel",
    subhead:
      "I took over a mostly autopilot TikTok Shop channel and helped turn it into a creator-led marketplace growth engine before paid media was live.",
    indexSummary:
      "A social commerce build across creator activation, SKU expansion, storefront quality, fulfillment reliability, and executive reporting cadence.",
    role: "SVP, Growth",
    timeframe: "Started Jan 2026",
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
      { value: "$120K → $720K", label: "Revenue run-rate" },
      { value: "720%", label: "Of original AOP goal" },
      { value: "10K → 90K+", label: "SKU expansion" },
      { value: "100-200", label: "Creators activated monthly" },
      { value: "$17 → $26", label: "AOV increase" },
      { value: "No paid media", label: "Creator-led growth before paid media" },
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/mad-engine-tiktok-shop/storefront-02.png",
      alt: "Mad Engine TikTok Shop storefront screenshot",
      caption: "The Mad Engine shopping experience on TikTok Shop.",
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
          "TikTok Shop was already live when I took ownership, but it was operating largely on autopilot and driving almost no meaningful sales before active ownership.",
          "The business problem was whether TikTok Shop could become a meaningful and margin-efficient revenue channel for a large licensed apparel portfolio. Mad Engine sells licensed apparel across major IP and entertainment brands, with top sellers including Disney apparel such as Star Wars, Marvel, and Mickey Mouse.",
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
          "Build a creator and affiliate engine around evergreen IP like Spider-Man, Mickey Mouse, and Star Wars, while supporting launch moments tied to new movies, TV releases, and franchise drops.",
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
          "We expanded the SKU feed from 10,000 products to 90,000+ products, prioritized evergreen IP and launch moments with organic creator-market fit, partnered with TikTok to increase creator incentives through aggressive commission boosts, used free-shipping thresholds as a conversion lever, and improved storefront, category, and PDP experiences.",
        ],
      },
      {
        id: "execution",
        title: "Execution / What I Did",
        body: [
          "I owned TikTok Shop sales channel strategy, transferred an internal employee into the day-to-day TikTok Shop manager role, and led prioritization, reporting, resourcing, and cross-functional coordination.",
          "The day-to-day manager handled execution with direct TikTok support while I partnered across Sales, Merchandising, Ops, Data, Finance, and Growth. The work included product catalog expansion, SKU prioritization, affiliate and creator growth, storefront and PDP improvements, coupons and promotional planning, inventory coordination, and weekly and monthly reporting.",
          "We also fixed fulfillment issues from 2025 by transitioning delivery to FedEx, reducing lost deliveries to almost zero and getting deliveries to customers within three business days.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "TikTok Shop moved from a sub-$100K 2025 baseline, using $120K as the year-over-year baseline for growth calculation, to a $720K 2026 run-rate.",
          "The channel reached 720% of the original $100K AOP goal, expanded SKU coverage from 10,000 products to 90,000+ products, increased AOV from $17 to $26, and grew affiliate creators from roughly 5-10 per month to 100-200 per month.",
          "The forecast moved from $0 to $100K to $500K, then outpaced that again. The next opportunity identified was scaling toward $1.5M with additional agency and paid media support, but these results were creator-led before paid media launched.",
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
    headline: "Netflix Has A Shop!? Campaign",
    subhead:
      "A two-week BFCM campaign that turned a common fan reaction into a commerce hook for Netflix.Shop.",
    indexSummary:
      "A BFCM campaign across hero video, paid social, Google PMax, influencer seeding, direct mail, email, affiliate, and organic social.",
    role: "Head of Growth, Netflix.Shop",
    timeframe: "Planning started Aug 2023 / Campaign ran BFCM 2023",
    category: "DTC Commerce / Acquisition / BFCM",
    platforms: [
      "Facebook",
      "Instagram",
      "TikTok",
      "Google PMax",
      "Klaviyo",
      "Rakuten",
      "PostPilot",
      "GA4",
      "Shopify",
      "Influencer seeding",
      "Organic social",
      "Direct mail",
    ],
    tags: ["DTC commerce", "BFCM", "Paid social", "Influencer"],
    metrics: [
      { value: "13M+", label: "Consumers reached in two weeks" },
      { value: "2.5M", label: "Visitors to Netflix.Shop" },
      { value: "7 figures", label: "Revenue in two weeks" },
      { value: "13.5%", label: "Average hero-video CTR" },
      { value: "25,000", label: "Mini catalogues mailed" },
      { value: "4x", label: "Mini catalogue ROAS" },
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/netflix-shop/netflix-shop-instagram-bfcm-stranger-things.png",
      alt: "Netflix.Shop Instagram post from the Netflix Has A Shop campaign",
      caption: "Social creative from the Netflix Has A Shop!? BFCM campaign.",
      orientation: "landscape",
    },
    media: [
      {
        type: "image",
        src: "/case-studies/netflix-shop/achievement-deck-page-07.png",
        alt: "Netflix Has A Shop campaign overview from achievement deck",
        caption: "Campaign overview slide showing the core BFCM creative hook and channel plan.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/netflix-shop/achievement-deck-page-08.png",
        alt: "Netflix Has A Shop campaign results from achievement deck",
        caption: "Campaign results slide with reach, revenue, ROAS, influencer, and direct-mail performance.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/netflix-shop/netflix-shop-bfcm-product-grid.jpg",
        alt: "Netflix.Shop BFCM product grid social creative",
        caption: "BFCM social creative connected Netflix fandom to the promotional retail moment.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/netflix-shop/netflix-shop-instagram-girls-partnership.png",
        alt: "Netflix.Shop influencer partnership Instagram post",
        caption: "Influencer and partner content supported the campaign across social channels.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/netflix-shop/netflix-shop-influencer-01.jpg",
        alt: "Netflix.Shop influencer content example",
        caption: "Influencer content helped translate awareness into discovery and site traffic.",
        orientation: "portrait",
      },
      {
        type: "image",
        src: "/case-studies/netflix-shop/netflix-shop-influencer-02.jpg",
        alt: "Netflix.Shop creator content example",
        caption: "Creator-led content expanded the campaign beyond paid and owned channels.",
        orientation: "portrait",
      },
    ],
    relevantLinks: [
      {
        label: "Instagram campaign example",
        href: "https://www.instagram.com/p/Cz67prBJesC/",
        note: "Use the screenshot on-site if the embed is unstable.",
      },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "One of the most common reactions I heard while leading Netflix.Shop growth was, \"Netflix has a shop?\" Instead of treating that as a problem, I turned it into the creative hook for a BFCM campaign.",
          "Planning started in August 2023, and the campaign ran for two weeks around BFCM. The goal was to make Netflix.Shop visible during the noisiest promotional window of the year while using the lowest prices of the year to turn fan attention into commerce demand.",
        ],
      },
      {
        id: "goals",
        title: "Goals",
        body: [
          "The work had two core goals: build awareness that Netflix.Shop was the official Netflix store and drive BFCM sales.",
        ],
        bullets: [
          "Break through promotional noise during BFCM.",
          "Increase site traffic and introduce fans to the shop assortment.",
          "Use humor and fan familiarity to convert confusion into discovery.",
          "Turn fan attention into measurable commerce demand.",
        ],
      },
      {
        id: "strategy",
        title: "Strategy",
        body: [
          "The campaign was led by a hero video series built around the \"Netflix Has A Shop!?\" idea, then surrounded by supplementary content across paid, organic, influencer, email, affiliate, direct mail, and product-focused creative.",
          "The strategy was to make the campaign feel native to Netflix fandom while still operating like a retail launch: tight creative sequencing, broad channel coverage, budget allocation by funnel stage, and active optimization as results came in.",
        ],
      },
      {
        id: "execution",
        title: "Execution / What I Did",
        body: [
          "I owned strategy, channel planning, creative direction, agency coordination, merchandising coordination, budget allocation, execution, optimization, and reporting.",
          "The campaign deployed 30+ assets across paid social on Facebook, Instagram, and TikTok; paid search through Google PMax; email through Klaviyo; affiliate through Rakuten; direct mail through PostPilot; organic social; and influencer seeding.",
          "I managed internal and external teams to create and deploy the assets, then handled campaign execution and performance optimization as data came in.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "Over two weeks, the campaign deployed 30+ assets, reached more than 13M consumers, drove 2.5M visitors to Netflix.Shop, and produced seven-figure revenue at a 2.5x blended ROAS.",
          "The hero video series averaged a 13.5% CTR with 15+ seconds of average viewing time. Nearly 40 influencers promoted Netflix.Shop, reaching more than 1M consumers.",
          "The team mailed 25,000 mini catalogues that generated a 4x ROAS. The campaign also earned press in Vice and Daily Beast. Excluding brand and awareness assets, the sales-oriented campaign view reached roughly 3.5-4x ROAS.",
        ],
      },
      {
        id: "why-it-mattered",
        title: "Why It Mattered",
        body: [
          "The campaign showed how a DTC commerce business inside a major entertainment brand could use fan culture, paid media, organic reach, creators, affiliate, email, direct mail, and merchandising as one coordinated retail moment.",
          "It also turned an awareness gap into a creative advantage: people did not know Netflix had a shop, so the campaign made that discovery the point.",
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
    slug: "scoops-ahoy",
    company: "Netflix Consumer Products",
    companyLabel: "Scoops Ahoy / Netflix",
    logo: "/logos/netflix.svg",
    headline: "Bringing Scoops Ahoy from screen to shelf",
    subhead:
      "A Netflix Consumer Products launch that turned a fictional Stranger Things ice cream brand into a real Walmart retail and digital-commerce campaign.",
    indexSummary:
      "A retail and digital launch across Walmart traffic, paid social, paid search, organic, influencer seeding, PR, activations, and product creative.",
    role: "Head of Growth, Netflix.Shop / Co-lead, digital and retail launch",
    timeframe: "Planned 2022 / Campaign ran Sep-Dec 2023",
    category: "Retail Commerce / Consumer Products / Social Commerce",
    platforms: [
      "Netflix Consumer Products",
      "Walmart",
      "Golden West Food Group",
      "Instagram",
      "TikTok",
      "YouTube",
      "Google Ads",
      "Shopping ads",
      "Paid social",
      "Paid search",
      "Organic social",
      "Influencer seeding",
      "PR",
      "Retail activations",
    ],
    tags: ["Retail commerce", "Consumer products", "Paid social", "Walmart"],
    metrics: [
      { value: "93M+", label: "Consumers reached" },
      { value: "2.1M+", label: "Walmart visitors" },
      { value: "2.2%", label: "Average CTR" },
      { value: "$0.37", label: "Cost per view" },
      { value: "2", label: "Webby awards" },
      { value: "2024", label: "Sales contract extended" },
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/scoops-ahoy/scoops-ahoy-pint.jpg",
      alt: "Scoops Ahoy ice cream pint product photography",
      caption: "Scoops Ahoy moved from a fictional Stranger Things brand into a real Walmart product launch.",
      orientation: "landscape",
    },
    media: [
      {
        type: "image",
        src: "/case-studies/scoops-ahoy/scoops-ahoy-sundae.jpg",
        alt: "Scoops Ahoy product and sundae creative",
        caption: "Product photography supported Walmart.com, social, PR, and campaign creative.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/scoops-ahoy/scoops-ahoy-webby.jpg",
        alt: "Webby Awards page for Netflix Scoops Ahoy campaign",
        caption: "The campaign won two Webby awards for Best Social Commerce/Shopping Campaign.",
        orientation: "portrait",
      },
      {
        type: "image",
        src: "/case-studies/scoops-ahoy/achievement-deck-page-05.png",
        alt: "Scoops Ahoy brand launch overview from achievement deck",
        caption: "Launch overview slide covering goals, partners, and channel strategy.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/scoops-ahoy/achievement-deck-page-06.png",
        alt: "Scoops Ahoy campaign results from achievement deck",
        caption: "Results slide covering digital reach, Walmart traffic, press, awards, sell-through, and retail shelf impact.",
        orientation: "landscape",
      },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Near the end of 2022, Netflix Consumer Products was looking for ways to sustain Stranger Things cultural relevance while the next season was still years away. The opportunity was to bring Scoops Ahoy, the fictional ice cream brand from season 3, into the real world.",
          "I co-led the digital and retail launch work as part of a cross-functional Tiger Team, helping turn the idea into a campaign that could drive awareness, Walmart traffic, product demand, and retail confidence.",
        ],
      },
      {
        id: "goals",
        title: "Goals",
        body: [
          "Because the brand did not exist in real life yet, the campaign had to do two things at once: teach fans that Scoops Ahoy was real and drive traffic to buy pints at Walmart.",
        ],
        bullets: [
          "Sustain Stranger Things relevance between seasons.",
          "Drive awareness that Scoops Ahoy was now a real product.",
          "Send qualified traffic to Walmart.com for delivery or in-store pickup.",
          "Support retail sell-through during a low-season fall and winter window.",
          "Create enough demand to prove the product deserved continued shelf space.",
        ],
      },
      {
        id: "strategy",
        title: "Strategy",
        body: [
          "The campaign treated Scoops Ahoy as both an entertainment moment and a retail-commerce launch. The work connected Netflix fandom, Walmart availability, product creative, paid and organic channels, PR, influencer seeding, and market activations.",
          "We used organic marketing across YouTube, Instagram, and TikTok on multiple Netflix and Stranger Things handles; paid social on Instagram and TikTok to drive video views and Walmart traffic; paid search through Google Ads and Shopping ads; PR with news, editorial, and bloggers; Scoops Ahoy ice cream truck activations in Houston, Las Vegas, and Atlanta; and influencer seeding.",
        ],
      },
      {
        id: "execution",
        title: "Execution / What I Did",
        body: [
          "I helped lead the digital and retail launch from a growth and commerce standpoint, working across Consumer Products, Title Marketing, Golden West Food Group, Walmart, and agency partners.",
          "Throughout 2023, I led creative direction and execution for marketing assets based on performance marketing best practices and prior brand/CRO work. That included launch trailers, paid assets, and product imagery for Walmart.com.",
          "I also managed key digital marketing channels directly, including paid media and influencer work, while coordinating with cross-functional teams for organic and agency partners for PR and activations.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "From September to December 2023, the campaign reached more than 93M consumers through digital channels and drove more than 2.1M visitors to Walmart.com to buy Scoops Ahoy pints through delivery or in-store pickup.",
          "CTR exceeded product-marketing benchmarks, averaging 2.2% across assets compared with roughly 1% for comparable product marketing. CPV came in at $0.37 per person.",
          "The campaign was featured in outlets including Variety, Elite Daily, Decider, People, and others. It also won two Webby awards for Best Social Commerce/Shopping Campaign.",
          "Stores sold out of pints multiple times during the fall and winter period, Walmart buyers dedicated exclusive freezer shelf space after initial sales performance, and the sales contract was extended through the end of 2024.",
        ],
      },
      {
        id: "why-it-mattered",
        title: "Why It Mattered",
        body: [
          "Scoops Ahoy showed how consumer-products growth works when entertainment, retail, product, and performance marketing move together. The campaign did not only create awareness; it translated fandom into Walmart traffic, sell-through, retail confidence, and extended distribution.",
          "It also became a strong example of how licensed IP can become a real commerce asset when the launch connects creative, paid media, organic reach, PR, influencer, activations, and retail operations.",
        ],
      },
    ],
    related: ["netflix-shop", "mad-engine-tiktok-shop"],
    seo: {
      title: "Scoops Ahoy Case Study",
      description:
        "A Netflix Consumer Products and retail commerce case study on launching Scoops Ahoy from Stranger Things into Walmart through paid social, paid search, organic, PR, influencer seeding, activations, and retail coordination.",
    },
  },
  {
    slug: "menlo-club",
    company: "Menlo Club / Five Four Group",
    companyLabel: "Menlo Club / Five Four Group",
    logo: "/logos/menlo-club-linkedin-logo.jpg",
    logoClass: "case-logo-square",
    headline: "Menlo Club Premium Seasonal Subscription Launch",
    subhead:
      "A three-year business-model build that moved a monthly subscription into a premium seasonal commerce experience.",
    indexSummary:
      "A subscription relaunch across BigCommerce, add-to-box commerce, packaging, shipping, merchandising, customer experience, and lifecycle marketing.",
    role: "Director, Growth / GM of the launch",
    timeframe: "Concepted Feb 2018 / MVP late 2018 / Full launch Q4 2020",
    category: "Subscription Growth / Retention / BigCommerce",
    platforms: [
      "BigCommerce",
      "Sailthru",
      "Facebook",
      "Instagram",
      "Pepperjam",
      "Today's Business",
      "Geckoboard",
      "Google Analytics",
      "Email/SMS",
      "Paid social",
      "Affiliate",
      "Merchandising",
      "Product",
      "Engineering",
      "Logistics",
      "Customer service",
    ],
    tags: ["Subscription", "Retention", "BigCommerce", "Launch GM"],
    metrics: [
      { value: "25% → 12%", label: "Churn rate improvement" },
      { value: "$65", label: "AOV increase" },
      { value: "10,000+", label: "Members in first quarter" },
      { value: "3 years", label: "Concept to full launch" },
      { value: "6 teams", label: "Departments coordinated" },
      { value: "Add-to-box", label: "Hybrid commerce model" },
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/menlo-club/menlo-premium-social-02.jpg",
      alt: "Menlo Club Premium Seasonal launch social creative",
      caption: "Premium Seasonal launch creative connected the upgraded subscription model to a more elevated customer.",
      orientation: "landscape",
    },
    media: [
      {
        type: "image",
        src: "/case-studies/menlo-club/achievement-deck-page-03.png",
        alt: "Premium Seasonal launch overview from achievement deck",
        caption: "Launch overview slide covering the subscription model, role, goals, and cross-functional build.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/menlo-club/achievement-deck-page-04.png",
        alt: "Premium Seasonal results from achievement deck",
        caption: "Results slide covering churn reduction, AOV lift, member adoption, and launch assets.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/menlo-club/menlo-premium-social-01.jpg",
        alt: "Menlo Club Premium Seasonal product social creative",
        caption: "Premium Seasonal product creative helped position the launch as a higher-value subscription experience.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/menlo-club/menlo-premium-video-still.jpg",
        alt: "Menlo Club Premium Seasonal launch video still",
        caption: "Launch video and social content explained the upgraded seasonal model.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/menlo-club/menlo-premium-seasonal-catalog.jpg",
        alt: "Menlo Club Premium Seasonal collection catalog page",
        caption: "Seasonal merchandising and collection previews supported the upgraded subscription experience.",
        orientation: "portrait",
      },
      {
        type: "pdf",
        src: "/case-studies/menlo-club/premium-seasonal-magazine.pdf",
        alt: "Premium Seasonal digital magazine and lookbook PDF",
        caption: "Premium Seasonal magazine/lookbook used to preview each collection and support the upgraded subscription experience.",
        orientation: "landscape",
      },
    ],
    relevantLinks: [
      {
        label: "Premium Seasonal launch video",
        href: "https://www.youtube.com/watch?v=0mqC60QsVDo&ab_channel=MenloHouse",
        note: "Launch video explaining the Premium Seasonal service.",
      },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Premium Seasonal was one of the biggest operating builds of my career: a new quarterly subscription and commerce model that took almost three years from concept to MVP to full launch.",
          "The monthly subscription business was pressured by churn, customer fatigue, CAC, product frequency, and customer experience limitations. Premium Seasonal was built as a higher-value quarterly subscription and add-to-box commerce model that could give customers a better alternative to cancelling.",
        ],
      },
      {
        id: "goals",
        title: "Goals",
        body: [
          "The business needed to improve subscription economics without losing the existing customer base or relying only on more acquisition volume.",
        ],
        bullets: [
          "Attract a more premium and elevated customer.",
          "Give monthly subscribers an alternative to cancelling.",
          "Increase LTV through a $99 subscription and add-to-box shopping.",
          "Reduce churn and improve CAC economics.",
          "Build a better subscription experience across product, shipping, customization, service, and merchandising.",
        ],
      },
      {
        id: "strategy",
        title: "Strategy",
        body: [
          "As the business owner and GM of the launch, I worked with leaders across Logistics, Merchandising, Customer Service, Product, Engineering, and Marketing to design a better subscription system.",
          "The strategy moved the model from monthly to quarterly, added hybrid e-commerce through add-to-box, elevated product and packaging quality, rebuilt the website on BigCommerce, and gave customers more control through customization, subscription switching, interactive style guides, personal stylists, and a digital magazine/lookbook.",
        ],
      },
      {
        id: "execution",
        title: "Execution / What I Did",
        body: [
          "I led development and launch across the organization while maintaining responsibility for the monthly subscription and sister e-commerce brands.",
          "What launched included the quarterly subscription service, add-to-box commerce, an elevated product line, three new premium shipping boxes, USPS and UPS shipping options, a BigCommerce rebuild, interactive style guides, customization, subscription switching, digital magazine/lookbooks, and personal stylists assigned to customers.",
          "The launch connected merchandising, fulfillment, customer service, product, engineering, marketing, paid media, lifecycle, influencer seeding, affiliate, and analytics into one operating plan.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "Premium Seasonal decreased overall churn from 25% to 12%, a 52% reduction. AOV increased by $65 per customer, lifting LTV because customers were charged more per box and could add incremental products.",
          "The service reached more than 10,000 members within the first quarter and gave the business a higher-value model for customers who were burning out on monthly shipments.",
        ],
      },
      {
        id: "why-it-mattered",
        title: "Why It Mattered",
        body: [
          "The project showed that subscription growth is not only acquisition. The business needed merchandising, fulfillment, customer service, product, packaging, website, lifecycle, and reporting systems working together to improve retention and customer value.",
          "It also taught me how to run a business across functions, not only a marketing department.",
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
    headline: "Veestro Plant-Based Rebrand",
    subhead:
      "A brand, website, acquisition, and lifecycle reset that moved Veestro from vegan-only positioning toward broader plant-based growth.",
    indexSummary:
      "A plant-based rebrand and Shopify 2.0 rebuild across research, messaging, CRO, paid media, affiliate, PR, influencer, lifecycle, and organic channels.",
    role: "VP, Marketing",
    timeframe: "Phased releases after roughly 60 days / Full rebrand after 5 months",
    category: "Rebrand / CAC Reduction / Shopify 2.0",
    platforms: [
      "Meta",
      "Google",
      "Rakuten",
      "Hotjar",
      "Google Optimize",
      "Google Analytics",
      "Klaviyo",
      "Attentive",
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
      { value: "$300 → $120", label: "CPA reduction" },
      { value: "60%", label: "CAC drop" },
      { value: "15%", label: "Sitewide CVR lift" },
      { value: "30-40%", label: "New email open rates" },
      { value: "1-1.2%", label: "New email CTR" },
      { value: "6 figures", label: "Monthly winback revenue" },
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/veestro/veestro-brand-guidelines.jpg",
      alt: "Veestro brand guidelines visual",
      caption: "The repositioning moved Veestro from vegan-only messaging toward broader plant-based eating.",
      orientation: "landscape",
    },
    media: [
      {
        type: "image",
        src: "/case-studies/veestro/achievement-deck-page-09.png",
        alt: "Veestro rebrand overview from achievement deck",
        caption: "Rebrand overview slide covering the strategic shift, goals, and early execution.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/veestro/achievement-deck-page-10.png",
        alt: "Veestro rebrand results from achievement deck",
        caption: "Results slide covering CAC, CVR, paid media, lifecycle, influencer, and traffic gains.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/veestro/veestro-brand-pillars.jpg",
        alt: "Veestro brand pillars visual",
        caption: "Brand pillars helped make the plant-based positioning more accessible and commercially useful.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/veestro/veestro-brand-voice.jpg",
        alt: "Veestro brand voice visual",
        caption: "Messaging work clarified the brand promise, voice, and customer-facing reasons to choose Veestro.",
        orientation: "landscape",
      },
      {
        type: "image",
        src: "/case-studies/veestro/veestro-lifestyle-box.jpg",
        alt: "Veestro lifestyle packaging visual",
        caption: "Updated imagery supported a more modern plant-based brand system.",
        orientation: "landscape",
      },
      {
        type: "pdf",
        src: "/case-studies/veestro/veestro-rebrand.pdf",
        alt: "Veestro rebrand guide PDF",
        caption: "Veestro rebrand guide and visual system for the plant-based positioning reset.",
        orientation: "landscape",
      },
    ],
    relevantLinks: [
      {
        label: "Veestro Shopify / CRO prototype",
        href: "https://www.figma.com/proto/Qemu8swjttehhagGhhAGOc/Veestro---Shopify?node-id=1634-30047&starting-point-node-id=1634%3A30047",
        note: "Figma prototype for Shopify rebuild direction.",
      },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "When I joined Veestro, the business was stuck in vegan-only positioning and an outdated brand aesthetic. That narrower message limited the audience at the same time iOS 14.5 had hurt paid media performance.",
          "I led a rebrand and performance reset that shifted the brand toward broader plant-based eating, refreshed the website and creative system, rebuilt lifecycle flows, and reopened growth across paid, affiliate, PR, influencer, and organic channels.",
        ],
      },
      {
        id: "goals",
        title: "Goals",
        body: [
          "The rebrand needed to expand the audience without alienating existing customers, while improving the economics of acquisition and retention.",
        ],
        bullets: [
          "Move from vegan-first to broader plant-based positioning.",
          "Decrease CAC after the post-iOS 14.5 paid media disruption.",
          "Increase LTV through email/SMS, loyalty, referrals, and winback flows.",
          "Improve website conversion, checkout clarity, and product education.",
          "Refresh paid, lifecycle, affiliate, influencer, PR, and organic channels.",
        ],
      },
      {
        id: "strategy",
        title: "Strategy",
        body: [
          "I moved Veestro from exclusionary vegan-first messaging toward a more inclusive plant-based voice. The strategy combined brand guide and messaging work with a phased website update, Shopify 2.0 direction, audience-specific landing pages, affiliate launch, paid channel refresh, and lifecycle rebuild.",
          "We launched a 1.5 website update while building toward Shopify 2.0, simplified checkout, improved speed and menu/nutrition information, and created landing pages for different audiences so paid traffic could convert against more relevant messaging.",
        ],
      },
      {
        id: "execution",
        title: "Execution / What I Did",
        body: [
          "I led strategy directly as VP Marketing, working with my marketing team, co-founders, and agencies across repositioning, website/CRO, paid acquisition, lifecycle, affiliate, influencer, PR, and organic channel refreshes.",
          "The execution included a brand guide and messaging system, Shopify 2.0 and CRO direction, landing page testing, paid social and paid search refreshes, Rakuten affiliate launch, and email/SMS rebuild in Klaviyo and Attentive.",
          "Lifecycle work included rebuilding Welcome and Abandoned Cart flows and adding Abandoned Browse, Anniversary, and Winback Cancelled Customer flows.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "Within three months, CPA dropped from roughly $300 to $120, a 60% CAC reduction, while sitewide CVR increased by 15%. Paid CTR improved from 0.2-0.3% to 0.5-1%.",
          "Email open rates improved from 20-25% to 30-40%, email CTR improved from 0.1-0.2% to 1-1.2%, and winback flows quickly drove six figures in monthly revenue.",
          "The team onboarded 20+ influencers that promoted the food at little to no cost and drove hundreds of thousands in traffic over three months.",
        ],
      },
      {
        id: "why-it-mattered",
        title: "Why It Mattered",
        body: [
          "The work widened the audience while preserving the core product promise. It connected brand positioning, channel economics, CRO, lifecycle, customer segmentation, and Shopify execution into one growth reset.",
          "It also showed how repositioning only matters commercially when it is paired with landing pages, paid media, lifecycle, affiliate, influencer, and site execution.",
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
