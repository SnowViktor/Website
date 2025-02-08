import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ContactAndCommunicationBookDiaries = defineCollection({
    loader: glob({ pattern: "**\/[^_]*.md", base: "./src/data/contact-and-communication-book-diaries" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string().date()
    })
});

export const collections = { ContactAndCommunicationBookDiaries };
