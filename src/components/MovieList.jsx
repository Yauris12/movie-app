import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import Wrapper from '../assets/wrappers/MovieList'
import { useMediaQuery } from 'react-responsive'
import MovieCard from './MovieCard'
import tmdbApi from '../api/tmdbApi'
import { useTranslation } from 'react-i18next'

const MovieList = (props) => {
  const query1175px = useMediaQuery({
    query: '(max-width: 1175px)',
  })

  const query1030px = useMediaQuery({
    query: '(max-width: 1030px)',
  })
  const query960px = useMediaQuery({
    query: '(max-width: 960px)',
  })
  const query752px = useMediaQuery({
    query: '(max-width: 752px)',
  })

  const max = query752px ? 3 : query960px ? 4 : query1030px ? 6 : 7

  const [t] = useTranslation('global')
  const [movies, setMovies] = useState([])
  const language = localStorage.getItem('i18nextLng')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

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

    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [t, props.id])

  const CardSkeleton = () => {
    return (
      <Wrapper>
        <h1>{props.title}</h1>

        <div className='skeleton-cards'>
          {Array.from({ length: max }, (_, index) => (
            <div className='skeleton-movie' key={index}></div>
          ))}
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {loading ? (
        <CardSkeleton />
      ) : (
        <>
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
        </>
      )}
    </Wrapper>
  )
}

export default MovieList
MovieList.propTypes = {
  type: PropTypes.string.isRequired,
}
