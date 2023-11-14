
import './headerStyle.scss'

import React, { useState, useEffect } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { SlMenu } from "react-icons/sl"
import { VscChromeClose } from "react-icons/vsc"
import { useNavigate, useLocation } from "react-router-dom"


import logo from "../../assets/movix-logo.svg";
import { WrapContent } from '../wrapContent/WrapContent'


const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
      window.scrollTo(0,0)
    },[location])

    function navigateScroll(){
      if(window.scrollY>200){
        if(window.scrollY>lastScrollY&&!mobileMenu){
          setShow("hide")
        }
        else{
          setShow("show")
        }
      }
      else{
        setShow("top")
      }
      setLastScrollY(window.scrollY)
    }

    useEffect(()=>{
      window.addEventListener("scroll",navigateScroll)
      return ()=>{
        window.addEventListener("scroll",navigateScroll)
      }
    },[lastScrollY])

    function handleSearch(e){
    if(e.key==='Enter'&&query.length>0){
       navigate(`search/${query}`)
       setTimeout(()=>{
        setShowSearch(false)
       },1000)
    }
  }

  function handleNavigation(type){
    if(type==='movie'){
      navigate('/explore/movie')
    }else{
      navigate('/explore/tv')
    }
    setMobileMenu(false)
  }

    function openSearch(){
      setMobileMenu(false)
      setShowSearch(true)
    }

    function openMobileMenu(){
      setMobileMenu(true)
      setShowSearch(false)
    }

    return (
       <header className={`header ${mobileMenu?'mobile-view':''} ${show}`}>
        <WrapContent>
          <div 
          className="header-logo"
          onClick={()=>{
            navigate("/")
          }}
          >
            <img src={logo} alt="" />
          </div>
          <ul className="header-items">
            <li className="header-item" onClick={()=>handleNavigation('movie')}>Movies</li>
            <li className="header-item" onClick={()=>handleNavigation('tv')}>TV Shows</li>
            <li className="header-item">
              <HiOutlineSearch
              onClick={openSearch}
              />
            </li>
          </ul>
          <div className="header-mobile-menu-items">
            <HiOutlineSearch
             onClick={openSearch}/>
            {
              mobileMenu?(<VscChromeClose
              onClick={()=>setMobileMenu(false)}
              />):(<SlMenu
              onClick={openMobileMenu}/>)
            }
          </div>
        </WrapContent>
            {
              showSearch&&<div className="searchBar">
              <WrapContent>
                <div className="searchInput">
                   <input type="text" 
                   placeholder='search for a movie or tv show...'
                   onChange={(e)=>{setQuery(e.target.value)}}
                   onKeyUp={handleSearch}
                  />
                </div>
                <VscChromeClose
              onClick={()=>setShowSearch(false)}
              />
              </WrapContent>
            </div>
            }
       </header>
    );
};

export default Header;