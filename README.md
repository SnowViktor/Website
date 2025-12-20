# SnowViktor's Personal Website

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

This is the source code for my **Personal Knowledge Management (PKM)** system and digital garden, [snow-viktor.vercel.app](https://snow-viktor.vercel.app). Built with [Astro](https://astro.build), it is designed for readability, easy organization, and longevity.

## 🌿 Philosophy & Architecture

This project has evolved from a simple blog into a structured knowledge garden with the following core principles:

-   **Folders as Categories**: The file system source of truth. Moving a file into a folder automatically categorizes it.
-   **Flat URLs**: Regardless of nesting depth, all notes are served at `/articles/[slug]` to allow flexible reorganization without breaking links.
-   **Tags as Metadata**: Frontmatter tags provide a secondary, cross-cutting taxonomy.
-   **Mobile-First Reading**: Strict constraints ensure metadata and navigation are optimized for small screens (- no wrapping, stacked navigation).

## 🚀 Features

-   **Library Sidebar**: A responsive sidebar listing all **Categories** (Folders) and **Tags** for easy exploration.
-   **Contextual Navigation**:
    -   **Breadcrumbs**: Every note displays its folder path (e.g., `Home / Reading Reflection / Book`).
    -   **Article Nav**: Responsive "Previous/Next" links that prioritize touch targets on mobile.
-   **Tech Specs**:
    -   **Astro**: Content-driven framework.
    -   **Markdown/MDX**: Content authoring.
    -   **Katex**: Math rendering.
    -   **Responsive Design**: Custom CSS variables and strictly enforcing mobile constraints.

## 🛠️ Commands

| Command | Description |
| :--- | :--- |
| `pnpm install` | Install dependencies. |
| `pnpm dev` | Starts the local development server at `localhost:4321`. |
| `pnpm build` | Build the site for production. |
| `pnpm run new` | **Create a new note interactively.** Generates frontmatter automatically. |
| `pnpm check` | Run type checking across the project. |

## 📁 Project Structure

```text
.
├── src/
│   ├── components/      # UI Components (LibrarySidebar, Breadcrumbs, etc.)
│   ├── content/
│   │   └── articles/    # THE GARDEN. Folders = Categories.
│   │       ├── reading-reflection/
│   │       ├── contact-journal/
│   │       └── ...
│   ├── layouts/         # Base & Collection Layouts
│   ├── pages/
│   │   ├── articles/    # Flat URL router ([...slug].astro)
│   │   ├── folders/     # Folder taxonomy router ([...path].astro)
│   │   └── tags/        # Tag taxonomy router
│   └── styles/          # Global CSS & Design Tokens
└── package.json
```

## License

[Website](https://snow-viktor.vercel.app) by SnowViktor is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
