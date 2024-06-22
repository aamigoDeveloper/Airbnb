import searchImage from "@/public/search.png"
import Image from "next/image"

export default function Search() {
  return (
    <div className="border rounded-full px-4 py-3 cursor-pointer shadow-sm hover:shadow-md transition">
      <div className="flex items-center">
        <div className="flex items-center">
          <p className="pr-4 text-sm border-r border-r-slate-500">Anywhere</p>
          <p className="px-4 text-sm border-r border-r-slate-500">Any Week</p>
        </div>
        <div className="flex items-center">
          <p className="px-4 text-sm text-slate-400/100">Add Guests</p>
          <Image src={searchImage} alt="Search logo" width={30} height={30} />
        </div>
      </div>
    </div>
  )
}
