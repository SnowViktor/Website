// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import devtoolsJson from "vite-plugin-devtools-json";

// https://astro.build/config
export default defineConfig({
  site: "https://snow-viktor.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { output: "mathml" }]],
  },
  vite: {
    plugins: [devtoolsJson()],
  },
});
