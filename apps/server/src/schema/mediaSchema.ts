import * as z from 'zod';
export const mediaSchema = z.object({
  title: z.string(),
  url: z.string(),
  type: z.string(),
});
export const deleteMediaSchema = z.object({
  id: z.number(),
});
export type mediaSchemaType = z.infer<typeof mediaSchema>;
export type deleteMediaSchemaType = z.infer<typeof deleteMediaSchema>;
