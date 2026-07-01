import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export const metadata = createMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <header className="site-header">
          <div className="site-header-inner">
            <div className="brand-lockup">
              <Link href="/" className="brand" aria-label="Tyrell Cromoshuk home">
                Tyrell Cromoshuk
              </Link>
              <span className="header-status header-status-mobile">
                Open to Leadership & Advisory
              </span>
            </div>
            <nav className="main-nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <span className="header-status header-status-desktop">
              Open to Leadership & Advisory
            </span>
            <details className="mobile-menu">
              <summary aria-label="Open main navigation">
                <span>Menu</span>
              </summary>
              <nav className="mobile-nav" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <p>© 2026 Tyrell Cromoshuk</p>
          <div className="footer-links">
            <Link href="/contact">Contact Me</Link>
            <a href="https://www.linkedin.com/in/tyrellcromoshuk/">LinkedIn</a>
            <a href="mailto:tcromoshuk@gmail.com">Email</a>
            <a href="#main">Back to Top</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
