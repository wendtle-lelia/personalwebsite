"use client";

import { motion } from "framer-motion";

export function Intro() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[680px] px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg leading-[1.85] text-muted-foreground md:text-xl md:leading-[1.85]"
        >
          I&apos;ve spent the last decade building things across industries,
          countries, and disciplines — not because I can&apos;t sit still, but
          because building is the fastest way I know to understand how something
          actually works. That instinct has taken me from pharma to venture
          capital to fashion to AI. Today I&apos;m building a company at the
          intersection of AI and regulated European industries.
        </motion.p>
      </div>
    </section>
  );
}
