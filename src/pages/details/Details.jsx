
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import './detailsStyle.scss'

import React from 'react'
import CustomFetchData from '../../customHooks/CustomFetchData'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from './sliders/Similar'
import Recommendation from './sliders/Recommandation'



const Details = () => {
  const {mediaType,id} = useParams()
  const {data,loading} = CustomFetchData (`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading} = CustomFetchData(`/${mediaType}/${id}/credits`)
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