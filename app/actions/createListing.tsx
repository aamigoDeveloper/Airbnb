"use server"

import prisma from "@/lib/db"
import { getCurrentUser } from "./getCurrentUser"

export async function createListing(formData: any) {
  const {
    title,
    description,
    price,
    imageSrc,
    category,
    roomCount,
    guestCount,
    bathroomCount,
    location,
  } = formData

  const currentUser = await getCurrentUser()

  if (!currentUser) {
    throw new Error("User not found")
  }

  await prisma.listing.create({
    data: {
      title,
      description,
      price: parseInt(price, 10),
      imageSrc,
      category,
      roomCount,
      guestCount,
      bathroomCount,
      locationValue: location.value,
      userId: currentUser.id,
    },
  })
}
