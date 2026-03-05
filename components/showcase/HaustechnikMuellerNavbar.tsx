"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Phone, Menu, X, Thermometer, AlertTriangle } from "lucide-react";

const base = "/showcase/haustechnik-mueller";

const navLinks = [
  { label: "Leistungen", href: `${base}/leistungen` },
  { label: "HeizungsCheck", href: `${base}/heizungscheck`, highlighted: true },
  { label: "Notdienst", href: `${base}/notdienst`, emergency: true },
  { label: "Über uns", href: `${base}/ueber-uns` },
  { label: "Kontakt", href: `${base}/kontakt` },
];

export default function HaustechnikMuellerNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Demo Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-1.5 text-center text-xs">
        <span className="text-amber-800">
          Dies ist eine <strong>Demo-Website</strong> – erstellt als Showcase.{" "}
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
                  ? "bg-red-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              <Flame className="h-5 w-5" />
            </div>
            <span
              className={`text-lg font-bold transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Haustechnik Müller
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== base && pathname.startsWith(link.href));

              /* Emergency link (Notdienst) */
              if (link.emergency) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      scrolled
                        ? "text-red-600 hover:text-red-700"
                        : "text-red-400 hover:text-red-300"
                    } ${isActive ? "underline underline-offset-4" : ""}`}
                  >
                    <AlertTriangle className="h-3.5 w-3.5" />
                    {link.label}
                  </Link>
                );
              }

              /* Highlighted link (HeizungsCheck) */
              if (link.highlighted) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${
                      scrolled
                        ? "text-red-600 hover:text-red-700"
                        : "text-white hover:text-red-200"
                    } ${isActive ? "underline underline-offset-4" : ""}`}
                  >
                    <Thermometer className="h-3.5 w-3.5" />
                    {link.label}
                  </Link>
                );
              }

              /* Regular link */
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? scrolled
                        ? "text-red-600"
                        : "text-white"
                      : scrolled
                        ? "text-gray-700 hover:text-red-600"
                        : "text-white/90 hover:text-white"
                  } ${isActive ? "underline underline-offset-4" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+4906441123456"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">24/7 Notdienst:</span> 06441 /
              123 456
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
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
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== base && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-3 font-medium rounded-lg transition-colors ${
                    link.emergency
                      ? "text-red-600 hover:bg-red-50"
                      : link.highlighted
                        ? "text-red-600 font-bold hover:bg-red-50"
                        : isActive
                          ? "text-red-600 bg-red-50"
                          : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.emergency && <AlertTriangle className="h-4 w-4" />}
                  {link.highlighted && <Thermometer className="h-4 w-4" />}
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+4906441123456"
              className="flex items-center gap-2 px-4 py-3 mt-2 bg-red-600 text-white font-bold rounded-lg"
            >
              <Phone className="h-4 w-4" />
              24/7 Notdienst: 06441 / 123 456
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
