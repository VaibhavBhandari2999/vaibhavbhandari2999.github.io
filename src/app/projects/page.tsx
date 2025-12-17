import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-gray-600">
        Selected work. Each includes a case study page.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
