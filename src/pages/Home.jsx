import React from 'react'

import { HeroSlide } from '../components'
import MovieList from '../components/MovieList'
import { movieType } from '../api/tmdbApi'
import { useTranslation } from 'react-i18next'
const Home = () => {
  const [t] = useTranslation('global')

  return (
    <div>
      <HeroSlide />
      <div style={{ marginTop: '3rem' }}>
        <MovieList type={movieType.top_rated} title={t(`home.topRated`)} />
        <MovieList type={movieType.upcoming} title={t(`home.upcoming`)} />
        <MovieList type={movieType.popular} title={t(`home.trending`)} />
      </div>
    </div>
  )
}

export default Home
