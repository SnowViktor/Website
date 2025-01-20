import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
    loader: glob({ pattern: "**\/[^_]*.md", base: "./src/data/articles" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.union([
            z.date(),
            z.number(),
            z.string().optional().nullable()
        ])
    })
});

export const collections = { articles };
