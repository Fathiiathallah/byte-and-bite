import SectionHeading from "./SectionHeading";

const items = [
  {
    category: "Content Creation",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    imgAlt: "Kopi latte art",
    title: "Feed IG yang bikin orang berhenti scroll",
    desc: "Visual konsisten + caption berkarakter. Klien mulai dilihat sebagai brand, bukan cuma warung yang jualan.",
    result: "3.2× engagement",
    resultColor: "text-emerald-600 bg-emerald-500/10",
    points: ["Moodboard & palet visual", "30 konten per bulan", "Template feed siap pakai"],
  },
  {
    category: "Social Media Management",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    imgAlt: "Suasana kafe",
    title: "Akun dari sepi jadi selalu ada yang nanya",
    desc: "Jadwal posting terjaga, DM dibales cepat, review direspons. Kafe jadi keliatan hidup meski lagi jarang buka.",
    result: "+480 followers/3 bln",
    resultColor: "text-byte-blue bg-byte-blue/10",
    points: ["Kalender editorial", "Community management", "Laporan bulanan jelas"],
  },
  {
    category: "Website & Landing Page",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    imgAlt: "Makanan hot bowl",
    title: "Landing page yang muter jadi order",
    desc: "Menu digital + tombol WA langsung. Calon pelanggan nggak perlu bolak-balik nanya 'menu apa aja?'.",
    result: "7 hari launching",
    resultColor: "text-emerald-600 bg-emerald-500/10",
    points: ["Mobile-first, cepat", "Menu digital + WA order", "SEO lokal / Maps terpasang"],
  },
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Hasil Kerja"
            title="Bukan cuma deliverable — hasil"
            desc="Contoh format kerja setiap layanan. Portofolio klien lengkap kami tampilkan saat konsultasi."
          />
          <span className="hidden rounded-full bg-zinc-100 px-4 py-2 text-xs font-bold text-zinc-600 md:inline-block">
            Case study menyusul
          </span>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-[#fbfbfa] ring-1 ring-zinc-200/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/5"
            >
              {/* Visual header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.imgAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold text-zinc-800 shadow-sm backdrop-blur">
                  {it.category}
                </span>
                <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-extrabold backdrop-blur ${it.resultColor}`}>
                  {it.result}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg font-extrabold leading-snug tracking-tight text-zinc-900">
                  {it.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">{it.desc}</p>

                <ul className="mt-5 space-y-2">
                  {it.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-700">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 shrink-0 text-byte-blue">
                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-bite-red hover:decoration-bite-red"
                  >
                    Minta dokumentasi lengkap
                    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                      <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}