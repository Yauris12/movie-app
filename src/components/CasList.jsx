import React, { useState, useEffect } from 'react'

import tmdbApi from '../api/tmdbApi'

import apiConfig from '../api/apiConfig'
import { useTranslation } from 'react-i18next'

const CasList = ({ id }) => {
  const [casts, setCasts] = useState([])
  const [t] = useTranslation('global')
  const language = localStorage.getItem('i18nextLng')
  const getCredits = async () => {
    const params = { language }
    if (id) {
      const response = await tmdbApi.credits(id, { params })
      setCasts(response.cast.slice(0, 5))
    }
  }

  useEffect(() => {
    getCredits()
  }, [id])

  return (
    <div className='casts'>
      {casts.map((item, i) => (
        <div key={i} className='casts__item'>
          <div
            className='casts__item__img'
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className='casts__item__name'>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default CasList
