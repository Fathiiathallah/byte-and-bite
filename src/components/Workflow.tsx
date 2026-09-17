import SectionHeading from "./SectionHeading";

const steps = [
  {
    step: "01",
    title: "Audit & Ngobrol Santai",
    desc: "Kita ngobrol lewat WhatsApp. Kami cek profil bisnismu, produk andalan, dan target pelanggan yang ingin dijangkau.",
  },
  {
    step: "02",
    title: "Eksekusi Konten & Sistem",
    desc: "Tim mulai produksi visual, menyusun jadwal tayang, merapikan profil sosmed, hingga membangun website siap order.",
  },
  {
    step: "03",
    title: "Rilis & Pantau Pertumbuhan",
    desc: "Materi dipublikasikan secara konsisten. Kami evaluasi apa yang paling diminati pembeli dan terus tingkatkan hasilnya.",
  },
];

export default function Workflow() {
  return (
    <section id="alur-kerja" className="border-t border-zinc-200/60 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Tiga langkah sederhana, tanpa ribet teknis"
          desc="Kamu fokus racik menu terenak dan layani pelanggan di outlet. Urusan marketing digital biar kami yang jalankan."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-3xl border border-zinc-200 bg-[#fbfaf7] p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white font-mono text-lg font-bold text-bite-red shadow-xs ring-1 ring-zinc-200">
                {s.step}
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-zinc-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
