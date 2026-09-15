import SectionHeading from "./SectionHeading";

const team = [
  {
    name: "Muh. Kemal Pasha B",
    initials: "MK",
    role: "Founder & Project Manager",
    roleBg: "bg-byte-blue",
    desc: "Koordinasi strategi, jadwal, dan klien end-to-end. Laporan bulanan dan pengambilan keputusan.",
    specialties: ["Strategi", "Manajemen", "Laporan"],
  },
  {
    name: "Fatihah Rizky Ramadhani",
    initials: "FR",
    role: "Content Creator",
    roleBg: "bg-bite-red",
    desc: "Foto & video produk, copywriting, riset tren, dan desain grafis harian tim.",
    specialties: ["Visual", "Copywriting", "Riset tren"],
  },
  {
    name: "Muhammad Fathi A.A",
    initials: "MF",
    role: "Web Developer & Designer",
    roleBg: "bg-emerald-600",
    desc: "Bangun & maintain website/landing page. Dukungan desain grafis saat workload tim lain tinggi.",
    specialties: ["Web Dev", "Desain", "Performa"],
  },
];

export default function Team() {
  return (
    <section id="tim" className="bg-[#faf9f6] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tim Kami"
          title="Tim kecil yang beneran ngerjain"
          desc="Nggak lebay, nggak banyak-banyakan. Tim solid yang fokus di bidang masing-masing."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((t) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-zinc-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/5"
            >
              {/* Avatar */}
              <div className="flex flex-col items-center text-center">
                <div className={`relative flex h-20 w-20 items-center justify-center rounded-full text-2xl font-extrabold text-white shadow-lg shadow-black/15 transition-transform duration-300 group-hover:scale-105 ${t.roleBg}`}>
                  {t.initials}
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-100">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`h-3.5 w-3.5 ${t.roleBg === 'bg-byte-blue' ? 'text-byte-blue' : t.roleBg === 'bg-bite-red' ? 'text-bite-red' : 'text-emerald-600'}`}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-zinc-900">
                  {t.name}
                </h3>

                <span className={`mt-1.5 inline-block rounded-full px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-widest text-white ${t.roleBg}`}>
                  {t.role}
                </span>

                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                  {t.desc}
                </p>

                {/* Specialty tags */}
                <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-bold text-zinc-600 transition-colors group-hover:bg-zinc-900 group-hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}