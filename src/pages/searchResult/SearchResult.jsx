
import './searchStyle.scss'

import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import {fetchData} from "../../utils/apiSetup"
import { WrapContent } from '../../components/wrapContent/WrapContent'
import noResults from "../../assets/no-results.png"
import Spinner from '../../components/spinner/Spinner'
import MovieCard from '../../components/movieCard/MovieCard'

export const SearchResult = () => {
  const [data,setData] = useState(null)
  const [pageNum,setpageNum] = useState(1)
  const [loading,setloading] = useState(false)
  const {query} = useParams()
  
  const fetchInitData  = ()=>{
    setloading(true)
    fetchData(`/search/multi?query=${query}&page=${pageNum}`).then((res)=>{
      setData(res)
      setpageNum((prev)=>prev+1)
      setloading(false)
    })
  }

  const fetchNextData = ()=>{
      setloading(true)
    fetchData(`/search/multi?query=${query}&page=${pageNum}`).then((res)=>{
      if(data?.results){
        setData({...data, results:[...data?.results, ...res.results]
        })
      }else{
        setData(res)
      }
       setpageNum((prev)=>prev+1)
       setloading(false)
    })
  }

      useEffect(()=>{
        setpageNum(1)
      fetchInitData()
    },[query])

  return (
    <div className="searchResultsPage">
      {loading  &&  <Spinner initial={true}/>}
      {
        !loading && (
          <WrapContent>
            {
              data?.results?.length > 0 ? (
                <>
                  <div className="pageTitle">
                    {
                      `search ${data?.total_results>1? "results":"result"} of '${query}'`
                    }
                  </div>
                  <InfiniteScroll
                  className='content'
                  dataLength={data?.results?.length || []}
                  next={fetchNextData}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner/>}
                  >
                    {
                      data?.results.map((item,idx)=>{
                        if(item.media_type==='person') return
                        return (
                          <MovieCard key={idx} data={item} fromSearch={true}/>
                        )
                      })
                    }
                  </InfiniteScroll>
                </>
              ):(
                <span className='resultNotFound'>No results for {query} !!!</span>
              )
            }
          </WrapContent>
        )
      }
      
    </div>
  )
}

export default SearchResult
