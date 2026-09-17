import { WA_DISPLAY, waLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-lg font-extrabold tracking-tight">
              Byte<span className="text-byte-blue">&</span>Bite
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              Every Byte Serves a Bite. Agensi pemasaran digital khusus UMKM
              kuliner — kafe, restoran, dan brand makanan lokal.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Navigasi
            </p>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-zinc-400">
              {[
                ["#layanan", "Layanan"],
                ["#alur-kerja", "Alur Kerja"],
                ["#portofolio", "Hasil Kerja"],
                ["#tim", "Tim"],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Hubungi
            </p>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-zinc-400">
              <li>
                <a
                  href={waLink("Halo Byte & Bite! Saya mau konsultasi gratis untuk usaha kuliner saya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
                            <li>
                              <a
                                href="https://www.instagram.com/bytebitee_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-white"
                              >
                                @bytebitee_
                              </a>
                            </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-zinc-800/80 pt-6 text-xs font-medium text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Byte & Bite.</p>
          <p>Dibuat dengan ❤ untuk UMKM kuliner Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}