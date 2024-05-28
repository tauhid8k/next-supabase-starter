"use client"

import { Button } from "@/components/ui/button"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="h-screen container flex flex-col items-center justify-center gap-4">
      <h3 className="text-lg text-gray-500 text-center flex items-center justify-center flex-wrap gap-3">
        <ExclamationTriangleIcon className="size-5 shrink-0" />
        {error.message}
      </h3>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        variant="secondary"
      >
        Refresh
      </Button>
    </div>
  )
}
