
import './heroStyle.scss'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import customFetchData from '../../../customHooks/customFetchData'
import { useSelector } from 'react-redux'

import LazyImage from '../../../components/lazyImage/LazyImage'
import { WrapContent } from '../../../components/wrapContent/WrapContent'

const bem = 'hero'

const Hero = () => {

  const [query,setQuery]= useState('')
  const [background,setBackground]=useState('')

  const navigate = useNavigate()
  const {url} = useSelector(state=>state.home)

  const {data,loading}=customFetchData('/movie/upcoming')

  function handleSearch(e){
    if(e.key==='Enter'&&query.length>0){
       navigate(`search/${query}`)
    }
  }


  useEffect(()=>{
    const bgimage = url.backdrop+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
    setBackground(bgimage)
  },[data])

  return (
    <div className={bem}>
      {!loading&&<div className={`${bem}-backdrop-img`}>
        <LazyImage src={background}/>
      </div>}
      <div className={`${bem}-opacity-layer`}></div>
      <WrapContent>
        <div className={`${bem}-content`}>
          <span className={`${bem}-title`}>Welcome.</span>
          <span className={`${bem}-subtitle`}>
            Thousands of movies, TV shows and people to discover.Explore now.
          </span>
          <div className={`${bem}-input`}>
            <input type="text" 
              placeholder='search for a movie or tv show...'
              onChange={(e)=>{setQuery(e.target.value)}}
              onKeyUp={handleSearch}
            />
            <button>Search</button>
          </div>
        </div>
      </WrapContent>
    </div>
  )
}

export default Hero