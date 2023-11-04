import * as z from 'zod';

export const modelSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  media: z
    .object({
      title: z.string(),
      url: z.string(),
      type: z.string(),
    })
    .array(),
  //   type: z.enum(['notice', 'result', 'routing']),
  type: z.string(),
  user_id: z.string(),
});
export const deleteModelSchema = z.object({
  id: z.number(),
});
export type modelSchemaType = z.infer<typeof modelSchema>;
export type deleteModelSchemaType = z.infer<typeof deleteModelSchema>;
