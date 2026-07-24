/**
 * Customer / case-study content.
 *
 * Copy is supplied by the client. Card titles and summaries reuse the existing
 * homepage copy; hero intros currently mirror those summaries until the final
 * hero paragraphs and bullet lists are provided.
 */

export const PENDING_COPY = "Copy pending. Final text to be supplied.";

export const CUSTOMER_INTRO =
  "We approach each client relationship as an exercise in structural mapping by understanding precisely where the architecture of a business is misaligned with its ambitions and resolving that misalignment through unified marketing and engineering execution.";

export const MORE_SOON = "New case studies coming soon";

export type CaseTab = {
  label: string;
  body: string;
  /** Image for this phase; empty string falls back to the gradient placeholder. */
  image: string;
  /** Caption shown inside the image placeholder when no image is set. */
  imageNote: string;
};

export type CaseStudy = {
  slug: string;
  /** Short label used in breadcrumbs and cards. */
  client: string;
  /** Card title on the index page (existing homepage copy). */
  title: string;
  /** Card summary on the index page (existing homepage copy). */
  summary: string;
  cardImage: string;
  hero: {
    headline: string;
    intro: string;
    bullets: string[];
    imageNote: string;
  };
  tabsHeading: string;
  tabs: CaseTab[];
  quote: { text: string; name: string; role: string };
  stats: { value: string; label: string }[];
  /** One entry per paragraph. */
  outcome: string[];
  key: string;
  edge: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "boutique-retail-brand",
    client: "Boutique Retail Brand",
    title:
      "How a boutique retail brand built a brand, launched a custom online store, and tripled revenue in 90 days",
    summary:
      "With no digital presence and a brand that wasn't converting, we established their visual identity, built a custom online storefront with an integrated checkout and inventory system, and launched targeted paid social campaigns designed around it.",
    cardImage: "/case-1.jpg",
    hero: {
      headline:
        "A brand that couldn't be found, a store that didn't exist, and a revenue ceiling they couldn't break through.",
      intro:
        "With no digital presence and a brand that wasn't converting, we established their visual identity, built a custom online storefront with an integrated checkout and inventory system, and launched targeted paid social campaigns designed around it.",
      bullets: [],
      imageNote: "Real photography",
    },
    tabsHeading:
      "Before we could scale their revenue, we had to build everything revenue runs on.",
    tabs: [
      {
        label: "Digital Foundations",
        image: "/customers/boutiuq-brandid.png",
        body: "Before a single ad ran or a product page went live, we established a full visual identity: logo suite, color system, typography, and iconography that could hold up across every surface from packaging to paid media. Alongside the visual system, we defined the brand voice: the tone, the language, and the messaging hierarchy that would make every customer interaction feel coherent and intentional. This wasn't decoration. It was the foundation that made everything else possible.",
        imageNote: "Real photography or brand collage",
      },
      {
        label: "E-commerce Build",
        image: "/customers/boutiuq-storefrontpng.png",
        body: "With the brand defined, we built the digital storefront: a high-performance e-commerce site with an integrated checkout and inventory system, designed to convert first-time visitors into buyers and repeat buyers into loyal customers. Every design decision was made with the customer journey in mind: product discovery, trust signals, frictionless checkout, and post-purchase experience. The result was a store that didn't just look like the brand, it performed like a revenue channel, because it was built to be one.",
        imageNote: "Screenshot of the storefront",
      },
      {
        label: "Social Activation",
        image: "/customers/boutiuq-digital-transform.png",
        body: "With the foundation in place, we launched a targeted paid social campaign built around the audience most likely to buy, and the creative most likely to stop them mid-scroll. We developed platform-native ad creative that reflected the new brand identity, built audience segments from first-party data and behavioral signals, and structured the campaign to drive traffic directly into the new storefront. We optimized weekly, adjusting creative, refining audiences, and reallocating budget toward what the data confirmed was working. Within 90 days, revenue had tripled.",
        imageNote: "Real photography or large-scale illustration",
      },
    ],
    quote: {
      text: "For the first time, our brand actually looked like what we'd always believed it was. We'd been operating on instinct for years. We knew what we stood for, but we couldn't show it. Abstract Techvisions didn't just build us a website and run some ads. They built us a business. The team understood our vision, moved faster than we expected, and held themselves accountable to results we could actually see.",
      name: "Sarah M.",
      role: "Founder",
    },
    stats: [
      { value: "3x", label: "Revenue growth in 90 days from launch" },
      { value: "68%", label: "Of new customers acquired through paid social" },
    ],
    outcome: [
      "The most significant shift wasn't just in revenue. It was in where that revenue was coming from. The majority of new customers in the first 90 days had never set foot in the store. They found the brand online, trusted what they saw, and bought. That's the compounding value of building the brand and the channel at the same time.",
      "With a proven acquisition channel and a customer base that now extends well beyond the local market, the brand is entering its next phase with something it didn't have before: a repeatable, scalable growth model.",
    ],
    key: "rgba(255,77,99,0.5)",
    edge: "rgba(255,77,99,0.65)",
  },

  {
    slug: "wellness-studio",
    client: "Wellness Studio",
    title:
      "A growing wellness studio cut vendor costs by 60%, scaled bookings by 40%, and built the tech to sustain it",
    summary:
      "Facing budget drain from siloed vendors and a manual booking process that couldn't keep up with demand, we rebuilt their ad campaigns and web experience to drive consistent client acquisition, then engineered a custom booking and client management system that converted that traffic automatically.",
    cardImage: "/case-2.jpg",
    hero: {
      headline:
        "A wellness studio was bleeding money to siloed vendors while a manual booking process quietly capped how much it could grow.",
      intro:
        "Facing budget drain from siloed vendors and a manual booking process that couldn't keep up with demand, we rebuilt their ad campaigns and web experience to drive consistent client acquisition, then engineered a custom booking and client management system that converted that traffic automatically.",
      bullets: [],
      imageNote: "Real photography",
    },
    tabsHeading:
      "We consolidated the marketing, then engineered the system that let growth run on its own.",
    tabs: [
      {
        label: "Campaign Rebuild",
        image: "/customers/welness-campaign-rebuild.png",
        body: "We started by auditing every dollar going to outside vendors: identifying overlap, waste, and campaigns that were running without a coherent strategy behind them. We rebuilt the paid media approach from the ground up: consolidated channels, sharpened audience targeting, and creative built specifically to drive bookings rather than generic engagement. Every campaign was tied to a single measurement framework, so performance was visible for the first time in one place instead of scattered across vendor reports.",
        imageNote: "Campaign creative",
      },
      {
        label: "Website Revamp",
        image: "/customers/wellness-website-revamp.png",
        body: "The existing site wasn't built to convert. It was built to exist. We redesigned the web experience around a single goal: turning visitors into booked clients. That meant a clearer service presentation, faster load times, mobile-first design, and a booking path with as few steps as possible between interest and confirmed appointment. The site became a consistent acquisition channel instead of a static brochure.",
        imageNote: "Screenshot of the website",
      },
      {
        label: "Customized CRM",
        image: "/customers/welness-customized-crm.png",
        body: "We engineered a custom booking and client management system that automated scheduling, confirmations, reminders, and client records end to end. The architecture was built to integrate directly with the new web experience and ad tracking, so every booking captured clean data automatically: no manual entry, no double handling, no staff bottleneck. The system was designed to scale with demand instead of limiting it, handling concurrent bookings and syncing client history in real time.",
        imageNote: "Real photography or large-scale illustration",
      },
    ],
    quote: {
      text: "I didn't realize how much time and money we were losing until it stopped happening. We were paying 3 different vendors to do work that didn't talk to each other, and our front desk was drowning in manual bookings every single day. Abstract Techvisions rebuilt our marketing, rebuilt our website, and then built us a booking system that just works and grows automatically.",
      name: "Elena K.",
      role: "Studio Owner",
    },
    stats: [
      { value: "60%", label: "Reduction in vendor cost" },
      {
        value: "40%",
        label: "Growth in bookings following the web experience rebuild",
      },
    ],
    outcome: [
      "Cutting vendor costs usually means cutting capability. Here, consolidating the work under a single, coordinated strategy actually increased what the marketing and web experience could deliver, while removing the overhead of managing disconnected vendors.",
      "With a booking system now handling scheduling and client management automatically, the studio has capacity it didn't have before, without adding staff. What was once a business fighting its own infrastructure is now one built to scale. The foundation is in place, and growth is no longer the constraint.",
    ],
    key: "rgba(52,226,234,0.5)",
    edge: "rgba(52,226,234,0.65)",
  },

  {
    slug: "consulting-practice",
    client: "Consulting Practice",
    title:
      "A solo consulting practice doubled inbound leads and eliminated operational bottlenecks with a custom-built client portal",
    summary:
      "With an outdated brand and disconnected internal workflows slowing them down, we rebuilt their digital presence with an SEO-driven website from scratch and developed a custom client portal that streamlines project intake, communication, and reporting into one system while bringing high-intent prospects directly to them.",
    cardImage: "/case-3.jpg",
    hero: {
      headline:
        "A solo consulting practice looked established from the outside, but an outdated brand and scattered internal workflows were quietly costing it new business.",
      intro:
        "With an outdated brand and disconnected internal workflows slowing them down, we rebuilt their digital presence with an SEO-driven website from scratch and developed a custom client portal that streamlines project intake, communication, and reporting into one system while bringing high-intent prospects directly to them.",
      bullets: [],
      imageNote: "Real photography",
    },
    tabsHeading:
      "We rebuilt the brand to match the work, then built the system to match the growth.",
    tabs: [
      {
        label: "Brand Refresh",
        image: "/customers/consulting-grp-brand-refresh.png",
        body: "Before anything else, we addressed the gap between how the practice looked and how it actually performed. We refreshed the visual identity and messaging to reflect the caliber of the consulting work: sharper positioning, a clearer point of view, and a visual system built to read as established and credible to a prospect encountering the brand for the first time, with no referral to vouch for it.",
        imageNote: "Brand collage or illustration",
      },
      {
        label: "SEO Focus",
        image: "/customers/consulting-grp-website.png",
        body: "We rebuilt the website from scratch around a single objective: generating inbound interest, not just existing online. That meant a content and site architecture built for search visibility, clear service pages structured around what prospects were actually searching for, and a site experience designed to convert a cold visitor into a qualified inquiry. The result was a website that started doing the work referrals used to do alone.",
        imageNote: "Screenshot of the website",
      },
      {
        label: "Client Portal Build",
        image: "/customers/consulting-client-portal.png",
        body: "With demand growing, the operational cracks were becoming a real constraint. We developed a custom client portal that consolidated project intake, client communication, and reporting into a single system, architected to eliminate the manual handoffs that came with juggling separate tools for each function. Every new client now moves through one connected workflow, with status, communication, and reporting synced automatically instead of managed by hand.",
        imageNote: "Real photography or large-scale illustration",
      },
    ],
    quote: {
      text: "I didn't realize how much I was leaving on the table by relying on referrals alone. My work was strong, but my brand and website didn't reflect that, and the way I was managing every client relationship was all over the place. Abstract Techvisions rebuilt my brand, gave me a website that actually brings in new clients, and built a portal that runs my operations for me. Inbound leads have doubled, and for the first time, growth doesn't mean more chaos.",
      name: "Priya N.",
      role: "Principal Consultant",
    },
    stats: [
      { value: "2x", label: "Growth in inbound leads" },
      { value: "95%", label: "Of intake now fully automated" },
    ],
    outcome: [
      "The rebuild didn't just generate more interest. It changed where that interest came from. Inbound leads doubled, meaning growth was no longer entirely dependent on referrals, and new business could scale independent of any one relationship. At the same time, the client portal removed the administrative weight that came with each new client, freeing up time that used to go into coordination instead of the actual consulting work.",
      "The practice is now positioned for the kind of growth that used to be out of reach: leaner, faster, and no longer held back by the operational drag that once limited it.",
    ],
    key: "rgba(163,116,255,0.5)",
    edge: "rgba(163,116,255,0.65)",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
