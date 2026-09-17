# PRD — Landing Page Byte & Bite

**Versi:** 1.0 (Final)  
**Brand:** Byte & Bite  
**Target:** Pemilik UMKM FnB (kafe, resto, brand lokal) yang baru mulai dan bingung cara promosi digital.  
**Style:** Minimalis Modern FnB (Clean, Airy, Warm Minimalist, Aksesibel).  
**Primary Goal:** Konversi langsung ke WhatsApp (+62 895-8015-03259).  

---

## 1. Brand & Design Tokens

- **Brand:** Byte & Bite
- **Tagline:** *Every Byte Serves a Bite* (Data-driven strategy meets appetite-inducing creative).
- **Style Direction:** Modern Minimalist F&B
  - Base: Warm whites / soft cream (`#faf9f6`, `#ffffff`), zinc text (`#18181b`, `#71717a`).
  - Brand Accents: Precision Blue (`#2563eb`), Appetite Red (`#dc2626`).
  - Typography: Plus Jakarta Sans / Inter style, clean font weights, high contrast, uncluttered whitespace.
  - Imagery: High-res food/drink aesthetics, clean border radiuses (`rounded-2xl`), subtle shadows.

---

## 2. Struktur Halaman (One-Page Flow)

### 2.1. Navbar (Sticky & Clean)
- **Kiri:** Logo Byte & Bite (Clean SVG/PNG mark + text).
- **Tengah:** Nav links smooth-scroll (`#layanan`, `#alur-kerja`, `#portofolio`, `#tim`).
- **Kanan:** CTA Button minimalist red: "Konsultasi Gratis" -> direct WhatsApp.
- **Mobile:** Minimalist hamburger menu.

### 2.2. Hero Section (Clean Impact)
- **Badge:** "Partner Pertumbuhan UMKM FnB"
- **Headline:** "Ubah Tempat Kuliner Sepi Jadi Antrean Ramai."
- **Subheadline:** "Kami bantu kafe, resto, dan brand makanan lokal merapikan konten, mengelola media sosial, dan membuat website siap order."
- **Primary CTA:** "Konsultasi Sekarang (Gratis)" -> WA link dengan pre-filled text.
- **Secondary CTA:** "Lihat Layanan & Paket" -> scroll ke `#layanan`.
- **Hero Visual:** Minimalist 3-frame food grid / high-impact food hero showcase tanpa elemen berantakan.

### 2.3. Pain Point & Solution (The "Why")
- Mengapa UMKM FnB sering mentok:
  1. Makanan enak tapi gak ada yang tau.
  2. Bikin konten sendiri habis waktu dan konsistensi buyar.
  3. Dm/chat lama dibalas, pelanggan keburu kabur.
- Solusi Byte & Bite: Satu tim yang mengurus visual, distribusi, dan digital presence.

### 2.4. Layanan (3 Core Services)
1. **Content Creation (Visual & Selera)**
   - Foto menu beresolusi tinggi & reels/TikTok bernarasi rasa.
   - Deliverables: Foto menu HD, short-form video (Reels/TikTok), copywriting caption & audio trending.
2. **Social Media Management (Konsistensi & Komunitas)**
   - Pengelolaan akun Instagram & TikTok end-to-end.
   - Deliverables: Kalender konten mingguan, interaksi & fast response DM/komen, laporan pertumbuhan bulanan.
3. **Website & Digital Menu (Katalog Siap Order)**
   - Landing page modern, buku menu digital responsif, direct-to-WhatsApp order button.
   - Deliverables: Menu digital interaktif, integrasi Maps & kontak, loading super cepat.

### 2.5. Alur Kerja (Simple 3-Step Process)
1. **Audit & Ngobrol Santai:** Bedah kondisi akun & bisnis kuliner kamu via WhatsApp.
2. **Eksekusi Konten & Sistem:** Shoot foto/video, siapkan materi, susun landing page.
3. **Rilis & Evaluasi:** Pantau peningkatan engagement dan arus pelanggan baru.

### 2.6. Hasil Kerja / Portofolio Preview
- 3 kartu showcase simulasi deliverable modern:
  - Feed Aesthetic Resto & Coffee Shop.
  - Video Reels viral engan engagement tinggi.
  - Website Menu Digital one-click checkout ke WhatsApp.

### 2.7. Tim (Tim Inti 3 Orang)
- **Muh. Kemal Pasha B** — Founder & Project Manager
- **Fatihah Rizky Ramadhani** — Content Creator & Creative Lead
- **Muhammad Fathi A.A** — Web Developer & UI Designer

### 2.8. Call to Action & Kontak Section
- Headline: "Siap Bikin Usaha Kulinermu Lebih Terlihat?"
- WhatsApp direct form: Pengunjung memasukkan Nama & Nama Usaha -> langsung redirect buka WhatsApp dengan pesan otomatis terformat.
- Quick info: WhatsApp (+62 895-8015-03259), Lokasi, Jam Fast-Response.

### 2.9. Footer
- Minimalist footer: Copyright, branding Byte & Bite, quick navigation links.

---

## 3. Spesifikasi Teknis & Delivery

- **Framework:** Next.js 16 (App Router), TypeScript, Tailwind CSS 4.
- **WhatsApp API:** `https://wa.me/62895801503259?text={encoded_message}`.
- **Responsif:** 100% responsif di Mobile (360px - 430px), Tablet (768px), Desktop (1024px+).
- **Performance:** Clean code, minim dependensi luar, zero lag scrolling.
