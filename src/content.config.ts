import { glob } from "astro/loaders";
import {
  defineCollection,
  z,
  type CollectionKey,
  type SchemaContext,
} from "astro:content";
import { SITE_AUTHOR, CATEGORIES } from "./consts.ts";

const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    image: image(),
    alt: z.string(),
  });

const articles = defineCollection({
  loader: glob({ base: "./src/data/articles", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().optional().default(SITE_AUTHOR),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.array(
        z.enum(
          CATEGORIES.map((category) => category.name) as [string, ...string[]]
        )
      ),
      heroImage: imageSchema({ image }).optional(),
    }),
});

export const collections = { articles };
export const collectionKey = Object.keys(collections) as CollectionKey[];
export const collectionDisplayName = ["文章"];
