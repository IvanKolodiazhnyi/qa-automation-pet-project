import { z } from 'zod';

// Описуємо вкладені об'єкти
const dimensionsSchema = z.object({
  width: z.number().optional(),
  height: z.number().optional(),
  depth: z.number().optional()
});

const reviewSchema = z.object({
  rating: z.number().optional(),
  comment: z.string().optional(),
  date: z.string().optional(),
  reviewerName: z.string().optional(),
  reviewerEmail: z.string().optional()
});

// Головна схема продукту
export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().optional(),
  price: z.number().optional(),
  rating: z.number().optional(),
  dimensions: dimensionsSchema.optional(),
  reviews: z.array(reviewSchema).optional() // Масив відгуків
});

// Автоматично витягуємо TypeScript тип із нашої схеми!
export type ProductType = z.infer<typeof productSchema>;