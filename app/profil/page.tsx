const profiles = [
  {
    name: "Taqiy",
    initials: "TQ",
    role: "Frontend Developer",
    tape: "bg-teal",
    rotate: "-rotate-1",
    description:
      "Fokus belajar membuat tampilan website yang rapi, responsif, dan nyaman digunakan.",
    skills: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    name: "Rayyan",
    initials: "RY",
    role: "UI Designer",
    tape: "bg-blue",
    rotate: "rotate-1",
    description:
      "Tertarik pada desain antarmuka, pemilihan warna, dan penyusunan layout website.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProfilPage() {
  return (
    <section className="flex flex-col gap-12">
      <header className="max-w-2xl">
        <p className="mb-4 inline-block rotate-1 border border-ink/15 bg-white px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-ink-soft shadow-[3px_3px_0_#d9a32b]">
          Buku Catatan — Bab 02
        </p>
        <h1 className="font-display text-6xl leading-[0.95] text-ink md:text-7xl">
          Siapa di balik catatan ini?
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
          Dua pelajar, satu proyek belajar Next.js, React, dan Tailwind CSS.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        {profiles.map((profile) => (
          <article
            key={profile.name}
            className={`relative border border-ink/15 bg-white p-8 shadow-[6px_6px_0_rgba(34,40,31,0.12)] ${profile.rotate}`}
          >
            <span
              className={`absolute -top-3 left-10 h-6 w-16 ${profile.tape} opacity-80`}
              style={{ clipPath: "polygon(0 0,100% 0,96% 100%,4% 100%)" }}
            />
            <div
              className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full font-display text-2xl font-bold text-white ${profile.tape}`}
            >
              {profile.initials}
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-soft">
              {profile.role}
            </p>
            <h2 className="mt-2 font-display text-4xl text-ink">{profile.name}</h2>
            <p className="mt-4 leading-7 text-ink-soft">{profile.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-ink/20 bg-paper px-3 py-1 font-mono text-xs font-semibold text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
