import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
      <h1>Autehntication</h1>
      <div>{<Outlet />}</div>
    </div>
  )
}

export default AuthLayout
