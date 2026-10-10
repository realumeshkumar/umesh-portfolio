"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="brand" href="#main" onClick={() => setOpen(false)}>
          <img src={site.headshot} alt="" width={36} height={36} />
          {site.name}
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "nav nav-open" : "nav"} aria-label="Sections">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary nav-cta" href={`mailto:${site.email}`} onClick={() => setOpen(false)}>
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
