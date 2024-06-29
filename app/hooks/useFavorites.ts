import { useRouter } from "next/navigation"
import { SafeUser } from "../types"
import { useCallback, useMemo } from "react"
import { useToast } from "@/components/ui/use-toast"
import { disLikeListing, likeListing } from "../actions/favoriteListing"

interface IParams {
  listingId: string
  currentUser?: SafeUser | null
}

const useFavorites = ({ listingId, currentUser }: IParams) => {
  const router = useRouter()
  const { toast } = useToast()

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(listingId)
  }, [currentUser, listingId])

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      if (!currentUser) {
        return toast({
          title: "You have to login first",
          variant: "destructive",
        })
      }

      try {
        let request

        if (hasFavorited) {
          request = () => disLikeListing({ listingId })
          toast({
            title: "Successfully removed from your favorites! ✅",
          })
        } else {
          request = () => likeListing({ listingId })
          toast({
            title: "Successfully added to your favorites! ✅",
          })
        }
        await request()
        router.refresh()
      } catch (error) {
        toast({
          title: "Something went wrong",
          variant: "destructive",
        })
      }
    },
    [currentUser, hasFavorited, listingId, router, toast]
  )

  return { hasFavorited, toggleFavorite }
}

export default useFavorites
