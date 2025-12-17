import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { Section } from "@/components/Sections";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const featured = projects.slice(0, 2);

  return (
    <div className="space-y-10">
      <section className="pt-4">
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-lg text-gray-700">{profile.title}</p>
        <p className="mt-3 max-w-2xl text-gray-600">{profile.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50" href={profile.links.resume}>
            Resume
          </a>
          <a className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50" href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50" href={profile.links.email}>
            Email
          </a>
        </div>
      </section>

      <Section title="Featured Projects">
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-4">
          <Link className="text-sm hover:underline" href="/projects">
            View all projects →
          </Link>
        </div>
      </Section>

      <Section title="Experience">
        <div className="space-y-5">
          {experience.map((e) => (
            <div key={e.company} className="rounded-xl border p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-semibold">
                  {e.role} — {e.company}
                </div>
                <div className="text-sm text-gray-600">{e.period}</div>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5 text-sm">
            <div className="font-semibold">Backend</div>
            <div className="mt-2 text-gray-600">APIs, distributed systems, SQL, caching, reliability</div>
          </div>
          <div className="rounded-xl border p-5 text-sm">
            <div className="font-semibold">LLM Systems</div>
            <div className="mt-2 text-gray-600">RAG, agents/tools, evaluation, prompt/tooling infra</div>
          </div>
          <div className="rounded-xl border p-5 text-sm">
            <div className="font-semibold">Cloud/DevOps</div>
            <div className="mt-2 text-gray-600">AWS, CI/CD, observability, cost/perf tuning</div>
          </div>
          <div className="rounded-xl border p-5 text-sm">
            <div className="font-semibold">Other</div>
            <div className="mt-2 text-gray-600">React, Unity/C#, data pipelines</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
