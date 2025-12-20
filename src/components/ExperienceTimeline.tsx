'use client';

import { useState } from "react";
import type { experience as ExperienceData } from "@/content/experience";

type ExperienceItem = (typeof ExperienceData)[number];

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div className="relative">
      <div className="absolute left-[14px] top-3 h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-orange-400/70 to-sky-400/60" />
      <div className="space-y-6">
        {items.map((item, idx) => {
          const isOpen = expanded[item.company];
          const bullets = isOpen ? item.bullets : item.bullets.slice(0, 3);

          return (
            <div key={`${item.company}-${idx}`} className="relative pl-12">
              <div className="absolute left-[6px] top-4 h-4 w-4 rounded-full border border-orange-200/80 bg-[var(--card-surface)] shadow-[0_0_0_6px_rgba(249,115,22,0.15)]" />
              <div className="rounded-2xl border border-[var(--border-strong)] bg-[var(--card-surface)] p-5 text-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-white">
                      {item.role} — {item.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-200/90 font-medium">{item.period}</div>
                    {item.location ? (
                      <div className="text-xs tracking-wide text-orange-100/80">
                        {item.location}
                      </div>
                    ) : null}
                  </div>
                </div>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-200/90">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {item.bullets.length > 3 ? (
                  <button
                    className="mt-3 text-xs font-semibold text-orange-200 hover:text-white"
                    onClick={() =>
                      setExpanded((prev) => ({ ...prev, [item.company]: !isOpen }))
                    }
                  >
                    {isOpen ? "Show less" : `Show ${item.bullets.length - 3} more`}
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
