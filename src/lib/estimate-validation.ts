import { z } from 'zod';

export const projectTypes = ['New deck build', 'Deck restoration / staining', 'Repairs & board replacement', 'Railings, stairs or privacy screens', 'Annual maintenance plan', 'Not sure — need an inspection'] as const;
const singleLine = z.string().trim().min(1).max(200).refine(value => !/[\r\n\u0000]/.test(value), 'Please use a single line.');
export const estimateSchema = z.object({
  name: singleLine,
  phone: z.string().trim().min(7).max(40).regex(/^[+()\d\s.-]+$/).refine(value => value.replace(/\D/g, '').length >= 7),
  email: z.string().trim().email().max(200).transform(value => value.toLowerCase()),
  address: z.string().trim().max(200),
  project: z.enum(projectTypes),
  details: z.string().trim().max(1000),
  website: z.string().max(200).default(''),
  pageUrl: z.string().url().max(2048).refine(value => {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password;
  }),
});
export type EstimateInput = z.infer<typeof estimateSchema>;
export const estimateFailure = 'Your estimate email could not be sent. Please call or text (804) 399-9722.';