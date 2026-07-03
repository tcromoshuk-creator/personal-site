import Link from "next/link";
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
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader navItems={navItems} />
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
