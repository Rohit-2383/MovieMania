


import React, { useState } from 'react'
import Tabswitcher from '../../../components/tabSwitcher/Tabswitcher'
import {WrapContent} from '../../../components/wrapContent/WrapContent'
import CustomFetchData from '../../../customHooks/CustomFetchData'
import Carousel from '../../../components/carousel/Carousel'

const TopRated = () => {
  const [endPoint,setEndPoint]= useState('movie')

   function handleSwitch(tab){
      setEndPoint(tab==='Movies'?'movie':'tv')
 }

//  api call
 const {data,loading} = CustomFetchData(`/${endPoint}/top_rated`)


  return (
    <div className="carouselSection">
        <WrapContent>
            <span className="carouselTitle">
                Top Rated
            </span>
             <Tabswitcher data={['Movies','TV Shows']} handleSwitch={handleSwitch}/>
            
        </WrapContent>
          <Carousel 
           data={data?.results}
           loading={loading}
           endPoint={endPoint}
           />
       
    </div>
  )
}

export default TopRated