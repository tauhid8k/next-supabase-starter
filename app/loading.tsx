import { LoaderCircle } from "lucide-react"

const Loading = () => {
  return (
    <div className="h-screen grid place-items-center">
      <LoaderCircle className="size-10 animate-spin text-muted-foreground" />
    </div>
  )
}

export default Loading
