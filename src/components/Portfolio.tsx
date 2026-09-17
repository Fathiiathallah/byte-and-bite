import SectionHeading from "./SectionHeading";

const items = [
  {
    tag: "Content Creation",
    stat: "3.2× engagement",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85",
    alt: "Racikan kopi latte art",
    title: "Feed kafe yang bikin orang berhenti scroll",
    desc: "Visual konsisten dan copywriting berkarakter mengubah profil dari sekadar warung kopi menjadi brand yang terpercaya.",
    points: ["Shooting menu & ambience", "30 konten siap tayang/bulan", "Template feed konsisten"],
  },
  {
    tag: "Social Media Management",
    stat: "+480 followers / 3 bln",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=85",
    alt: "Suasana dalam kafe",
    title: "Akun yang dari ramai sampai selalu ada yang nanya",
    desc: "Jadwal tayang terjaga, DM dibalas cepat, dan profil terus dikelola sehingga calon pelanggan merasa aman untuk datang.",
    points: ["Kalender konten auto terjadwal", "Balasan DM & komen saat jam kerja", "Laporan bulanan yang mudah dibaca"],
  },
  {
    tag: "Website & Digital Menu",
    stat: "7 hari siap tayang",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85",
    alt: "Sajian masakan hot bowl",
    title: "Menu digital yang langsung mengarah ke order",
    desc: "Calon pembeli cukup memindai menu digital, memilih menu favorit, dan memesan via WhatsApp tanpa menunggu lama.",
    points: ["Menu digital mobile-first", "Tombol pesan langsung WhatsApp", "Terindeks cepat di Google & Maps"],
  },
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="bg-[#fbfaf7] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Contoh Hasil Kerja"
            title="Kelihatan profesional, dampaknya terukur"
            desc="Ringkasan simulasi hasil dari proses kerja kami. Detail studi kasus dan klien lengkap bisa dibahas saat konsultasi."
          />
          <span className="hidden rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-600 md:inline-block">
            Case study menyusul
          </span>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={it.img}
                  alt={it.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-zinc-800 backdrop-blur-sm">
                  {it.tag}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-zinc-900/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  {it.stat}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg font-bold leading-snug tracking-tight text-zinc-900">
                  {it.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                  {it.desc}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {it.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-xs font-medium text-zinc-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bite-red" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-800">
                    Minta dokumentasi lengkap
                    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                      <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}