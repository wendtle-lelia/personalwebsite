"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TIMELINE_ENTRIES } from "@/lib/constants";
import { TimelineCard } from "./TimelineCard";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setSentinelRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      sentinelRefs.current[i] = el;
    },
    []
  );

  const setCardRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      cardRefs.current[i] = el;
    },
    []
  );

  // IntersectionObserver for active card detection — no per-frame work
  useEffect(() => {
    const sentinels = sentinelRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!sentinels.length) return;

    const visible = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = sentinels.indexOf(entry.target as HTMLDivElement);
          if (idx === -1) return;
          if (entry.isIntersecting) {
            visible.add(idx);
          } else {
            visible.delete(idx);
          }
        });

        if (visible.size > 0) {
          // Pick the smallest index among visible sentinels (topmost card)
          setActiveIndex(Math.min(...visible));
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sentinels.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToCard = useCallback((index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  const activeEntry = TIMELINE_ENTRIES[activeIndex];

  return (
    <section className="relative pb-20 md:pb-32">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
        {/* ── Left: Sticky Meta Column ── */}
        <div className="hidden md:block">
          <div className="sticky top-0 flex h-screen flex-col justify-start pt-32 px-6 md:px-10">
            <div className="space-y-8">
              {/* Label + Verb */}
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-subtle">
                  I build
                </span>
                <div className="relative mt-1 h-12 overflow-hidden lg:h-14">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={activeEntry.verb}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.3, ease }}
                      className="font-display text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl"
                    >
                      {activeEntry.verb}
                    </motion.h2>
                  </AnimatePresence>
                </div>
              </div>

              {/* Icon */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEntry.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                >
                  <activeEntry.icon className="h-10 w-10 text-muted-foreground" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="flex flex-col gap-2.5">
                {TIMELINE_ENTRIES.map((entry, i) => (
                  <button
                    key={entry.id}
                    onClick={() => scrollToCard(i)}
                    aria-label={`Go to ${entry.title}`}
                    className={cn(
                      "h-2 w-2 cursor-pointer rounded-full transition-all duration-300",
                      activeIndex === i
                        ? "scale-150 bg-highlight shadow-[0_0_10px_rgba(194,65,12,0.3)]"
                        : "bg-border hover:bg-muted-foreground"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Scrolling Cards ── */}
        <div>
          {TIMELINE_ENTRIES.map((entry, i) => (
            <TimelineCard
              key={entry.id}
              ref={(el) => setCardRef(el, i)}
              entry={entry}
              index={i}
              isActive={activeIndex === i}
              sentinelRef={(el) => setSentinelRef(el, i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
