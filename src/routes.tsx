import { createBrowserRouter } from 'react-router-dom'
import { HomeLayout } from './pages/layouts/Home'
import { NotFound } from './pages/auth/NotFound'
import { Main } from './pages/home/Main'
import { AuthenticationLayout } from './pages/layouts/Authentication'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { TradeRequestForm } from './pages/home/TradeRequestForm'
import { TradeCenter } from './pages/home/TradeCenter'
import { UserProfile } from './pages/home/UserProfile'
import { AvailableCards } from './pages/home/AvailableCards'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/user-profile',
        element: <UserProfile />
      },
      {
        path: '/trade-request',
        element: <TradeRequestForm />
      },
      {
        path: '/available-cards',
        element: <AvailableCards />
      },
      {
        path: '/trade-center',
        element: <TradeCenter />
      }
    ]
  },
  {
    path: '/',
    element: <AuthenticationLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])
