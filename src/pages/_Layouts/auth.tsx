import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg font-medium">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza.shop</span>
        </div>
        <footer className="text-sm">
          Paniel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div>{<Outlet />}</div>
    </div>
  )
}

export default AuthLayout
