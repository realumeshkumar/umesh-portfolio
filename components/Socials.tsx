import SocialIcon from "@/components/SocialIcon";
import { site } from "@/data/site";

// Round icon buttons for every link in site.socials (hero and footer).
export default function Socials({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <ul className={`socials ${className}`.trim()}>
      {site.socials.map((s) => (
        <li key={s.name}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" title={s.name}>
            <SocialIcon name={s.name} size={size} />
            <span className="sr-only">{s.name} (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
