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
          <Link href="/" className="brand" aria-label="Tyrell Cromoshuk home">
            <span>Tyrell Cromoshuk</span>
            <small>Growth & E-Commerce Executive</small>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div>
            <strong>Tyrell Cromoshuk</strong>
            <p>
              Growth leadership across e-commerce, marketplaces, acquisition,
              lifecycle, reporting, and operating cadence.
            </p>
          </div>
          <div className="footer-links">
            <Link href="/contact">Start a conversation</Link>
            <a href="https://www.linkedin.com/in/tyrellcromoshuk/">LinkedIn</a>
            <a href="mailto:tcromoshuk@gmail.com">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
