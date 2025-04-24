import { z } from "zod";

export const cardSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
  website: z.string().url("Invalid website URL").optional(),
  theme: z.enum(["modern", "classic", "minimal", "elegant"]),
});

export const paymentSchema = z.object({
  amount: z.number().min(1, "Amount must be greater than 0"),
  currency: z.string().length(3, "Currency must be 3 characters"),
  paymentMethod: z.enum(["stripe", "paypal"]),
});

export type CardFormData = z.infer<typeof cardSchema>;
export type PaymentFormData = z.infer<typeof paymentSchema>;
