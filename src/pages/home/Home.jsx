
import './homeStyle.scss'

import Hero from './hero/Hero'
import React from 'react'
import Trending from './trending/Trending'


 const Home = () => {


  return (
    <div>
      <Hero/>
      <Trending/>
     
      <div style={{height:1000}}></div>
    </div>
  )
}

export default Home
