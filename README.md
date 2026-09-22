<div align="center">
  <img src="./src/assets/logo-angkatan.png" alt="Eternity Generation Logo" width="150" />
  <h1>Eternity Space</h1>
  <p><em>Together, Forever, Wherever</em></p>

  <p>
    <a href="https://eternityspace.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/Live%20Demo-eternityspace.vercel.app-black?style=for-the-badge&logo=vercel" alt="Live Demo" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/Bun-1.x-F472B6?style=flat-square&logo=bun&logoColor=white" alt="Bun" />
  </p>
</div>

---

## 🌟 About the Project

**Eternity Space** is a commemorative landing page built for **Eternity Generation** — a student cohort of the Class of 2025. The site is designed to celebrate and preserve the memories, identity, and spirit of the generation under the motto *"Enhancing National Integrity, Radiating Youthfulity"*.

The page features a dynamic hero section, an interactive photo gallery, and social media links — all wrapped in a sleek gold-and-gray aesthetic.

---

## ✨ Features

- 🎨 **Hero Section** — Randomly shuffled image mosaic background with a frosted-glass text overlay
- 📸 **Photo Gallery** — 12 interactive photo cards with smooth hover effects and scroll-reveal animations
- 📱 **Fully Responsive** — Mobile-first design with a collapsible hamburger navbar
- 🌀 **Scroll Reveal Animations** — Powered by the `IntersectionObserver` API (no external animation library)
- 🔗 **Social Media Footer** — Links to Instagram and YouTube channels

---

## 🖥️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI framework |
| [Vite](https://vite.dev/) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [Bun](https://bun.sh/) | 1.x | Package manager & runtime |
| [Google Fonts](https://fonts.google.com/) | — | Cinzel, Lora, Poppins |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have one of the following installed:

- **[Bun](https://bun.sh/)** `>= 1.x` *(recommended)*
- **[Node.js](https://nodejs.org/)** `>= 18` with npm or yarn

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/gazza-bot/Projek-Porto.git
cd Projek-Porto/eternity-space
```

**2. Install dependencies**

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

**3. Start the development server**

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev
```

**4. Open your browser**

Navigate to `http://localhost:5173` to see the app running locally.

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start the local development server with HMR |
| `bun run build` | Build the project for production to the `dist/` folder |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint to check for code issues |

---

## 📁 Project Structure

```
eternity-space/
│
├── public/                     # Static public assets
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/                 # Images and media
│   │   ├── gallery-assets/     # Gallery photo collection (12 images)
│   │   ├── bg-1.jpg → bg-8.jpg # Hero background images
│   │   └── logo-angkatan.png   # Eternity Generation logo
│   │
│   ├── components/             # React components
│   │   ├── App.jsx             # Root component — composes all sections
│   │   ├── Navbar.jsx          # Fixed top navbar with mobile hamburger menu
│   │   ├── Hero.jsx            # Hero section with mosaic background
│   │   ├── Gallery.jsx         # Photo gallery grid with cards
│   │   ├── Footer.jsx          # Social media links footer
│   │   ├── Reveal.jsx          # Reusable scroll-reveal animation wrapper
│   │   └── Logo.jsx            # Eternity Generation logo component
│   │
│   ├── index.css               # Global styles, Tailwind theme & custom classes
│   └── main.jsx                # React entry point
│
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── package.json
└── bun.lock
```

---

## 🤝 Contributing

Contributions are welcome! Whether it's fixing a bug, improving styles, or suggesting new features, here's how to get started:

**1. Fork the repository**

Click the **Fork** button at the top right of this page.

**2. Clone your fork**

```bash
git clone https://github.com/YOUR_USERNAME/Projek-Porto.git
cd Projek-Porto/eternity-space
```

**3. Create a new branch**

```bash
git checkout -b feat/your-feature-name
```

**4. Make your changes**

Follow the existing code style. Run lint before committing:

```bash
bun run lint
```

**5. Commit your changes**

```bash
git add .
git commit -m "feat: add your feature description"
```

> Use [Conventional Commits](https://www.conventionalcommits.org/) format — e.g. `feat:`, `fix:`, `style:`, `refactor:`

**6. Push and open a Pull Request**

```bash
git push origin feat/your-feature-name
```

Then open a Pull Request on GitHub and describe your changes clearly.

---

## 📬 Contact

Have questions or want to reach the team?

- **Instagram:** [@eternitygeneration_](https://www.instagram.com/eternitygeneration_)
- **YouTube:** [@mediasepuluh](https://youtube.com/@mediasepuluh)

---

<div align="center">
  <p>Made with ❤️ by Eternity Generation — Class of 2025</p>
  <p><em>Est. MMXXV</em></p>
</div>
