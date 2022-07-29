import axiosClient from './axiosClient'
export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
}

const tmdbApi = {
  getMovieList: (type, params) => {
    const url = `movie/${movieType[type]}`

    return axiosClient.get(url, params)
  },
  search: (params) => {
    const url = `search/movie`
    return axiosClient.get(url, params)
  },
  detail: (id, params) => {
    const url = `movie/${id}`
    return axiosClient.get(url, params)
  },
  credits: (id, params) => {
    const url = `movie/${id}/credits`
    return axiosClient.get(url, params)
  },
  similar: (id, params) => {
    const url = `movie/${id}/similar`
    return axiosClient.get(url, params)
  },
}
export default tmdbApi
