import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import devtoolsJson from "vite-plugin-devtools-json";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://snow-viktor.vercel.app",
  trailingSlash: "never",
  adapter: vercel(),
  integrations: [mdx(), sitemap(), icon({ iconDir: "src/assets/icons" })],
  vite: {
    build: {
      rollupOptions: {
        external: "/pagefind/pagefind.js",
      },
    },
    plugins: [devtoolsJson()],
  },
  build: {
    format: "file",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { output: "mathml" }]],
  },
  experimental: {
    clientPrerender: true,
    contentIntellisense: true,
  },
});
