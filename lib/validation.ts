import { z } from "zod"

export const registerSchema = z.object({
  name: z.string().min(1).max(50, { message: "Name is Required" }),
  email: z.string().email({ message: "Email is Required" }).or(z.literal("")),
  password: z.string().min(1).max(20, { message: "Password is Required" }),
})

export type RegisterValues = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  email: z.string().email({ message: "Email is Required" }).or(z.literal("")),
  password: z.string().min(1).max(20, { message: "Password is Required" }),
})

export type LoginValues = z.infer<typeof loginSchema>
