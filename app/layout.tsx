import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { site } from "@/data/site";

const description =
  "Umesh Kumar is an Adobe Certified Commerce Developer with 4.5+ years of experience in Magento 2, Laravel, CodeIgniter and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.role}`,
  description,
  keywords: [
    "Umesh Kumar",
    "Magento 2 developer",
    "Adobe Commerce developer",
    "Laravel developer",
    "Next.js developer",
    "PHP developer India",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: `${site.name} | ${site.role}`,
    description,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: { card: "summary", title: site.name, description, creator: "@realumeshkumar" },
};

export const viewport: Viewport = {
  themeColor: "#070b1a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  // WhatsApp is a chat link, not a profile page.
  sameAs: site.socials.filter((s) => s.name !== "WhatsApp").map((s) => s.href),
  address: { "@type": "PostalAddress", addressLocality: "Jhansi", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  knowsAbout: ["Magento 2", "Adobe Commerce", "PHP", "Laravel", "CodeIgniter", "Next.js", "React", "GraphQL","Full Stack Development", "Web Development", "E-commerce Development"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
