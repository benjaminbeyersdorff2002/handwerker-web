"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-secondary-light p-10 md:p-16 text-center">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/10" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Bereit für Ihre neue Website?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie
              Ihre perfekte Website aussehen soll. Unverbindlich und ohne
              versteckte Kosten.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="mailto:info@craftbridge.de"
                variant="primary"
                size="lg"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="tel:+49123456789"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
