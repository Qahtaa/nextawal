"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  owner: string;
  name: string;
  stack: string;
  description: string;
};

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  // State untuk Like
  const [jumlahLike, setJumlahLike] = useState(() => {
    if (typeof window !== "undefined") {
      const dataTersimpan = localStorage.getItem(
        `jumlahLike-${project.name}`
      );

      return dataTersimpan ? JSON.parse(dataTersimpan) : 0;
    }

    return 0;
  });

  const [sudahLike, setSudahLike] = useState(() => {
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
    <>
      {/* Conditional Rendering */}
      {jumlahLike >= 5 && (
        <p className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-blue">
          Proyek Terpopuler
        </p>
      )}

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
    </>
  );
}

export default function PortoPage() {
  // Menyimpan data project dari API
  const [projects, setProjects] = useState<Project[]>([]);

  // State untuk Guestbook
  const [pesan, setPesan] = useState("");

  const [daftarPesan, setDaftarPesan] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const dataTersimpan = localStorage.getItem("daftarPesan");

      if (dataTersimpan) {
        return JSON.parse(dataTersimpan);
      }
    }

    return [];
  });

  // Mengambil project dari API
  useEffect(() => {
    async function ambilProyek() {
      try {
        const response = await fetch("/api/proyek");
        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.error("Gagal mengambil data proyek:", error);
      }
    }

    ambilProyek();
  }, []);

  // Menyimpan daftar pesan ke localStorage
  useEffect(() => {
    localStorage.setItem(
      "daftarPesan",
      JSON.stringify(daftarPesan)
    );
  }, [daftarPesan]);

  // Fungsi untuk mengirim pesan
  function tanganiKirimPesan(e: React.FormEvent) {
    e.preventDefault();

    // Mencegah pesan kosong
    if (pesan.trim() === "") {
      return;
    }

    // Menambahkan pesan baru ke Array
    setDaftarPesan([...daftarPesan, pesan]);

    // Mengosongkan input
    setPesan("");
  }

  return (
    <main className="min-h-screen bg-paper px-6 py-16 text-ink">
      <div className="mx-auto max-w-6xl">

        <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
          Buku Catatan - Bab 03
        </p>

        <h1 className="mt-4 font-display text-6xl leading-[0.95] text-ink md:text-7xl">
          Hasil proyek Taqiy & Rayyan.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
          Beberapa proyek yang dibuat selama belajar Next.js,
          React, dan Tailwind CSS.
        </p>

        {/* Daftar Project */}
        <section className="mt-12">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="border border-ink/20 bg-paper p-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                  {project.owner}
                </p>

                <h3 className="mt-3 font-display text-3xl text-ink">
                  {project.name}
                </h3>

                <p className="mt-2 font-mono text-xs uppercase text-blue">
                  {project.stack}
                </p>

                <p className="mt-4 leading-7 text-ink-soft">
                  {project.description}
                </p>

                {/* Link ke Dynamic Route */}
                <Link
                  href={`/porto/${project.id}`}
                  className="mt-5 inline-block border border-ink bg-ink px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-paper transition hover:bg-blue"
                >
                  Lihat Detail
                </Link>

                {/* Like */}
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            ))}
          </div>
        </section>

        {/* BUKU TAMU / GUESTBOOK */}
        <section className="mt-20">
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

      </div>
    </main>
  );
}