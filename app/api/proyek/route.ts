import { NextResponse } from "next/server";

export async function GET() {
  const daftarProyek = [
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

  return NextResponse.json(daftarProyek);
}