"use client"

import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"
import { useCallback } from "react"
import { IconType } from "react-icons"

interface CategoryBoxProps {
  label: string
  icon: IconType
  selected?: boolean
}

export default function CategoryBox({
  label,
  icon: Icon,
  selected,
}: CategoryBoxProps) {
  const params = useSearchParams()
  const router = useRouter()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    }

    if (params?.get("category") === label) {
      delete updatedQuery.category
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    )

    router.push(url)
  }, [params, label, router])
  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer",
        selected ? "border-b-neutral-800" : "border-transparent",
        selected ? "text-neutral-800" : "text-neutral-500"
      )}
    >
      <Icon size={26} />
      <span className="font-medium text-sm">{label}</span>
    </div>
  )
}
