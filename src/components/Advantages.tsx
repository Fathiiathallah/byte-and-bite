import SectionHeading from "./SectionHeading";

const pillars = [
  {
    title: "Fokus F&B",
    desc: "Bukan agensi umum. Tim ngerti sudut foto yang bikin ngiler sampai istilah dapur.",
    accent: "border-bite-red/20",
    icon: "☕",
  },
  {
    title: "Harga ramah UMKM",
    desc: "Harga yang agensi besar bilang 'nggak worth' — justru di situ kami masuk.",
    accent: "border-byte-blue/20",
    icon: "🏷️",
  },
  {
    title: "Data, bukan feeling",
    desc: "Setiap kampanye diukur. Laporan bulanan bahasa manusia + rekomendasi konkret.",
    accent: "border-emerald-500/20",
    icon: "📈",
  },
  {
    title: "One-stop-shop",
    desc: "Konten, sosmed, dan website dipegang satu tim — nggak perlu vendor lepas.",
    accent: "border-amber-500/20",
    icon: "🛠️",
  },
];

const numbers = [
  { value: "3", label: "layanan, 1 alur" },
  { value: "15+", label: "konten/bulan" },
  { value: "5-7", label: "hari web launch" },
];

export default function Advantages() {
  return (
    <section id="keunggulan" className="relative overflow-hidden bg-[#faf9f6] py-20 sm:py-28">
      {/* blob */}
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-bite-red/5 blur-2xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-byte-blue/5 blur-2xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kenapa Byte & Bite"
          title="Ngerti kuliner, bukan cuma jago posting"
          desc="Kami lahir dari frustrasi agensi umum yang nggak paham kenapa makanan enak nggak laku."
        />

        <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-12">
          {/* Highlight card: BYTE×BITE philosophy */}
          <div className="relative overflow-hidden rounded-3xl bg-zinc-900 p-8 text-white md:col-span-7 md:row-span-2 md:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-bite-red/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-14 -left-10 h-48 w-48 rounded-full bg-byte-blue/20 blur-2xl" />

            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-zinc-300">
              Filosofi kami
            </span>
            <h3 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
              Kenapa namanya{" "}
              <span className="text-byte-blue">Byte</span>{" "}
              <span className="text-zinc-500">×</span>{" "}
              <span className="text-bite-red">Bite</span>?
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">
              Setiap strategi dimulai dari membaca data — perilaku pelanggan,
              jam ramai, menu best-seller. Lalu dikemas jadi konten yang
              langsung <span className="font-bold text-white">&quot;nggigit&quot;</span> di feed
              dan hati orang. Data dan kreativitas bukan dua hal terpisah —
              itulah satu kesatuan kami.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-3 rounded-2xl bg-byte-blue/15 px-4 py-3 ring-1 ring-byte-blue/25">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-byte-blue">
                  <path d="M3 3v18h18M7 14l4-4 4 4 5-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-xs font-extrabold text-white">BYTE</p>
                  <p className="text-[11px] text-zinc-400">Analitis · data · sistem</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-bite-red/15 px-4 py-3 ring-1 ring-bite-red/25">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-bite-red">
                  <path d="M12 2C8.2 5.2 5 8.6 5 12.5 5 17.2 8.6 21 12.6 21H13c4.3 0 8-3.5 8-8 0-2.9-.8-5-2.8-6.5-1.6 1-3.6 1.6-5.7 1.6H10c1-1.6 1.2-3.6 1-6.1h1Z" />
                </svg>
                <div>
                  <p className="text-xs font-extrabold text-white">BITE</p>
                  <p className="text-[11px] text-zinc-400">Kreatif · rasa · menggigit</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {numbers.map((n) => (
                <div key={n.label}>
                  <p className="text-2xl font-extrabold tracking-tight text-white">{n.value}</p>
                  <p className="mt-0.5 text-[11px] font-medium text-zinc-500">{n.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2×2 pillar grid (right) */}
          <div className="grid auto-rows-fr content-stretch gap-6 sm:grid-cols-2 md:col-span-5 md:row-span-2 md:h-full">
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`group flex flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 ${p.accent}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-lg transition-colors group-hover:bg-zinc-900 group-hover:text-white">
                  {p.icon}
                </span>
                <h3 className="mt-4 text-base font-extrabold tracking-tight text-zinc-900">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}