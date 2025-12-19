'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { skills } from "@/content/skills";
import { Section } from "@/components/Sections";
import { ProjectCard } from "@/components/ProjectCard";
import { TitleTicker } from "@/components/TitleTicker";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationTimeline } from "@/components/EducationTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";

export default function HomePage() {
  const featured = projects;
  const [openProject, setOpenProject] = useState<string | null>(null);
  useEffect(() => {
    document.body.style.overflow = openProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProject]);
  const hasPhoto = Boolean(profile.photo);
  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="space-y-10">
      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/80 px-6 py-10 shadow-xl shadow-black/40 md:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-[-6rem] top-[-4rem] h-64 w-64 rounded-full bg-orange-500/30 blur-3xl" />
          <div className="absolute right-[-4rem] top-10 h-56 w-56 rounded-full bg-sky-500/25 blur-3xl" />
        </div>

        <div className="relative grid gap-10 md:grid-cols-5 md:items-center">
          <div className="space-y-5 md:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              {/* Building reliable AI & backend systems */}
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-orange-200 via-amber-200 to-sky-200 bg-clip-text text-transparent drop-shadow-[0_10px_40px_rgba(249,115,22,0.35)]">
                {profile.name}
              </span>
            </h1>

            <div className="text-xl text-slate-200 md:text-2xl">
              <TitleTicker titles={["Software Engineer", "AI Engineer"]} />
            </div>

            <p className="max-w-2xl text-lg text-slate-300">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a className="group inline-flex items-center gap-2 rounded-full border border-orange-400/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-500/10 hover:text-white" href={profile.links.resume} target="_blank">
                <span>Resume</span>
              </a>
              <a className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5" href={profile.links.github} target="_blank" rel="noreferrer">
                <span>GitHub</span>
              </a>
              <a className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
              </a>
              <a className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5" href={profile.links.email}>
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center md:col-span-2">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-orange-500/25 via-amber-400/15 to-sky-400/20 blur-3xl" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.5)] md:h-56 md:w-56">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_45%)]" />
              <div className="absolute inset-2 rounded-full border border-white/10 bg-gradient-to-br from-orange-500/10 via-neutral-900 to-sky-500/10" />
              {hasPhoto ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  sizes="220px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="relative flex h-full w-full items-center justify-center">
                  <span className="text-3xl font-bold uppercase tracking-wide text-white">{initials}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Featured Projects"
        className="rounded-2xl border border-white/10 bg-neutral-950/70 px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} openSlug={openProject} setOpenSlug={setOpenProject} />
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <ExperienceTimeline items={experience} />
      </Section>

      <Section title="Skills">
        <SkillsGrid />
      </Section>

      <Section title="Education">
        <EducationTimeline items={education} />
      </Section>
    </div>
  );
}
