"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Flame, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function HaustechnikMuellerNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <Link href="/showcase" className="underline hover:no-underline font-medium">
            Alle Demos ansehen
          </Link>
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
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
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-red-500 ${
                  scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+4906461123456"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">24/7 Notdienst:</span> 06461 / 123 456
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+4906461123456"
              className="flex items-center gap-2 px-4 py-3 mt-2 bg-red-600 text-white font-bold rounded-lg"
            >
              <Phone className="h-4 w-4" />
              24/7 Notdienst: 06461 / 123 456
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
