"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";

const quickLinks = [
  { label: "WhatsApp", value: "+62 812-3456-7890", href: "https://wa.me/6281234567890" },
  { label: "Email", value: "halo@byteandbite.id", href: "mailto:halo@byteandbite.id" },
  { label: "Instagram", value: "@byteandbite.id", href: "https://instagram.com/byteandbite.id" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nama = String(fd.get("nama") ?? "").trim();
    const bisnis = String(fd.get("jenis") ?? "");
    const pesan = String(fd.get("pesan") ?? "").trim();
    const msg = `Halo Byte & Bite! Saya ${nama} (${bisnis}). ${pesan || "Mau konsultasi digital untuk UMKM kulinermu."}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }

  return (
    <section id="kontak" className="relative overflow-hidden bg-zinc-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-byte-blue/10 blur-2xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-bite-red/10 blur-2xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-zinc-400">
              Kontak
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ceritain usahamu — konsultasi pertama gratis.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Nggak ada paksaan. Yang kami janjiin cuma: analisis jujur + saran
              strategi yang cocok buat skala bisnis kamu.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_1.5fr]">
          {/* Left: info panel */}
          <div className="space-y-4">
            {quickLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
              >
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400">
                    {c.label}
                  </p>
                  <p className="mt-1 font-bold text-white">{c.value}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 transition-all group-hover:bg-bite-red group-hover:text-white">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </span>
              </a>
            ))}

            {/* Info pill */}
            <div className="rounded-2xl bg-byte-blue p-5 text-white shadow-lg shadow-byte-blue/20">
              <p className="text-sm font-bold">Butuh bantuan cepat?</p>
              <p className="mt-1 text-sm text-white/80">
                Chat WhatsApp dulu. Balas dalam jam kerja &lt; 15 menit.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-byte-blue shadow-sm transition-all hover:bg-white/90"
              >
                Buka WhatsApp
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                  <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="relative rounded-3xl bg-white p-7 shadow-2xl md:p-8"
          >
            <h3 className="text-xl font-extrabold tracking-tight text-zinc-900">
              Mulai konsultasi gratis
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Isi form singkat ini — kami buka WhatsApp kamu langsung.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-bold text-zinc-700">
                Nama kamu / bisnis
                <input
                  name="nama"
                  required
                  placeholder="Contoh: Riko / Kedai Kopi Rute"
                  className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-byte-blue focus:ring-2 focus:ring-byte-blue/20"
                />
              </label>

              <label className="block text-sm font-bold text-zinc-700">
                Jenis usaha
                <select
                  name="jenis"
                  defaultValue="Kafe"
                  className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-byte-blue focus:ring-2 focus:ring-byte-blue/20"
                >
                  <option>Kafe</option>
                  <option>Restoran</option>
                  <option>Brand makanan lokal</option>
                  <option>Lainnya</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block text-sm font-bold text-zinc-700">
              Apa yang kamu butuhin sekarang?
              <textarea
                name="pesan"
                rows={4}
                placeholder="Contoh: mau rutin posting IG tapi bingung mulai dari mana. Baru buka 3 bulan, pengen ada yang bantu konten & feednya..."
                className="mt-2 w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-byte-blue focus:ring-2 focus:ring-byte-blue/20"
              />
            </label>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-bite-red py-3.5 text-sm font-extrabold text-white shadow-lg shadow-bite-red/25 transition-all hover:-translate-y-0.5 hover:bg-bite-red-dark"
            >
              Kirim & Buka WhatsApp
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </button>

            {sent && (
              <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                Terbuka di tab baru — tinggal kirim pesannya ✅
              </p>
            )}

            <p className="mt-4 text-center text-[11px] font-medium text-zinc-400">
              Dengan mengirim, kamu setuju kami membalas via WhatsApp. Nggak ada
              spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}