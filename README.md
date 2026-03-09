
# Pratik Bugade — Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Features an animated neural network background, smooth motion animations, and sections showcasing my work as an AI & ML Engineering Student.

## Live Demo

[pratik-bugade.netlify.app](https://pratik-bugade.netlify.app/)

## Sections

- **Hero** — Introduction with animated name and role
- **About** — Background and personal summary
- **My Journey** — Timeline of education and milestones
- **Projects** — Highlighted personal and academic projects
- **Experience** — Work and internship experience
- **Tech Stack** — Technologies and tools I work with
- **Achievements** — Certifications, awards, and recognitions
- **Contact** — Get in touch form

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Bundler:** Vite
- **Animations:** Motion (Framer Motion)
- **UI Components:** Radix UI primitives + shadcn/ui
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/pratikbugade01/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output is placed in the `build/` directory.

### Preview Build Locally

```bash
npm run preview
```

## Deployment

### Netlify (Recommended)

This project is pre-configured for Netlify via `netlify.toml`.

1. Push your code to GitHub
2. Log in to [Netlify](https://app.netlify.com/)
3. Click **Add new site** → **Import an existing project**
4. Connect GitHub and select this repository
5. Netlify auto-detects the build settings — click **Deploy site**

### Manual Netlify Deploy

```bash
npm run build
```

Then drag and drop the `build/` folder onto Netlify's deploy page.

## Project Structure

```
Portfolio/
├── src/
│   ├── components/       # Page sections and UI components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── MyJourney.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── TechStack.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   ├── NeuralBackground.tsx
│   │   └── ui/           # Reusable shadcn/ui components
│   ├── assets/           # Images and static files
│   ├── styles/           # Global CSS
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── vite.config.ts
├── netlify.toml
└── package.json
```

## Contact

**Pratik Bugade**
- GitHub: [@pratikbugade01](https://github.com/pratikbugade01)
- LinkedIn: [linkedin.com/in/pratikbugade](https://linkedin.com/in/pratikbugade)

