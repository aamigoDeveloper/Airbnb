import airbnbImage from "@/public/airbnb-image.png"
import { SafeUser } from "@/app/types"
import Image from "next/image"
import Link from "next/link"
import Container from "../Container"
import Categories from "./Categories"
import Search from "./Search"
import UserMenu from "./UserMenu"

interface NavbarProps {
  currentUser: SafeUser | null
}

export default function Navbar({ currentUser }: NavbarProps) {
  return (
    <header className="fixed w-full z-10 bg-white shadow-sm">
      <div className="py-4 border-b[1px]">
        <Container>
          <nav className="flex flex-grow items-center justify-between gap-3 md:gap-0">
            <Link href={"/"}>
              <Image
                src={airbnbImage}
                alt="Airbnb Image"
                width={125}
                height={100}
                priority
                className="w-auto h-auto self-center"
              />
            </Link>
            <Search />
            <UserMenu currentUser={currentUser} />
          </nav>
        </Container>
      </div>
      <Categories />
    </header>
  )
}
