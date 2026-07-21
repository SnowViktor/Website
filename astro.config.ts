import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://snow-viktor.github.io",
  base: "/legacy-website",
  trailingSlash: "never",
  integrations: [mdx(), sitemap(), icon({ iconDir: "src/assets/icons" })],
  build: {
    format: "file",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { output: "mathml" }]],
    }),
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  experimental: {
    clientPrerender: true,
  },
});
