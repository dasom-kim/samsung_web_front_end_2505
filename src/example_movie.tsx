import { useState, useEffect } from 'react'

export type Movies = Movie[]

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function App() {
  const [movies, setMovies] = useState<Movies>([])

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=avengers')
    const { Search } = await res.json() // response 객체를 json으로 파싱
    setMovies(Search)
  }

  return (
    <>
      <h1>영화 목록</h1>
      <ul>
        {movies.map(m => {
          return <li key={m.imdbID}>{m.Title}</li>
        })}
      </ul>
    </>
  )
}
