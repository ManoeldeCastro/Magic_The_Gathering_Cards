import { createBrowserRouter } from 'react-router-dom'
import { HomeLayout } from './pages/layouts/Home'
import { NotFound } from './pages/auth/NotFound'
import { Main } from './pages/home/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <HomeLayout />
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Main/>
      }
    ]
  },
])
