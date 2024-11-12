import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        author: z.string()
    })
});

export const collections = {
    articles: articlesCollection,
};