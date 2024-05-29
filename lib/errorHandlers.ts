import { ZodError } from "zod"

// Form Validation Error Response
export const validationErrorResponse = (validationErrors: ZodError) => {
  return validationErrors.issues.map(({ path, message }) => ({
    path: path.join("."),
    message,
  }))
}
