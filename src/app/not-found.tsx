import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="section-inner">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p className="lede">
          This route is not part of the professional site.
        </p>
        <div className="button-row">
          <Link className="button primary" href="/">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
