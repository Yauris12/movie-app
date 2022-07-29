import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const Button = ({ className, onClick, children }) => {
  const [t, i18n] = useTranslation('global')

  return (
    <button className='btn' onClick={onClick ? () => onClick() : null}>
      {t(`header.${children}`)}
    </button>
  )
}

export default Button

Button.propTypes = {
  onClick: PropTypes.func,
}
