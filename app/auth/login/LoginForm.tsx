"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { loginValidator } from "@/validators/authValidator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import FormFieldSet from "@/components/ui/form-fieldset"
import { Input } from "@/components/ui/input"

const LoginForm = () => {
  const [pending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof loginValidator>>({
    resolver: zodResolver(loginValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: z.infer<typeof loginValidator>) => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormFieldSet disabled={pending}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-2 mb-4">
            <Link
              href="/auth/forgot-password"
              className="block text-center text-sm text-muted-foreground hover:underline focus:underline focus:outline-none whitespace-nowrap"
            >
              Forgot password?
            </Link>
            <Link
              href="/auth/register"
              className="block text-center text-sm text-muted-foreground hover:underline focus:underline focus:outline-none"
            >
              Do not have an account?
            </Link>
          </div>
          <Button type="submit" className="w-full" isLoading={pending}>
            Login
          </Button>
        </FormFieldSet>
      </form>
    </Form>
  )
}

export default LoginForm
