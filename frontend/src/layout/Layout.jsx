import React from 'react'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Routers from '../routes/Routers.jsx'

const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Routers/>
      </main>
      <Footer/>

    </div>
  )
}

export default Layout
