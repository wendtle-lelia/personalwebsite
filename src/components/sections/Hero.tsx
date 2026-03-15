"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { HERO_WORDS } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [photoVisible, setPhotoVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center px-6 md:px-[8vw]">
      {/* Name + Photo overlap zone */}
      <div className="relative">
        {/* Two-line stacked name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-[clamp(3.5rem,16vw,20rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-foreground"
        >
          LENNART
          <br />
          WENDT
        </motion.h1>

        {/* Photo — absolute, overlapping text from upper-right */}
        <AnimatePresence>
          {photoVisible && (
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)", scale: 0.95 }}
              animate={{ clipPath: "inset(0 0 0 0)", scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="absolute right-0 top-[10%] z-20 w-[40vw] cursor-pointer md:pointer-events-none md:top-[-5%] md:w-[28vw] md:max-w-[450px]"
              onClick={() => setPhotoVisible(false)}
            >
              <img
                src="/Lennart.png"
                alt="Lennart Wendt"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <span className="absolute bottom-2 right-2 flex items-center justify-center rounded-full bg-foreground/60 p-1 text-white backdrop-blur-sm md:hidden">
                <X className="h-2.5 w-2.5" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content below the overlap zone */}
      <div className="mt-8 max-w-[600px] md:mt-12">
        {/* "I build [word]" subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
        >
          <span className="font-display text-xl font-bold text-foreground md:text-3xl">
            I
          </span>
          <span className="font-display text-xl font-bold text-foreground md:text-3xl">
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
                className="font-display text-xl font-bold italic text-highlight md:text-3xl"
              >
                {HERO_WORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="mt-6 text-base leading-[1.85] text-muted-foreground md:mt-8 md:text-lg md:leading-[1.85]"
        >
          I&apos;ve spent the last decade building across industries,
          countries, and disciplines. Not because I can&apos;t sit still, but
          because building is the fastest way I know to understand how something
          actually works. That instinct has taken me from fashion to pharma to
          venture capital to AI. Today I&apos;m building a company at the
          intersection of AI and regulated industries.
        </motion.p>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-6 space-y-1"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle md:text-sm">
            Founder · Berlin · Ex Bayer · Ex VC
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.15em] text-subtle/60 md:text-xs">
            Educated across Germany · England · France
          </p>
        </motion.div>
      </div>

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
