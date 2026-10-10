import type { CSSProperties } from "react";
import { migration } from "@/data/site";

// The hero's before/after readout. Bars grow once on page load (CSS only).
export default function MigrationPanel() {
  const { before, after, metrics } = migration;
  return (
    <figure className="panel">
      <figcaption className="panel-title">
        <a href={migration.href} target="_blank" rel="noopener noreferrer">
          {migration.site}
        </a>
        , before and after
      </figcaption>

      <div className="grades">
        <div className="grade grade-before">
          <span className="grade-letter">{before.grade}</span>
          <span className="grade-meta">
            <strong>
              {before.label}: {before.score}
            </strong>
            {before.detail}
          </span>
        </div>
        <div className="grade grade-after">
          <span className="grade-letter">{after.grade}</span>
          <span className="grade-meta">
            <strong>
              {after.label}: {after.score}
            </strong>
            {after.detail}
          </span>
        </div>
      </div>

      <ul className="metrics">
        {metrics.map((m, i) => (
          <li key={m.name} style={{ "--i": i } as CSSProperties}>
            <p className="metric-name">
              {m.name}
              {m.lowerIsBetter && <span> (lower is better)</span>}
            </p>
            <div className="bar-row">
              <span className="bar bar-before" style={{ "--w": `${m.beforeBar}%` } as CSSProperties} />
              <span className="bar-value">
                <span className="sr-only">Before: </span>
                {m.before}
              </span>
            </div>
            <div className="bar-row">
              <span className="bar bar-after" style={{ "--w": `${m.afterBar}%` } as CSSProperties} />
              <span className="bar-value bar-value-after">
                <span className="sr-only">After: </span>
                {m.after}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <p className="panel-source">Measured with GTmetrix.</p>
    </figure>
  );
}
