"use server"

import prisma from "@/lib/db"
import { registerSchema } from "@/lib/validation"
import bcrypt from "bcrypt"

interface FormData {
  name: string
  email: string
  password: string
}

export async function createUser(formData: FormData) {
  const { name, email, password } = registerSchema.parse(formData)

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  })
}
