import { SearchIcon } from "lucide-react"

export default function Search() {
  return (
    <div className="border rounded-full px-5 py-2 cursor-pointer shadow-sm hover:shadow-md transition">
      <div className="flex items-center">
        <div className="flex items-center">
          <p className="pr-4 text-sm border-r border-r-neutral-400">Anywhere</p>
          <p className="px-4 text-sm border-r border-r-neutral-400">Any Week</p>
        </div>
        <div className="flex items-center">
          <p className="px-4 text-sm text-neutral-500">Add Guests</p>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <SearchIcon size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
