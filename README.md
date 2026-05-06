# Student Bites — Best Student Food Near LPU 🍛

**Live site:** [studentbites.in](https://studentbites.in) · [student-bites-lpu.lovable.app](https://student-bites-lpu.lovable.app)

Student Bites is a hyper-local food discovery website for students of **Lovely Professional University (LPU), Phagwara, Punjab**. It helps students find the **best, cheapest and most affordable food spots near LPU** — from ₹99 thalis and ₹20 chai to late-night snacks open till 1 AM.

The site is built as an SEO-first React application targeting local search queries like *"cheap food near LPU"*, *"best restaurants near LPU"*, *"food near LPU gate 2"*, and *"student bites Phagwara"*.

---

## ✨ Features

- 🍽️ **Curated menu** of student-friendly dishes with prices, descriptions and images
- 📍 **Local SEO landing pages** for every major keyword cluster:
  - `/cheap-food-near-lpu`
  - `/best-food-near-lpu`
  - `/cheap-eats-lpu`
  - `/top-restaurants-lpu`
- 📝 **Blog** with student food guides
- ⭐ **Student reviews** section
- 🔎 **Full SEO stack**: Helmet meta tags, Open Graph, Twitter cards, JSON-LD `Restaurant` + `LocalBusiness` schema, sitemap.xml, robots.txt, geo meta, canonical URLs
- 📊 **Google Tag Manager + Google Analytics (GA4)** pre-wired
- 📱 Fully **responsive** mobile-first UI
- 🎨 Themed with a **semantic Tailwind design system** (HSL tokens in `index.css`)

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** with shadcn/ui components
- **React Router** for routing
- **react-helmet-async** for per-page SEO
- **TanStack Query** for data
- **Lucide Icons**

---

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

The dev server runs at `http://localhost:8080` by default.

---

## 📁 Project Structure

```
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/             # images (hero, dishes, etc.)
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, Layout
│   │   ├── seo/            # SEO helmet wrapper
│   │   └── ui/             # shadcn/ui primitives
│   ├── data/               # menu, reviews, blog posts
│   ├── pages/              # Home, Menu, About, Contact, Blog, SEO landing pages
│   ├── index.css           # design tokens (HSL)
│   └── App.tsx             # routes
├── index.html              # global meta, GTM, JSON-LD schema
└── tailwind.config.ts
```

---

## 🔍 SEO Notes

Targeted keywords include: *student food near LPU, cheap food near LPU, best restaurants near LPU, ₹99 thali near LPU, snacks under 100 near LPU, late night food near LPU, food near LPU Law Gate, food near LPU gate 2, dhaba near LPU, cafe near LPU, student bites Phagwara*.

- Canonical: `https://studentbites.in/`
- Sitemap: `https://studentbites.in/sitemap.xml`
- Schema: `Restaurant` (homepage) + `LocalBusiness` (global)
- Geo: Phagwara, Punjab (IN-PB) — `31.2560, 75.7050`

---

## 📦 Deployment

The site is deployed via **Lovable**. Any push or edit through Lovable auto-deploys to:

- Preview: `id-preview--*.lovable.app`
- Production: `student-bites-lpu.lovable.app`
- Custom domain: `studentbites.in`

---

## 📜 License

© Student Bites. All rights reserved.
