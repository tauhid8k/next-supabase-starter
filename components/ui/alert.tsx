import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const alertVariants = cva(
  "w-full flex items-center gap-2 py-3 px-4 mb-4 text-sm tracking-wide rounded-md",
  {
    variants: {
      variant: {
        default:
          "bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-600",
        destructive: "bg-red-400/20 text-red-500 dark:text-red-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, title, ...props }, ref) => {
  if (!title) return null

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {variant === "destructive" && (
        <ExclamationTriangleIcon className="size-[18px] shrink-0" />
      )}
      <h4>{title}</h4>
    </div>
  )
})
Alert.displayName = "Alert"

export { Alert }
