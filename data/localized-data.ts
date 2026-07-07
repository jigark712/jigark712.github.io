import { contactLinks, type ContactLink } from "@/data/contact";
import { labItems, type LabItem } from "@/data/lab-items";
import { type Locale, defaultLocale } from "@/data/locale";
import { projects, type Project, type ProjectStatus } from "@/data/projects";
import { ritsumeikanLabs, type RitsumeikanLab } from "@/data/ritsumeikan-labs";

export function getProjects(_locale: Locale = defaultLocale): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string, locale: Locale = defaultLocale): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getContactLinks(_locale: Locale = defaultLocale): ContactLink[] {
  return contactLinks;
}

export type LocalizedLabItem = LabItem & { linkAriaLabel: string };

export function getLabItems(_locale: Locale = defaultLocale): LocalizedLabItem[] {
  return labItems.map((item) => ({
    ...item,
    linkAriaLabel: `Open ${item.title} in a new tab`,
  }));
}

export type LocalizedRitsumeikanLab = RitsumeikanLab & { linkAriaLabel: string };

export function getRitsumeikanLabs(_locale: Locale = defaultLocale): LocalizedRitsumeikanLab[] {
  return ritsumeikanLabs.map((lab) => ({
    ...lab,
    linkAriaLabel: `Read about ${lab.name}`,
  }));
}

export function getRitsumeikanLabBySlug(
  slug: string,
  locale: Locale = defaultLocale,
): LocalizedRitsumeikanLab | undefined {
  return getRitsumeikanLabs(locale).find((lab) => lab.slug === slug);
}

export const projectStatusLabelsByLocale: Record<Locale, Record<ProjectStatus, string>> = {
  en: {
    "public-repository": "Public repository",
    live: "Live",
    concept: "Concept",
    experiment: "Experiment",
    documentation: "Documentation",
  },
};
