import airbnbImage from "@/public/airbnb-image.png"
import Image from "next/image"
import Link from "next/link"
import Search from "./Search"
import UserMenu from "./UserMenu"

export default function Navbar() {
  return (
    <header className="max-w-[2450px] shadow-sm">
      <nav className="flex items-center justify-between xl:px-20 py-4 md:px-10 sm:px-4">
        <Link href={"/"}>
          <Image
            src={airbnbImage}
            alt="Airbnb Image"
            width={125}
            height={100}
          />
        </Link>
        <Search />
        <div className="flex items-center justify-between gap-6">
          <div className="text-sm px-4 py-3 rounded-full hover:bg-neutral-100/80 transition cursor-pointer">
            Airbnb your home
          </div>
          <UserMenu />
        </div>
      </nav>
    </header>
  )
}
