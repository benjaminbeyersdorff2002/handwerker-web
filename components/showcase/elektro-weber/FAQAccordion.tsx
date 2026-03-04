"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/elektro-weber";

function AccordionItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

type Props = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 md:p-8">
      {items.map((item) => (
        <AccordionItem key={item.question} {...item} />
      ))}
    </div>
  );
}
