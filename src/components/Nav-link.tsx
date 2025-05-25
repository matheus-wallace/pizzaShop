import { Link, type LinkProps, useLocation } from 'react-router'

export type NavLinkProps = LinkProps
const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={props.to === pathname}
      className="text-muted-foreground hover:text-foreground data-[current=true]:text-foreground flex items-center gap-1.5 text-sm font-medium"
      {...props}
    ></Link>
  )
}

export default NavLink
