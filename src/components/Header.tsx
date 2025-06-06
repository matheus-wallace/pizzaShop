import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import AccountMenu from './Account-menu'
import { ModeToggle } from './mode-toggle'
import NavLink from './Nav-link'
import { Separator } from './ui/separator'

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="text-foreground h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />

        <nav className="lg: flex items-center space-x-4">
          <NavLink to={'/'}>
            <Home className="h-4 w-4" />
            Home
          </NavLink>
          <NavLink to={'/orders'}>
            <UtensilsCrossed className="h-4 w-4" />
            Orders
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}

export default Header
