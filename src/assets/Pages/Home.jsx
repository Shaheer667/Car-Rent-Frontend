import React from 'react'
import Navbar from '../Components/Navbar'
import CarListing from './CarListing'
import HomeBanner from '../Components/HomeBanner'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeBanner/>
        <CarListing/>
        <Footer/>
    </div>
  )
}

export default Home