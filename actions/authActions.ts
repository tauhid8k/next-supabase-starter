"use server"

import { z } from "zod"
import { validationErrorResponse } from "@/lib/errorHandlers"
import { createClient } from "@/supabase/server"
import { loginValidator, registerValidator } from "@/validators/authValidator"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// User Login
export const login = async (values: z.infer<typeof loginValidator>) => {
  const supabase = createClient()

  const validatedFields = loginValidator.safeParse(values)
  if (!validatedFields.success) {
    return {
      validationError: validationErrorResponse(validatedFields.error),
    }
  }

  const { error } = await supabase.auth.signInWithPassword(validatedFields.data)
  if (error) {
    return {
      error: error.message,
    }
  }

  revalidatePath("/", "layout")
  redirect("/")
}

// User Registration
export const register = async (values: z.infer<typeof registerValidator>) => {
  const supabase = createClient()

  const validatedFields = registerValidator.safeParse(values)
  if (!validatedFields.success) {
    return {
      validationError: validationErrorResponse(validatedFields.error),
    }
  }

  const { error, data } = await supabase.auth.signUp({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    options: {
      data: {
        name: validatedFields.data.name,
      },
    },
  })

  if (data.user?.identities && data.user?.identities.length === 0) {
    return {
      error: "User already exist",
    }
  }

  if (error) {
    return {
      error: error.message,
    }
  }

  revalidatePath("/", "layout")
  return {
    success:
      "We have sent a verification link to your email. Please verify to continue",
  }
}
