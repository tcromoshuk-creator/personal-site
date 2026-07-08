import Link from "next/link";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { SiteHeader } from "@/components/SiteHeader";
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
        <GoogleTagManagerNoScript />
        <GoogleTagManager />
        <AnalyticsEvents />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader navItems={navItems} />
        <main id="main">{children}</main>
        <footer className="site-footer">
          <p>© 2026 Tyrell Cromoshuk</p>
          <div className="footer-links">
            <Link href="/contact">Contact Me</Link>
            <a
              data-analytics-event="linkedin_click external_link_click"
              data-analytics-link-location="footer"
              href="https://www.linkedin.com/in/tyrellcromoshuk/"
            >
              LinkedIn
            </a>
            <a data-analytics-event="email_click" data-analytics-link-location="footer" href="mailto:tcromoshuk@gmail.com">
              Email
            </a>
            <a href="#main">Back to Top</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
