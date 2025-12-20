'use client';

import { useEffect, useState } from "react";

const themes = ["dark", "light"] as const;
type Theme = (typeof themes)[number];

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? null;
    if (stored && themes.includes(stored)) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
      return;
    }
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = prefersLight ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex h-8 w-16 items-center rounded-full border px-1 transition hover:-translate-y-0.5"
      style={{
        borderColor: "var(--accent)",
        background: "color-mix(in srgb, var(--accent) 18%, transparent)",
      }}
      aria-pressed={theme === "light"}
      aria-label="Toggle theme"
    >
      <span
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition"
        style={{
          transform: theme === "light" ? "translateX(28px)" : "translateX(0px)",
        }}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
