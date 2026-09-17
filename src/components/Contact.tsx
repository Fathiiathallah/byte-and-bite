"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";
import { WA_DISPLAY, waLink } from "@/lib/whatsapp";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nama = String(fd.get("nama") ?? "").trim();
    const usaha = String(fd.get("usaha") ?? "").trim();
    const pesan = String(fd.get("pesan") ?? "").trim();
    const msg = `Halo Byte & Bite! Saya ${nama}${usaha ? ` dari ${usaha}` : ""}. ${pesan || "Mau konsultasi gratis untuk usaha kuliner saya."}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  }

  return (
    <section id="kontak" className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-bite-red/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-byte-blue/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Hubungi Kami"
          title="Siap bikin usaha kulinermu lebih terlihat?"
          desc="Ceritakan kondisi usaha dan tujuanmu. Analisis jujur tanpa paksaan, disesuaikan dengan skala UMKM."
        />
        {/* SectionHeading uses zinc-900/500 — need light variant wrapper */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: quick info */}
          <div className="space-y-4">
            <a
              href={waLink("Halo Byte & Bite! Saya mau konsultasi gratis untuk usaha kuliner saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                  WhatsApp
                </p>
                <p className="mt-1 text-lg font-bold">{WA_DISPLAY}</p>
                <p className="mt-1 text-sm text-white/60">
                  Fast response jam kerja
                </p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-900 transition-colors group-hover:bg-bite-red group-hover:text-white">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                  <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </span>
            </a>

            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                Butuh bantuan cepat?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Kirim langsung via WhatsApp dengan mengikuti petunjuk pada formulir di samping.
              </p>
              <a
                href={waLink("Halo Byte & Bite! Saya butuh bantuan cepat.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-zinc-900 transition-colors hover:bg-white/90"
              >
                Buka WhatsApp Sekarang
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                  <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: form — white card on dark bg */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-white p-7 text-zinc-900 shadow-2xl sm:p-8"
          >
            <h3 className="text-xl font-extrabold tracking-tight">
              Mulai konsultasi gratis
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Isi form singkat — kami buka WhatsApp langsung dengan pesan terformat.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-bold text-zinc-700">
                Nama kamu / bisnis
                <input
                  name="nama"
                  required
                  suppressHydrationWarning
                  placeholder="Contoh: Riko / Kedai Kopi Rute"
                  className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-byte-blue focus:ring-2 focus:ring-byte-blue/20"
                />
              </label>
              <label className="block text-sm font-bold text-zinc-700">
                Nama usaha (opsional)
                <input
                                  name="usaha"
                                  suppressHydrationWarning
                                  placeholder="Contoh: Kedai Kopi Rute"
                  className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-byte-blue focus:ring-2 focus:ring-byte-blue/20"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-bold text-zinc-700">
              Ceritakan kebutuhanmu
              <textarea
                name="pesan"
                rows={4}
                placeholder="Contoh: baru buka 3 bulan, belum sempat konsisten posting IG, ingin dibantu konten & jadwal posting..."
                className="mt-2 w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none placeholder:text-zinc-400 focus:border-byte-blue focus:ring-2 focus:ring-byte-blue/20"
              />
            </label>

            <button
                          type="submit"
                          suppressHydrationWarning
                          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-bite-red py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-bite-red-dark"
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
              Dengan mengirim, kamu setuju kami membalas via WhatsApp. Nggak ada spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}