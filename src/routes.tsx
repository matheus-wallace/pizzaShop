import { createBrowserRouter } from 'react-router'

import AppLayout from './pages/_Layouts/app'
import AuthLayout from './pages/_Layouts/auth'
import Orders from './pages/app/Orders/Orders'
import SignIn from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import Dashboard from './pages/Dashboard/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
