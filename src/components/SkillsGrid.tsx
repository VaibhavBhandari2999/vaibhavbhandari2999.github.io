'use client';

import { skills as skillsData } from "@/content/skills";

export function SkillsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {skillsData.map((group) => (
        <div
          key={group.name}
          className="rounded-2xl border border-[var(--border-strong)] bg-[var(--card-surface)] p-5 text-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
        >
          <div className="text-sm font-semibold uppercase tracking-wide text-orange-200">{group.name}</div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[var(--card-tile)] px-3 py-2 text-sm text-slate-100 transition hover:border-orange-300/50 hover:bg-orange-500/10"
              >
                <Logo src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Logo({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900 text-xs font-semibold">
        {alt.slice(0, 2).toUpperCase()}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="h-9 w-9 rounded-lg border border-white/10 bg-neutral-900 object-contain p-1"
      loading="lazy"
    />
  );
}
