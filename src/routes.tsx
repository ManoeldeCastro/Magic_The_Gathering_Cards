import { createBrowserRouter } from 'react-router-dom'
import { HomeLayout } from './pages/layouts/Home'
import { NotFound } from './pages/auth/NotFound'
import { Main } from './pages/home/Main'
import { AuthenticationLayout } from './pages/layouts/Authentication'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Main />
      }
    ]
  },
  {
    path: '/',
    element: <AuthenticationLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])
