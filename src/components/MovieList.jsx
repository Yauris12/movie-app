import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import Wrapper from '../assets/wrappers/MovieList'

import MovieCard from './MovieCard'
import tmdbApi from '../api/tmdbApi'
import { useTranslation } from 'react-i18next'

const MovieList = (props) => {
  const [t] = useTranslation('global')
  const [movies, setMovies] = useState([])
  const language = localStorage.getItem('i18nextLng')

  useEffect(() => {
    const getList = async () => {
      let response = null

      const params = { language }

      if (props.type !== 'similar') {
        response = await tmdbApi.getMovieList(props.type, { params })
        setMovies(response.results)
      } else {
        if (props.id !== undefined) {
          response = await tmdbApi.similar(props.id, { params })
          setMovies(response.results)
        }
      }
    }

    getList()
  }, [t, props.id])

  return (
    <Wrapper>
      <h1>{props.title}</h1>
      <div className='movieList'>
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
          {movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </Wrapper>
  )
}

export default MovieList
MovieList.propTypes = {
  type: PropTypes.string.isRequired,
}
