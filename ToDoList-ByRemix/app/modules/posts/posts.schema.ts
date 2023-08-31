import { z } from "zod";


export const updatePostSchema = z.object({
    id: z.number(),
    isDone: z.boolean(),
  });