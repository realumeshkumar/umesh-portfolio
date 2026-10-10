"use client";

import { useState } from "react";
import { projectFilters, projects } from "@/data/site";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section wrap" aria-labelledby="projects-title">
      <div className="projects-head">
        <h2 id="projects-title">Projects</h2>
        <div className="filters" role="group" aria-label="Filter projects by technology">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              className={f === filter ? "filter filter-on" : "filter"}
              aria-pressed={f === filter}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {shown.length} of {projects.length} projects
      </p>
      <ul className="projects">
        {shown.map((p) => (
          <li className={p.featured ? "project project-featured" : "project"} key={p.name}>
            <h3>{p.name}</h3>
            <ul className="project-stack">
              {p.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="project-summary">{p.summary}</p>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              Visit site
              <span className="sr-only">: {p.name} (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
