import React from 'react'
import { Link } from 'react-router-dom'
import apiConfig from '../api/apiConfig'

import { FaRegPlayCircle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import NoImage from '../assets/images/noImage.webp'

const MovieCard = ({ movie }) => {
  const [t] = useTranslation('global')

  const link = `/movie/detail/${movie.id}`
  const bgImage = apiConfig.w500Image(
    movie.poster_path || movie.background_path
  )
  const noImg = bgImage.substring(bgImage.length - 9)
  return (
    <Link to={link}>
      <div className='container-img'>
        {noImg !== 'undefined' ? (
          <img src={bgImage} className='movie-card' alt='' />
        ) : (
          <img src={NoImage} className='movie-card' alt='' />
        )}
        <div className='btn1'>
          <h4>
            {t(`header.Watch now`)}
            <br />
            <FaRegPlayCircle />
          </h4>
        </div>
      </div>
      <h3>{movie.title || movie.name}</h3>
    </Link>
  )
}

export default MovieCard
