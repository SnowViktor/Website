import { defineCollection, z, type CollectionKey } from "astro:content";
import { glob } from "astro/loaders";

const Articles = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = { Articles };
export const collectionKey = Object.keys(collections) as CollectionKey[];
export const collectionDisplayName = ["文章"];
