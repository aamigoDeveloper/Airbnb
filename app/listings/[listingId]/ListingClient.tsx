import { SafeListing, SafeReservation, SafeUser } from "@/app/types"

interface ListingClientProps {
  listing: SafeListing & { user: SafeUser }
  reservations: SafeReservation[]
  currentUser?: SafeUser | null
}

export default function ListingClient({
  listing,
  reservations,
  currentUser,
}: ListingClientProps) {
  return <div>ListingClient</div>
}
