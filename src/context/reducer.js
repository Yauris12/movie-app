import { ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        favorite: [action.payload, ...state.favorite],
      }
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((movie) => movie.id !== action.payload),
      }
  }
  throw new Error(`no such action : ${action.type}`)
}
export default reducer
