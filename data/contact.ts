export type ContactLink = {
  kind: "github" | "linkedin" | "email";
  label: string;
  value: string;
  href?: string;
  note: string;
};

export const publicEmail = "jigar.work712@gmail.com";
export const publicEmailHref = `mailto:${publicEmail}`;

export const contactLinks: ContactLink[] = [
  {
    kind: "github",
    label: "GitHub",
    value: "jigark712",
    href: "https://github.com/jigark712",
    note: "Public repositories and project documentation",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    value: "Jigar Kanakhara",
    href: "https://linkedin.com/in/jigar-kanakhara-66a9621ba",
    note: "Experience, research, and professional updates",
  },
  {
    kind: "email",
    label: "Email",
    value: publicEmail,
    href: publicEmailHref,
    note: "Email me directly",
  },
];
