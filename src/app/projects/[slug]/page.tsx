import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/projects" className="text-sm hover:underline">
          ← Back to projects
        </Link>
        <h1 className="mt-3 text-2xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-gray-600">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="rounded-full border px-2 py-1 text-xs text-gray-700">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4 text-sm">
          {project.links.repo ? (
            <a className="hover:underline" href={project.links.repo} target="_blank" rel="noreferrer">
              Code
            </a>
          ) : null}
          {project.links.demo ? (
            <a className="hover:underline" href={project.links.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          ) : null}
        </div>
      </div>

      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">Case Study (Placeholder)</h2>
        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <p><span className="font-semibold">Problem:</span> [What you built and why it matters]</p>
          <p><span className="font-semibold">Approach:</span> [Architecture + key decisions]</p>
          <p><span className="font-semibold">Evaluation:</span> [How you measured quality/reliability]</p>
          <p><span className="font-semibold">Results:</span> [Metrics: latency, cost, accuracy, scale]</p>
          <p><span className="font-semibold">Failure modes:</span> [What broke + mitigations]</p>
        </div>
      </div>
    </div>
  );
}
