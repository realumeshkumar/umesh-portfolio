// Everything the site says about you lives in this file.
// Edit the text here and the pages update; no component changes needed.

export const site = {
  // Change this to your real domain once the site is live (used for SEO tags and the sitemap).
  url: "https://realumeshkumar.in/",
  name: "Umesh Kumar",
  role: "Adobe Commerce (Magento) Certified Developer",
  location: "Jhansi, Uttar Pradesh, India",
  email: "er.umesh21kushwaha@gmail.com",
  phone: "+91 76178 13393",
  phoneHref: "+917617813393",
  github: "https://github.com/realumeshkumar",
  linkedin: "https://in.linkedin.com/in/realumeshkumar",
  // Shown with icons in the hero and the contact section, in this order.
  socials: [
    { name: "LinkedIn", href: "https://in.linkedin.com/in/realumeshkumar", handle: "linkedin.com/in/realumeshkumar" },
    { name: "GitHub", href: "https://github.com/realumeshkumar", handle: "github.com/realumeshkumar" },
    { name: "X", href: "https://x.com/realumeshkumar", handle: "x.com/realumeshkumar" },
    { name: "Instagram", href: "https://www.instagram.com/realumeshkumar", handle: "instagram.com/realumeshkumar" },
    { name: "Facebook", href: "https://www.facebook.com/realumeshkumar", handle: "facebook.com/realumeshkumar" },
    { name: "WhatsApp", href: "https://wa.me/917617813393", handle: "+91 76178 13393" },
  ],
  resume: "/Umesh-Kumar-Resume.pdf",
  // Images live in public/images. Replace the files to change them.
  headshot: "/images/umesh-headshot.webp",
  portrait: "/images/umesh-portrait.webp",
  adobeBadge: { onLight: "/images/adobe-badge-dark.png", onDark: "/images/adobe-badge-light.png" },
  adobeVerify: "https://certification.adobe.com/credential/verify/8748f736-cc78-4993-aa16-4d1ae9e9f4f1",
  availability: "Open to full-time Magento and full-stack roles",
  headline: "I build Magento stores and make slow websites fast.",
  intro:
    "Adobe Certified Commerce Developer with 4.5+ years of experience in Magento 2, Laravel, CodeIgniter and Next.js. I write custom modules and GraphQL APIs, connect stores to CRMs and ERPs, and tune sites until they pass Core Web Vitals.",
  about: [
    "I started as a Laravel backend developer in 2021 and moved into enterprise e-commerce a year later. Since then most of my work has been on Magento 2 and Adobe Commerce: custom modules, themes, PWA Studio storefronts, payment gateways, and integrations with systems like Salesforce CRM and Vinculum ERP.",
    "More recently I led the migration of a company website from CodeIgniter 3 to Next.js with a CodeIgniter 4 API, and moved its hosting from shared hosting to a VPS behind Cloudflare. I handle the server side too: Linux, Nginx, security patches and uptime.",
    "I also mentor junior developers and interns on coding standards, Git workflows and code review.",
  ],
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

// The before/after panel in the hero. Figures are GTmetrix results for alletec.com.
export const migration = {
  site: "alletec.com",
  href: "https://www.alletec.com/",
  before: { label: "Before", detail: "Shared hosting, CodeIgniter 3", grade: "D", score: "65%" },
  after: { label: "After", detail: "VPS, Next.js, Cloudflare", grade: "A", score: "93%" },
  // `beforeBar` and `afterBar` are bar lengths in percent.
  metrics: [
    { name: "Performance", before: "57%", after: "97%", beforeBar: 57, afterBar: 97, lowerIsBetter: false },
    { name: "Structure", before: "78%", after: "88%", beforeBar: 78, afterBar: 88, lowerIsBetter: false },
    { name: "Largest Contentful Paint", before: "3.8 s", after: "813 ms", beforeBar: 100, afterBar: 21, lowerIsBetter: true },
    { name: "Page size", before: "3.66 MB", after: "2.43 MB", beforeBar: 100, afterBar: 66, lowerIsBetter: true },
  ],
};

export const skills = [
  {
    group: "E-commerce",
    items: [
      "Adobe Commerce (Magento 2)",
      "Module development",
      "EAV architecture",
      "Extension customization",
      "PWA Studio",
      "GraphQL APIs",
      "Payment gateways",
    ],
  },
  {
    group: "Backend",
    items: ["PHP 7.x / 8.x", "Laravel", "CodeIgniter 3 & 4", "RESTful APIs", "OOP", "Python", "Django"],
  },
  {
    group: "Frontend",
    items: ["Next.js", "React.js", "JavaScript (ES6+)", "jQuery", "HTML5", "CSS3 / Tailwind", "Angular"],
  },
  {
    group: "Database and tools",
    items: ["MySQL", "Git", "GitHub", "Bitbucket"],
  },
  {
    group: "DevOps and infrastructure",
    items: ["Linux (Ubuntu)", "Nginx", "Apache", "Cloudflare", "VPS server management", "Azure DevOps", "LEMP stack"],
  },
];

export const experience = [
  {
    company: "All e Technologies Ltd (Alletec)",
    place: "Noida",
    title: "PHP Developer",
    period: "Dec 2024 – Sep 2026",
    points: [
      "Led the company website migration from legacy CodeIgniter 3 to a decoupled stack: Next.js on the frontend and a CodeIgniter 4 API on the backend.",
      "Reached a PageSpeed Insights score above 90 and improved Core Web Vitals (LCP, CLS, FID) with server-side rendering, image optimization and bundle splitting.",
      "Managed the hosted server environment: security patches, uptime monitoring and Nginx configuration.",
      "Mentored junior developers and interns on coding standards, Git workflows and code review.",
    ],
  },
  {
    company: "IDS Logic Pvt Ltd",
    place: "Noida",
    title: "Software Developer, PHP",
    period: "Jun 2024 – Nov 2024",
    points: [
      "Customised and extended Magento PWA storefronts for fast loading on mobile and desktop.",
      "Built custom Magento 2 themes and frontend components to match client brand guidelines.",
      "Debugged, tested across browsers and optimized backend queries to improve responsiveness.",
    ],
  },
  {
    company: "Zip Infosolution Pvt Ltd (Growisto)",
    place: "Indore",
    title: "Software Developer, PHP",
    period: "Aug 2022 – May 2024",
    points: [
      "Built, customized and maintained enterprise Magento 2 stores and Laravel web applications.",
      "Wrote custom Magento modules, extensions and GraphQL endpoints to extend the core platform.",
      "Integrated third-party systems including Salesforce CRM, Vinculum ERP and payment gateways.",
      "Improved site speed through efficient code and server-side configuration.",
    ],
  },
  {
    company: "Compile Technologies Pvt Ltd (HackerKernel)",
    place: "Bhopal",
    title: "Junior Backend Developer",
    period: "Dec 2021 – Jul 2022",
    points: [
      "Developed backend services for Laravel applications following MVC patterns.",
      "Worked with QA to find edge cases, fix bugs and write unit tests.",
      "Took part in Agile sprints: daily standups, sprint planning and technical reviews.",
    ],
  },
];

export const education = {
  title: "Diploma in Information Technology",
  school: "Government Polytechnic Mahoba (BTEUP Lucknow)",
  period: "2018 – 2021",
  note: "78%",
};

export type Project = {
  name: string;
  stack: string[];
  // Which filter buttons this project appears under.
  tags: string[];
  summary: string;
  href: string;
  featured?: boolean;
};

export const projectFilters = ["All", "Magento", "Laravel", "Next.js / React", "CodeIgniter"];

export const projects: Project[] = [
  {
    name: "Alletec.com",
    stack: ["Next.js", "CodeIgniter 4"],
    tags: ["Next.js / React", "CodeIgniter"],
    summary:
      "Led the end-to-end migration of an enterprise website from a legacy monolith to a decoupled Next.js frontend and CodeIgniter 4 API. Reached a 90+ PageSpeed score with SSR, image optimization and code splitting, and integrated the CRM.",
    href: "https://www.alletec.com/",
    featured: true,
  },
  {
    name: "Atomberg",
    stack: ["Magento 2", "React.js"],
    tags: ["Magento", "Next.js / React"],
    summary:
      "Maintained a high-traffic store. Built custom reporting modules and GraphQL endpoints, and integrated Salesforce CRM and Vinculum ERP to keep order and inventory data in sync.",
    href: "https://atomberg.com",
    featured: true,
  },
  {
    name: "Wearer Fashion",
    stack: ["Magento 2", "PWA Studio"],
    tags: ["Magento"],
    summary:
      "Delivered a mobile-first fashion store from scratch on PWA Studio, with a custom brand theme, payment gateway integration, an optimized checkout and offline support.",
    href: "https://wearer.in/",
    featured: true,
  },
  {
    name: "Kaya Clinic",
    stack: ["Magento 2", "Adobe Commerce"],
    tags: ["Magento"],
    summary:
      "Full-cycle development and maintenance for a skincare store. Reworked the blog section for discoverability and SEO, and tuned backend processes to stay stable through campaign traffic spikes.",
    href: "https://www.kaya.in/",
    featured: true,
  },
  {
    name: "SmarterEMR",
    stack: ["CodeIgniter", "MySQL"],
    tags: ["CodeIgniter"],
    summary:
      "Multi-tenant EMR platform with role-based access control, Stripe and Azure Blob Storage integrations, and automated PDF and CSV reporting.",
    href: "https://app.smarteremr.com/",
  },
  {
    name: "Mazedan Digital Library",
    stack: ["Laravel 8", "React.js"],
    tags: ["Laravel", "Next.js / React"],
    summary:
      "Library management system built from scratch, with a subscription module for articles and journals and IP-based authentication for institutional access.",
    href: "https://mdl-dev.mazedan.com/",
  },
  {
    name: "Token Booking",
    stack: ["Laravel", "Angular"],
    tags: ["Laravel"],
    summary:
      "Token-based appointment system with a real-time admin dashboard for doctor availability and patient queues, backed by REST APIs for the patient mobile interface.",
    href: "https://drforu.sbs/",
  },
  {
    name: "Physics Query Hub",
    stack: ["Laravel", "Angular"],
    tags: ["Laravel"],
    summary:
      "Q&A platform that automates the question lifecycle, with an admin dashboard, optimized database schemas and strict permission management.",
    href: "https://physicsqueryhub.sbs/",
  },
  {
    name: "Suvlaav Android App",
    stack: ["Laravel", "MySQL"],
    tags: ["Laravel"],
    summary:
      "Backend and admin panel for a wholesale e-commerce Android app: product catalogs, order processing, user management and low-latency APIs.",
    href: "http://suvlav.com/",
  },
  {
    name: "Contents.com",
    stack: ["Laravel", "Vue.js"],
    tags: ["Laravel"],
    summary:
      "Contributed core business logic to a generative AI platform, automating content creation and order processing workflows.",
    href: "https://www.contents.com/",
  },
  {
    name: "HackerKernel website",
    stack: ["Laravel"],
    tags: ["Laravel"],
    summary:
      "Built and managed the recruitment portal: job postings, application tracking and a resume submission pipeline for the HR team.",
    href: "https://hackerkernel.com/",
  },
  {
    name: "SolarSquare",
    stack: ["Laravel", "WordPress"],
    tags: ["Laravel"],
    summary:
      "Ran technical audits and optimizations that raised page speed and Core Web Vitals, and streamlined the backend for lead-generation traffic spikes.",
    href: "https://www.solarsquare.in/",
  },
];

export const certifications = [
  {
    name: "Adobe Certified Professional – Adobe Commerce Developer",
    issuer: "Adobe",
    date: "Issued Nov 2023, valid until Feb 2028",
    href: "https://certification.adobe.com/credential/verify/8748f736-cc78-4993-aa16-4d1ae9e9f4f1",
    primary: true,
  },
  {
    name: "Technical Support Fundamentals",
    issuer: "Google",
    date: "Issued Nov 2020",
    href: "https://www.coursera.org/account/accomplishments/verify/3Y474H92K62R",
    primary: false,
  },
];

// The four numbers under the hero.
export const stats = [
  { value: "4.5+", label: "Years of experience" },
  { value: "12", label: "Production projects" },
  { value: "90+", label: "PageSpeed score on alletec.com" },
  { value: "D to A", label: "GTmetrix grade after migration" },
];

// The small facts card in the About section.
export const facts = [
  { label: "Based in", value: "Jhansi, Uttar Pradesh" },
  { label: "Experience", value: "4.5+ years" },
  { label: "Certified", value: "Adobe Commerce Developer" },
  { label: "Education", value: "Diploma in Information Technology" },
];

// Text beside the before/after panel.
export const caseStudy = {
  title: "A slow company website, rebuilt to load in under a second",
  intro:
    "Alletec's website ran on CodeIgniter 3 on shared hosting and scored a D on GTmetrix. I led the rebuild and the hosting move.",
  points: [
    "Rebuilt the frontend in Next.js with a CodeIgniter 4 API behind it",
    "Moved hosting from shared hosting to a VPS, with Cloudflare for CDN and security",
    "Used server-side rendering, image optimization and code splitting to cut load time",
  ],
};
