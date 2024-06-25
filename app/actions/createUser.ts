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
  try {
    // Check if a user with the given email already exists
    const { name, email, password } = registerSchema.parse(formData)

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new Error("User with this email already exists")
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the user in the database
    await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    })
  } catch (error) {
    // Handle and propagate specific errors
    if (
      error instanceof Error &&
      error.message.includes("User with this email already exists")
    ) {
      throw error
    }

    console.error("Registration failed:", error)
    throw new Error("Internal server error")
  }
}
