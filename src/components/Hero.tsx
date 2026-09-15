const images = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    alt: "Kopi manual brew",
    className: "rotate-[-3deg]",
    width: 600,
    height: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    alt: "Latte art cappuccino",
    className: "rotate-[2deg]",
    width: 600,
    height: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    alt: "Croissant pastry",
    className: "rotate-[3deg]",
    width: 600,
    height: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    alt: "Mie kuah pedas",
    className: "rotate-[-2deg]",
    width: 600,
    height: 450,
  },
];

const stats = [
  { value: "3", label: "Layanan terintegrasi" },
  { value: "100%", label: "Fokus F&B" },
  { value: "14 hari", label: "Konten siap posting" },
  { value: "1 mitra", label: "One-stop-shop" },
];

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-[#faf9f6]">
      {/* Abstract blob shapes */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-byte-blue/10 blur-xl" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-bite-red/10 blur-xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-yellow-400/20 blur-2xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        {/* Left: copy */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-byte-blue shadow-sm ring-1 ring-zinc-100">
            <span className="h-2 w-2 animate-pulse rounded-full bg-bite-red" />
            Khusus UMKM Kuliner
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.6rem]">
            Bikin Kuliner
            <br />
            <span className="relative inline-block text-bite-red">
              Laris
              <svg viewBox="0 0 120 12" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                <path d="M2 9C30 3 60 3 118 8" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>{" "}
            di Online.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-500">
            Agensi digital untuk kafe, restoran, dan brand makanan lokal. Foto
            yang bikin ngiler, konten yang konsisten, sosmed yang aktif —
            semuanya satu mitra.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-xl bg-bite-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-bite-red/30 transition-all hover:-translate-y-0.5 hover:bg-bite-red-dark"
            >
              Mulai Sekarang
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-bold text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-zinc-300"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 text-bite-red">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM6.5 8l3.5-2.5V10.5L6.5 8Z" />
              </svg>
              Lihat Layanan
            </a>
          </div>

          {/* Stats — inline, dipercantik */}
          <dl className="mt-10 grid grid-cols-4 gap-4 border-t border-zinc-200 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-[1.7rem]">
                  {s.value}
                </dt>
                <dd className="mt-0.5 text-xs font-medium leading-snug text-zinc-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: dynamic food photo grid */}
        <div className="relative z-10 mx-auto w-full max-w-md md:max-w-none">
          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div
                key={img.src}
                className={`overflow-hidden rounded-2xl shadow-xl shadow-black/10 ring-1 ring-black/5 ${img.className} ${i % 2 ? "translate-y-5" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Floating badge: followers */}
          <div className="absolute -left-6 top-8 rounded-2xl bg-white p-3.5 shadow-xl ring-1 ring-zinc-100 md:-left-10">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-byte-blue text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                  <path d="M23 11.99C23 5.5 18.08 0.5 12 0.5S1 5.5 1 11.99c0 6 4.31 10.24 10.02 11.51v-8.14H7.72v-3.37h3.3V7.84c0-3.26 1.94-5.06 4.92-5.06 1.42 0 2.91.25 2.91.25v3.2h-1.64c-1.61 0-2.12 1-2.12 2.03v2.43h3.6l-.58 3.37h-3.02v8.14C18.69 22.23 23 17.99 23 11.99Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-extrabold text-zinc-900">+2.450</p>
                <p className="text-[11px] font-medium text-zinc-500">followers/mo</p>
              </div>
            </div>
          </div>

          {/* Floating badge: rating */}
          <div className="absolute -right-3 top-1/3 rounded-2xl bg-white p-3.5 shadow-xl ring-1 ring-zinc-100 md:-right-8">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-sm text-zinc-900">★</div>
              <div>
                <p className="text-sm font-extrabold text-zinc-900">4.9/5</p>
                <p className="text-[11px] font-medium text-zinc-500">client rating</p>
              </div>
            </div>
          </div>

          {/* Floating badge: engagement */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-zinc-900 px-5 py-3.5 text-white shadow-xl">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-bite-red opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-bite-red" />
              </span>
              <p className="text-sm font-bold">
                Engagement <span className="text-white/50">naik</span>{" "}
                <span className="text-bite-red">+37%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}