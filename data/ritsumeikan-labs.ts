// Repurposed for Milestones & Achievements: Jigar's hackathon wins.
// The type name is kept as RitsumeikanLab so the existing section
// components and localized-data helpers keep working unchanged.
// Headline (name) is the hackathon; kicker (shortName) is the award and project.
// Each entry has a slug for its own detail page under /lab/[slug].
// Facts are grounded in research and in the event photos themselves.

export type HackathonPhoto = {
  src: string;
  alt: string;
};

export type RitsumeikanLab = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  url: string;
  image: string;
  thumbnailImage: string;
  alt: string;
  imageFit?: "cover" | "contain";
  // Detail-page fields
  event: string;
  date: string;
  venue: string;
  track: string;
  award: string;
  project: string;
  projectUrl: string;
  overview: string;
  photos: HackathonPhoto[];
  // Blog-style body sections
  aboutEvent: string;
  aboutTrack: string;
  whatWeBuilt: string;
  whatWeWon: string;
};

export const ritsumeikanLabs: RitsumeikanLab[] = [
  {
    id: "ethglobal",
    slug: "ethglobal-new-york",
    name: "ETHGlobal New York",
    shortName: "Best Use of Hedera Tokenization · CashMeIfYouCan",
    description:
      "A 36-hour hackathon at the Metropolitan Pavilion with 500+ developers. CashMeIfYouCan won Hedera's tokenization prize.",
    url: "https://cashmeifyoucan.us",
    image: "/images/wins/optimized/ethglobal-card.webp",
    thumbnailImage: "/images/wins/optimized/ethglobal-card.webp",
    alt: "The CashMeIfYouCan team at ETHGlobal New York holding their winning certificates.",
    imageFit: "cover",
    event: "ETHGlobal New York",
    date: "June 2026",
    venue: "Metropolitan Pavilion, New York",
    track: "Hedera, tokenization",
    award: "Best Use of Hedera Tokenization",
    project: "CashMeIfYouCan",
    projectUrl: "https://cashmeifyoucan.us",
    overview:
      "An invoice factoring marketplace where AI agents auction bids to advance cash to freelancers instantly. Each invoice is minted as a native Hedera token with the agent fee enforced at the protocol layer, and fingerprinted on the Hedera Consensus Service so the same invoice cannot be sold twice.",
    aboutEvent:
      "ETHGlobal New York is a flagship 36-hour hackathon that brings hundreds of developers to the Metropolitan Pavilion to build on-chain over a single weekend. Sponsor protocols each put up bounties for the best use of their technology, and teams demo live to judges at the end.",
    aboutTrack:
      "We built on the Hedera track, which rewards projects that use Hedera's native tokens and Consensus Service in a way that would be hard to do on a general-purpose chain. Our angle was to make the token itself carry the business logic rather than bolting it on in application code.",
    whatWeBuilt:
      "CashMeIfYouCan advances cash to freelancers who would otherwise wait weeks to get paid. AI agents compete in an auction to fund each invoice, and reputation compresses the fee so the most trusted agent wins by charging the least. Every invoice is minted as a Hedera token with the fee enforced at the protocol layer, and fingerprinted on the Consensus Service so it cannot be sold twice.",
    whatWeWon:
      "We won Best Use of Hedera Tokenization for putting the fee and the anti-double-sale guarantee directly on-chain instead of in the app.",
    photos: [
      { src: "/images/projects/optimized/ethglobal-2.webp", alt: "The CashMeIfYouCan team at ETHGlobal New York in front of an ETHGlobal mural." },
      { src: "/images/projects/optimized/ethglobal-1.webp", alt: "Jigar and a teammate working at a table during ETHGlobal New York." },
      { src: "/images/projects/optimized/ethglobal-4.webp", alt: "Two teammates reviewing the CashMeIfYouCan build on screen." },
    ],
  },
  {
    id: "redhat",
    slug: "redhat-vllm-hackathon",
    name: "Red Hat vLLM Hackathon",
    shortName: "Agentic Edge track, Deep Tech · PRGenie",
    description:
      "The Inference Starts Here vLLM hackathon at The Open Accelerator in Boston, mentored by vLLM core maintainers.",
    url: "https://github.com/aumghelani/Redhat-Hackathon-JABST",
    image: "/images/wins/optimized/redhat-card.webp",
    thumbnailImage: "/images/wins/optimized/redhat-card.webp",
    alt: "The PRGenie team at the Red Hat vLLM hackathon in Boston.",
    imageFit: "cover",
    event: "Red Hat vLLM Hackathon, Inference Starts Here",
    date: "April 25, 2026",
    venue: "The Open Accelerator, Seaport, Boston",
    track: "Agentic Edge, powered by NemoClaw",
    award: "Agentic Edge track, Deep Tech lane, and an NVIDIA GeForce RTX 4090",
    project: "PRGenie",
    projectUrl: "https://github.com/aumghelani/Redhat-Hackathon-JABST",
    overview:
      "A multi-agent GitHub triage system that pairs vLLM with NVIDIA Nemotron for an agentic edge deployment. Seven agents score trust, assess risk, and route pull requests, all gated by a policy runtime so the model only acts within defined guardrails.",
    aboutEvent:
      "Inference Starts Here was a vLLM and llm-d hackathon run by The Open Accelerator, Red Hat's Boston AI hub in the Seaport, and mentored by vLLM core maintainers. The theme was serving open models efficiently rather than calling a hosted API, across six challenge tracks and three skill lanes.",
    aboutTrack:
      "We entered the Agentic Edge track, powered by NemoClaw, in the Deep Tech lane. It asked for agent systems that run on local inference with real guardrails, not a thin wrapper around a cloud endpoint, which pushed us to keep the whole pipeline on vLLM.",
    whatWeBuilt:
      "PRGenie triages GitHub pull requests with seven cooperating agents that score author trust, flag risky paths, extract intent, and route the review. It runs on vLLM with NVIDIA Nemotron, and every action passes through a policy runtime so the model can only act within defined limits.",
    whatWeWon:
      "We won the Agentic Edge track in the Deep Tech lane, and took home an NVIDIA GeForce RTX 4090 for the build.",
    photos: [
      { src: "/images/projects/optimized/redhat-1.webp", alt: "The PRGenie team with a judge from The Open Accelerator holding the winning certificate." },
      { src: "/images/projects/optimized/redhat-2.webp", alt: "The PRGenie dashboard triaging a real pull request with its seven agents." },
    ],
  },
  {
    id: "yhack",
    slug: "yhack-yale",
    name: "YHack, Yale",
    shortName: "Best Use of Hex API · HiveOps",
    description:
      "Yale's flagship student-run hackathon in New Haven, one of the largest collegiate hackathons in the US.",
    url: "https://hiveops.us",
    image: "/images/wins/optimized/yhacks-card.webp",
    thumbnailImage: "/images/wins/optimized/yhacks-card.webp",
    alt: "The HiveOps team at YHack at Yale.",
    imageFit: "cover",
    event: "YHack, Yale",
    date: "2026",
    venue: "Yale University, New Haven",
    track: "Hex API",
    award: "Best Use of Hex API",
    project: "HiveOps",
    projectUrl: "https://hiveops.us",
    overview:
      "An incident response platform driven by a five-agent pipeline. HiveOps uses structured SQL memory instead of vector embeddings, so agents recall past incidents with exact queries rather than approximate similarity search.",
    aboutEvent:
      "YHack is Yale's flagship student-run hackathon in New Haven and one of the larger collegiate hackathons in the country, drawing teams from across the Northeast for a weekend of building and sponsor challenges.",
    aboutTrack:
      "We competed for the Best Use of Hex API prize, which rewards projects that put Hex's data and query tooling to real use. That fit our idea of giving agents structured, queryable memory rather than a pile of embeddings.",
    whatWeBuilt:
      "HiveOps handles on-call incident response through five cooperating agents. Instead of storing history as vector embeddings, it keeps structured SQL memory, so agents recall past incidents with exact queries rather than fuzzy similarity search. That makes the reasoning auditable and cheaper to run.",
    whatWeWon:
      "We won Best Use of Hex API for using structured SQL memory across the agent pipeline.",
    photos: [
      { src: "/images/projects/optimized/yhacks-1.webp", alt: "The HiveOps team working at desks during YHack at Yale." },
      { src: "/images/projects/optimized/yhacks-2.webp", alt: "The HiveOps team building through the night at YHack." },
    ],
  },
  {
    id: "medai",
    slug: "medai-boston-university",
    name: "MedAI Hackathon, Boston University",
    shortName: "1st, Early-stage Lung Cancer Phenotyping · VI-LUAD",
    description:
      "The inaugural MedAI Hackathon at BU, pairing real clinical datasets with AI challenges across specialty tracks.",
    url: "https://github.com/jigark712",
    image: "/images/wins/optimized/medai-card.webp",
    thumbnailImage: "/images/wins/optimized/medai-card.webp",
    alt: "The VI-LUAD team at the MedAI Hackathon at Boston University.",
    imageFit: "cover",
    event: "MedAI Hackathon, Boston University",
    date: "April 10 to 11, 2026",
    venue: "Duan Family Center for Computing and Data Sciences, Boston",
    track: "Early-stage lung cancer phenotyping",
    award: "1st, Early-stage Lung Cancer Phenotyping track",
    project: "VI-LUAD",
    projectUrl: "https://github.com/jigark712",
    overview:
      "A model that predicts vascular invasion in lung adenocarcinoma from whole-slide tissue images. VI-LUAD uses a 25-model ensemble over tiled patches to flag invasion, a signal that guides staging and treatment decisions.",
    aboutEvent:
      "The MedAI Hackathon was Boston University's inaugural clinical-AI event at the Duan Family Center for Computing and Data Sciences, themed Transform Precision Medicine with AI. Teams got real datasets across three biomedical challenges, plus GPU access and mentorship over a two-day build.",
    aboutTrack:
      "We took the early-stage lung cancer phenotyping challenge, which handed teams H&E whole-slide images from lung resections and biopsies and asked for a model that predicts microscopic vascular invasion, a signal that guides staging and aggressive-growth risk.",
    whatWeBuilt:
      "VI-LUAD predicts vascular invasion in lung adenocarcinoma directly from whole-slide images. It tiles each slide into patches and runs a 25-model ensemble to flag invasion, trading a single fragile model for a vote that holds up better on unseen slides.",
    whatWeWon:
      "We placed 1st in the early-stage lung cancer phenotyping track.",
    photos: [
      { src: "/images/projects/optimized/medai-1.webp", alt: "The VI-LUAD team on stage at the MedAI Hackathon after their win." },
      { src: "/images/projects/optimized/medai-2.webp", alt: "The VI-LUAD team at the MedAI Hackathon at Boston University." },
    ],
  },
  {
    id: "civic",
    slug: "mlh-civichacks",
    name: "MLH CivicHacks",
    shortName: "Best Overall and Best in EcoHack · FoodGrid",
    description:
      "A civic-tech hackathon sanctioned by Major League Hacking, building software for local governments and communities.",
    url: "https://github.com/jigark712",
    image: "/images/wins/optimized/civic-card.webp",
    thumbnailImage: "/images/wins/optimized/civic-card.webp",
    alt: "The FoodGrid team at MLH CivicHacks holding the Best Overall award.",
    imageFit: "cover",
    event: "MLH CivicHacks",
    date: "2026",
    venue: "Boston",
    track: "EcoHack",
    award: "Best Overall and Best in EcoHack track",
    project: "FoodGrid",
    projectUrl: "https://github.com/jigark712",
    overview:
      "A map of food access inequality across Boston census tracts. FoodGrid pulls grocery, transit, and demographic data to surface where residents face the longest trips to fresh food, with separate views for residents and government planners.",
    aboutEvent:
      "CivicHacks is a Major League Hacking event where teams build software that strengthens communities and serves the public good. The 2026 edition drew students from around 20 universities across four tracks: EcoHack, CityHack, EduHack, and JusticeHack.",
    aboutTrack:
      "We competed in EcoHack, which asks for technology that tackles environmental and ecological problems including food equity. Judging weighed real-world impact and technical execution, so we aimed at a civic problem a planner could actually act on.",
    whatWeBuilt:
      "FoodGrid maps food access inequality across Boston census tracts. It pulls grocery, transit, and demographic data to surface where residents face the longest trips to fresh food, and splits into two views: one for residents checking their own area and one for government planners comparing tracts.",
    whatWeWon:
      "We won Best Overall and Best in the EcoHack track.",
    photos: [
      { src: "/images/projects/optimized/civic-1.webp", alt: "The FoodGrid team holding the Best Overall award at MLH CivicHacks." },
      { src: "/images/projects/optimized/civic-2.webp", alt: "The FoodGrid team at MLH CivicHacks." },
    ],
  },
];
