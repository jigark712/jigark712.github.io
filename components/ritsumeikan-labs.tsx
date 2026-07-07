import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrambleText } from "@/components/scramble-text";
import type { LocalizedRitsumeikanLab } from "@/data/localized-data";

type RitsumeikanLabsCopy = {
  ritsumeikanKicker: string;
  ritsumeikanTitle: string;
  ritsumeikanDescription: string;
};

export function RitsumeikanLabs({ labs, copy }: { labs: LocalizedRitsumeikanLab[]; copy: RitsumeikanLabsCopy }) {
  return (
    <section className="wins" aria-label={copy.ritsumeikanTitle}>
      <div className="wins-grid">
        {labs.map((lab, index) => (
          <Link
            key={lab.id}
            className="win-card"
            href={`/lab/${lab.slug}`}
            aria-label={lab.linkAriaLabel}
          >
            <div className="win-media" data-fit={lab.imageFit ?? "cover"}>
              <Image
                src={lab.thumbnailImage}
                alt={lab.alt}
                fill
                sizes="(max-width: 799px) calc(100vw - 24px), (max-width: 1100px) calc((100vw - 74px) / 2), calc((100vw - 80px) / 3)"
                loading="lazy"
              />
              <span className="win-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="win-copy">
              <p className="win-kicker"><ScrambleText text={lab.shortName} /></p>
              <h3 className="win-title">
                <ScrambleText text={lab.name} />
                <ArrowUpRight className="win-arrow" aria-hidden="true" size={17} />
              </h3>
              <p className="win-desc"><ScrambleText text={lab.description} /></p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
