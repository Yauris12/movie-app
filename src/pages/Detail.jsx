import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import apiConfig from '../api/apiConfig'
import tmdbApi, { movieType } from '../api/tmdbApi'
import { useTranslation } from 'react-i18next'
import CasList from '../components/CasList'
import Wrapper from '../assets/wrappers/Detail'
import MovieList from '../components/MovieList'
import { useMovieContext } from '../context/movieContext'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Skeleton from 'react-loading-skeleton'
const Detail = () => {
  const { changeFavorite, favorite } = useMovieContext()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const [t] = useTranslation('global')
  const language = localStorage.getItem('i18nextLng')

  const [movie, setMovie] = useState({})
  const getDetail = async () => {
    setLoading(true)
    const params = { language }
    const response = await tmdbApi.detail(id, { params })

    setMovie(response)
    setTimeout(() => {
      setLoading(false)
    }, 500)
    window.scrollTo(0, 0)
  }

  const exitstMovie = favorite.find((movi) => movi.id === movie.id)

  useEffect(() => {
    getDetail()
  }, [id])
  useEffect(() => {
    getDetail()
  }, [t])
  const bgImage = apiConfig.originalImage(
    movie.poster_path || movie.background_path
  )

  if (!movie.id) {
    return (
      <Wrapper>
        <h1>{t(`search.noId`)}</h1>
      </Wrapper>
    )
  }

  const DetailsSkeleton = () => {
    return (
      <>
        <div className='movie__img img-none'>
          <Skeleton
            style={{
              width: '370px',
              height: '520px',
            }}
          />
        </div>

        <div className='content__info'>
          <Skeleton width={350} height={30} style={{ marginBottom: '1rem' }} />
          <div className='movie__img title-img'>
            <Skeleton
              style={{
                width: '370px',
                height: '520px',
              }}
            />
          </div>
          <div className='container-tags'>
            <div className='gender'>
              <Skeleton width={60} />
              <Skeleton width={60} />
              <Skeleton width={60} />
              <Skeleton width={60} />
            </div>

            <div className='favorite'>
              <Skeleton width={90} />
            </div>
          </div>
          <div style={{ marginTop: '10px', marginBottom: '1rem' }}>
            <Skeleton count={4} style={{ marginTop: '1rem' }} />
          </div>
          <Skeleton width={50} />
          <div className='casts'>
            <Skeleton width={90} height={120} />
            <Skeleton width={90} height={120} />
            <Skeleton width={90} height={120} />
            <Skeleton width={90} height={120} />
            <Skeleton width={90} height={120} />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Wrapper>
        {loading ? (
          <DetailsSkeleton />
        ) : (
          <>
            <div className='movie__img img-none'>
              <img src={bgImage} alt='' />
            </div>

            <div className='content__info'>
              <h1>{movie.title || movie.name}</h1>
              <div className='movie__img title-img'>
                <img src={bgImage} alt='' />
              </div>
              <div className='container-tags'>
                <div className='gender'>
                  {movie.genres &&
                    movie.genres.slice(0, 5).map((gender, i) => {
                      return (
                        <span key={i} className='gender__item'>
                          {gender.name}
                        </span>
                      )
                    })}
                </div>

                <span
                  className='favorite'
                  onClick={() => changeFavorite(movie)}
                >
                  {exitstMovie ? (
                    <div
                      style={{
                        display: 'flex',
                        flexAlign: 'center',
                        justifyContent: 'center',
                        gap: '2rem',
                      }}
                    >
                      Delete Favorite <FaHeart size={15} />
                    </div>
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        flexAlign: 'center',
                        justifyContent: 'center',
                        gap: '2rem',
                      }}
                    >
                      Add Favorite <FaRegHeart size={15} />
                    </div>
                  )}
                </span>
              </div>

              <p>{movie.overview}</p>
              <h3>Casts</h3>
              <CasList id={movie.id} />
            </div>
          </>
        )}
      </Wrapper>
      <MovieList type='similar' title={t(`home.similar`)} id={movie.id} />
    </>
  )
}

export default Detail
