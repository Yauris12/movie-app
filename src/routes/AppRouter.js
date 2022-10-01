import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, Detail, Movies, Error, Favorite } from '../pages'
import SharedLayout from './SharedLayout'
import { AnimatePresence, motion } from 'framer-motion'

import 'swiper/css'
import { useEffect, useState } from 'react'
import Preloader from '../components/Preloader'

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

const AppRouter = () => {
  const location = useLocation()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader load={isLoading} />
      <AnimatePresence location={location} key={location.pathname}>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route
              path='/'
              element={
                <motion.div
                  className='page'
                  initial='out'
                  animate='in'
                  exit='out'
                  variants={pageTransition}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path='movie/detail/:id'
              element={
                <motion.div
                  className='page'
                  initial='out'
                  animate='in'
                  exit='out'
                  variants={pageTransition}
                >
                  <Detail />
                </motion.div>
              }
            />
            <Route path='movie/search/:query' element={<Movies />} />
            <Route path='movie' element={<Movies />} />

            <Route path='favorite' element={<Favorite />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AppRouter
