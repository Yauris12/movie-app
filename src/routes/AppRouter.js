import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Detail, Movies, Error, Favorite } from '../pages'
import SharedLayout from './SharedLayout'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useEffect, useState } from 'react'

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='' element={<Home />} />
          <Route path='movie/detail/:id' element={<Detail />} />
          <Route path='movie/search/:query' element={<Movies />} />
          <Route path='movie' element={<Movies />} />

          <Route path='favorite' element={<Favorite />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
