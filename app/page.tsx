import Link from "next/link";

const menuItems = [
  {
    href: "/profil",
    title: "Profil",
    description: "Kenali data diri, minat, dan ringkasan singkat tentang saya.",
    accent: "bg-emerald-500",
  },
  {
    href: "/porto",
    title: "Portofolio",
    description: "Lihat kumpulan proyek, kemampuan, dan karya yang pernah dibuat.",
    accent: "bg-sky-500",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] px-6 py-8 text-slate-950">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center">
        <nav className="mb-12 flex items-center justify-between rounded-lg border border-slate-200 bg-white/80 px-5 py-4 shadow-sm">
          <Link href="/" className="text-lg font-bold">
            Next Tugas
          </Link>
          <div className="flex gap-3 text-sm font-semibold">
            <Link href="/profil" className="rounded-md px-3 py-2 hover:bg-slate-100">
              Profil
            </Link>
            <Link href="/porto" className="rounded-md px-3 py-2 hover:bg-slate-100">
              Porto
            </Link>
          </div>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 w-fit rounded-md bg-amber-200 px-3 py-1 text-sm font-bold text-amber-950">
              Tugas Next.js
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight text-slate-950 md:text-7xl">
              Menu navigasi profil dan portofolio.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Halaman ini menjadi pintu masuk utama untuk berpindah ke halaman
              profil dan portofolio dengan tampilan yang lebih hidup.
            </p>
          </div>

          <div className="grid gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className={`mb-5 block h-2 w-16 rounded-full ${item.accent}`} />
                <h2 className="text-2xl font-black">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                <span className="mt-6 inline-block font-bold text-slate-950 group-hover:text-sky-700">
                  Buka halaman
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
