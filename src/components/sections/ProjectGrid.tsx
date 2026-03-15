"use client";

import { motion } from "framer-motion";
import { TIMELINE_ENTRIES } from "@/lib/constants";
import { ProjectTile } from "./ProjectTile";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectGrid() {
  return (
    <section className="relative py-20 md:py-32">
      <div
        className="scrollbar-hide flex flex-col gap-6 px-6 md:flex-row md:gap-8 md:overflow-x-auto md:px-[8vw] md:pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {TIMELINE_ENTRIES.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="w-full flex-shrink-0 md:w-[45vw] md:min-w-[400px] md:max-w-[600px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <ProjectTile entry={entry} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
