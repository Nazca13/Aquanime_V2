# Panduan Handoff Developer Backend

Dokumen ini ditujukan bagi Developer Backend yang akan menghubungkan portal frontend **AquaNime** dengan server backend, database, dan sistem otentikasi.

---

## 🚀 Pilihan Teknologi Backend Rekomendasi
Untuk meminimalisir waktu pengerjaan dan memaksimalkan stabilitas, Anda direkomendasikan menggunakan salah satu dari opsi berikut:
1. **Supabase (Sangat Direkomendasikan)**: Menyediakan PostgreSQL database, autentikasi instan (email/password & social login), dan penyimpanan media instan.
2. **Next.js Route Handlers + Prisma/Mongoose**: Jika ingin menggunakan arsitektur fullstack terpadu langsung di dalam folder `src/app/api/`.
3. **Node.js Express + MongoDB/PostgreSQL**: Jika ingin memisahkan repository backend secara total (Microservices).

---

## 🔑 Fitur Utama yang Membutuhkan Integrasi Backend

### 1. Sistem Autentikasi (`/signin` & `/signup`)
* **Status Saat Ini**: Frontend memiliki form validasi real-time (validasi minimal karakter password, password mismatch, toggle password visibility). Pengiriman form memicu `alert("Fitur sedang dalam pengembangan")`.
* **Lokasi File**: 
  - `src/app/signin/page.tsx`
  - `src/app/signup/page.tsx`
* **Kebutuhan**:
  - Ganti handler `handleSubmit` untuk mengirim request POST ke `/api/auth/signin` atau `/api/auth/signup` menggunakan client library (misal Supabase Client, Firebase, atau Axios).
  - Simpan session token (JWT / Session Cookie).

### 2. Formulir Kontak (`/kontak`)
* **Status Saat Ini**: State `sent` dikendalikan secara lokal di client side untuk memunculkan modal sukses setelah form diisi.
* **Lokasi File**: `src/app/kontak/page.tsx`
* **Kebutuhan**:
  - Hubungkan fungsi `handleSubmit` ke API endpoint POST `/api/contact` atau layanan SaaS email seperti Formspree/EmailJS.
  - Skema data form yang dikirim: `name`, `email`, `subject`, `message`.

### 3. Kalender Event Dinamis (`src/components/sections/EventsSection.tsx`)
* **Status Saat Ini**: Menggunakan static data array `EVENTS` pada client side.
* **Kebutuhan**:
  - Tambahkan fetch hook (`useEffect` atau server fetch) untuk memuat daftar event dari API backend (`GET /api/events`).
  - **Skema Model Database Event**:
    ```sql
    CREATE TABLE events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      location VARCHAR(255) NOT NULL,
      category VARCHAR(50) NOT NULL, -- Gathering, Kompetisi, Live, Workshop
      color VARCHAR(7) NOT NULL       -- Kode Hexadecimal (contoh: #00a8e8)
    );
    ```

### 4. Grid Berita Utama (`src/components/sections/ArticlesSection.tsx`)
* **Status Saat Ini**: Mengambil data berita dari local mock data apabila konstanta `NEWS_API_URL` kosong (`""`).
* **Kebutuhan**:
  - Hubungkan `NEWS_API_URL` ke URL API web berita utama (Next.js/Headless CMS).
  - Pastikan Server berita tersebut mengembalikan CORS Header dan CSP Header yang tepat agar berita dapat dimuat ke dalam modal iframe portal. (Lihat `docs/iframe-integration.md`).

---

## ⚙️ Environment Variables (`.env.local`)
Buat file `.env.local` di root direktori jika Anda membutuhkan integrasi API Key eksternal atau database URL:

```env
# Contoh Konfigurasi API
NEXT_PUBLIC_API_URL=https://api.aquanime.org/v1

# Contoh jika menggunakan Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
```
