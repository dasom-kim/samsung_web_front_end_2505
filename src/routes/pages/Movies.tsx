import MovieSearcher from '@/components/movies/MovieSearcher'
import MovieList from '@/components/movies/MovieList'
import { Outlet } from 'react-router'

export default function Movies() {
  return (
    <>
      <MovieSearcher />
      <MovieList />
      <Outlet />
    </>
  )
}
