import { exampleRouter } from './example';
import { modelRouter } from './model';
import { mediaRouter } from './media';
import { router } from '../utils/trpc';

export const appRouter = router({
  example: exampleRouter,
  model: modelRouter,
  media: mediaRouter,
});

export type AppRouter = typeof appRouter;
