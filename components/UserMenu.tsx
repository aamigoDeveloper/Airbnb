import profilePlaceholder from "@/public/profile.png"
import { Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu"
import Image from "next/image"

export default function UserMenu() {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="text-sm px-4 py-3 rounded-full hover:bg-neutral-100/80 transition cursor-pointer">
        Airbnb your home
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1.5 border rounded-full p-1 shadow-sm hover:shadow-md transition">
          <Menu size={20} />
          <Image
            src={profilePlaceholder}
            alt="Profile"
            width={35}
            height={30}
          />
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  )
}
