"use client"

import { useRouter } from "next/navigation"
import Heading from "./Heading"
import { Button } from "./ui/button"

interface EmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

export default function EmptyState({
  title = "No exact mathces.",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}: EmptyStateProps) {
  const router = useRouter()

  return (
    <div className="h-[60vh] flex flex-col items-center justify-center gap-2">
      <Heading title={title} subtitle={subtitle} center />
      <div className="text-center mt-4">
        {!showReset && (
          <Button
            onClick={() => router.push("/")}
            variant={"outline"}
            className="px-10 py-6"
          >
            Remove all filters
          </Button>
        )}
      </div>
    </div>
  )
}
