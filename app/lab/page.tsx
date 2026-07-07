import type { Metadata } from "next";
import { RitsumeikanLabs } from "@/components/ritsumeikan-labs";
import { ScrambleText } from "@/components/scramble-text";
import { getRitsumeikanLabs } from "@/data/localized-data";
import { siteCopy } from "@/data/locale";
import { getRequestLocale } from "@/data/request-locale";

export const metadata: Metadata = {
  title: "Milestones",
  description: "Hackathon wins and milestones by Jigar Kanakhara.",
};

export default async function MilestonesPage() {
  const locale = await getRequestLocale();
  const copy = siteCopy[locale].lab;
  const wins = getRitsumeikanLabs(locale);

  return (
    <main className="lab-page">
      <header className="wins-header">
        <p className="wins-eyebrow"><ScrambleText text={copy.ritsumeikanKicker} /></p>
        <h1 className="wins-heading"><ScrambleText text={copy.title} /></h1>
        <p className="wins-lead"><ScrambleText text={copy.description} /></p>
      </header>
      <RitsumeikanLabs labs={wins} copy={copy} />
    </main>
  );
}
