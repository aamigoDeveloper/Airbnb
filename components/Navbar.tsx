import airbnbImage from "@/public/airbnb-image.png"
import Image from "next/image"
import Link from "next/link"
import Search from "./Search"
import UserMenu from "./UserMenu"
import Container from "./Container"
import Categories from "./Categories"

export default function Navbar() {
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
              />
            </Link>
            <Search />
            <UserMenu />
          </nav>
        </Container>
      </div>
      <Categories />
    </header>
  )
}
