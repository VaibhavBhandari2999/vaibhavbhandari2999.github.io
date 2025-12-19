import "./globals.css";
import Link from "next/link";
import GridTrail from "@/components/GridTrail";
import { profile } from "@/content/profile";

export const metadata = {
  title: "Vaibhav Bhandari | Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-slate-100">
        <GridTrail
          className="pointer-events-none fixed inset-0 z-0"
          background="rgba(0,0,0,0)"
          color="#f97316"
          cellSize={26}
          fadeMs={700}
          maxAlpha={0.35}
          radius={2}
        />

        <div className="relative z-10">
          <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <Link href="/" className="font-semibold text-slate-100">
                {profile.name}
              </Link>
              <nav className="flex items-center gap-4 text-sm text-slate-200">
                <Link href="/projects" className="hover:text-white">
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
              </nav>
            </div>
          </header>

          <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

          <footer className="border-t border-white/10">
            <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-400">
              <div>© {new Date().getFullYear()} {profile.name}</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
