import { getCurrentUser } from "@/app/actions/getCurrentUser"
import { getListingById } from "@/app/actions/getListingById"
import { getReservation } from "@/app/actions/getReservation"
import EmptyState from "@/components/EmptyState"
import ListingClient from "./ListingClient"

interface PageProps {
    params: { listingId?: string }
}

export default async function page({ params: { listingId } }: PageProps) {
    const listing = await getListingById({ listingId })
    const reservations = await getReservation({ listingId })
    const currentUser = await getCurrentUser()

    if (!listing) {
        return <EmptyState />
    }
  return (
    <ListingClient
    listing={listing}
    reservations={reservations}
    currentUser={currentUser}
    />
  )
}