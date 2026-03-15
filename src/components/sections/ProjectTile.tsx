"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { TimelineEntry } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

interface ProjectTileProps {
  entry: TimelineEntry;
}

export function ProjectTile({ entry }: ProjectTileProps) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const showOverlay = hovered || expanded;

  return (
    <motion.div
      className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl bg-secondary @container"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setExpanded((prev) => !prev)}
    >
      {/* Background text layer */}
      <div
        className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 md:p-8"
        aria-hidden="true"
      >
        <span className="font-display text-[clamp(2.5rem,14cqw,5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-foreground">
          I BUILD
        </span>
        <span className="w-full break-words font-display text-[clamp(3rem,17cqw,6rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] text-highlight">
          {entry.verb}
        </span>
      </div>

      {/* Image layer */}
      {entry.image && (
        <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
          <img
            src={entry.image}
            alt={entry.title}
            loading="lazy"
            className="max-h-full max-w-full rounded-lg object-contain shadow-xl"
          />
        </div>
      )}

      {/* Overlay — shared for desktop hover + mobile tap */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease }}
            className="absolute inset-0 z-30 flex flex-col justify-end overflow-y-auto bg-card/95 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold leading-tight tracking-tight text-foreground md:text-xl">
                {entry.title}
              </h3>

              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {entry.description}
              </p>

              {entry.highlights && (
                <ul className="space-y-1.5">
                  {entry.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-highlight/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {entry.button && (
                <a
                  href={entry.button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 hover:text-highlight"
                >
                  {entry.button.text}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile title bar (visible when not expanded) */}
      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-card/80 to-transparent p-4 pt-10 md:hidden">
          <p className="font-display text-sm font-bold text-foreground">
            {entry.title}
          </p>
        </div>
      )}
    </motion.div>
  );
}
