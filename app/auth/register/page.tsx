import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import RegisterForm from "./RegisterForm"

const RegisterPage = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Account Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  )
}

export default RegisterPage
