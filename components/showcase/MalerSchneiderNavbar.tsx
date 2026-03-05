"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Paintbrush, Phone, Menu, X, Palette } from "lucide-react";

const base = "/showcase/malerbetrieb-schneider";

const navLinks = [
  { label: "Leistungen", href: `${base}/leistungen` },
  { label: "Galerie", href: `${base}/galerie` },
  { label: "Farbwelt", href: `${base}/farbwelt`, highlight: true },
  { label: "Über uns", href: `${base}/ueber-uns` },
  { label: "Kontakt", href: `${base}/kontakt` },
];

export default function MalerSchneiderNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== base && pathname.startsWith(href));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Demo Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-1.5 text-center text-xs">
        <span className="text-amber-800">
          Dies ist eine <strong>Demo-Website</strong> – erstellt als
          Showcase.{" "}
          <Link
            href="/showcase"
            className="underline hover:no-underline font-medium"
          >
            Alle Demos ansehen
          </Link>
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Logo */}
          <Link href={base} className="flex items-center gap-2.5">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                scrolled
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-emerald-700"
              }`}
            >
              <Paintbrush className="h-5 w-5" />
            </div>
            <span
              className={`text-lg font-bold transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Malerbetrieb Schneider
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.highlight
                    ? isActive(link.href)
                      ? "text-emerald-600"
                      : scrolled
                        ? "text-emerald-600 hover:text-emerald-700"
                        : "text-emerald-300 hover:text-white"
                    : isActive(link.href)
                      ? scrolled
                        ? "text-emerald-600"
                        : "text-white font-semibold"
                      : scrolled
                        ? "text-gray-700 hover:text-emerald-600"
                        : "text-white/90 hover:text-white"
                }`}
              >
                {link.highlight && (
                  <Palette className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+4906471123456"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
                scrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-500"
                  : "bg-white text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              <Phone className="h-4 w-4" />
              Jetzt anrufen
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.highlight && (
                  <Palette className="inline h-4 w-4 mr-1.5 text-emerald-600" />
                )}
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+4906471123456"
              className="flex items-center gap-2 px-4 py-3 mt-2 bg-emerald-600 text-white font-bold rounded-lg"
            >
              <Phone className="h-4 w-4" />
              06471 / 123 456
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
