
import './App.scss'

import { useEffect } from 'react'
import { fetchData } from './utils/apiSetup'
import { useDispatch } from 'react-redux'
import { getApiConfig,getGenres } from './store/homeSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import Page404 from './pages/page404/Page404'

function App() {

const dispatch = useDispatch()

// testing api
useEffect(()=>{
  fetchApiConfig()
  callGenres()
},[])

  function fetchApiConfig(){
     fetchData('/configuration')
        .then((res)=>{
          const url ={
            backdrop:res.images.secure_base_url+"original",
            poster:res.images.secure_base_url+"original",
            profile:res.images.secure_base_url+"original"
          }
          dispatch(getApiConfig(url))
          console.log(url)
        })
  }

  async function callGenres(){
    let promises =[]
    let endpoints = ['tv','movie']
    let allGenres ={}

    endpoints.forEach(url=>{
      promises.push(fetchData(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)
    data.map(({genres})=>{
      genres.map(item=>{
        allGenres[item.id]=item
      })
    })
    
    dispatch(getGenres(allGenres))

    }

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/:mediaType/:id' element={ <Details/>}/>
            <Route path='/search/:query' element={ <SearchResult/>}/>
            <Route path='/explore/:mediaType' element={ <Explore/>}/>
            <Route path='*' element={ <Page404/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App
