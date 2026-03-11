# Theracalm — Mental Wellness Therapy Platform

A modern, fully responsive mental wellness therapy website built as a personal frontend project. Designed with a calm, professional aesthetic to showcase UI/UX skills using Next.js 14, TypeScript, and Tailwind CSS.

🔗 **Live Site:** [theracalm.vercel.app](https://theracalm.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)

## Features

- **Fully Responsive** — Optimized layout for mobile, tablet, and desktop
- **Scroll Reveal Animations** — Smooth entrance animations using GSAP ScrollTrigger
- **Animated Navigation** — Custom pill-style nav with GSAP hover transitions
- **Accessible UI** — Semantic HTML, proper alt text, keyboard-navigable FAQ accordions
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards via Next.js Metadata API
- **Performance First** — Next.js App Router, image optimization with `next/image`
- **Google Maps Embed** — Interactive office location on the contact page

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero, about preview, specialties, support section, FAQ, office gallery, CTA |
| **About** | Full bio, therapeutic approach cards, philosophy, credentials, who I work with |
| **Contact** | Office address, telehealth info, booking CTA, Google Maps embed |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | GSAP + ScrollTrigger |
| Font | Plus Jakarta Sans |
| Deployment | Vercel |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/nithin-2707/Frontend-Project-TheraCalm.git

# Navigate to project directory
cd Frontend-Project-TheraCalm

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── public/
│   ├── fonts/          # Plus Jakarta Sans font files
│   └── images/         # Website images
├── src/
│   ├── app/
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout with metadata
│   │   └── page.tsx    # Home page
│   └── components/     # Reusable UI components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── AboutPreview.tsx
│       ├── AboutSection.tsx
│       ├── Specialties.tsx
│       ├── SupportSection.tsx
│       ├── FAQSection.tsx
│       ├── BackgroundSection.tsx
│       ├── OurOffice.tsx
│       ├── CTASection.tsx
│       ├── Footer.tsx
│       ├── PillNav.tsx
│       ├── AnimatedButton.tsx
│       └── ScrollReveal.tsx
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Teal Dark | `#306e78` | Primary, headings, buttons |
| Teal Light | `#49838d` | Gradients, accents |
| Cream | `#eef6f9` | Light backgrounds |
| Sage | `#deeeec` | Section backgrounds |
| White | `#FFFFFF` | Cards, content areas |

## Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px – 1024px
- **Desktop:** > 1024px

## Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nithin-2707/Frontend-Project-TheraCalm)

## Author

**Gandrathi Nithin**

- GitHub: [@nithin-2707](https://github.com/nithin-2707)
- Live Project: [theracalm.vercel.app](https://theracalm.vercel.app)

## License

This project is open source and available under the [MIT License](LICENSE).


## 🌟 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll reveal effects powered by GSAP
- **SEO Optimized** - Meta tags, semantic HTML, and keyword-rich content
- **Modern UI** - Clean teal color palette with professional aesthetics
- **Fast Performance** - Built with Next.js App Router for optimal loading

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, specialties, about preview, FAQ, CTA |
| **About** | Full bio, therapeutic approach, credentials, philosophy |
| **Contact** | Contact form, office location, hours, Google Maps |

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP with ScrollTrigger
- **Font:** Plus Jakarta Sans

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nithin-2707/Grow.git

# Navigate to project directory
cd Grow

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── public/
│   ├── fonts/          # Plus Jakarta Sans font files
│   └── images/         # Website images
├── src/
│   ├── app/
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/     # Reusable components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Specialties.tsx
│       ├── FAQSection.tsx
│       ├── Footer.tsx
│       └── ...
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Teal Dark | `#306e78` | Primary, headings, buttons |
| Teal Light | `#49838d` | Gradients, accents |
| Cream | `#eef6f9` | Light backgrounds |
| Sage | `#deeeec` | Section backgrounds |
| White | `#FFFFFF` | Cards, content areas |

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🌐 Deployment

This project is optimized for deployment on **Vercel**:

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nithin-2707/Grow)

## 👨‍💻 Author

**Gandrathi Nithin**

- GitHub: [@nithin-2707](https://github.com/nithin-2707)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful, please give it a star!
