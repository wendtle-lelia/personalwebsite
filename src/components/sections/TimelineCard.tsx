"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { TimelineEntry } from "@/lib/constants";

interface TimelineCardProps {
  entry: TimelineEntry;
  index: number;
  isActive: boolean;
  sentinelRef: (el: HTMLDivElement | null) => void;
}

const TimelineCard = forwardRef<HTMLDivElement, TimelineCardProps>(
  ({ entry, index, isActive, sentinelRef }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative px-4 py-8 md:px-6 md:py-10",
          index === 0 && "md:pt-32"
        )}
      >
        {/* Sentinel for scroll detection */}
        <div ref={sentinelRef} data-id={entry.id} className="absolute -top-24 h-4" />

        {/* Mobile verb label */}
        <div className="mb-6 md:hidden">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
            I build
          </span>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            {entry.verb}
          </h2>
        </div>

        {/* Card */}
        <article
          className={cn(
            "flex flex-col rounded-2xl border p-3 transition-all duration-300",
            isActive
              ? "border-border bg-card shadow-lg"
              : "border-border/60 bg-muted/30 max-md:border-border max-md:bg-card max-md:shadow-lg"
          )}
        >
          {/* Image */}
          {entry.image && (
            <img
              src={entry.image}
              alt={entry.title}
              className="mb-4 h-72 w-full rounded-xl object-cover md:h-96"
              loading="lazy"
            />
          )}

          <div className="space-y-4 px-2 pb-3">
            {/* Title */}
            <h3
              className={cn(
                "font-display text-lg font-bold leading-tight tracking-tight transition-colors duration-300 md:text-xl",
                isActive ? "text-foreground" : "text-foreground/70 max-md:text-foreground"
              )}
            >
              {entry.title}
            </h3>

            {/* Description — always visible but clamped when inactive */}
            {entry.description && (
              <p
                className={cn(
                  "text-sm leading-relaxed transition-all duration-300",
                  isActive
                    ? "text-muted-foreground"
                    : "text-muted-foreground/80 line-clamp-2 max-md:line-clamp-none max-md:text-muted-foreground"
                )}
              >
                {entry.description}
              </p>
            )}

            {/* Expandable content */}
            <div
              aria-hidden={!isActive}
              className={cn(
                "grid transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                "max-md:!grid-rows-[1fr] max-md:!opacity-100"
              )}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 pt-1">
                  {/* Highlights as bullet list */}
                  {entry.highlights && entry.highlights.length > 0 && (
                    <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                      <ul className="space-y-2.5">
                        {entry.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-highlight/60" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Side projects */}
                  {entry.projects && entry.projects.length > 0 && (
                    <div className="space-y-0 divide-y divide-border/60">
                      {entry.projects.map((project) => (
                        <div key={project.name} className="py-4 first:pt-0">
                          <h4 className="text-sm font-semibold text-foreground">
                            {project.name}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {project.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Button */}
                  {entry.button && (
                    <div className="flex justify-end pt-1">
                      <Button
                        variant="default"
                        size="sm"
                        className="group font-normal transition-all duration-200"
                        asChild
                      >
                        <a href={entry.button.url} target="_blank" rel="noopener noreferrer">
                          {entry.button.text}
                          <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
);

TimelineCard.displayName = "TimelineCard";

export { TimelineCard };
