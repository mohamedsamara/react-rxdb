import { z } from 'zod';

const noteSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
});
export type Note = z.infer<typeof noteSchema>;

export const noteFormSchema = noteSchema.partial({
  id: true,
});
export type AddNoteForm = z.infer<typeof noteFormSchema>;
