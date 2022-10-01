import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MdMonitor } from 'react-icons/md'
import { FaHeart, FaHome } from 'react-icons/fa'

const NavLinks = () => {
  const [t, i18next] = useTranslation('global')
  const links = [
    {
      id: 1,
      text: t('header.home'),
      path: '',
      icon: <FaHome />,
    },
    {
      id: 2,
      text: t('header.movies'),
      path: 'movie',
      icon: <MdMonitor />,
    },
    {
      id: 3,
      text: t('header.favorite'),
      path: 'favorite',
      icon: <FaHeart />,
    },
  ]

  return (
    <div className='navbar'>
      {links.map((link) => {
        const { text, path, id, icon } = link
        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className='icon'>{icon}</span>
            <span className='active-text'>{text}</span>
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
