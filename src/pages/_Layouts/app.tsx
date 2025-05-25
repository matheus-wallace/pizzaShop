import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <h1>Titulo</h1>
      <div>{<Outlet />}</div>
    </>
  )
}

export default AppLayout
