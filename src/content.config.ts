import { type SchemaContext, defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE_AUTHOR, CATEGORIES_LIST } from "src/consts";

const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    image: image(),
    alt: z.string(),
  });

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      categories: z.array(
        z.enum(CATEGORIES_LIST.map((category) => category.name) as [string])
      ),
      author: z.string().optional().default(SITE_AUTHOR),
      originalAuthor: z.string().optional(),
      heroImage: imageSchema({ image }).optional(),
    }),
});

export const collections = { articles };
