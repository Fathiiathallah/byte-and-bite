import SectionHeading from "./SectionHeading";
import { waLink } from "@/lib/whatsapp";

const services = [
  {
    title: "Content Creation",
    subtitle: "Visual & Selera",
    badge: "Foto & Video HD",
    desc: "Produksi visual makanan dan minuman yang menggugah selera. Dari konsep, on-site shooting, sampai editing reels/TikTok siap posting.",
    deliverables: [
      "Foto menu beresolusi tinggi (katalog & promo)",
      "Short-form video Reels & TikTok dengan audio trending",
      "Copywriting caption berkarakter + riset hashtag lokal",
      "Template feed grafis promosi berkala",
    ],
    waMessage: "Halo Byte & Bite! Saya tertarik dengan layanan Content Creation.",
  },
  {
    title: "Social Media Management",
    subtitle: "Konsistensi & Komunitas",
    badge: "Instagram & TikTok",
    desc: "Menjaga akun sosial mediamu tetap aktif, interaktif, dan terlihat terpercaya setiap hari tanpa menyita waktu dapurmu.",
    deliverables: [
      "Kalender konten bulanan yang terencana rapi",
      "Fast response & interaksi calon pelanggan di DM & komen",
      "Optimasi bio, link katalog, dan Google Business Profile",
      "Laporan metrik performa bulanan dengan bahasa sederhana",
    ],
    waMessage: "Halo Byte & Bite! Saya tertarik dengan Social Media Management.",
  },
  {
    title: "Website & Digital Menu",
    subtitle: "Katalog Siap Order",
    badge: "Mobile-First",
    desc: "Landing page modern dan buku menu digital interaktif yang mengarahkan pembeli langsung ke WhatsApp tanpa perantara ribet.",
    deliverables: [
      "Landing page modern yang cepat dibuka di handphone",
      "Menu digital interaktif dengan tombol langsung pesan via WA",
      "Integrasi peta lokasi, jam buka, dan testimoni pelanggan",
      "SEO lokal agar tempatmu mudah dicari di internet",
    ],
    waMessage: "Halo Byte & Bite! Saya tertarik dengan Website & Digital Menu.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-[#fbfaf7] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Layanan Terpadu"
            title="Tiga pilar utama untuk mengangkat digital presence kulinermu"
            desc="Satu tim yang menangani visual, interaksi, dan website secara sinkron tanpa harus merekrut staf marketing sendiri."
          />
          <span className="hidden rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-600 md:inline-block">
            Semua paket disesuaikan kapasitas UMKM
          </span>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-black/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-700">
                    {s.badge}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400">
                    {s.subtitle}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {s.desc}
                </p>

                <div className="mt-8 border-t border-zinc-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Yang kamu peroleh:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-xs leading-normal text-zinc-700">
                        <svg
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="mt-0.5 h-4 w-4 shrink-0 text-bite-red"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={waLink(s.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 py-3 text-xs font-bold text-zinc-900 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
                >
                  Tanya Paket Ini
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
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
