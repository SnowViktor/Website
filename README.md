# SnowViktor's Personal Website

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

This is the source code for my personal website, [snow-viktor.vercel.app](https://snow-viktor.vercel.app). Built with [Astro](https://astro.build), it serves as a personal blog and portfolio.

## 🚀 Tech Stack

- [Astro](https://astro.build/) - The web framework for building content-driven websites.
- [TypeScript](https://www.typescriptlang.org/) - For type safety.
- [MDX](https://mdxjs.com/) - To allow components in Markdown.
- [Vercel](https://vercel.com/) - For hosting and deployment.
- [PNPM](https://pnpm.io/) - As the package manager.
- [Katex](https://katex.org/) - For rendering mathematical formulas.

## 🏁 Getting Started

1.  **Install dependencies:**

    ```bash
    pnpm install
    ```

2.  **Start the development server:**
    ```bash
    pnpm dev
    ```
    This will start a local development server at `http://localhost:4321`.

## Commands

| Command             | Description                                               |
| :------------------ | :-------------------------------------------------------- |
| `pnpm install`      | Install dependencies.                                     |
| `pnpm dev`          | Starts the local development server.                      |
| `pnpm build`        | Build the site for production.                            |
| `pnpm preview`      | Preview your production build locally.                    |
| `pnpm check`        | Run type checking across the project.                     |
| `pnpm deps:upgrade` | Upgrade Astro and official integrations.                  |
| `pnpm deps:update`  | Update all package dependencies to their latest versions. |

## 📁 Project Structure

The project is structured as a standard Astro project:

```
.
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets like icons and images
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections (articles)
│   ├── layouts/         # Base layouts for pages
│   ├── pages/           # Astro pages and API routes
│   └── styles/          # Global and reset styles
└── package.json
```

## Deployment

The website is automatically deployed to [Vercel](https://vercel.com/) on every push to the `main` branch.

## License

[Website](https://snow-viktor.vercel.app) by SnowViktor is licensed under [Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/). See the `LICENSE` file for more details.
