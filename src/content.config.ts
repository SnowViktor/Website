import { defineCollection, z, type CollectionKey } from "astro:content";
import { glob } from "astro/loaders";

const ContactAndCommunicationBookDiaries = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/contact-and-communication-book-diaries" }),
    schema: z.object({
        title: z.string().nullable(),
        description: z.string(),
        pubDate: z.date()
    })
});
const Prose = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/prose" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date()
    })
});
const ReadingReflection = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/reading-reflection" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string()
    })
});

export const collections = { ContactAndCommunicationBookDiaries, Prose, ReadingReflection };
export const collectionKey = Object.keys(collections) as CollectionKey[];
export const collectionDisplayName = ["聯絡簿日記", "散文", "閱讀心得"];
