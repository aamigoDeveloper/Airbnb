"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

interface ModalProps {
  title: string
}

export default function Modal({ title }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full">
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader className="px-5 pb-6 border-b border-b-neutral-300">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 pb-4 border-b border-b-neutral-300">
          <div className="py-4">
            <h2 className="text-lg font-semibold">Welcome back!</h2>
            <p className="text-neutral-500">Login to your Account!</p>
          </div>
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
        </div>
        <DialogFooter>
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
