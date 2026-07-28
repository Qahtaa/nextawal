"use client";

import { useEffect, useState } from "react";

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

function ProjectCard({
project,
index,
}: {
project: Project;
index: number;
}) {
// State untuk Like
const [jumlahLike, setJumlahLike] = useState<number>(() => {
  if (typeof window !== "undefined") {
    const dataTersimpan = localStorage.getItem(
      `jumlahLike-${project.name}`
    );

    return dataTersimpan ? JSON.parse(dataTersimpan) : 0;
  }

  return 0;
});

const [sudahLike, setSudahLike] = useState<boolean>(() => {
  if (typeof window !== "undefined") {
    const dataTersimpan = localStorage.getItem(
      `sudahLike-${project.name}`
    );

    return dataTersimpan ? JSON.parse(dataTersimpan) : false;
  }

  return false;
});

// Menyimpan jumlah Like
useEffect(() => {
  localStorage.setItem(
    `jumlahLike-${project.name}`,
    JSON.stringify(jumlahLike)
  );
}, [jumlahLike, project.name]);

// Menyimpan status Like
useEffect(() => {
  localStorage.setItem(
    `sudahLike-${project.name}`,
    JSON.stringify(sudahLike)
  );
}, [sudahLike, project.name]);

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
style={{
clipPath: "polygon(0 0,100% 0,96% 100%,4% 100%)",
}}
/>

  {/* Conditional Rendering */}
  {jumlahLike >= 5 && (
    <p className="mb-2 inline-block -rotate-2 bg-rule px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-white">
      Proyek Terpopuler
    </p>
  )}

  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-soft">
    {project.owner}
  </p>

  <h2 className="mt-2 font-display text-3xl text-ink">
    {project.name}
  </h2>

  <p className="mt-2 font-mono text-xs font-semibold text-blue">
    {project.stack}
  </p>

  <p className="mt-4 leading-7 text-ink-soft">
    {project.description}
  </p>

  <button
    onClick={tanganiKlikLike}
    className={`mt-6 border px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest transition ${
      sudahLike
        ? "border-rule bg-rule text-white"
        : "border-ink/20 bg-paper text-ink hover:bg-ink hover:text-paper"
    }`}
  >
    {sudahLike ? "Batal Suka" : "Suka"} ({jumlahLike})
  </button>
</article>


);
}

export default function PortoPage() {
// State 1: Menyimpan teks yang sedang diketik
const [pesan, setPesan] = useState("");

// State 2: Menyimpan semua pesan
const [daftarPesan, setDaftarPesan] = useState<string[]>(() => {
// Mengambil data dari localStorage saat halaman dibuka
if (typeof window !== "undefined") {
const dataTersimpan = localStorage.getItem("daftarPesan");


  if (dataTersimpan) {
    return JSON.parse(dataTersimpan);
  }
}

return [];

});

// Menyimpan daftar pesan ke localStorage
// Setiap daftarPesan berubah, data akan disimpan
useEffect(() => {
localStorage.setItem(
"daftarPesan",
JSON.stringify(daftarPesan)
);
}, [daftarPesan]);

// Fungsi untuk mengirim pesan
function tanganiKirimPesan(
e: React.FormEvent<HTMLFormElement>
) {
e.preventDefault();

// Mencegah pesan kosong
if (pesan.trim() === "") {
  return;
}

// Menambahkan pesan baru ke Array
setDaftarPesan([...daftarPesan, pesan]);

// Mengosongkan input setelah dikirim
setPesan("");

}

return ( <section className="flex flex-col gap-12"> <header className="max-w-2xl"> <p className="mb-4 inline-block -rotate-1 border border-ink/15 bg-white px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-ink-soft shadow-[3px_3px_0_#2f6f62]">
Buku Catatan — Bab 03 </p>

    <h1 className="font-display text-6xl leading-[0.95] text-ink md:text-7xl">
      Hasil proyek Taqiy & Rayyan.
    </h1>

    <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
      Beberapa proyek yang dibuat selama belajar Next.js, React, dan
      Tailwind CSS.
    </p>
  </header>

  {/* Daftar Project */}
  <div className="grid gap-8 md:grid-cols-3">
    {projects.map((project, i) => (
      <ProjectCard
        key={project.name}
        project={project}
        index={i}
      />
    ))}
  </div>

  {/* BUKU TAMU / GUESTBOOK */}
  <section className="max-w-2xl border border-ink/15 bg-white p-7 shadow-[6px_6px_0_rgba(34,40,31,0.12)]">
    <p className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-soft">
      Buku Tamu
    </p>

    <h2 className="mt-2 font-display text-4xl text-ink">
      Tinggalkan Pesan
    </h2>

    <p className="mt-3 leading-7 text-ink-soft">
      Tulis pesan untuk Taqiy dan Rayyan.
    </p>

    {/* Form Input */}
    <form
      onSubmit={tanganiKirimPesan}
      className="mt-6 flex flex-col gap-4"
    >
      <input
        type="text"
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
        placeholder="Tulis pesan kamu..."
        className="border border-ink/20 bg-paper px-4 py-3 font-mono text-sm text-ink outline-none focus:border-blue"
      />

      <button
        type="submit"
        className="w-fit border border-ink bg-ink px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-paper transition hover:bg-blue"
      >
        Kirim Pesan
      </button>
    </form>

    {/* Daftar Pesan */}
    <div className="mt-8">
      <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
        Pesan Pengunjung
      </h3>

      <div className="mt-4 flex flex-col gap-3">
        {daftarPesan.length === 0 ? (
          <p className="font-mono text-sm text-ink-soft">
            Belum ada pesan. Jadilah pengunjung pertama!
          </p>
        ) : (
          daftarPesan.map((pesan, index) => (
            <div
              key={index}
              className="border border-ink/10 bg-paper p-4"
            >
              <p className="text-ink">{pesan}</p>
            </div>
          ))
        )}
      </div>
    </div>
  </section>
</section>

);
}
