import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const views = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/views" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string().optional(),
      date: z.coerce.date(),
      image: image(),
      alt: z.string(),
    }),
});

export const collections = {
  views,
};
