export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "jigar-portfolio-locale:v1";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en";
}

export function normalizeLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export const siteCopy = {
  en: {
    language: {
      label: "Language",
      english: "EN",
      japanese: "日本語",
    },
    nav: {
      ariaLabel: "Primary navigation",
      mobileAriaLabel: "Mobile navigation",
      home: "Home",
      projects: "Projects",
      lab: "Milestones",
      timeline: "Timeline",
      about: "About",
      more: "More",
      closeMore: "Close more menu",
      moreOptions: "More navigation options",
      email: "Email",
      emailMarvel: "Email Jigar Kanakhara",
      theme: "Theme",
      switchTheme: "Switch theme",
      toggleTheme: "Toggle light or dark theme",
      sleepRadio: "Sleep Radio",
      sleepRadioControls: "Sleep Radio controls",
      openSleepRadio: "Open Sleep Radio preset on Lofi Cafe in a new tab",
      opensNewTab: "opens in a new tab",
      lofiTitle: "Lofi Cafe Sleeping station player",
    },
    home: {
      osakaTimeLabel: "Current time in Boston",
      location: "Boston, MA · 2026",
      updated: "last updated · 2026",
      handle: "Jigar Kanakhara · jigark712",
      role: "AI Engineer",
      tech: "Agentic AI · LLM Fine-tuning · AI Safety · Full-Stack",
      tagline:
        "Builder who ships production agentic AI systems. Five hackathon wins in one year, one publication in press.",
    },
    projects: {
      metadataTitle: "Projects",
      metadataDescription: "Production agentic AI systems, multi-agent platforms, and hackathon-winning projects by Jigar Kanakhara.",
      title: "Projects",
      description: "Production agentic AI systems and hackathon wins.",
      galleryLabel: "Project gallery",
      viewCaseStudy: "View project case study",
    },
    caseStudy: {
      back: "Projects",
      onThisPage: "On this page",
      problem: "Problem",
      solution: "Solution",
      built: "What I Built",
      technical: "Technical Details",
      learned: "What I Learned",
      viewRepository: "View repository",
      noRepository: "No public repository linked",
    },
    about: {
      metadataTitle: "About",
      metadataDescription: "About Jigar Kanakhara, an AI engineer and MS Computer Science student at Boston University.",
      title: "About",
      lead:
        "Hi, I'm Jigar Kanakhara, an MS Computer Science student at Boston University building multi-agent LLM systems and doing AI safety research. I ship to production and win hackathons doing it: five wins in one year across agentic AI, medical imaging, and civic tech.",
      support:
        "I am a Research Assistant with Prof. Aaron Mueller studying sycophancy in instruction-tuned LLMs, and recently a Teaching Assistant for CS460 Database Systems. Open to full-time roles and Spring 2027 internships in AI, ML, and full-stack engineering.",
      cardLabel: "Jigar Kanakhara profile card",
      identity: {
        name: "Name",
        location: "Location",
        graduation: "Graduation",
        handle: "Handle",
        expectedGraduation: "December 2026",
      },
      learningTitle: "Focus areas",
      learning: ["Agentic AI", "LLM fine-tuning", "Influence functions", "vLLM inference", "AI safety", "Vision Transformers", "Full-stack"],
      interestsTitle: "Interested in",
      interests: ["AI safety and alignment", "Multi-agent systems", "Mechanistic interpretability", "LLM efficiency", "Applied ML"],
      beyondCodeTitle: "Research",
      beyondCode: "Sycophancy in LLMs · Influence functions · EV route planning, in press with Springer",
    },
    experience: {
      kicker: "2024 — Present",
      title: "Experience",
      description: "Research, teaching, and applied AI across Boston University and industry.",
    },
    contact: {
      metadataTitle: "Contact",
      metadataDescription: "Contact Jigar Kanakhara.",
      title: "Contact",
      description:
        "Open to full-time roles and Spring 2027 internships in AI, ML, LLM fine-tuning, agentic AI, and full-stack engineering. F-1 with CPT through BU, no sponsorship needed.",
      optionsLabel: "Contact options",
      unpublished: "Unpublished",
    },
    timeline: {
      metadataTitle: "Timeline",
      metadataDescription: "A chronological index of projects and experiences.",
      title: "Timeline",
      description: "A chronological index of projects and experiences.",
    },
    lab: {
      metadataTitle: "Milestones",
      metadataDescription: "Hackathon wins and milestones by Jigar Kanakhara.",
      title: "Milestones & Achievements",
      description: "Five hackathon wins in one year, and a publication in press.",
      openExternal: "Open",
      ritsumeikanKicker: "2026 · One year",
      ritsumeikanTitle: "Hackathon wins",
      ritsumeikanDescription:
        "Five wins across agentic AI, medical imaging, and civic tech, from ETHGlobal New York to Red Hat, Yale, and Boston University.",
      visitLab: "Visit",
    },
    notFound: {
      title: "That project is not on the map.",
      returnToProjects: "Return to projects",
    },
  },
} as const;
