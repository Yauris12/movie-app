import React from 'react'
import ES from '../assets/images/es.png'
import EU from '../assets/images/eu.png'
import JA from '../assets/images/jp.png'
import { useTranslation } from 'react-i18next'

const Banderas = () => {
  const [t, i18n] = useTranslation('global')

  return (
    <div className='banderas container-header'>
      <img
        className='banderas__icon'
        src={EU}
        alt=''
        onClick={() => i18n.changeLanguage('en')}
      />

      <img
        className='banderas__icon'
        src={ES}
        alt=''
        onClick={() => i18n.changeLanguage('es')}
      />

      <img
        className='banderas__icon'
        src={JA}
        alt=''
        onClick={() => i18n.changeLanguage('ja')}
      />
    </div>
  )
}

export default Banderas
