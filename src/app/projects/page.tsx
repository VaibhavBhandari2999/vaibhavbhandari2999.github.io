'use client';

import { useEffect, useState } from "react";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = openProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProject]);

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-gray-600">
        {/* Selected work. Each includes a case study page. */}
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} openSlug={openProject} setOpenSlug={setOpenProject} />
        ))}
      </div>
    </div>
  );
}
