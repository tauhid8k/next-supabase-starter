"use server"

import { validationErrorResponse } from "@/lib/errorHandlers"
import { createClient } from "@/supabase/server"
import { loginValidator } from "@/validators/authValidator"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

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
