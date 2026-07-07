export type ProjectStatus =
  | "public-repository"
  | "live"
  | "concept"
  | "experiment"
  | "documentation";

export type CaseStudy = {
  problem: string;
  solution: string;
  builtProse?: string;
  built?: string[];
  technicalDetails: string[];
  lessons?: string[];
};

export type Project = {
  title: string;
  slug: string;
  year: "2026";
  category: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  route: `/projects/${string}`;
  repositoryUrl?: string;
  liveUrl?: string;
  image: string;
  thumbnailImage: string;
  heroImage: string;
  imageAlt: string;
  visualType: string;
  imageFit?: "cover" | "contain";
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    title: "CashMeIfYouCan",
    slug: "cashmeifyoucan",
    year: "2026",
    category: "Agentic AI / Web3",
    status: "live",
    description:
      "Invoice factoring marketplace where AI agents auction bids to advance cash to freelancers instantly instead of waiting 30 to 90 days.",
    tags: ["Next.js", "TypeScript", "Hedera HTS", "Circle Arc", "World ID"],
    route: "/projects/cashmeifyoucan",
    liveUrl: "https://cashmeifyoucan.us",
    image: "/images/projects/cashmeifyoucan-dash.webp",
    thumbnailImage: "/images/projects/optimized/cashmeifyoucan-dash-card.webp",
    heroImage: "/images/projects/optimized/cashmeifyoucan-dash-hero.webp",
    imageAlt: "The CashMeIfYouCan web app, an invoice factoring marketplace built on Hedera.",
    visualType: "CashMeIfYouCan dashboard",
    caseStudy: {
      problem:
        "Freelancers wait 30 to 90 days to get paid on invoices, while the trust needed to advance them cash early is hard to price fairly.",
      solution:
        "AI agents compete in an auction to advance cash against an invoice. Reputation compresses the fee, so the most trusted agent wins by charging the least, which creates a two-sided market where newcomer agents give investors higher yield.",
      builtProse:
        "At the core is a reputation-weighted auction where AI agents bid to fund an invoice, and the agent's track record compresses the fee so the most trusted bidder wins by charging the least. Each invoice is minted as a native Hedera token, which lets the fee be enforced at the protocol layer rather than in application code, and the payout is pre-armed with Hedera Scheduled Transactions so it fires the moment a client pays. Settlement runs in USDC through Circle Arc, which keeps gas viable even for small invoices, while World ID verifies each participant with a nullifier for Sybil resistance. Every invoice is fingerprinted on the Hedera Consensus Service, so the same one cannot be sold twice.",
      built: [
        "Reputation-weighted agent auction",
        "Invoice minted as a native Hedera token with the agent fee enforced at the protocol layer",
        "Payout pre-armed with Hedera Scheduled Transactions, fires the moment a client pays",
        "USDC settlement through Circle Arc so gas is viable for small invoices",
        "World ID identity verification with a nullifier for Sybil resistance",
        "Invoice fingerprinting on the Hedera Consensus Service to prevent double-selling",
      ],
      technicalDetails: [
        "Next.js and TypeScript on Vercel",
        "Hedera Token Service (HTS)",
        "Hedera Scheduled Transactions",
        "Circle Arc USDC settlement",
        "World ID",
        "Hedera Consensus Service",
      ],
      lessons: [
        "Enforcing fees at the protocol layer is stronger than enforcing them in app logic.",
        "Reputation as a price signal aligns incentives without a central arbiter.",
        "On-chain fingerprinting is a clean way to prevent the same invoice being sold twice.",
      ],
    },
  },
  {
    title: "HiveOps",
    slug: "hiveops",
    year: "2026",
    category: "Multi-Agent AI / Incident Response",
    status: "live",
    description:
      "Five specialized LLM agents collaborate on incident triage, root cause, remediation, sandboxed verification, and evidence assembly, with human approval gates.",
    tags: ["React", "FastAPI", "Supabase", "Claude", "WebSockets"],
    route: "/projects/hiveops",
    liveUrl: "https://hiveops.us",
    image: "/images/projects/hiveops-dash.webp",
    thumbnailImage: "/images/projects/optimized/hiveops-dash-card.webp",
    heroImage: "/images/projects/optimized/hiveops-dash-hero.webp",
    imageAlt:
      "The HiveOps web app showing the multi-agent incident response dashboard.",
    visualType: "HiveOps dashboard",
    caseStudy: {
      problem:
        "Incident response is slow and hard to audit. A single LLM in the loop is opaque and risky to let act on production.",
      solution:
        "Five specialized agents each own one step of the incident, from triage to a human-readable evidence dossier. Structured SQL memory replaces vector embeddings so retrieval is explainable, and human approval is enforced at the data-model level so no backend path executes without a prior approval record.",
      builtProse:
        "Each incident moves through five specialized agents, one per step. A triage agent classifies severity, assigns a causal signature, and extracts the affected service. A root cause agent correlates the errors with recent deploys and config diffs. A remediation agent queries the SQL memory for past incidents and proposes a fix, which a verification agent then runs in a mocked sandbox to assess side effects before anything touches production. A reviewer agent assembles the whole trail into a human-readable evidence dossier. Alongside them, QueenBee offers on-demand chat with the full incident context already loaded.",
      built: [
        "Triage agent: classifies severity, assigns a causal signature, extracts the affected service",
        "Root cause agent: correlates errors with recent deploys and config diffs",
        "Remediation agent: queries SQL memory for past incidents, proposes a fix",
        "Verification agent: runs the fix in a mocked sandbox, assesses side effects",
        "Reviewer summary agent: assembles a human-readable evidence dossier",
        "QueenBee: on-demand chat with full incident context loaded",
      ],
      technicalDetails: [
        "React, TypeScript, Vite, Tailwind, Framer Motion",
        "FastAPI async Python",
        "Structured SQL memory via the Hex API instead of vector embeddings",
        "Confidence-based escalation, Claude Haiku to Sonnet below 0.70",
        "Supabase Postgres with Realtime, WebSockets and SSE",
        "Deployed on Vercel and Render",
      ],
      lessons: [
        "Structured SQL memory buys explainability that vector search cannot.",
        "Enforcing human approval at the data model, not the UI, closes the unsafe-action gap.",
        "Splitting an incident across specialized agents makes each step auditable.",
      ],
    },
  },
  {
    title: "FoodGrid",
    slug: "foodgrid",
    year: "2026",
    category: "Civic Tech / Applied ML",
    status: "documentation",
    description:
      "Maps food access inequality across Boston census tracts with a multilingual assistant and a government simulation mode.",
    tags: ["React", "Django REST", "Deck.gl", "MapLibre", "Llama 3.1"],
    route: "/projects/foodgrid",
    image: "/images/projects/foodgrid-dash.webp",
    thumbnailImage: "/images/projects/optimized/foodgrid-dash-card.webp",
    heroImage: "/images/projects/optimized/foodgrid-dash-hero.webp",
    imageAlt:
      "The FoodGrid app mapping food access inequality across Boston census tracts.",
    visualType: "FoodGrid dashboard",
    caseStudy: {
      problem:
        "Food access is unevenly distributed across a city, but residents and policymakers lack a shared, interactive way to see and act on the gaps.",
      solution:
        "A civic app with two modes. Residents find nearby resources and chat with a multilingual assistant; government users simulate adding resources and watch the equity score change in real time across Boston census tracts.",
      builtProse:
        "FoodGrid maps food access across Boston census tracts and splits into two modes for its two audiences. In resident mode, people find nearby food resources and ask questions through a multilingual LLM assistant, so the tool works for more of the city than English alone would reach. In government mode, planners simulate adding a resource to a tract and watch a live equity score update across the map, which turns a static map into something they can actually test decisions against. Both modes sit on an interactive geospatial visualization that makes the gaps legible at a glance.",
      built: [
        "Census-tract food access mapping",
        "Resident mode with a multilingual LLM assistant",
        "Government simulation mode with a live equity score",
        "Interactive geospatial visualization",
      ],
      technicalDetails: [
        "React and TypeScript",
        "Django REST and Node/Express",
        "MongoDB Atlas",
        "Deck.gl and MapLibre",
        "Llama 3.1 for the multilingual assistant",
      ],
      lessons: [
        "A simulation mode turns a map into a decision tool for policymakers.",
        "Multilingual chat made the resident side usable for more of the city.",
        "Won Best Overall and Best in the EcoHack track at MLH CivicHacks.",
      ],
    },
  },
];
