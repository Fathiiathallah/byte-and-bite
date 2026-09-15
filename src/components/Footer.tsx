import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo className="h-[80px] text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
            Every Byte Serves a Bite. Agensi pemasaran digital khusus UMKM
            kuliner — kafe, restoran, dan brand makanan lokal.
          </p>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-500">
            Navigasi
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-semibold text-zinc-400">
            {[
              ["#layanan", "Layanan"],
              ["#keunggulan", "Keunggulan"],
              ["#portofolio", "Hasil Kerja"],
              ["#tim", "Tim"],
              ["#kontak", "Kontak"],
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
          <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-500">
            Hubungi
          </p>
          <ul className="mt-4 space-y-2.5 text-sm font-semibold text-zinc-400">
            <li><a href="https://wa.me/6281234567890" className="transition-colors hover:text-white">WhatsApp</a></li>
            <li><a href="mailto:halo@byteandbite.id" className="transition-colors hover:text-white">halo@byteandbite.id</a></li>
            <li><a href="https://instagram.com/byteandbite.id" className="transition-colors hover:text-white">@byteandbite.id</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs font-medium text-zinc-600 sm:px-6 md:flex-row">
          <p>© {new Date().getFullYear()} Byte & Bite.</p>
          <p>Dibuat dengan ❤ untuk UMKM kuliner Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}