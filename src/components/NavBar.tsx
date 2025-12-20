'use client';

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <div className="relative mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      <Link
        href="/"
        className="text-2xl font-extrabold leading-none text-[var(--text)]"
        onClick={close}
      >
        {profile.name}
      </Link>

      <div className="hidden items-center gap-3 text-sm text-[var(--text)] md:flex">
        <a
          className="rounded-full border px-3 py-1 text-xs font-semibold transition hover:-translate-y-0.5"
          style={{
            color: "var(--accent)",
            borderColor: "var(--accent)",
            background: "color-mix(in srgb, var(--accent) 12%, transparent)",
          }}
          href={profile.links.resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <Link href="/projects" className="hover:text-white" onClick={close}>
          Projects
        </Link>
        <a className="hover:text-white" href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="hover:text-white" href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="hover:text-white" href={profile.links.email}>
          Email
        </a>
        <ThemeToggle />
      </div>

      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-strong)] text-[var(--text)] md:hidden"
        onClick={toggle}
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-[var(--border-strong)] bg-[var(--surface)] px-4 py-4 shadow-[0_15px_35px_rgba(0,0,0,0.35)] md:hidden">
          <div className="flex flex-col gap-3 text-sm text-[var(--text)]">
            <a
              className="rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                color: "var(--accent)",
                borderColor: "var(--accent)",
                background: "color-mix(in srgb, var(--accent) 12%, transparent)",
              }}
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              Resume
            </a>
            <Link href="/projects" className="hover:text-white" onClick={close}>
              Projects
            </Link>
            <a className="hover:text-white" href={profile.links.github} target="_blank" rel="noreferrer" onClick={close}>
              GitHub
            </a>
            <a className="hover:text-white" href={profile.links.linkedin} target="_blank" rel="noreferrer" onClick={close}>
              LinkedIn
            </a>
            <a className="hover:text-white" href={profile.links.email} onClick={close}>
              Email
            </a>
            <div className="pt-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
