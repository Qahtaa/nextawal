"use client";

import { useState } from "react";

const projects = [
  {
    owner: "Taqiy",
    name: "Website Profil Tim",
    stack: "Next.js + Tailwind",
    description:
      "Halaman profil dua orang yang menampilkan data diri, skill, dan minat belajar.",
    tape: "bg-teal",
  },
  {
    owner: "Rayyan",
    name: "Desain Kartu Portofolio",
    stack: "React Component",
    description:
      "Komponen card untuk menampilkan hasil proyek dengan judul, pemilik, dan teknologi.",
    tape: "bg-blue",
  },
  {
    owner: "Taqiy & Rayyan",
    name: "Menu Navigasi",
    stack: "Next Link",
    description:
      "Navigasi sederhana dari halaman utama menuju halaman profil dan portofolio.",
    tape: "bg-mustard",
  },
];

type Project = {
  owner: string;
  name: string;
  stack: string;
  description: string;
  tape: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Dua memori (state)
  const [jumlahLike, setJumlahLike] = useState(0);
  const [sudahLike, setSudahLike] = useState(false);

  // Fungsi toggle Like
  function tanganiKlikLike() {
    if (!sudahLike) {
      setJumlahLike(jumlahLike + 1);
      setSudahLike(true);
    } else {
      setJumlahLike(jumlahLike - 1);
      setSudahLike(false);
    }
  }

  return (
    <article
      className={`relative border border-ink/15 bg-white p-7 shadow-[6px_6px_0_rgba(34,40,31,0.12)] transition hover:-translate-y-1 ${
        index % 2 === 0 ? "-rotate-1" : "rotate-1"
      }`}
    >
      <span
        className={`absolute -top-3 left-8 h-6 w-16 ${project.tape} opacity-80`}
        style={{ clipPath: "polygon(0 0,100% 0,96% 100%,4% 100%)" }}
      />

      {/* Conditional Rendering: hanya muncul jika like >= 5 */}
      {jumlahLike >= 5 && (
        <p className="mb-2 inline-block -rotate-2 bg-rule px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-white">
          Proyek Terpopuler
        </p>
      )}

      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-soft">
        {project.owner}
      </p>
      <h2 className="mt-2 font-display text-3xl text-ink">{project.name}</h2>
      <p className="mt-2 font-mono text-xs font-semibold text-blue">{project.stack}</p>
      <p className="mt-4 leading-7 text-ink-soft">{project.description}</p>

      <button
        onClick={tanganiKlikLike}
        className={`mt-6 border px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest transition ${
          sudahLike
            ? "border-rule bg-rule text-white"
            : "border-ink/20 bg-paper text-ink hover:bg-ink hover:text-paper"
        }`}
      >
        {/* Ternary Operator untuk teks tombol */}
        {sudahLike ? "Batal Suka" : "Suka"} ({jumlahLike})
      </button>
    </article>
  );
}

export default function PortoPage() {
  return (
    <section className="flex flex-col gap-12">
      <header className="max-w-2xl">
        <p className="mb-4 inline-block -rotate-1 border border-ink/15 bg-white px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-ink-soft shadow-[3px_3px_0_#2f6f62]">
          Buku Catatan — Bab 03
        </p>
        <h1 className="font-display text-6xl leading-[0.95] text-ink md:text-7xl">
          Hasil proyek Taqiy & Rayyan.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
          Beberapa proyek yang dibuat selama belajar Next.js, React, dan Tailwind CSS.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
