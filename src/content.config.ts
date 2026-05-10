import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const views = defineCollection({
  loader: file("./src/content/views/views.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string().optional(),
      date: z.coerce.date(),
      image: image(),
      alt: z.string(),
    }),
});

const projects = defineCollection({
  loader: file("./src/content/projects/projects.json", {
    parser: (text) =>
      JSON.parse(text).map((p: Record<string, unknown>, i: number) => ({
        ...p,
        id: String(i),
      })),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    link: z
      .object({
        name: z.string(),
        url: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  views,
  projects,
};
