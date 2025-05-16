import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/routes/layouts/Default'
import EmptyLayout from '@/routes/layouts/Empty'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import Movies from '@/routes/pages/Movies'
import MovieDetails from '@/routes/pages/MovieDetails'
import Todos from '@/routes/pages/Todos'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />,
        children: [
          {
            path: ':movieId',
            element: <MovieDetails />
          }
        ]
      }
    ]
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: '/todos',
        element: <Todos />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
