import { useMovieStore } from '@/stores/movie'

export default function MovieSearcher() {
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const fetchMovies = useMovieStore(state => state.fetchMovies)

  return (
    <div>
      <input
        className="rounded-md border-1 border-gray-400"
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            fetchMovies()
          }
        }}
      />
      <button onClick={fetchMovies}>Search!</button>
    </div>
  )
}
