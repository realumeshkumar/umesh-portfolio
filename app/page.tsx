import AdobeBadge from "@/components/AdobeBadge";
import Header from "@/components/Header";
import MigrationPanel from "@/components/MigrationPanel";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcon";
import Socials from "@/components/Socials";
import TechStack from "@/components/TechStack";
import { caseStudy, certifications, education, experience, facts, migration, site, skills, stats } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-text">
            <p className="status">
              <span className="status-dot" aria-hidden="true" />
              {site.availability}
            </p>
            <h1 id="hero-title">{site.headline}</h1>
            <p className="lede">{site.intro}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#projects">
                See my projects
              </a>
              <a className="btn" href={site.resume} download>
                Download resume
              </a>
            </div>
            <div className="hero-links">
              <Socials />
              <a className="hero-email" href={`mailto:${site.email}`}>
                <SocialIcon name="Email" />
                {site.email}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="frame">
              <img
                src={site.portrait}
                alt="Umesh Kumar standing with arms crossed, wearing a navy shirt"
                width={683}
                height={1100}
              />
            </div>
            <TechStack />
            <a
              className="float float-badge"
              href={site.adobeVerify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adobe Certified Professional, Adobe Commerce Developer. Verify credential (opens in a new tab)"
            >
              <AdobeBadge width={176} />
            </a>
          </div>
        </section>

        <div className="wrap">
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dd>{s.value}</dd>
                <dt>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <section id="about" className="section wrap" aria-labelledby="about-title">
          <Reveal className="about">
            <div>
              <h2 id="about-title">About me</h2>
              <div className="prose">
                {site.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <dl className="card facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <section id="result" className="section wrap" aria-labelledby="result-title">
          <Reveal className="result">
            <MigrationPanel />
            <div>
              <h2 id="result-title">{caseStudy.title}</h2>
              <p className="section-lede">{caseStudy.intro}</p>
              <ul className="ticks">
                {caseStudy.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a className="btn" href={migration.href} target="_blank" rel="noopener noreferrer">
                Visit alletec.com
              </a>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="section wrap" aria-labelledby="skills-title">
          <h2 id="skills-title">Skills</h2>
          <Reveal className="skills">
            {skills.map((s) => (
              <div className="card skill" key={s.group}>
                <h3>{s.group}</h3>
                <ul className="chips">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </section>

        <section id="experience" className="section wrap" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <Reveal>
            <ol className="timeline">
              {experience.map((job) => (
                <li className="job" key={job.company}>
                  <p className="job-period">{job.period}</p>
                  <div className="job-body">
                    <h3>{job.title}</h3>
                    <p className="job-company">
                      {job.company}, {job.place}
                    </p>
                    <ul>
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              <li className="job">
                <p className="job-period">{education.period}</p>
                <div className="job-body">
                  <h3>{education.title}</h3>
                  <p className="job-company">
                    {education.school}, {education.note}
                  </p>
                </div>
              </li>
            </ol>
          </Reveal>
        </section>

        <Projects />

        <section id="certifications" className="section wrap" aria-labelledby="cert-title">
          <h2 id="cert-title">Certifications</h2>
          <Reveal>
            <ul className="certs">
              {certifications.map((c) => (
                <li className={c.primary ? "card cert cert-primary" : "card cert"} key={c.name}>
                  {c.primary && (
                    <span className="cert-badge">
                      <AdobeBadge width={220} />
                    </span>
                  )}
                  <div className="cert-text">
                    <h3>{c.name}</h3>
                    <p>
                      {c.issuer}. {c.date}.
                    </p>
                  </div>
                  <a className="btn" href={c.href} target="_blank" rel="noopener noreferrer">
                    Verify credential
                    <span className="sr-only"> for {c.name} (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section id="contact" className="section wrap" aria-labelledby="contact-title">
          <Reveal className="contact">
            <div>
              <h2 id="contact-title">Hiring for a Magento or full-stack role?</h2>
              <p>Email is the fastest way to reach me. I usually reply within a day.</p>
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                Email me
              </a>
            </div>
            <ul className="contact-list">
              <li>
                <span>
                  <SocialIcon name="Email" size={16} />
                  Email
                </span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span>
                  <SocialIcon name="Phone" size={16} />
                  Phone
                </span>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
            </ul>
          </Reveal>
        </section>
      </main>
      <footer className="footer wrap">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="footer-social">
          <p>Stay connected</p>
          <Socials size={16} className="socials-sm" />
        </div>
      </footer>
    </>
  );
}
