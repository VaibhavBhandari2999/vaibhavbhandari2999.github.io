'use client';

import type { education as EducationData } from "@/content/education";

type EducationItem = (typeof EducationData)[number];

export function EducationTimeline({ items }: { items: EducationItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[14px] top-3 h-[calc(100%-1rem)] w-[2px] bg-gradient-to-b from-orange-400/70 to-sky-400/60" />
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={`${item.school}-${idx}`} className="relative pl-12">
            <div className="absolute left-[6px] top-4 h-4 w-4 rounded-full border border-orange-200/80 bg-[var(--card-surface)] shadow-[0_0_0_6px_rgba(249,115,22,0.15)]" />
            <div className="rounded-2xl border border-orange-300/20 bg-[var(--card-surface)] p-5 text-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-white">
                    {item.degree}
                  </div>
                  <div className="text-sm text-slate-200">{item.school}</div>
                  {item.location ? (
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      {item.location}
                    </div>
                  ) : null}
                </div>
                <div className="text-sm text-slate-300">{item.period}</div>
              </div>
              {item.bullets && item.bullets.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-200">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
