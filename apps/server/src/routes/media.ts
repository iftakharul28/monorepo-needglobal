import { deleteMediaSchema } from '../schema/mediaSchema';
import { publicProcedure, router } from '../utils/trpc';
export const mediaRouter = router({
  mediaList: publicProcedure.query(async () => {
    return db?.media.findMany();
  }),
  deleteMedia: publicProcedure.input(deleteMediaSchema).mutation(async ({ input }) => {
    return db?.media.delete({
      where: {
        id: input.id,
      },
    });
  }),
});
