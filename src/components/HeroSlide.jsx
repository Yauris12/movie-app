import React, { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/HeroSlide'

import tmdbApi, { movieType } from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'
import { useMovieContext } from '../context/movieContext'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router'
import Button from './Button'
import { useTranslation } from 'react-i18next'
import Skeleton from 'react-loading-skeleton'

const HeroSlide = () => {
  const [t, i18next] = useTranslation('global')

  const [movieItems, setmovieItems] = useState([])
  const [loading, setLoading] = useState(false)
  const language = localStorage.getItem('i18nextLng')
  SwiperCore.use([Autoplay])
  // const { language } = useMovieContext()

  useEffect(() => {
    setLoading(true)
    const getMovies = async () => {
      const params = { page: 1, language }

      try {
        const { results } = await tmdbApi.getMovieList(movieType.popular, {
          params,
        })
        setLoading(false)
        setmovieItems(results.slice(1, 6))
      } catch (error) {
        setLoading(false)
      }
    }

    getMovies()
  }, [t])

  const CardSkeleton = () => {
    return <div className='hero-slide'></div>
  }

  return (
    <Wrapper>
      {loading ? (
        <CardSkeleton />
      ) : (
        <Swiper
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
        >
          {movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem
                  item={item}
                  className={`${isActive ? 'active' : ''}`}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Wrapper>
  )
}
const HeroSlideItem = ({ item, className }) => {
  let navigate = useNavigate()
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  )

  return (
    <div
      className={`hero-slide ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='hero__content container-header'>
        <div className='hero__info'>
          <h2 className='title'>{item.title}</h2>
          <div className='description'>{item.overview}</div>
          <div className='btns'>
            <Button onClick={() => navigate('movie/detail/' + item.id)}>
              Watch now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSlide
