import { ScrambleText } from "@/components/scramble-text";
import { experienceRoles } from "@/data/experience";

type ExperienceCopy = {
  kicker: string;
  title: string;
  description: string;
};

export function Experience({ copy }: { copy: ExperienceCopy }) {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <header className="experience-header">
        <div>
          <p><ScrambleText text={copy.kicker} /></p>
          <h2 id="experience-title"><ScrambleText text={copy.title} /></h2>
        </div>
        <p><ScrambleText text={copy.description} /></p>
      </header>

      <ol className="experience-track">
        {experienceRoles.map((item) => (
          <li key={item.id} className="experience-item">
            <span className="experience-node" aria-hidden="true" />
            <p className="experience-period">{item.period}</p>

            <div className="experience-content">
              <h3 className="experience-role">
                {item.role}
                <span className="experience-at"> at </span>
                <span className="experience-org">{item.org}</span>
              </h3>
              <p className="experience-place">{item.location}</p>
              <p className="experience-summary">{item.summary}</p>

              <div className="experience-detail">
                {item.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>

              <p className="experience-tags">{item.tags.join("  /  ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
