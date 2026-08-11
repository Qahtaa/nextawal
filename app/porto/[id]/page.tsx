import Link from "next/link";

const projects = [
  {
    id: 1,
    owner: "Taqiy",
    name: "Website Profil Tim",
    stack: "Next.js + Tailwind",
    description:
      "Halaman profil dua orang yang menampilkan data diri, skill, dan minat belajar.",
  },
  {
    id: 2,
    owner: "Rayyan",
    name: "Desain Kartu Portofolio",
    stack: "React Component",
    description:
      "Komponen card untuk menampilkan hasil proyek dengan judul, pemilik, dan teknologi.",
  },
  {
    id: 3,
    owner: "Taqiy & Rayyan",
    name: "Menu Navigasi",
    stack: "Next Link",
    description:
      "Navigasi sederhana dari halaman utama menuju halaman profil dan portofolio.",
  },
];

export default async function DetailPorto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-paper p-10 text-ink">
        <h1 className="font-display text-5xl">
          Project tidak ditemukan
        </h1>

        <Link
          href="/porto"
          className="mt-6 inline-block border border-ink bg-ink px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-paper"
        >
          ← Kembali ke Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper px-6 py-16 text-ink">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/porto"
          className="font-mono text-xs font-bold uppercase tracking-widest text-blue"
        >
          ← Kembali ke Portfolio
        </Link>

        <div className="mt-10 border border-ink/20 bg-paper p-8">

          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
            {project.owner}
          </p>

          <h1 className="mt-4 font-display text-5xl">
            {project.name}
          </h1>

          <p className="mt-4 font-mono text-sm uppercase text-blue">
            {project.stack}
          </p>

          <div className="my-8 border-t border-ink/10" />

          <p className="leading-8 text-ink-soft">
            {project.description}
          </p>

          <p className="mt-8 font-mono text-xs text-ink-soft">
            PROJECT ID: {project.id}
          </p>

        </div>
      </div>
    </main>
  );
}