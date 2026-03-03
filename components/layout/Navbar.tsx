"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Hammer } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#pakete", label: "Pakete" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#showcase", label: "Showcase" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <Hammer className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold text-secondary">
              HandwerkWeb
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button href="#kontakt" size="sm">
              Kontakt
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-muted hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button href="#kontakt" className="w-full mt-2" size="sm">
              Kontakt
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
