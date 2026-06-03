# Home Services — Landing Page

A modern, fully responsive landing page for a home services platform, built with React 19, Vite, and Tailwind CSS v4.

## Design

Figma design file: [Home Services UI Kit](https://www.figma.com/community/file/1257965372422620398)

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 4 |
| ESLint | 10 |

## Project Structure

```
src/
├── assets/          # Images and icons
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Page sections (Hero, Services, Blog, FAQ, ...)
│   └── ui/          # Reusable UI primitives
├── constants/       # Theme tokens
└── data/            # Static data (services, testimonials, blog posts, ...)
```

## Sections

- **Hero** — Main banner with CTA
- **Services Grid** — Browsable service categories
- **Benefits** — Why choose us highlights
- **How It Works** — Step-by-step process
- **Professional Services** — Featured professionals
- **Testimonials** — Customer reviews
- **Blog** — Latest articles
- **FAQ** — Frequently asked questions
- **CTA Banner** — Call-to-action strip
- **Footer** — Links, social media, contact info

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd home-services

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## License

This project is for educational and portfolio purposes.
