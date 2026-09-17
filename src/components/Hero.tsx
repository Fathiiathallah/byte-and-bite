import Image from "next/image";
import { waLink } from "@/lib/whatsapp";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1645696301019-35adcc18fc21?w=800&q=85",
    alt: "Sate Ayam dengan bumbu kacang",
    label: "Sate Ayam",
  },
  {
    src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=85",
    alt: "Nasi Goreng khas Indonesia",
    label: "Nasi Goreng",
  },
  {
    src: "https://images.unsplash.com/photo-1774758959178-094de5122e29?w=800&q=85",
    alt: "Suasana kedai kopi lokal",
    label: "Kedai Kopi Lokal",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] pb-20 pt-12 sm:pb-28 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-bite-red" />
            Partner Pertumbuhan UMKM FnB
          </span>
        </div>

        {/* Big clean headline */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl sm:leading-[1.15]">
            Ubah Tempat Kuliner Sepi Jadi{" "}
            <span className="text-bite-red">Antrean Ramai</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl">
            Bantu kafe, resto, dan brand makanan lokal merapikan konten, mengelola
            media sosial secara konsisten, dan memiliki website siap order.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink("Halo Byte & Bite! Saya mau konsultasi gratis untuk bisnis FnB saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-bite-red px-8 py-4 text-base font-bold text-white shadow-sm transition-all hover:bg-bite-red-dark sm:w-auto"
            >
              Konsultasi Sekarang (Gratis)
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </a>
            <a
              href="#layanan"
              className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white px-8 py-4 text-base font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 sm:w-auto"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* Minimalist 3-frame showcase grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {heroImages.map((img) => (
            <div
              key={img.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-100 shadow-sm ring-1 ring-zinc-200/70"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={img === heroImages[1]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur-xs">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}