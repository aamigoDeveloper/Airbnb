"use client"

import profilePlaceholder from "@/public/profile.png"
import { SafeUser } from "@/types"
import { Menu } from "lucide-react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import LoginModal from "../modals/LoginModal"
import RegisterModal from "../modals/RegisterModal"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

interface UserMenuProps {
  currentUser: SafeUser | null
}

export default function UserMenu({ currentUser }: UserMenuProps) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="text-sm px-4 py-3 rounded-full hover:bg-neutral-100/80 transition cursor-pointer">
        Airbnb your home
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1.5 border rounded-full px-2 shadow-sm hover:shadow-md transition">
          <Menu size={20} />
          <div>
            <Image
              src={currentUser?.image || profilePlaceholder}
              alt="Profile"
              width={30}
              height={25}
              className="rounded-full self-center w-auto h-auto"
              priority
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {currentUser ? (
            <>
              <DropdownMenuItem asChild className="p-3 font-medium">
                <Link href={"/"}>My trips</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-3 font-medium">
                <Link href={"/"}>My favorites</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-3 font-medium">
                <Link href={"/"}>My reservations</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-3 font-medium">
                <Link href={"/"}>My properties</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="p-3 font-medium">
                <Link href={"/"}>Airbnb my home</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Button
                  onClick={() => signOut()}
                  variant={"ghost"}
                  className="w-full flex justify-start"
                >
                  Log out
                </Button>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem asChild>
                <LoginModal />
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <RegisterModal />
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
