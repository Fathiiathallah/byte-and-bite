import SectionHeading from "./SectionHeading";

const problems = [
  {
    num: "01",
    title: "Rasa enak, tapi sepi yang tau",
    desc: "Banyak kafe dan resto punya produk juara tapi belum punya jangkauan digital. Calon pelanggan lewat begitu saja tanpa mampir.",
  },
  {
    num: "02",
    title: "Sibuk di dapur, posting terbengkalai",
    desc: "Fokus menjaga kualitas makanan bikin waktu bikin konten, riset audio, dan balas DM selalu habis sebelum mulai.",
  },
  {
    num: "03",
    title: "Calon pembeli tanya menu, respons lama",
    desc: "Tanpa landing page atau menu digital yang jelas, pelanggan kabur ke kompetitor karena capek menunggu balasan chat.",
  },
];

export default function Problems() {
  return (
    <section className="border-t border-zinc-200/60 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tantangan Lapangan"
          title="Bisnis kuliner itu melelahkan kalau marketing dikerjain sendirian"
          desc="Tiga kendala klasik yang dialami 9 dari 10 perintis UMKM FnB sebelum bekerjasama dengan kami."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.num}
              className="relative rounded-3xl border border-zinc-200/80 bg-[#fbfaf7] p-8 transition-colors hover:border-zinc-300"
            >
              <span className="text-3xl font-extrabold text-bite-red/80">
                {p.num}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
