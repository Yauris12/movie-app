import React from 'react'
import Wrapper from '../assets/wrappers/Catalog'
import MovieCard from '../components/MovieCard'
import MovieGrid from '../components/MovieGrid'
import { useMovieContext } from '../context/movieContext'
import { useTranslation } from 'react-i18next'

const Favorite = () => {
  const [t] = useTranslation('global')

  const { favorite } = useMovieContext()

  if (!favorite.length) {
    return (
      <Wrapper>
        <h1>{t(`search.noFavorite`)}</h1>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h2>Favorite</h2>
      <div className='movie-grid'>
        {favorite.map((movie, i) => {
          return <MovieCard movie={movie} key={i} />
        })}
      </div>
    </Wrapper>
  )
}

export default Favorite
