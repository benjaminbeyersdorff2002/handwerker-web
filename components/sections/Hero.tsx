"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";

const rotatingWords = [
  "Professionell.",
  "Modern.",
  "SEO-optimiert.",
  "Überzeugend.",
  "Schnell online.",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  const nextWord = useCallback(() => {
    setWordIndex((prev) => (prev + 1) % rotatingWords.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextWord, 3000);
    return () => clearInterval(interval);
  }, [nextWord]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-white to-primary-light">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary/5" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 fill-primary" />
                <span>AI-gestützte Webentwicklung</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight tracking-tight">
              Ihre Website.{" "}
              <span className="text-primary inline-block relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              <br className="hidden sm:block" />
              Zum fairen Preis.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
              Moderne, SEO-optimierte Websites für Handwerksbetriebe –
              geliefert in 1–2 Wochen. Keine versteckten Kosten, kein
              Technik-Stress. Ab 999 €.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="#pakete" size="lg">
                Pakete ansehen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#showcase" variant="outline" size="lg">
                Showcase ansehen
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Festpreisgarantie
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                In 7 Tagen online
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                100% Responsive
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* Hero illustration - Browser mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1.5 text-xs text-muted border border-gray-200">
                      www.ihr-handwerksbetrieb.de
                    </div>
                  </div>
                </div>
                {/* Mock website content */}
                <div className="p-6 space-y-4">
                  <div className="h-32 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Elektro Weber</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-primary/30" />
                    </div>
                    <div className="h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-primary/30" />
                    </div>
                    <div className="h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-primary/30" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
                In 7 Tagen fertig!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
