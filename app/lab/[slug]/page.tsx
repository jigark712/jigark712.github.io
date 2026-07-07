import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HackathonPost } from "@/components/hackathon-post";
import { getRitsumeikanLabBySlug } from "@/data/localized-data";
import { ritsumeikanLabs } from "@/data/ritsumeikan-labs";
import { getRequestLocale } from "@/data/request-locale";

type HackathonPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ritsumeikanLabs.map((lab) => ({ slug: lab.slug }));
}

export async function generateMetadata({ params }: HackathonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const win = getRitsumeikanLabBySlug(slug, locale);
  return win
    ? { title: `${win.event} — ${win.award}`, description: win.overview }
    : { title: "Milestone not found" };
}

export default async function HackathonPage({ params }: HackathonPageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const win = getRitsumeikanLabBySlug(slug, locale);
  if (!win) notFound();
  return <HackathonPost win={win} />;
}
