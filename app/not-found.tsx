import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="wrap notfound">
      <h1>This page does not exist</h1>
      <p>The link may be old or mistyped.</p>
      <Link className="btn btn-primary" href="/">
        Go to the home page
      </Link>
    </main>
  );
}
