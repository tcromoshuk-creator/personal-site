"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

type NavItem = {
  href: string;
  label: string;
};

export function SiteHeader({ navItems }: { navItems: NavItem[] }) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = useCallback(() => {
    if (menuRef.current?.open) {
      menuRef.current.open = false;
    }
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.open) return;
      if (!menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu]);

  return (
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
        <details className="mobile-menu" ref={menuRef}>
          <summary aria-label="Open main navigation">
            <span>Menu</span>
          </summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
