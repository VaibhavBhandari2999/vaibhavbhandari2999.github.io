import "./globals.css";
import Link from "next/link";
import GridTrail from "@/components/GridTrail";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Vaibhav Bhandari | Portfolio",
  description: "Portfolio website",
  icons: {
    icon: ["/favicon.ico", "/icon0.svg", "/icon1.png"],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
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
          <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface) 90%,transparent)] backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <Link href="/" className="font-semibold text-[var(--text)]">
                {profile.name}
              </Link>
              <nav className="flex items-center gap-3 text-sm text-[var(--text)]">
                <a
                  className="rounded-full border px-3 py-1 text-xs font-semibold transition hover:-translate-y-0.5"
                  style={{
                    color: "var(--accent)",
                    borderColor: "var(--accent)",
                    background:
                      "color-mix(in srgb, var(--accent) 12%, transparent)",
                  }}
                  href={profile.links.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
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
                <ThemeToggle />
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
