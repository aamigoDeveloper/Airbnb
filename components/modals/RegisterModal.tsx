"use client"

import { createUser } from "@/app/actions/createUser"
import { RegisterValues, registerSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Heading from "../Heading"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import Modal from "./Modal"
import { useToast } from "../ui/use-toast"

export default function RegisterModal() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
  })

  const { control, handleSubmit } = form

  const onSubmit = async (formData: RegisterValues) => {
    startTransition(async () => {
      try {
        await createUser(formData)
        await signIn("credentials", {
          ...formData,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.refresh()
            toast({
              title: "You have Successfully Signed up! ✅",
            })
          }
        })
      } catch (error) {
        toast({
          title: "uh oh! Something went wrong, Please try again.",
          variant: "destructive",
        })
      }
    })
  }

  const bodyContent = (
    <>
      <Heading title="Welcome to Airbnb" subtitle="Create an Acoount" />
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start ">
                <FormLabel className="text-neutral-500">Name</FormLabel>
                <FormControl>
                  <Input {...field} className="p-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start ">
                <FormLabel className="text-neutral-500">Email</FormLabel>
                <FormControl>
                  <Input {...field} className="p-6" type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="text-neutral-500">Password</FormLabel>
                <FormControl>
                  <Input {...field} className="p-6" type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  )

  const footerContent = (
    <div className="flex flex-col flex-grow gap-3">
      <Button
        variant={"outline"}
        className="p-6 w-full"
        onClick={() => signIn("google")}
      >
        <FcGoogle size={40} className="absolute left-10" />
        Continue with Google
      </Button>
      <Button
        variant={"outline"}
        className="p-6 w-full"
        onClick={() => signIn("github")}
      >
        <FaGithub size={40} className="absolute left-10" />
        Continue with Github
      </Button>
    </div>
  )

  return (
    <Modal
      title="Sign up"
      body={bodyContent}
      footer={footerContent}
      actionLabel="Continue"
      disabled={isPending}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}
