// @ts-nocheck
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://snow-viktor.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [
    sitemap(),
    expressiveCode({
      defaultProps: {
        overridesByLang: {
          text: { showLineNumbers: false },
        },
        showLineNumbers: true,
        wrap: true,
      },
      plugins: [pluginLineNumbers()],
      shiki: { bundledLangs: [] },
      styleOverrides: {
        borderColor: "none",
        borderRadius: "0.5rem",
        borderWidth: "1px",
        codeFontSize: "1rem",
        codePaddingBlock: "0.75rem",
        colorChips: {
          borderRadius: "10%",
          size: "0.7em",
        },
        frames: {
          frameBoxShadowCssValue: "none",
          shadowColor: "none",
        },
        uiFontFamily: "var(--font-sans)",
        uiPaddingBlock: "0.15rem",
        uiPaddingInline: "0.75rem",
      },
      themes: ["one-dark-pro"],
    }),
    compress({
      CSS: {
        csso: false,
        lightningcss: { drafts: { customMedia: true } },
      },
      Image: false,
      JavaScript: { terser: { ecma: 2024 } },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { output: "mathml" }]],
  },
});
