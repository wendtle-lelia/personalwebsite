"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl"
        >
          Let&apos;s build something
          <br />
          that matters.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-subtle"
        >
          Currently backed by EXIST & AI Nation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap gap-6"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-highlight"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </motion.div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs text-subtle sm:flex-row sm:items-center">
          <p className="uppercase tracking-[0.18em]">Berlin, Germany</p>
          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="uppercase tracking-[0.18em] transition-colors hover:text-foreground"
            >
              Impressum
            </Link>
            <p>&copy; {new Date().getFullYear()} Lennart Wendt</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
