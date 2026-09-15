"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#tim", label: "Tim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-[90px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-zinc-600 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontak"
              className="rounded-lg bg-bite-red px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-bite-red/30 transition-all hover:-translate-y-0.5 hover:bg-bite-red-dark"
            >
              Kontak
            </a>
          </li>
        </ul>
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-zinc-100 bg-white md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold text-zinc-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontak"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-bite-red px-5 py-2.5 text-center text-sm font-bold text-white"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}