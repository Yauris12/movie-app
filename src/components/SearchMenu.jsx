import { Link } from 'react-router-dom'
import apiConfig from '../api/apiConfig'
import Wrapper from '../assets/wrappers/SearchMenu'
import { useNavigate } from 'react-router-dom'
const SearchMenu = ({ movies, setMenu, query }) => {
  const navigate = useNavigate()



  return (
    <Wrapper>
      {movies &&
        movies.map((movie) => {
          const background = apiConfig.originalImage(
            movie.poster_path ? movie.poster_path : movie.backdrop_path
          )

          const link = `/movie/detail/${movie.id}`

          return (
            <Link to={link} key={movie.id}>
              <div className='menu-item' onClick={() => setMenu(false)}>
                <img src={background} alt='' />

                {movie.title}
              </div>
            </Link>
          )
        })}
      {movies.length ? (
        <Link to={`/movie/search/${query}`}>
          <h3  onClick={() => setMenu(false)}>Ver todos los resultados</h3>
        </Link>
      ) : (
        <h3>Sin resultados</h3>
      )}
    </Wrapper>
  )
}

export default SearchMenu
