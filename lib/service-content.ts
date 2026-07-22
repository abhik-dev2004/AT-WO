/**
 * Page content for every service, keyed by the slug used in lib/services.ts.
 * Structure mirrors the Digital Advertising page framework:
 * hero → stats (3) → principles (3) → capabilities (4) → process (3) → team.
 *
 * `heroImage` is intentionally empty for services awaiting artwork; the
 * template renders a gradient placeholder until a path is supplied.
 */

export type Stat = { value: string; body: string };
export type TitledBlock = { title: string; body: string };

export type ServiceContent = {
  name: string;
  heroImage: string;
  hero: {
    headline: string;
    /** Substring of `headline` rendered with the gradient treatment. */
    highlight: string;
    body: string;
  };
  stats: Stat[];
  principles: TitledBlock[];
  capabilities: TitledBlock[];
  process: TitledBlock[];
  team: {
    quote: string;
    roles: string[];
  };
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  /* ---------------------------------------------------------------- *
   *  Brand Marketing
   * ---------------------------------------------------------------- */
  "web-experience": {
    name: "Web Experience",
    heroImage: "/web-exp.jpg",
    hero: {
      headline: "Build a website buyers can find and trust",
      highlight: "find and trust",
      body: "Your website should not be a static brochure. We design and build fast, clear, search-ready experiences that help prospects understand your value, take action, and find you across search and AI discovery.",
    },
    stats: [
      {
        value: "84%",
        body: "Consumers find a business with its own website more credible.",
      },
      { value: "x7", body: "Lead generation increase from optimized landing pages." },
      {
        value: "96.55%",
        body: "Pages get no Google traffic; discoverability needs strategy.",
      },
    ],
    principles: [
      {
        title: "Clarity before style",
        body: "Every page must make your value easy to understand before design details compete for attention.",
      },
      {
        title: "Performance is experience",
        body: "Speed, structure, and mobile usability are treated as core experience features, not technical extras.",
      },
      {
        title: "Built to be found",
        body: "We plan content, metadata, and technical structure so people and AI systems can discover the right pages.",
      },
    ],
    capabilities: [
      {
        title: "Website strategy & architecture",
        body: "We define page structure, user paths, and content priorities before design begins, so the site supports real buyer decisions instead of internal assumptions.",
      },
      {
        title: "UX/UI design & prototyping",
        body: "We turn strategy into clean interfaces, responsive layouts, and interactive prototypes that make the experience easy to review before development.",
      },
      {
        title: "High-performance website build",
        body: "We build fast, responsive, maintainable websites with the right front-end structure, integrations, and launch checks to support growth after go-live.",
      },
      {
        title: "Search & AI discoverability",
        body: "We optimize page structure, content signals, metadata, schema, and crawlability so your website is easier to find in search and emerging AI discovery paths.",
      },
    ],
    process: [
      {
        title: "Discover & Map Needs",
        body: "We review your business goals, audiences, current site, competitors, and digital footprint. You receive a clear map of what the website must communicate, fix, and support.",
      },
      {
        title: "Design & Build Pages",
        body: "We shape the sitemap, page content, UX flows, visual direction, and technical build. Each decision is tied to clarity, speed, accessibility, and conversion intent.",
      },
      {
        title: "Launch & Improve",
        body: "We test performance, responsiveness, forms, tracking, and search basics before launch. After go-live, we monitor behavior and refine the experience based on usage.",
      },
    ],
    team: {
      quote:
        "A strong website is not just a design asset. It is a working system for trust, discovery, and conversion. We build every page to help a visitor understand the offer, believe the brand, and know what to do next.",
      roles: ["Web Experience Strategist", "Senior UX/UI Designer", "Full-Stack Developer"],
    },
  },

  "brand-identity": {
    name: "Brand Identity",
    heroImage: "/brand-identity.jpg",
    hero: {
      headline: "Make your brand clear, trusted, and unmistakable",
      highlight: "clear, trusted, and unmistakable",
      body: "Strong brands do not rely on visuals alone. We define your voice, messaging, logo system, typography, color, and iconography so every touchpoint feels consistent and easier for buyers to remember.",
    },
    stats: [
      {
        value: "77%",
        body: "B2B buyers consider brand awareness when deciding who to trust.",
      },
      { value: "23%", body: "Average revenue increases from consistent branding." },
      {
        value: "80%",
        body: "People trust brands they use, making consistency central to loyalty.",
      },
    ],
    principles: [
      {
        title: "Clarity before creativity",
        body: "We make the brand easy to understand first, then build a visual system that makes it memorable.",
      },
      {
        title: "Consistency builds trust",
        body: "Your identity should feel familiar across website, social, sales decks, email, and every customer touchpoint.",
      },
      {
        title: "Strategy drives design",
        body: "Every logo, color, font, and message choice is tied to positioning, audience needs, and business goals.",
      },
    ],
    capabilities: [
      {
        title: "Brand strategy & messaging",
        body: "We define your positioning, voice, value proposition, and core messaging so your team can explain what you do with confidence and consistency.",
      },
      {
        title: "Visual identity systems",
        body: "We create logo suites, typography, color palettes, iconography, and design rules that give your brand a recognizable and professional presence.",
      },
      {
        title: "Brand guidelines & usage",
        body: "We document how the brand should look, sound, and behave across channels, giving your internal teams and partners a practical system to follow.",
      },
      {
        title: "Launch-ready brand assets",
        body: "We prepare the assets your team needs to activate the identity across web, social, presentations, email, and marketing campaigns without guesswork.",
      },
    ],
    process: [
      {
        title: "Discover & Define",
        body: "We study your business, audience, competitors, current materials, and growth goals. The output is a clear brand brief that identifies what must change and what the identity needs to communicate.",
      },
      {
        title: "Design & Refine",
        body: "We translate the strategy into identity concepts, messaging directions, and visual systems. Your team reviews practical options, then we refine the strongest route into a cohesive brand direction.",
      },
      {
        title: "Document & Activate",
        body: "We finalize the logo suite, colors, typography, iconography, and messaging. You receive guidance for consistent use across web, sales, social, and email.",
      },
    ],
    team: {
      quote:
        "Brand identity is not decoration. It is the operating system for how a company is recognized, remembered, and trusted. Our work connects strategy, language, and design so your brand can show up clearly everywhere it matters.",
      roles: ["Brand Strategist", "Visual Identity Designer", "Brand Messaging Lead"],
    },
  },

  "social-media": {
    name: "Social Media",
    heroImage: "/social-media.jpg",
    hero: {
      headline: "Turn social presence into lasting brand momentum",
      highlight: "lasting brand momentum",
      body: "Posting alone does not build a community. We define the right platforms, content pillars, publishing rhythm, and engagement system so your social channels earn attention, guide conversation, and strengthen brand trust.",
    },
    stats: [
      {
        value: "5.24B",
        body: "Social media user identities worldwide. Your buyers are already active there.",
      },
      {
        value: "18h40m",
        body: "Average weekly social use. Consistent, useful content earns repeated attention.",
      },
      {
        value: "73%",
        body: "Consumers may buy from a competitor when brands do not respond on social.",
      },
    ],
    principles: [
      {
        title: "Platform fit over presence",
        body: "We choose channels based on audience behavior, content strengths, and business goals, not pressure to be everywhere.",
      },
      {
        title: "Utilization is key",
        body: "Every post should inform, guide, entertain, or earn trust. Content without a role quickly becomes noise.",
      },
      {
        title: "Daily community management",
        body: "We treat comments, messages, and discussions as brand touchpoints that need timely, human, and consistent care.",
      },
    ],
    capabilities: [
      {
        title: "Social strategy & planning",
        body: "We define priority platforms, audience segments, content pillars, posting cadence, and optimization roadmap so your team has a clear system for showing up consistently.",
      },
      {
        title: "Content creation & adaptation",
        body: "We turn raw photos, videos, interviews, and campaign ideas into platform-ready posts, captions, short-form assets, and creative variations built for each channel.",
      },
      {
        title: "Publishing calendar management",
        body: "We build and manage practical posting calendars that balance brand stories, educational content, campaign moments, and community prompts without last-minute guesswork.",
      },
      {
        title: "Community engagement support",
        body: "We monitor interactions, moderate discussions, and respond with clear brand-aligned guidance so your audience feels heard and your channels stay healthy.",
      },
    ],
    process: [
      {
        title: "Discover & Position",
        body: "We review your brand, audience, competitors, existing channels, content assets, and business goals. The output is a focused social brief that identifies where to show up and what each platform must achieve.",
      },
      {
        title: "Plan & Create Assets",
        body: "We develop content pillars, campaign themes, posting calendar, messaging angles, and asset requirements. Then we shape raw media into ready-to-publish posts designed for the right format and context.",
      },
      {
        title: "Publish & Optimize",
        body: "We publish, monitor engagement, manage interactions, and review performance patterns. Each cycle informs stronger topics, better creative, and a practical roadmap for growth.",
      },
    ],
    team: {
      quote:
        "We see social media as a living brand channel, not a posting checklist. Our job is to connect platform strategy, useful content, and daily community care so every interaction strengthens recognition, relevance, and trust.",
      roles: ["Social Media Strategist", "Social Content Lead", "Community Manager"],
    },
  },

  /* ---------------------------------------------------------------- *
   *  Performance Marketing
   * ---------------------------------------------------------------- */
  "digital-advertising": {
    name: "Digital Advertising",
    heroImage: "/digital-advertising-hero.jpg",
    hero: {
      headline: "Visibility is easy. Profitable attention is the work.",
      highlight: "Profitable attention",
      body: "In a landscape where every brand is advertising, the advantage goes to those who combine sharper targeting, more resonant creative, and tighter measurement. We build digital advertising programs that earn attention and actually convert it.",
    },
    stats: [
      {
        value: "$740B+",
        body: "Global digital ad spend in 2025. The channel is non-negotiable to grow your business.",
      },
      {
        value: "10,000+",
        body: "Ads the average consumer is exposed to daily. Attention is the scarcest resource.",
      },
      {
        value: "3x",
        body: "Higher conversion rates when creative and audience strategy are aligned from the start.",
      },
    ],
    principles: [
      {
        title: "Relevance over reach",
        body: "We prioritize getting in front of buyers who actually have a reason to care and cut everything else to optimize your spend and conversion.",
      },
      {
        title: "No black boxes",
        body: "Every budget decision, audience choice, and performance adjustment comes with a clear rationale, so you're always informed.",
      },
      {
        title: "Optimize toward business outcomes",
        body: "We optimize for the metrics that actually move the business: pipeline, revenue, and customer acquisition cost.",
      },
    ],
    capabilities: [
      {
        title: "Audience intelligence & targeting",
        body: "We build audience frameworks from first-party data, behavioral signals, and market research, so every campaign starts with a precise picture of who we're trying to reach and why.",
      },
      {
        title: "Creative asset development",
        body: "We develop ad creative that's built to convert, from messaging frameworks and copy to visual direction and platform-native formats, aligned to each stage of the funnel.",
      },
      {
        title: "Campaign management & optimization",
        body: "We manage campaigns actively by adjusting bids, rotating creative, refining audiences, and reallocating budget in real time based on what the data tells us is working.",
      },
      {
        title: "Performance analytics & reporting",
        body: "We translate raw campaign data into clear business insight, tracking the metrics that matter, identifying what's driving results, and surfacing the decisions that need to be made next.",
      },
    ],
    process: [
      {
        title: "Discover & Diagnose",
        body: "We audit your current position, including existing data, past campaign performance, competitive landscape, and audience behavior, to identify where the real opportunity is before we build anything.",
      },
      {
        title: "Strategize & Build",
        body: "We design the campaign architecture, develop creative assets, set up tracking and attribution, and align every channel to a clear strategic brief before a single dollar goes live.",
      },
      {
        title: "Launch, Optimize & Scale",
        body: "We go live with precision, monitor performance in real time, run structured tests, and continuously reallocate budget toward what's working, compounding returns with every cycle.",
      },
    ],
    team: {
      quote:
        "Every dollar in digital advertising lives or dies on the quality of the data underneath it. We make sure the technology, the data, and the strategy are all pulling in the same direction, because that's the only way to build something that compounds.",
      roles: ["Advertising Strategist", "Technology Lead", "Paid Media Specialist"],
    },
  },

  "email-marketing": {
    name: "Email Marketing",
    heroImage: "/email-marketing.jpg",
    hero: {
      headline: "Turn inbox attention into measurable demand.",
      highlight: "measurable demand",
      body: "Email should do more than announce. We build segmented campaigns, lifecycle journeys, and testable creative that keep prospects engaged, move buyers forward, and strengthen loyalty after the first conversion.",
    },
    stats: [
      {
        value: "$36",
        body: "Average return for every $1 spent when email programs are measured and optimized.",
      },
      {
        value: "4.9B",
        body: "Projected email users by 2028. Strong inbox strategy keeps brands close to buyers.",
      },
      {
        value: "320%",
        body: "More revenue from automated emails than non-automated sends in campaign programs.",
      },
    ],
    principles: [
      {
        title: "Permission before promotion",
        body: "We treat every send as an earned touchpoint, using consent, relevance, and timing to protect trust.",
      },
      {
        title: "Journeys over blasts",
        body: "Campaigns are built around lifecycle moments, so each message has a clear purpose and next step.",
      },
      {
        title: "Measure what matters",
        body: "We go beyond opens to track clicks, conversions, audience quality, and the behaviors that signal intent.",
      },
    ],
    capabilities: [
      {
        title: "Lifecycle journey development",
        body: "We map welcome, nurture, conversion, retention, and re-engagement flows so prospects and customers receive the right message at the right moment.",
      },
      {
        title: "Audience segmentation strategy",
        body: "We organize audiences by behavior, source, interest, lifecycle stage, and purchase signals, helping every campaign feel specific instead of generic.",
      },
      {
        title: "Email creative & testing",
        body: "We create subject lines, copy, layouts, and calls to action, then run structured A/B tests to learn what earns attention and drives response.",
      },
      {
        title: "Deliverability & reporting",
        body: "We monitor list health, authentication basics, engagement, clicks, conversions, and revenue signals so campaigns reach inboxes and produce clear decisions.",
      },
    ],
    process: [
      {
        title: "Audit & Segment",
        body: "We review your list health, past campaigns, customer journeys, platform setup, and audience data. You receive a clear view of what to keep, fix, segment, or stop before new campaigns launch.",
      },
      {
        title: "Build Journeys & Test",
        body: "We define lifecycle flows, campaign themes, creative requirements, segmentation rules, and A/B testing plans. Then we prepare the emails, checks, and measurement setup before launch.",
      },
      {
        title: "Launch & Optimize",
        body: "We launch campaigns, monitor delivery and engagement, compare test results, and refine content, timing, and segments. Each cycle sharpens email's role in demand and loyalty.",
      },
    ],
    team: {
      quote:
        "Email works when it respects the relationship, not when it floods the inbox. We combine clean data, useful content, testing, and lifecycle strategy so every message has a reason to exist and a result to measure.",
      roles: ["Email Marketing Strategist", "Lifecycle Campaign Lead", "Marketing Analytics Lead"],
    },
  },

  "marketing-intelligence": {
    name: "Marketing Intelligence",
    heroImage: "/marketing-strategy.jpg",
    hero: {
      headline: "See the market before it moves against you",
      highlight: "before it moves",
      body: "Growth decisions get risky when teams rely on assumptions, outdated reports, or isolated channel data. We analyze competitors, buyers, category signals, and market shifts so your next move is grounded in evidence.",
    },
    stats: [
      { value: "x6", body: "Profitability for companies that adopt data-driven marketing." },
      {
        value: "30%",
        body: "Cost reduction for companies that optimize data-driven campaigns.",
      },
      {
        value: "20%",
        body: "Customer acquisition increase by utilizing data-informed leads targeting.",
      },
    ],
    principles: [
      {
        title: "Evidence before opinion",
        body: "We separate signal from assumption, so strategy is shaped by market behavior instead of internal guesses.",
      },
      {
        title: "Context beats dashboards",
        body: "Numbers only matter when they explain what is changing, why it matters, and what to do next.",
      },
      {
        title: "Insight must drive action",
        body: "Every analysis ends with a clear recommendation, priority, or decision path for the team.",
      },
    ],
    capabilities: [
      {
        title: "Market and competitor analysis",
        body: "We study category movement, competitor positioning, pricing, offers, search behavior, and messaging patterns to reveal where your brand can compete and win.",
      },
      {
        title: "Audience and demand insights",
        body: "We analyze buyer behavior, pain points, channel signals, and intent patterns to clarify who is most likely to convert and what they need to hear.",
      },
      {
        title: "Opportunity and risk mapping",
        body: "We identify growth openings, demand shifts, emerging threats, and weak points in the market, giving leaders a practical view of where to act next.",
      },
      {
        title: "Strategic reporting and briefs",
        body: "We turn research into concise briefs, dashboards, and recommendations that help marketing, sales, and leadership teams make aligned decisions.",
      },
    ],
    process: [
      {
        title: "Research & Frame",
        body: "We clarify the business question, current goals, target segments, and decision deadlines. Then we identify the external signals, competitors, channels, and data sources needed to answer it.",
      },
      {
        title: "Analyze & Prioritize",
        body: "We compare market data, competitor activity, audience behavior, and category trends. You receive clear findings ranked by business impact, urgency, and confidence level.",
      },
      {
        title: "Report & Activate",
        body: "We translate the analysis into practical recommendations, messaging direction, channel priorities, and next-step actions. The result is a decision-ready brief your team can use immediately.",
      },
    ],
    team: {
      quote:
        "Marketing intelligence is not research for research's sake. We look for the few signals that change a decision, then translate them into clear moves your team can make across positioning, campaigns, and growth planning.",
      roles: ["Market Intelligence Lead", "Marketing Strategist", "Data Insights Analyst"],
    },
  },

  /* ---------------------------------------------------------------- *
   *  Digital Transformation
   * ---------------------------------------------------------------- */
  "software-development": {
    name: "Software Development",
    heroImage: "/software-dev.jpg",
    hero: {
      headline: "Build software around how your business really works",
      highlight: "how your business really works",
      body: "Off-the-shelf tools force your teams into workarounds. We design and build custom web apps, internal platforms, and workflow tools that remove bottlenecks, connect data, and support scalable growth.",
    },
    stats: [
      { value: "73%", body: "Efficiency boost reported from bespoke software investments." },
      {
        value: "x5",
        body: "Revenue increase when companies are enabled by custom-built architecture.",
      },
      {
        value: "84%",
        body: "Failure rate when forcing off-the-shelf tools to fit custom workflows.",
      },
    ],
    principles: [
      {
        title: "Fit before features",
        body: "We define the workflow, users, data, and success metric before choosing features to build.",
      },
      {
        title: "Built for adoption",
        body: "A product only works if teams use it. We design clear interfaces and practical workflows that reduce friction.",
      },
      {
        title: "Maintainability matters",
        body: "We build clean, documented systems that can be improved, integrated, and supported after launch.",
      },
    ],
    capabilities: [
      {
        title: "Custom web applications",
        body: "We build web apps and portals around your actual business process, so teams stop relying on spreadsheets, manual handoffs, and disconnected tools.",
      },
      {
        title: "Workflow automation tools",
        body: "We turn repeatable operational tasks into reliable software workflows that reduce manual effort, improve accuracy, and make handoffs easier to track.",
      },
      {
        title: "Application system integrations",
        body: "We connect CRMs, databases, marketing platforms, and internal tools so data moves cleanly across the business instead of staying trapped in silos.",
      },
      {
        title: "Product modernization",
        body: "We improve outdated applications by refining architecture, interface, and performance, helping existing systems become easier to use, maintain, and scale.",
      },
    ],
    process: [
      {
        title: "Discover & Define",
        body: "We map your current workflow, users, systems, data sources, and pain points. The output is a clear product scope with priorities, success metrics, and the first version worth building.",
      },
      {
        title: "Design, Build & Test",
        body: "We create the product architecture, user flows, interface direction, and delivery plan, then build in focused cycles. You review working software early, not static assumptions.",
      },
      {
        title: "Launch & Improve",
        body: "We deploy the software, validate performance, fix friction points, and plan the next release. The goal is a stable product that keeps improving with real user feedback.",
      },
    ],
    team: {
      quote:
        "Custom software is not valuable because it is custom. It is valuable when it removes a real constraint, fits the way people work, and gives leaders cleaner visibility into the business. That is how we decide what to build.",
      roles: ["Product Strategist", "Software Architect", "Full-Stack Engineer"],
    },
  },

  "intelligent-automations-ai-agents": {
    name: "Intelligent Automations & AI Agents",
    heroImage: "/ai-agents.jpg",
    hero: {
      headline: "Turn repeatable work into intelligent execution",
      highlight: "intelligent execution",
      body: "Manual handoffs slow decisions and hide operational risk. We design secure automations and AI agents that connect approved data, execute defined tasks, and give teams more time for important decision making.",
    },
    stats: [
      { value: "x3.7", body: "Average financial return for every dollar invested in AI." },
      { value: "78%", body: "Organizations now use AI in at least one business function." },
      { value: "33%", body: "Enterprise apps expected to include agentic AI by 2028." },
    ],
    principles: [
      {
        title: "Automation with judgment",
        body: "We automate defined decisions and repeatable tasks, while keeping human review where risk, nuance, or trust matters.",
      },
      {
        title: "Data protection by design",
        body: "We define access, permissions, logs, and guardrails before agents touch business systems or sensitive data.",
      },
      {
        title: "Useful before impressive",
        body: "Every agent must save time, improve accuracy, or speed up decisions. We do not build demos without a real operating purpose.",
      },
    ],
    capabilities: [
      {
        title: "Process automation mapping",
        body: "We identify repeatable workflows, handoffs, and decision points, then design automation paths that reduce manual effort without weakening business controls.",
      },
      {
        title: "AI agent development",
        body: "We build task-specific agents that can reason over approved data, trigger actions, and support teams across sales, service, operations, and internal workflows.",
      },
      {
        title: "System integration & orchestration",
        body: "We connect agents to CRMs, databases, collaboration tools, and internal platforms so automation works inside the systems your teams already use.",
      },
      {
        title: "Governance, testing & monitoring",
        body: "We define permissions, review points, error handling, and performance checks so agents stay reliable, secure, and aligned with business rules after launch.",
      },
    ],
    process: [
      {
        title: "Discover & Prioritize",
        body: "We map workflows, data sources, systems, user roles, and risk points to find where automation will create real value. You get a prioritized automation roadmap, not a list of experiments.",
      },
      {
        title: "Design, Build & Guardrail",
        body: "We design agent logic, prompts, data access, integrations, human review steps, and fallback rules. Then we build and test in controlled cycles before connecting anything to live operations.",
      },
      {
        title: "Deploy, Monitor & Improve",
        body: "We launch with clear ownership, usage tracking, and performance monitoring. After go-live, we refine workflows, strengthen guardrails, and expand only where results justify scale.",
      },
    ],
    team: {
      quote:
        "Automation should not feel like a black box sitting on top of the business. We build agents around real workflows, controlled data access, and measurable outcomes so teams can move faster without losing visibility or trust.",
      roles: ["Automation Strategist", "AI Solutions Architect", "Integration Engineer"],
    },
  },

  "platform-development": {
    name: "Platform Development",
    heroImage: "/platform-dev.jpg",
    hero: {
      headline: "Make core platforms work the way your business does",
      highlight: "the way your business does",
      body: "ServiceNow and Salesforce can do far more than store tickets or customer records. We configure, extend, and integrate them into governed workflows that reduce manual work, improve visibility, and support scalable operations.",
    },
    stats: [
      {
        value: "70%",
        body: "New enterprise apps expected to use low-code/no-code, making governance essential.",
      },
      { value: "230%", body: "Potential ROI reported for ServiceNow App Engine." },
      {
        value: "40%",
        body: "Speed increase for platform rollouts built right from the start.",
      },
    ],
    principles: [
      {
        title: "Platform first, custom second",
        body: "We use native platform capability before adding custom code, reducing maintenance and upgrade risk.",
      },
      {
        title: "Governance built in",
        body: "Permissions, data rules, approvals, and change control are planned early, not patched in later.",
      },
      {
        title: "Workflows over screens",
        body: "We design around the process people need to complete, so the platform supports work instead of adding steps.",
      },
    ],
    capabilities: [
      {
        title: "ServiceNow workflow development",
        body: "We build ServiceNow workflows, portals, catalogs, and custom apps that route work clearly, automate approvals, and give leaders better operational visibility.",
      },
      {
        title: "Salesforce platform customization",
        body: "We configure Salesforce objects, flows, layouts, permissions, and dashboards so sales, service, and marketing teams work from cleaner data and clearer processes.",
      },
      {
        title: "Cross-platform integrations",
        body: "We connect ServiceNow, Salesforce, databases, and business tools through secure integrations so records, requests, and customer context move without manual re-entry.",
      },
      {
        title: "Platform governance & support",
        body: "We define roles, release practices, documentation, and monitoring so your platform stays reliable, secure, and easier to improve after launch.",
      },
    ],
    process: [
      {
        title: "Audit & Align Systems",
        body: "We review your current ServiceNow or Salesforce setup, user pain points, data quality, permissions, and connected systems. The output is a prioritized roadmap tied to workflows, risks, and business outcomes.",
      },
      {
        title: "Configure & Integrate",
        body: "We design the target workflow, configure platform features, build required custom components, and connect the right systems. You see working platform changes in controlled review cycles.",
      },
      {
        title: "Launch & Govern",
        body: "We deploy with testing, documentation, training support, and release controls. After launch, we monitor adoption, resolve friction, and help your teams extend the platform without creating technical debt.",
      },
    ],
    team: {
      quote:
        "A platform should not become another layer of confusion. Our job is to make ServiceNow and Salesforce reflect how the business actually operates, with the right data, controls, and integrations behind every workflow.",
      roles: ["Platform Strategist", "Platform Consultant", "Platform Developer"],
    },
  },

  "business-intelligence": {
    name: "Business Intelligence",
    heroImage: "/business-intelligence.jpg",
    hero: {
      headline: "Turn scattered data into decisions you trust",
      highlight: "decisions you trust",
      body: "Your teams already have the data; the problem is finding the truth inside it. We connect, clean, model, and visualize business data so leaders can spot trends, act faster, and measure what matters.",
    },
    stats: [
      { value: "97%", body: "Of all data gathered by modern enterprises goes unutilized." },
      { value: "x3", body: "Improvement in executive decision-making speed and accuracy." },
      {
        value: "43%",
        body: "Of top global companies have prioritized centralized data literacy.",
      },
    ],
    principles: [
      {
        title: "Start with decisions",
        body: "We build dashboards around real business questions, not vanity metrics or decorative charts.",
      },
      {
        title: "Trust before trends",
        body: "Data quality, definitions, and access rules are clarified first, so teams can rely on the numbers.",
      },
      {
        title: "Only meaningful insights",
        body: "Reports are designed for action, with clear ownership, alerts, and next-step visibility.",
      },
    ],
    capabilities: [
      {
        title: "Data integration & modeling",
        body: "We connect Salesforce, ServiceNow, finance, operations, and database sources into structured models that make reporting consistent across teams.",
      },
      {
        title: "Executive dashboards & reporting",
        body: "We design dashboards that show performance, risk, trends, and bottlenecks in plain language so leaders can make decisions without spreadsheet hunting.",
      },
      {
        title: "KPI framework development",
        body: "We define the metrics, calculations, owners, and refresh logic behind each report so every team understands what is being measured and why.",
      },
      {
        title: "Analytics enablement & governance",
        body: "We set up access rules, documentation, handover practices, and adoption support so BI stays useful, secure, and maintainable after launch.",
      },
    ],
    process: [
      {
        title: "Map & Prioritize Questions",
        body: "We review stakeholders, reports, and decisions teams struggle to make. You get a BI roadmap ranking business questions, data gaps, source systems, and quick reporting wins.",
      },
      {
        title: "Connect & Structure Data",
        body: "We audit source systems, clean key fields, and define data relationships for reporting. This creates a clearer view of performance across departments and platforms.",
      },
      {
        title: "Visualize & Operationalize",
        body: "We build dashboards, validate numbers, document definitions, and train teams on usage. After launch, we monitor adoption and refine reports as business needs change.",
      },
    ],
    team: {
      quote:
        "Business intelligence only works when people trust the data and understand what to do next. We focus on the full path from source systems to decisions, so insight becomes part of daily operations instead of another report nobody uses.",
      roles: ["BI Solutions Lead", "Data Scientist", "Data Analyst / Engineer"],
    },
  },

  /* ---------------------------------------------------------------- *
   *  IT Operations & Infrastructure
   * ---------------------------------------------------------------- */
  "it-support-managed-services": {
    name: "IT Support & Managed Services",
    heroImage: "/it-support.jpg",
    hero: {
      headline: "Keep your systems stable, secure, and supported.",
      highlight: "stable, secure, and supported",
      body: "We provide proactive application maintenance, troubleshooting, and managed support that keeps your operations moving and your risk under control.",
    },
    stats: [
      { value: "$6.15T", body: "Worldwide IT spend in 2026." },
      { value: "30%", body: "Operation cost cutdown when switching to an MSP." },
      { value: "$100K", body: "The cost of most major outages." },
    ],
    principles: [
      {
        title: "Prevent before repair",
        body: "We look for recurring issues, weak handoffs, and aging systems before they turn into business disruption.",
      },
      {
        title: "Clear ownership always",
        body: "Every ticket, escalation, and maintenance task has a responsible owner, timeline, and next action.",
      },
      {
        title: "Support tied to risk",
        body: "We prioritize the systems, users, and incidents that affect revenue, security, and continuity first.",
      },
    ],
    capabilities: [
      {
        title: "Application maintenance & support",
        body: "We maintain business applications, resolve defects, manage updates, and keep critical workflows stable so your teams can work without avoidable interruption.",
      },
      {
        title: "Helpdesk and incident response",
        body: "We triage user issues, document root causes, manage escalations, and restore service quickly with clear communication from intake to resolution.",
      },
      {
        title: "System health and patching",
        body: "We monitor application health, review logs, apply updates, and close known vulnerabilities before they become downtime or security exposure.",
      },
      {
        title: "SLA reporting and improvement",
        body: "We track tickets, response times, recurring issues, and service quality trends, then turn that data into practical improvements for your operations.",
      },
    ],
    process: [
      {
        title: "Audit & Prioritize",
        body: "We review your applications, support tickets, recurring issues, access paths, and current maintenance routines. You get a clear support map showing what is stable, what is risky, and what needs attention first.",
      },
      {
        title: "Stabilize & Structure",
        body: "We set up intake, escalation, documentation, maintenance windows, and response workflows. The result is a managed support rhythm that reduces confusion and gives every issue a clear path to resolution.",
      },
      {
        title: "Monitor & Improve",
        body: "We maintain systems, resolve incidents, review service metrics, and identify recurring problems. Over time, support moves from firefighting to steady operational control.",
      },
    ],
    team: {
      quote:
        "We treat support as a business continuity function, not a back-office task. The goal is to reduce noise, protect the systems people rely on, and give leaders a clear view of where operational risk is building.",
      roles: ["Managed Services Lead", "Application Support Engineer", "Systems Operations Analyst"],
    },
  },

  "cloud-support-migration": {
    name: "Cloud Support & Migration",
    heroImage: "/cloud-support.jpg",
    hero: {
      headline: "Move to cloud without losing control or momentum",
      highlight: "without losing control",
      body: "Cloud migration is not just moving workloads from one environment to another. We assess your applications, data, security, and cost model, then plan and manage the move so operations stay stable and the cloud stays usable after launch.",
    },
    stats: [
      {
        value: "$723B+",
        body: "Forecast 2025 public cloud spend; cloud is now core business infrastructure.",
      },
      { value: "90%", body: "Organizations expected to use hybrid cloud by 2027." },
      { value: "271%", body: "Average ROI for enterprises with cloud-native architecture." },
    ],
    principles: [
      {
        title: "Continuity before speed",
        body: "We plan migrations around uptime, users, dependencies, and rollback paths so the move does not disrupt the business.",
      },
      {
        title: "Architecture guides cost",
        body: "We right-size environments, storage, access, and monitoring early so cloud spend follows business need.",
      },
      {
        title: "No handoff cliff",
        body: "Migration is only step one. We provide post-launch support, optimization, and documentation so teams can operate confidently.",
      },
    ],
    capabilities: [
      {
        title: "Cloud readiness assessment",
        body: "We review applications, data, integrations, security, and current infrastructure to identify migration risks, dependencies, and the best cloud path.",
      },
      {
        title: "Migration planning & execution",
        body: "We design the migration sequence, prepare environments, move workloads, and validate performance so the transition is controlled, tested, and business-safe.",
      },
      {
        title: "Cloud optimization & cost control",
        body: "We monitor usage, right-size resources, clean up waste, and tune cloud services so the environment remains efficient instead of expensive and unmanaged.",
      },
      {
        title: "Ongoing cloud support",
        body: "We handle incidents, updates, access issues, performance checks, and documentation so your teams have stable cloud operations after migration.",
      },
    ],
    process: [
      {
        title: "Assess & Architect",
        body: "We audit current systems, workloads, data flows, security posture, and business constraints. The output is a migration roadmap with priorities, dependencies, risks, and the right cloud path.",
      },
      {
        title: "Migrate & Validate",
        body: "We prepare the target environment, migrate workloads in controlled phases, test performance, and confirm data integrity. Clear rollback plans keep the transition visible and safe.",
      },
      {
        title: "Optimize & Support",
        body: "After launch, we monitor usage, tune performance, manage incidents, and identify cost improvements. The environment keeps improving instead of becoming another unmanaged system.",
      },
    ],
    team: {
      quote:
        "Cloud value is created after the move, not just during it. We focus on migration safety, cost visibility, and long-term support so your cloud environment is easier to manage, not just newer.",
      roles: ["Cloud Migration Lead", "Cloud Solutions Architect", "Infrastructure Support Engineer"],
    },
  },

  "database-warehousing-management": {
    name: "Database Warehousing & Management",
    heroImage: "/database.jpg",
    hero: {
      headline: "Build a data foundation your business can trust",
      highlight: "your business can trust",
      body: "Disconnected databases slow teams down and make reporting unreliable. We design, manage, and optimize warehouse environments so your data stays accurate, secure, available, and ready for analytics.",
    },
    stats: [
      {
        value: "$11.78B",
        body: "2025 cloud data warehouse market size; data infrastructure is now a growth priority.",
      },
      {
        value: "26.86%",
        body: "Forecast CAGR through 2031 as companies modernize analytics-ready data stacks.",
      },
      {
        value: "$4.4M",
        body: "Global average breach cost in 2025; weak data control becomes business risk.",
      },
    ],
    principles: [
      {
        title: "Availability is strategy",
        body: "We design for uptime, recovery, and performance so critical data stays usable when teams need it.",
      },
      {
        title: "Clean data before scale",
        body: "We standardize structure, quality rules, and ownership before adding more dashboards or tools.",
      },
      {
        title: "Security by default",
        body: "Access, backups, and monitoring are built into the environment, not treated as afterthoughts.",
      },
    ],
    capabilities: [
      {
        title: "Warehouse architecture design",
        body: "We assess Salesforce, ServiceNow, application, and operational data sources to design a warehouse structure that supports reliable analytics and future scale.",
      },
      {
        title: "Database performance management",
        body: "We tune queries, indexes, schemas, and workloads so databases respond faster, use resources efficiently, and support daily operations without bottlenecks.",
      },
      {
        title: "Data governance & security",
        body: "We define access rules, backup plans, retention policies, and quality controls so sensitive business data remains protected, organized, and auditable.",
      },
      {
        title: "Migration & modernization support",
        body: "We move data from legacy systems into cleaner warehouse environments, validating integrity and minimizing disruption during platform changes.",
      },
    ],
    process: [
      {
        title: "Audit & Map Data",
        body: "We review current databases, source systems, reports, access patterns, and pain points. The output is a clear view of data gaps, performance issues, security risks, and the best path forward.",
      },
      {
        title: "Design & Stabilize",
        body: "We design the warehouse model, clean key structures, define backup and access rules, and tune the environment for performance. Your team gets a stable foundation instead of another fragile data store.",
      },
      {
        title: "Manage & Improve",
        body: "After launch, we monitor health, resolve incidents, optimize workloads, and document changes. The database environment stays secure, available, and aligned with evolving reporting needs.",
      },
    ],
    team: {
      quote:
        "A database is not just storage. It is the operating memory of the business. We manage it with the same discipline we expect from any mission-critical system: clean structure, controlled access, reliable recovery, and continuous performance oversight.",
      roles: ["Database Architect", "Data Engineering Lead", "Infrastructure Support Engineer"],
    },
  },

  "network-system-monitoring": {
    name: "Network & System Monitoring",
    heroImage: "/networking.jpg",
    hero: {
      headline: "Detect problems early to keep your systems moving.",
      highlight: "Detect problems early",
      body: "Networks and systems rarely fail without warning. We monitor performance, availability, logs, and alerts continuously, turning weak signals into clear actions before downtime, security risk, or user impact spreads.",
    },
    stats: [
      {
        value: "277 Days",
        body: "Average time it takes an enterprise to detect a data breach without active traffic visibility.",
      },
      {
        value: "$14,000 per minute",
        body: "Immediate operational cost to an enterprise during network downtime.",
      },
      {
        value: "$4.4M",
        body: "Average breach cost in 2025; weak visibility turns small gaps into loss.",
      },
    ],
    principles: [
      {
        title: "Signal before noise",
        body: "We separate meaningful warnings from routine alerts, so your team focuses on issues that can affect operations.",
      },
      {
        title: "Response over reporting",
        body: "Dashboards are not the goal. Every alert needs context, ownership, and a clear path from detection to action.",
      },
      {
        title: "Reliability by design",
        body: "We monitor capacity, dependencies, and failure patterns so reliability is built into daily operations, not added after incidents.",
      },
    ],
    capabilities: [
      {
        title: "Network health monitoring",
        body: "We track uptime, traffic, latency, device status, and connectivity patterns to detect network issues early and route them to the right response path.",
      },
      {
        title: "System performance monitoring",
        body: "We monitor servers, applications, resources, logs, and service behavior to spot slowdowns, failures, and capacity risks before users feel the impact.",
      },
      {
        title: "Alerting & escalation design",
        body: "We configure thresholds, alert rules, ownership models, and escalation paths so incidents move from detection to resolution without confusion or delay.",
      },
      {
        title: "Reliability reporting & insights",
        body: "We translate monitoring data into practical reliability reports that show uptime trends, recurring risks, root causes, and the fixes to prioritize next.",
      },
    ],
    process: [
      {
        title: "Audit & Baseline",
        body: "We review network paths, systems, tools, applications, and incident history. You receive a baseline that defines what must be watched, why it matters, and who owns each signal.",
      },
      {
        title: "Configure & Connect",
        body: "We configure checks, dashboards, alert rules, thresholds, and integrations across critical systems. Your team gets one clear view of performance, vulnerabilities, and warnings.",
      },
      {
        title: "Monitor & Improve",
        body: "After launch, we review alerts, tune thresholds, study incidents, and recommend improvements. Monitoring becomes a reliability layer that protects business continuity.",
      },
    ],
    team: {
      quote:
        "Good monitoring is not about collecting more alerts. It is about seeing the right signal early, knowing who should act, and giving teams the context to resolve issues before they become business interruptions.",
      roles: ["Principal Network Engineer", "Network Operations Lead", "Systems Reliability Analyst"],
    },
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT[slug];
}
