import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Pembuatan Konten",
    tag: "Content Creation",
    tagColor: "bg-bite-red/10 text-bite-red",
    accentColor: "border-bite-red/20 hover:border-bite-red",
    desc: "Foto dan video produk kuliner yang bikin ngiler. Dari konsep moodboard, sesi shoot di lokasi, sampai editing reels/TikTok siap posting.",
    deliverables: [
      "Foto menu & ambience resto/kafe",
      "Video Reels & TikTok (tren audio)",
      "Copywriting caption + hashtag riset",
      "Template desain grafis promo mingguan",
    ],
    highlight: "15-30 konten/bulan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: "Pengelolaan Media Sosial",
    tag: "Social Media Management",
    tagColor: "bg-byte-blue/10 text-byte-blue",
    accentColor: "border-byte-blue/20 hover:border-byte-blue",
    desc: "Akun IG & TikTok kamu jalan otomatis dan aktif terus. Kalender konten rapi, fast-response ke calon pelanggan via DM, dan evaluasi bulanan.",
    deliverables: [
      "Kalender editorial bulanan",
      "Community management (balas komen & DM)",
      "Optimasi Google Business Profile",
      "Laporan performa bahasa sederhana + rekomendasi",
    ],
    highlight: "Respon < 15 menit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    title: "Website & Landing Page",
    tag: "Web Development",
    tagColor: "bg-emerald-500/10 text-emerald-600",
    accentColor: "border-emerald-500/20 hover:border-emerald-500",
    desc: "Punya rumah sendiri di internet. Tempat calon pembeli lihat buku menu digital, cek lokasi, dan langsung order via WhatsApp/GoFood tanpa ribet.",
    deliverables: [
      "Landing page modern & mobile-first",
      "Menu digital interaktif + direct WA order",
      "Integrasi Google Maps & jam buka",
      "Cepat, SEO lokal, gratis domain setup",
    ],
    highlight: "Selesai dalam 5-7 hari",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="layanan" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Layanan Utama"
            title="Satu alur terintegrasi, bukan jasa lepasan"
            desc="Klien UMKM nggak perlu pusing koordinasi banyak vendor. Foto, caption, jadwal posting, sampai web dikerjain barengan."
          />
          <span className="hidden rounded-full bg-zinc-100 px-4 py-2 text-xs font-bold text-zinc-600 md:inline-block">
            Semua paket termasuk revisi
          </span>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group flex flex-col justify-between rounded-3xl border bg-[#fbfbfa] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 ${s.accentColor}`}
            >
              <div>
                {/* Header card: icon + highlight */}
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200/60">
                    {s.icon}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-zinc-600 shadow-sm ring-1 ring-zinc-200/60">
                    {s.highlight}
                  </span>
                </div>

                <span className={`mt-6 inline-block rounded-lg px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${s.tagColor}`}>
                  {s.tag}
                </span>

                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-zinc-900">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {s.desc}
                </p>

                {/* Deliverables checklist */}
                <div className="mt-6 border-t border-zinc-200/60 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Yang kamu dapatkan:
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-xs font-semibold text-zinc-700">
                        <svg viewBox="0 0 16 16" fill="currentColor" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bite-red">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#kontak"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-center text-xs font-extrabold text-zinc-800 shadow-sm ring-1 ring-zinc-200 transition-all group-hover:bg-zinc-900 group-hover:text-white group-hover:ring-zinc-900"
                >
                  Tanya Paket Ini
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                    <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}