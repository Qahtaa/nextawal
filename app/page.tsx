import Link from "next/link";

const menuItems = [
  {
    href: "/profil",
    title: "Profil",
    description: "Kenali data diri, minat, dan ringkasan singkat tentang kami.",
    tape: "bg-teal",
    tapeRotate: "-rotate-3",
    cardRotate: "-rotate-1",
  },
  {
    href: "/porto",
    title: "Portofolio",
    description: "Lihat kumpulan proyek, kemampuan, dan karya yang pernah dibuat.",
    tape: "bg-blue",
    tapeRotate: "rotate-2",
    cardRotate: "rotate-1",
  },
];

export default function Home() {
  return (
    <section className="flex flex-col gap-14">
      <div className="max-w-2xl">
        <p className="mb-4 inline-block -rotate-1 border border-ink/15 bg-white px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-ink-soft shadow-[3px_3px_0_#d9a32b]">
          Buku Catatan — Bab 01
        </p>
        <h1 className="font-display text-6xl leading-[0.95] text-ink md:text-7xl">
          Halaman depan
          <br />
          catatan belajar kami.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
          Setiap entri di sini adalah jejak proses belajar Next.js — mulai dari
          siapa yang menulis, sampai proyek apa saja yang sudah dicoba.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative block border border-ink/15 bg-white p-7 shadow-[6px_6px_0_rgba(34,40,31,0.12)] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_rgba(34,40,31,0.18)] ${item.cardRotate}`}
          >
            <span
              className={`absolute -top-3 left-8 h-6 w-16 ${item.tape} ${item.tapeRotate} opacity-80`}
              style={{ clipPath: "polygon(0 0,100% 0,96% 100%,4% 100%)" }}
            />
            <h2 className="font-display text-4xl text-ink">{item.title}</h2>
            <p className="mt-3 leading-7 text-ink-soft">{item.description}</p>
            <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-widest text-ink group-hover:text-rule">
              Buka halaman →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
