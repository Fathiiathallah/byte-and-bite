import Image from "next/image";
import SectionHeading from "./SectionHeading";

const team = [
  {
    name: "Muh. Kemal Pasha B",
    role: "Founder & Project Manager",
    image: "/team-kemal-square.jpg",
    desc: "Menjaga strategi, jadwal, hingga komunikasi klien tetap sinkron. Memastikan setiap proyek selesai terukur dan tepat sasaran.",
    skills: ["Strategi", "Manajemen Proyek", "Klien"],
  },
  {
    name: "Fatihah Rizky Ramadhani",
    role: "Content Creator & Creative Lead",
    image: "/team-fatihah-square.jpg",
    desc: "Memproduksi visual, riset tren, hingga copywriting. Fokus menciptakan konten yang menonjol dan relevan.",
    skills: ["Visual", "Copywriting", "Riset Tren"],
  },
  {
    name: "Muhammad Fathi A.A",
    role: "Web Developer & UI Designer",
    image: "/team-fathi-square.png",
    desc: "Membangun website dan landing page yang cepat serta memastikan pengalaman tampilan yang bersih dan modern.",
    skills: ["Web Dev", "UI/UX", "Performa"],
  },
];

export default function Team() {
  return (
    <section id="tim" className="border-t border-zinc-200/60 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Di Balik Layar"
          title="Tim kecil dengan fokus yang jelas"
          desc="Tiga orang dengan satu kepercayaan: usaha kuliner berhak mendapat pemasaran yang berkelas tanpa harga berlebihan."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((t) => (
            <div
              key={t.name}
              className="group rounded-3xl border border-zinc-200 bg-[#fbfaf7] p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-md ring-4 ring-white">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-zinc-900">
                {t.name}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-zinc-400">
                {t.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {t.desc}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                {t.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-zinc-600 ring-1 ring-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
