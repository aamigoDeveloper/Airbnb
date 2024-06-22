import profilePlaceholder from "@/public/profile.png"
import { Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu"
import Image from "next/image"

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 border rounded-full p-1 shadow-sm hover:shadow-md transition">
        <Menu size={20} />
        <Image src={profilePlaceholder} alt="Profile" width={35} height={30} />
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
