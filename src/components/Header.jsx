import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../assets/wrappers/Header'
import NavLinks from './NavLinks'
import SearchHeader from './SearchHeader'
import Banderas from './Banderas'
import { useTranslation } from 'react-i18next'
import tmdbApi from '../api/tmdbApi'
import SearchMenu from './SearchMenu'
import useClickOutside from '../helpers/clickOutside'
import { Link, useNavigate } from 'react-router-dom'

import debounce from 'lodash.debounce'

const Header = () => {
  const [t, i18next] = useTranslation('global')
  const inputRef = useRef(null)
  const menuRef = useRef(null)
  const [menu, setMenu] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const [movies, setMovies] = useState('')

  const onChange = debounce(async (e) => {
    e.preventDefault()
    setQuery(inputRef?.current?.value)

    if (inputRef.current.value !== '') {
      setMenu(true)

      const params = { page: 1, language, query: e.target.value }
      const response = await tmdbApi.search({ params })
      if (!response.errors) {
        setMovies(response.results.slice(1, 5))
      } else {
        setMovies([])
      }
    } else {
      setMenu(false)
    }
  }, 1000)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!query) return

    setMenu(false)
    navigate(`/movie/search/${query}`)
    inputRef.current.value = ''
  }

  useEffect(() => {}, [query])

  const language = localStorage.getItem('i18nextLng')

  useClickOutside(menuRef, () => {
    setMenu(false)
  })

  return (
    <Wrapper>
      <nav className='nav__header'>
        <h1>
          <Link to='/'>
            Movie<span>App</span>
          </Link>
        </h1>

        <div className='search-relative' ref={menuRef}>
          <SearchHeader
            value={query}
            onChange={onChange}
            inputRef={inputRef}
            onSubmit={onSubmit}
          />
          {movies && menu && (
            <SearchMenu movies={movies} setMenu={setMenu} query={query} />
          )}
        </div>
        <NavLinks />

        <Banderas />
      </nav>
    </Wrapper>
  )
}

export default Header
