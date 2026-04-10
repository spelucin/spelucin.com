# Alex Spelucin - Measurement Strategy

Professional landing page for **Alex Spelucin**, a Digital Analytics Consultant based in Lima, Perú, specializing in helping marketing agencies in Latin America recover certainty in their measurement through advanced technical infrastructure.

[![Deploy to GitHub Pages](https://github.com/spelucin/spelucin.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/spelucin/spelucin.com/actions/workflows/deploy.yml)

## 🚀 Overview

This website serves as the primary portal for Alex Spelucin's consultancy services. It highlights his approach to "Engineering Applied Measurement," focusing on solving the data gap caused by cookie restrictions and browser limitations.

### Key Value Propositions
- **Measurement Certainty**: Recover 45% to 100% of "lost" conversions.
- **Server-Side Evolution**: Implementation of GTM Server-Side and Meta CAPI.
- **Data Integrity**: Building robust infrastructures that protect client investments.

---

## 🛠️ Tech Stack

Built with a modern, high-performance stack optimized for SEO and speed:

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

---

## 📂 Project Structure

```text
src/
├── app/          # Next.js App Router (Pages, Layouts, API)
├── components/   # Reusable React components
├── hooks/        # Custom React hooks
├── lib/          # External library configurations
├── utils/        # Helper functions & utilities
└── index.css     # Global styles & Tailwind directives
```

---

## 💻 Local Development

Follow these steps to set up the project locally:

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- npm (comes with Node.js)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/spelucin/spelucin.com.git
cd spelucin.com
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build & Export
The project is configured for static export:
```bash
npm run build
```
This will generate an `out/` directory containing the static files.

---

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. 

- **Workflow**: `.github/workflows/deploy.yml`
- **Configuration**: `next.config.mjs` (output: 'export')
- **Live Site**: [spelucin.com](https://spelucin.com)

---

## ✉️ Contact

- **Website**: [spelucin.com](https://spelucin.com)
- **Email**: [hola@spelucin.com](mailto:hola@spelucin.com)
- **Location**: Lima, Perú

---

Hecho con ❤ en Lima, Perú.
Asegurando la integridad de los datos en tiempo real.
