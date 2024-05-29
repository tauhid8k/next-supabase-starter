import { Button } from "@/components/ui/button"
import { CircleCheckBig } from "lucide-react"

const EmailConfirmationPage = () => {
  return (
    <div className="flex flex-col text-center">
      <CircleCheckBig className="size-10 block text-emerald-500 mx-auto mb-2" />
      <h2 className="text-3xl font-medium">Thank you</h2>
      <p className="text-muted-foreground mb-4">Your email has been verified</p>
      <Button variant="secondary">Go to dashboard</Button>
    </div>
  )
}

export default EmailConfirmationPage
