
import './wrapContentStyle.scss'
import React from 'react'

export const WrapContent = ({children}) => {
  return (
    <div className='wrap-content'>
        {children}
    </div>
  )
}
