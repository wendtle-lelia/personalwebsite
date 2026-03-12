"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_WORDS } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center text-center px-6 md:px-[8vw]">
      {/* Staggered entrance */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
      >
        <h1 className="font-display text-[clamp(4rem,12vw,10rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-foreground">
          LENNART
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease }}
        className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1"
      >
        <span className="font-display text-lg font-bold text-foreground md:text-2xl">I</span>
        <span className="font-display text-lg font-bold text-foreground md:text-2xl">
          build
        </span>
        <span className="inline-flex overflow-hidden pr-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={HERO_WORDS[index]}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease }}
              className="font-display text-lg font-bold italic text-highlight md:text-2xl"
            >
              {HERO_WORDS[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8 space-y-1"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">
          Founder · Berlin · Ex Bayer · Ex VC
        </p>
        <p className="text-[0.65rem] uppercase tracking-[0.15em] text-subtle/60">
          Educated across Germany · England · France
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.25em] text-subtle/40">
            Scroll
          </span>
          <div className="h-8 w-px bg-subtle/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
