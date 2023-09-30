
import './heroStyle.scss'

import React from 'react'

const bem = 'hero'

const Hero = () => {
  return (
    <div className={bem}>
      <div className={`${bem}-wrapper`}>
        <div className={`${bem}-content`}>
          <span className={`${bem}-title`}></span>
          <span className={`${bem}-subtitle`}>
            Thousands of movies, TV shows and people to discover.Explore now.
          </span>
          <div className={`${bem}-input`}>
            <input type="text" 
              placeholder='search for a movie or tv show...'
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero