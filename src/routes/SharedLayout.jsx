import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'

const SharedLayout = () => {
  return (
    <div className='container-header'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout
