import Link from "next/link";

const projects = [
  {
    name: "Website Profil",
    stack: "Next.js + Tailwind",
    description: "Halaman personal dengan informasi singkat dan tampilan responsif.",
  },
  {
    name: "Galeri Karya",
    stack: "React",
    description: "Kumpulan kartu proyek untuk menampilkan hasil belajar dan latihan.",
  },
  {
    name: "Landing Page",
    stack: "HTML + CSS",
    description: "Desain halaman utama yang fokus pada navigasi dan visual bersih.",
  },
];

export default function PortoPage() {
  return (
    <main className="min-h-screen bg-[#eef7fb] px-6 py-8 text-slate-950">
      <section className="mx-auto max-w-5xl">
        <nav className="mb-12 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <Link href="/" className="font-bold">
            Next Tugas
          </Link>
          <div className="flex gap-3 text-sm font-semibold">
            <Link href="/profil" className="rounded-md px-3 py-2 hover:bg-slate-100">
              Profil
            </Link>
            <Link href="/porto" className="rounded-md bg-slate-950 px-3 py-2 text-white">
              Porto
            </Link>
          </div>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="mb-4 w-fit rounded-md bg-emerald-200 px-3 py-1 text-sm font-bold text-emerald-950">
            Portofolio
          </p>
          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Kumpulan proyek dan hasil belajar.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Beberapa contoh karya yang bisa dikembangkan lagi menjadi proyek
            website yang lebih lengkap.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="mb-5 text-sm font-bold text-sky-700">{project.stack}</p>
              <h2 className="text-2xl font-black">{project.name}</h2>
              <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
