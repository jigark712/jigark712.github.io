import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrambleText } from "@/components/scramble-text";
import type { LocalizedRitsumeikanLab } from "@/data/localized-data";

export function HackathonPost({ win }: { win: LocalizedRitsumeikanLab }) {
  const sections = [
    { key: "about", label: "About the hackathon", body: win.aboutEvent },
    { key: "track", label: "The track we competed in", body: win.aboutTrack },
    { key: "built", label: "What we built", body: win.whatWeBuilt },
    { key: "won", label: "What we won", body: win.whatWeWon },
  ];
  const lead = win.photos[0];
  const rest = win.photos.slice(1);

  return (
    <main className="hack-post">
      <article className="hack-post-inner">
        <Link className="hack-post-back" href="/lab">
          <ArrowLeft aria-hidden="true" size={15} />
          <span><ScrambleText text="Milestones" /></span>
        </Link>

        <header className="hack-post-head">
          <p className="hack-post-kicker">
            <ScrambleText text={win.date} />
            <span className="hack-post-dot" aria-hidden="true">·</span>
            <ScrambleText text={win.venue} />
          </p>
          <h1 className="hack-post-title"><ScrambleText text={win.event} /></h1>
          <p className="hack-post-award"><ScrambleText text={win.award} /></p>
        </header>

        {lead ? (
          <figure className="hack-post-lead-photo">
            <Image
              src={lead.src}
              alt={lead.alt}
              fill
              sizes="(max-width: 760px) calc(100vw - 40px), 720px"
              priority
            />
          </figure>
        ) : null}

        <div className="hack-post-body">
          {sections.map((section, index) => (
            <section key={section.key} className="hack-post-section">
              <h2>{section.label}</h2>
              <p>{section.body}</p>
              {rest[index] ? (
                <figure className="hack-post-photo">
                  <Image
                    src={rest[index].src}
                    alt={rest[index].alt}
                    fill
                    sizes="(max-width: 760px) calc(100vw - 40px), 720px"
                    loading="lazy"
                  />
                </figure>
              ) : null}
            </section>
          ))}
        </div>

        <a
          className="hack-post-link"
          href={win.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>See {win.project}</span>
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </article>
    </main>
  );
}
