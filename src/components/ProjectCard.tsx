'use client';

import Link from "next/link";
import * as React from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/content/projects";

type Props = {
  project: Project;
  openSlug: string | null;
  setOpenSlug: (slug: string | null) => void;
};

export function ProjectCard({ project, openSlug, setOpenSlug }: Props) {
  const open = openSlug === project.slug;

  const toggle = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) return;
    setOpenSlug(project.slug);
  };

  const close = () => setOpenSlug(null);

  const stop = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };
    if (open) {
      window.addEventListener("keydown", handler);
    }
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <div
      className="group cursor-pointer rounded-2xl border border-white/12 bg-neutral-950/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1 hover:border-orange-300/50 hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]"
      onClick={toggle}
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">
            <Link href={`/projects/${project.slug}`} className="hover:text-orange-200">
              {project.title}
            </Link>
          </h3>
          <p className="text-sm text-slate-300">{project.summary}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-slate-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
        <Link href={`/projects/${project.slug}`} className="hover:text-orange-200">
          {/* Case study */}
        </Link>
        {project.links.repo ? (
          <a
            className="inline-flex items-center gap-2 rounded-full border border-orange-300/70 px-3 py-1 text-xs font-semibold text-orange-100 transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-500/10 hover:text-white"
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        ) : null}
        {project.links.demo ? (
          <a className="hover:text-orange-200" href={project.links.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        ) : null}
      </div>

      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-[18px] backdrop-saturate-150"
              onClick={close}
              onMouseDown={close}
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} details`}
              tabIndex={-1}
            >
              <div
                className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/12 bg-neutral-950/95 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
                onClick={stop}
                onMouseDown={stop}
              >
                <button
                  onClick={close}
                  className="absolute right-4 top-4 rounded-full border border-white/20 px-2 py-1 text-xs text-slate-200 hover:border-white/50 hover:text-white"
                  aria-label="Close"
                >
                  Close
                </button>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-slate-300">{project.summary}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                    <Link href={`/projects/${project.slug}`} className="hover:text-violet-200">
                      {/* Case study */}
                    </Link>
                    {project.links.repo ? (
                      <a
                        className="inline-flex items-center gap-2 rounded-full border border-violet-300/70 px-3 py-1 text-xs font-semibold text-violet-100 transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-500/10 hover:text-white"
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repo
                      </a>
                    ) : null}
                    {project.links.demo ? (
                      <a className="hover:text-violet-200" href={project.links.demo} target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    ) : null}
                  </div>

                  {project.descriptionLong ? (
                    <p className="text-sm text-slate-100">{project.descriptionLong}</p>
                  ) : null}

                  {project.bullets && project.bullets.length ? (
                    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                      {project.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
