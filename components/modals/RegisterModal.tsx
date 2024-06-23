import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Heading from "../Heading"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import Modal from "./Modal"

export default function RegisterModal() {
  const bodyContent = (
    <>
      <Heading title="Welcome to Airbnb" subtitle="Create an Acoount" />
      <div className="flex flex-col items-start gap-4">
        <Label htmlFor="name" className="text-neutral-500">
          Name
        </Label>
        <Input id="name" className="p-6" />
      </div>
      <div className="flex flex-col items-start gap-4">
        <Label htmlFor="email" className="text-neutral-500">
          Email
        </Label>
        <Input id="email" type="email" className="p-6" />
      </div>
      <div className="flex flex-col items-start gap-4">
        <Label htmlFor="password" className="text-neutral-500">
          Password
        </Label>
        <Input id="password" type="password" className="p-6" />
      </div>
      <Button type="submit" variant={"destructive"} className="p-6">
        Continue
      </Button>
    </>
  )

  const footerContent = (
    <div className="flex flex-col flex-grow gap-3">
      <Button variant={"outline"} className="p-6 w-full">
        <FcGoogle size={40} className="absolute left-10" />
        Continue with Google
      </Button>
      <Button variant={"outline"} className="p-6 w-full">
        <FaGithub size={40} className="absolute left-10" />
        Continue with Github
      </Button>
    </div>
  )

  return <Modal title="Sign up" body={bodyContent} footer={footerContent} />
}
