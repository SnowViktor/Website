import { type SchemaContext, defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE_AUTHOR } from "src/consts";

const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pub_date: z.coerce.date(),
      updated_date: z.coerce.date().optional(),
      tags: z.array(z.string()),
      author: z.string().optional().default(SITE_AUTHOR),
      book_author: z.string().optional(),
      cover_image: imageSchema({ image }).optional(),
    }),
});

export const collections = { articles };
