import { RegisterValues, registerSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { signIn } from "next-auth/react"

export default function RegisterModal() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form

  const bodyContent = (
    <>
      <Heading title="Welcome to Airbnb" subtitle="Create an Acoount" />
      <Form {...form}>
        <form className="space-y-4">
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
          <Button type="submit" variant={"destructive"} className="p-6 w-full">
            Continue
          </Button>
        </form>
      </Form>
    </>
  )

  const footerContent = (
    <div className="flex flex-col flex-grow gap-3">
      <Button variant={"outline"} className="p-6 w-full">
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

  return <Modal title="Sign up" body={bodyContent} footer={footerContent} />
}
