import { useReducer, createContext, useContext, useEffect } from 'react'
import reducer from './reducer'

import { ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from './actions'
const MovieContext = createContext()
const favorite = localStorage.getItem('favorite')
const initialState = {
  favorite: favorite ? JSON.parse(favorite) : [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(state.favorite))
  }, [state])
  // actions
  const addMovieFavorite = (movie) => {
    dispatch({ type: ADD_MOVIE_FAVORITE, payload: movie })
  }
  const removeMovieFavorite = (id) => {
    dispatch({ type: REMOVE_MOVIE_FAVORITE, payload: id })
  }

  const changeFavorite = (movie) => {
    const exitstMovie = state.favorite.find((movi) => movi.id === movie.id)

    if (exitstMovie) {
      removeMovieFavorite(movie.id)
    } else {
      addMovieFavorite(movie)
    }
  }

  return (
    <MovieContext.Provider
      value={{
        ...state,
        changeFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

const useMovieContext = () => {
  return useContext(MovieContext)
}

export { AppProvider, useMovieContext }
