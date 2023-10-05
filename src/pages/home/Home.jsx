
import './homeStyle.scss'

import Hero from './hero/Hero'
import React from 'react'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'


 const Home = () => {


  return (
    <div>
      <Hero/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
