import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi, { movieType } from '../api/tmdbApi'
import MovieCard from './MovieCard'
import PaginationC from './PaginationC'
import { useTranslation } from 'react-i18next'

const MovieGrid = () => {
  const [t] = useTranslation('global')

  const { query } = useParams()
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState()
  const language = localStorage.getItem('i18nextLng')
  const [loading, setLoading] = useState(false)
  const getList = async () => {
    let response = null
    setLoading(true)
    if (query === undefined) {
      const params = { page, language }
      response = await tmdbApi.getMovieList(movieType.upcoming, { params })
    } else {
      const params = {
        query,
        page,
      }
      response = await tmdbApi.search({ params })
    }
    setMovies(response.results)
    setPage(response.page)
    setTotalResult(response.total_results)
    setLoading(false)
  }

  const onChangePage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    getList()
  }, [query])
  useEffect(() => {
    window.scrollTo(0, 0)

    getList()
  }, [page])
  useEffect(() => {
    getList()
  }, [t])

  // if (!movies?.length) {
  //   return <h1> {t(`search.noSearch`)}</h1>
  // }

  const CardSkeleton = () => {
    return (
      <div className='movie-grid '>
        {Array.from({ length: 12 }, (_, index) => (
          <div className='movie-card skeleton-card '></div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2>Movies</h2>
      {!movies?.length ? (
        <h1> {t(`search.noSearch`)}</h1>
      ) : loading ? (
        <CardSkeleton />
      ) : (
        <>
          <div className='movie-grid'>
            {movies.map((movie, i) => {
              return (
                <MovieCard
                  style={{ maxWidth: '100px' }}
                  movie={movie}
                  key={i}
                />
              )
            })}
          </div>

          <PaginationC
            currentPage={page}
            totalItems={totalResult}
            onChangePage={onChangePage}
          />
        </>
      )}
    </div>
  )
}

export default MovieGrid
