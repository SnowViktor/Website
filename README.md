# 🌐 Personal Website (Astro v5)

[![Astro](https://img.shields.io/badge/Astro-v5.x-BC52EE?style=for-the-badge&logo=astro)](https://astro.build)
[![pnpm](https://img.shields.io/badge/pnpm-v10.x-F69220?style=for-the-badge&logo=pnpm)](https://pnpm.io)
[![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey?style=for-the-badge)](./LICENSE)

My personal digital garden and professional portfolio, built with **Astro 5**, powered by **MDX**, and featuring mathematical typesetting for technical articles.

---

## ✨ Key Features

- **🛡️ Astro v5 Core**: Leveraging the latest features of Astro for ultra-fast, content-driven websites.
- **🧮 Mathematical Rendering**: Native support for TeX/LaTeX formulas using `remark-math` and `rehype-katex` (MathML output).
- **📝 Dynamic Content**: Fully integrated MDX support for mixing interactive components within Markdown.
- **📈 SEO & Discoverability**: Automated sitemap generation via `@astrojs/sitemap` and RSS feeds via `@astrojs/rss`.
- **⚡ Performance First**: 
  - Viewport-based prefetching for instant transitions.
  - Optimized asset handling with `astro-icon`.
  - Vercel Analytics integration for real-time performance monitoring.
- **🏗️ Content Automation**: Custom-built CLI workflow for standardized article generation.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Astro 5](https://astro.build/) |
| **Styling** | Vanilla CSS / Global Design Tokens |
| **Content** | [MDX](https://mdxjs.com/) |
| **Math** | [KaTeX](https://katex.org/) via `remark`/`rehype` |
| **Icons** | [Astro Icon](https://github.com/natemoo-re/astro-icon) (Lucide) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v24.x` or higher
- **pnpm**: `v10.x` (Recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SnowViktor/Website.git
   cd Website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

---

## 📖 Command Encyclopedia

| Command | Description |
| :--- | :--- |
| `pnpm run dev` | Starts a local development server at `localhost:4321`. |
| `pnpm run build` | Performs a full type-check (`astro check`) and generates a production build. |
| `pnpm run build:fast` | Generates a production build without the pre-flight check. |
| `pnpm run preview` | Previews the production build locally. |
| `pnpm run project:new` | **Interactive CLI**: Generates a new article scaffold in `src/content/articles/`. |
| `pnpm run project:clean` | Deletes build artifacts and cache (`.astro`, `dist`). |
| `pnpm run deps:upgrade` | Interactively upgrade Astro and its official integrations. |

---

## 📝 Content Creation Workflow

The project includes a custom script to ensure consistent frontmatter and directory structure for new articles.

### Creating a New Article

Run the following command:
```bash
pnpm run project:new
```

**Workflow Steps:**
1. **Title**: Enter the title of your article.
2. **Slug**: (Optional) Enter a custom URL slug or press Enter to auto-generate one from the title.
3. **Result**: The script automatically creates a new file at `src/content/articles/{YEAR}/{slug}.md` with the required metadata fields (date, tags, cover image placeholders).

---

## 🎨 Design System

This project focuses on a premium aesthetic with:
- **Responsive Layouts**: Mobile-first design.
- **Typography**: Optimized for readability with specialized mathematical font handling.
- **Micro-interactions**: Subtle hover states and smooth transitions.

---

## 📄 License

Distributed under the Creative Commons Attribution-NonCommercial 4.0 International License. See `LICENSE` for more information.

---

Built with ❤️ by [SnowViktor](https://snow-viktor.vercel.app)
