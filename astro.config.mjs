// @ts-nocheck
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import expressiveCode from 'astro-expressive-code';
import { pluginColorChips } from 'expressive-code-color-chips';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://snow-viktor.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap(), expressiveCode({
    defaultProps: {
      overridesByLang: {
        'text': {
          showLineNumbers: false
        }
      },
      showLineNumbers: true,
      wrap: true
    },
    plugins: [pluginColorChips(), pluginLineNumbers()],
    shiki: {
      bundledLangs: []
    },
    styleOverrides: {
      borderColor: 'none',
      borderRadius: '0.5rem',
      borderWidth: '1px',
      codeFontSize: '16px',
      colorChips: {
        borderRadius: '10%',
        size: '0.7em'
      },
      frames: {
        frameBoxShadowCssValue: 'none',
        shadowColor: 'none',
      },
      uiFontFamily: 'var(--font-sans)',
      uiPaddingBlock: '0.15rem',
      uiPaddingInline: '0.75rem'
    },
    themes: ['github-dark-default']
  }), compress()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { output: 'mathml' }]]
  }
});
