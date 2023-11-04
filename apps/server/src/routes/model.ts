import { deleteModelSchema, modelSchema } from '../schema/modelSchema';
import { publicProcedure, router } from '../utils/trpc';
export const modelRouter = router({
  addModel: publicProcedure.input(modelSchema).mutation(async ({ input }) => {
    const { slug, media, ...rest } = input;
    return db?.model.create({
      data: {
        ...rest,
        media: {
          connectOrCreate: media?.map((media) => {
            return {
              create: { ...media },
              where: {
                url: media.url,
              },
            };
          }),
        },
        slug: {
          connectOrCreate: {
            create: {
              url: slug,
              type: rest.type,
            },
            where: {
              url: slug,
            },
          },
        },
      },
    });
  }),
  modelList: publicProcedure.query(async () => {
    return db?.model.findMany({
      include: {
        slug: true,
        media: true,
      },
    });
  }),
  deleteModel: publicProcedure.input(deleteModelSchema).mutation(async ({ input }) => {
    return db?.model.delete({
      where: {
        id: input.id,
      },
    });
  }),
});
