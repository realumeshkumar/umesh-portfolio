import { site } from "@/data/site";

// Official Adobe certification badge (white version, for the dark theme).
export default function AdobeBadge({ width }: { width: number }) {
  return (
    <img
      className="adobe-badge"
      src={site.adobeBadge.onDark}
      alt="Adobe Certified Professional: Adobe Commerce Developer"
      width={width}
      height={Math.round((width * 150) / 560)}
    />
  );
}
