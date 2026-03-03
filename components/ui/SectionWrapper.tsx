"use client";

import { motion } from "framer-motion";

type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  gray?: boolean;
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  gray = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${gray ? "bg-surface" : "bg-white"} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
