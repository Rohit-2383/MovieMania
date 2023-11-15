
import React, { useEffect, useState } from 'react'
import { fetchData } from '../utils/apiSetup'

const CustomFetchData = (url) => {

    const [loading,setloading]=useState(null)
    const [data,setData]=useState(null)
    const [error,setError]=useState(null)

    useEffect(()=>{
        setloading("loadding...")
        setData(null)
        setData(null)

        fetchData(url)
            .then((res)=>{
                setloading(false)
                setData(res)
            })
            .catch((error)=>{
                setloading(false)
                setError('something went wrong')
            })  
    },[url])

    return {loading,data ,error}
   
}

export default CustomFetchData
