import type { Metadata } from "next";
import { Experience } from "@/components/experience";
import { ScrambleText } from "@/components/scramble-text";
import { siteCopy } from "@/data/locale";
import { getRequestLocale } from "@/data/request-locale";

export const metadata: Metadata = {
  title: "Experience",
  description: "Research, teaching, and applied AI experience by Jigar Kanakhara.",
};

export default async function ExperiencePage() {
  const locale = await getRequestLocale();
  const copy = siteCopy[locale].experience;

  return (
    <main className="editorial-page experience-page">
      <header className="page-header">
        <h1><ScrambleText text={copy.title} /></h1>
        <p><ScrambleText text={copy.description} /></p>
      </header>
      <Experience copy={copy} />
    </main>
  );
}
