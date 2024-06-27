"use client"

import profilePlaceholder from "@/public/profile.png"
import { SafeUser } from "@/app/types"
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
import { useToast } from "../ui/use-toast"
import RentModal from "../modals/RentModal"
import { useCallback } from "react"

interface UserMenuProps {
  currentUser: SafeUser | null
}

export default function UserMenu({ currentUser }: UserMenuProps) {
  const { toast } = useToast()

  const openRentModal = useCallback(() => {
    if (!currentUser) {
      return toast({
        title: "You have to log in first!",
        variant: "destructive",
      })
    }
  }, [currentUser, toast])
  return (
    <div className="flex items-center justify-between gap-6">
      <div
        onClick={openRentModal}
        className="text-sm px-4 py-3 rounded-full hover:bg-neutral-100/80 transition cursor-pointer"
      >
        {currentUser ? <RentModal /> : "Airbnb your home"}
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
                <RentModal />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Button
                  onClick={() => {
                    signOut()
                    toast({
                      title: "Logged out Successfully! ✅",
                    })
                  }}
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
