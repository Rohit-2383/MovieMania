

import React, { useState } from 'react'
import Tabswitcher from '../../../components/tabSwitcher/Tabswitcher'
import {WrapContent} from '../../../components/wrapContent/WrapContent'
import customFetchData from '../../../customHooks/customFetchData'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
  const [endPoint,setEndPoint]= useState('day')

   function handleSwitch(tab){
      setEndPoint(tab==='Day'?'day':'week')
 }

//  api call
 const {data,loading} = customFetchData(`/trending/movie/${endPoint}`)


  return (
    <div className="carouselSection">
        <WrapContent>
            <span className="carouselTitle">
                Trending
            </span>
             <Tabswitcher data={['Day','week']} handleSwitch={handleSwitch}/>
            
        </WrapContent>
          <Carousel data={data?.results} loading={loading}/>
       
    </div>
  )
}

export default Trending