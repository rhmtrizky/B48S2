import { z } from "zod";

export const updatePostSchema = z.object({
    id: z.string(),
    isDone: z.boolean(),
  });