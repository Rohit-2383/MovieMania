
import './genresStyle.scss'

import React from 'react'
import { useSelector } from 'react-redux'

 const Genres = ({data}) => {
    const {genres} = useSelector(state=>state.home)
  return (
    <div className="genres">
        {
            data?.map((g,i)=>{
                return (
                    <div  key={i}
                    className="genre">
                        {genres[g]?.name}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Genres
