export type ExperienceRole = {
  id: string;
  role: string;
  org: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
};

// Facts sourced from portfolio.md. Rules honored:
// no student counts in the TA role, no throughput or load-time metrics for Strategic ERP.
export const experienceRoles: ExperienceRole[] = [
  {
    id: "bu-research",
    role: "Research Assistant",
    org: "Boston University, Prof. Aaron Mueller",
    location: "Boston, MA",
    period: "May 2026 — Present",
    summary: "AI safety research on sycophancy in instruction-tuned LLMs.",
    points: [
      "Trace sycophantic behavior back to specific post-training examples with influence functions (EK-FAC).",
      "Fine-tune Olmo 2 7B Instruct on Tulu 3 with adversarial confounders: surface-similar agreement, polite decoys, warm corrections.",
      "Validate causally through leave-out retraining across seeds while preserving MMLU and GSM8K.",
    ],
    tags: ["Influence functions", "LLM fine-tuning", "AI safety"],
  },
  {
    id: "bu-ta",
    role: "Teaching Assistant, CS460 Database Systems",
    org: "Boston University, Prof. George Kollios",
    location: "Boston, MA",
    period: "May 2026 — June 2026",
    summary: "Graduate database course covering SQL, indexing, query evaluation, and transactions.",
    points: [
      "Designed programming assignments, the final project, and reference solutions.",
      "Wrote grading rubrics and evaluated submissions against them.",
    ],
    tags: ["SQL", "Transactions", "Query evaluation"],
  },
  {
    id: "strategic-erp",
    role: "Data Analyst",
    org: "Strategic ERP",
    location: "Ahmedabad, India",
    period: "Jan 2025 — May 2025",
    summary: "Built an internal AI assistant so teams could query the ERP in natural language.",
    points: [
      "Fine-tuned Llama 3 8B Instruct with LoRA on CRM and HRMS docs, HR policies, and query patterns for 4 enterprise clients.",
      "Deployed as a REST endpoint for sales, HR, and support teams.",
      "Fixed recurring data inconsistencies at source and cut error tickets by 25%.",
    ],
    tags: ["Llama 3", "LoRA", "REST"],
  },
  {
    id: "iiit-research",
    role: "Research Assistant",
    org: "IIIT Vadodara, Dr. Naveen Kumar",
    location: "Gandhinagar, India",
    period: "May 2024 — Aug 2024",
    summary: "EV route planning with a Fuzzy Genetic Algorithm for charging-station selection.",
    points: [
      "Selected charging stops across multi-stop routes, benchmarked against greedy and shortest-path baselines for 26% lower cost.",
      "Built a Python simulator with pandas-based trip analysis.",
      "Presented at CTSEM 2025 and in press with Springer Lecture Notes in Civil Engineering.",
    ],
    tags: ["Genetic algorithms", "Python", "Optimization"],
  },
];
