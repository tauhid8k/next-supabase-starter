import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LoginForm from "./LoginForm"

const LoginPage = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Account Login</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  )
}

export default LoginPage
