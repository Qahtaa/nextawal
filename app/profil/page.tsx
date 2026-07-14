import Link from "next/link";

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <section className="mx-auto max-w-5xl">
        <nav className="mb-12 flex items-center justify-between rounded-lg border border-white/10 bg-white/10 px-5 py-4">
          <Link href="/" className="font-bold">
            Next Tugas
          </Link>
          <div className="flex gap-3 text-sm font-semibold">
            <Link href="/profil" className="rounded-md bg-white px-3 py-2 text-slate-950">
              Profil
            </Link>
            <Link href="/porto" className="rounded-md px-3 py-2 hover:bg-white/10">
              Porto
            </Link>
          </div>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-lg border border-white/10 bg-white/10 p-8">
            <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-emerald-400 text-5xl font-black text-slate-950">
              SP
            </div>
            <h1 className="text-4xl font-black">Profil Saya</h1>
            <p className="mt-4 leading-7 text-slate-300">
              Saya adalah pelajar yang sedang belajar membuat aplikasi web
              menggunakan Next.js, React, dan Tailwind CSS.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-lg bg-white p-6 text-slate-950">
              <h2 className="text-xl font-black">Minat</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Web development, desain antarmuka, dan teknologi kreatif.
              </p>
            </article>
            <article className="rounded-lg bg-amber-200 p-6 text-amber-950">
              <h2 className="text-xl font-black">Skill</h2>
              <p className="mt-3 leading-7">
                HTML, CSS, JavaScript, React, Next.js, dan Tailwind CSS.
              </p>
            </article>
            <article className="rounded-lg bg-sky-300 p-6 text-sky-950 sm:col-span-2">
              <h2 className="text-xl font-black">Tujuan</h2>
              <p className="mt-3 leading-7">
                Membangun website yang rapi, responsif, mudah digunakan, dan
                terlihat profesional.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
