const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container min-h-screen py-4 grid place-items-center bg-gray-50 dark:bg-background">
      {children}
    </main>
  )
}

export default AuthLayout
