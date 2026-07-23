import type { Metadata } from "next";
import { Caveat, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Catatan Portofolio — Taqiy & Rayyan",
  description: "Buku catatan digital proyek belajar Next.js dari Taqiy dan Rayyan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${caveat.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="relative min-h-full font-sans text-ink antialiased">
        {/* Garis margin ala buku catatan sekolah */}
        <div className="pointer-events-none fixed inset-y-0 left-10 hidden w-px bg-rule/50 sm:block md:left-16" />

        <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:pl-20 md:pl-28">
            <Link href="/" className="font-display text-3xl font-bold tracking-wide text-ink">
              Catatan.Dev <span className="text-rule">*</span>
            </Link>
            <div className="flex gap-2 font-mono text-xs font-semibold uppercase tracking-wider">
              <Link
                href="/profil"
                className="border border-ink/15 bg-white px-3 py-2 text-ink transition hover:-translate-y-0.5 hover:shadow-[2px_2px_0_#22281f]"
              >
                Profil
              </Link>
              <Link
                href="/porto"
                className="border border-ink/15 bg-white px-3 py-2 text-ink transition hover:-translate-y-0.5 hover:shadow-[2px_2px_0_#22281f]"
              >
                Portofolio
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-14 sm:pl-20 md:pl-28">{children}</main>
      </body>
    </html>
  );
}
