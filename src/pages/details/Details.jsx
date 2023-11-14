
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import './detailsStyle.scss'

import React from 'react'
import customFetchData from '../../customHooks/customFetchData'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from './sliders/Similar'
import Recommendation from './sliders/Recommandation'



const Details = () => {
  const {mediaType,id} = useParams()
  const {data,loading} = customFetchData (`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading} = customFetchData(`/${mediaType}/${id}/credits`)
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details