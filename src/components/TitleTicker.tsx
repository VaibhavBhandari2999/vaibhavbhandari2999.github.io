'use client';

import { useEffect, useState } from "react";

type Props = {
  titles: string[];
  typeSpeed?: number;   // ms per character when typing
  deleteSpeed?: number; // ms per character when deleting
  holdMs?: number;      // pause when a word is fully typed
};

export function TitleTicker({
  titles,
  typeSpeed = 90,
  deleteSpeed = 45,
  holdMs = 1100,
}: Props) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!titles.length) return;

    const current = titles[titleIndex % titles.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && subIndex < current.length) {
      timeout = setTimeout(() => setSubIndex((v) => v + 1), typeSpeed);
    } else if (!deleting && subIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => setSubIndex((v) => v - 1), deleteSpeed);
    } else if (deleting && subIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTitleIndex((v) => (v + 1) % titles.length);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [titles, titleIndex, subIndex, deleting, typeSpeed, deleteSpeed, holdMs]);

  const current = titles.length ? titles[titleIndex % titles.length] : "";
  const display = current.slice(0, subIndex);

  return (
    <span className="inline-flex items-center gap-2 text-lg font-semibold text-slate-200">
      <span>{display}</span>
      <span className="h-6 w-[2px] animate-pulse rounded-sm bg-gradient-to-b from-violet-400 via-sky-300 to-emerald-200" />
    </span>
  );
}
