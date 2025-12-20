import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import GridTrail from "@/components/GridTrail";
import { profile } from "@/content/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavBar } from "@/components/NavBar";

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
    <html lang="en" data-theme="light">
      <body className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          defer
          data-cf-beacon='{"token": "ce614a0cf969481ea22fc79639933c3a"}'
        />
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
          <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[linear-gradient(90deg,rgba(249,115,22,0.18),rgba(14,165,233,0.18))] backdrop-blur">
            <NavBar />
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
