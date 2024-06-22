"use client"

import profilePlaceholder from "@/public/profile.png"
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import Image from "next/image"
import Modal from "../modals/Modal"

export default function UserMenu() {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="text-sm px-4 py-3 rounded-full hover:bg-neutral-100/80 transition cursor-pointer">
        Airbnb your home
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1.5 border rounded-full px-1 shadow-sm hover:shadow-md transition">
          <Menu size={20} />
          <Image
            src={profilePlaceholder}
            alt="Profile"
            width={35}
            height={30}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Modal title="Login" />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Modal title="Sign up" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
