import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-600">{project.summary}</p>
        </div>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-full border px-2 py-1 text-xs text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4 text-sm">
        <Link href={`/projects/${project.slug}`} className="hover:underline">
          Case study
        </Link>
        {project.links.repo ? (
          <a className="hover:underline" href={project.links.repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        ) : null}
        {project.links.demo ? (
          <a className="hover:underline" href={project.links.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}
