import z from 'zod';

export const validationSchema = z.object({
  fullname: z.string({
    required_error:
      'Leave me here your name so I can know who Im gonna talk to',
  }),
  email: z
    .string({ required_error: 'Dont forget to write down your mail!' })
    .email(),
  telephone: z.string().optional(),
  message: z.string({ required_error: '...and message is important too!' }),
  budget: z.string().optional(),
});
