"use server"

import prisma from "@/lib/db"
import { getCurrentUser } from "./getCurrentUser"

interface IParams {
  listingId?: string
}

export async function likeListing({ listingId }: IParams) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    throw new Error("No User")
  }

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID")
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])]

  favoriteIds.push(listingId)

  await prisma.user.update({
    where: { id: currentUser.id },
    data: {
      favoriteIds,
    },
  })
}

export async function disLikeListing({ listingId }: IParams) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    throw new Error("No User")
  }

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID")
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])]

  favoriteIds = favoriteIds.filter((id) => id !== listingId)

  await prisma.user.update({
    where: { id: currentUser.id },
    data: {
      favoriteIds,
    },
  })
}
