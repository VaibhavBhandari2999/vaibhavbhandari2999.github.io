'use client';

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
      className="group cursor-pointer rounded-2xl border border-[var(--border-strong)] bg-[var(--card-surface)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur transition hover:-translate-y-1 hover:border-orange-300/60 hover:shadow-[0_20px_60px_rgba(249,115,22,0.22)]"
      onClick={toggle}
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">
            <span className="hover:text-orange-200">{project.title}</span>
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
        {/* <span className="font-medium text-orange-200">Case study</span> */}
        {project.links.repo ? (
          <a
            className="inline-flex items-center gap-2 rounded-full border border-orange-300/70 px-3 py-1 text-xs font-semibold text-orange-100 transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-500/10 hover:text-white"
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.73.8 1.17 1.83 1.17 3.08 0 4.41-2.68 5.38-5.24 5.67.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.12 0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                clipRule="evenodd"
              />
            </svg>
            Code
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
                className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--card-surface)] p-6 text-slate-100 shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
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
                    {/* <span className="font-medium text-orange-200">Case study</span> */}
                    {project.links.repo ? (
                      <a
                        className="inline-flex items-center gap-2 rounded-full border border-orange-300/70 px-3 py-1 text-xs font-semibold text-orange-100 transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-500/10 hover:text-white"
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </a>
                    ) : null}
                    {project.links.demo ? (
                      <a className="hover:text-orange-200" href={project.links.demo} target="_blank" rel="noreferrer">
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
