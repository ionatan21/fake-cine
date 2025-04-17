import { defineCollection, z } from "astro:content";

const movies = defineCollection({
  schema: z.object({
    title: z.string(),
    movieslug: z.string(),
    premiere_date: z.string(),
    released: z.boolean(),
    format: z.string(),
    genre: z.string(),
    agelimit: z.string(),
    id: z.string(),
    language: z.string(),
    duration: z.string(),
    posterURL: z.string().url(),
    trailerURL: z.string().url(),
    schedule: z.object({
      lunes: z
        .array(
          z.object({
            time: z.string(),
            format: z.string(),
          })
        )
        .optional(),
      martes: z
        .array(
          z.object({
            time: z.string(),
            format: z.string(),
          })
        )
        .optional(),
      miercoles: z
        .array(
          z.object({
            time: z.string(),
            format: z.string(),
          })
        )
        .optional(),
      jueves: z
        .array(
          z.object({
            time: z.string(),
            format: z.string(),
          })
        )
        .optional(),
      viernes: z
        .array(
          z.object({
            time: z.string(),
            format: z.string(),
          })
        )
        .optional(),
      sabado: z
        .array(
          z.object({
            time: z.string(),
            format: z.string(),
          })
        )
        .optional(),
      domingo: z
        .array(
          z.object({
            time: z.string(),
            format: z.string(),
          })
        )
        .optional(),
    }),
  }),
});

export const collections = { movies };
