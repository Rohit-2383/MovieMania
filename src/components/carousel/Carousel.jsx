  import './carouselStyle.scss';

import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { WrapContent } from '../wrapContent/WrapContent';
import LazyImage from '../../components/lazyImage/LazyImage'
import PosterFallback from "../../assets/no-poster.png";
import Rating from '../rating/Rating';
import Genres from '../genres/Genres';


const Carousel = ({data,loading}) => {

    const carosuelContainer = useRef()
    const navigate = useNavigate()
    const {url} = useSelector(state=>state.home)

    function handleNavigate(dir){
        const container = carosuelContainer.current

        const scrollupto = dir === 'left'? container.scrollleft - (container.offsetWidth -20):(container.offsetWidth +20)

        container.scrollTo({
            left:scrollupto,
            behavior:'smooth'
        })
    }

    function skeletonItem(){
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton">
                    <div className="textBlock">
                        <div className="title skeleton"></div>
                        <div className="date skeleton"></div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className='carousel'>
        <WrapContent>
            <BsFillArrowLeftCircleFill
                className='carouselLeftNav  arrow'
                onClick={()=>handleNavigate('left')}
            />
            <BsFillArrowRightCircleFill
                className='carouselRightNav arrow'
                onClick={()=>handleNavigate('right')}
            />
            {
                !loading?(
                    <div className='carouselItems' ref={carosuelContainer}>
                        {
                            data?.map(item=>{
                                const posterURL = item.poster_path?
                                        url.poster+item.poster_path:PosterFallback
                                return (
                                    <div className='carouselItem'
                                    key={item.id}
                                    onClick={()=>navigate(`/${item.media_type}/${item.id}`)}
                                    >
                                     <div className='posterBlock'>
                                        <LazyImage src={posterURL}/>
                                        <Rating rating={item.vote_average.toFixed(1)}/>
                                        <Genres data= {item.genre_ids.slice(0,2)}/>
                                     </div>
                                     <div className="textBlock">
                                        <span className='title'>
                                            {item.title || item.name}
                                        </span>
                                        <span>
                                            {dayjs(item.release_Date).format('MMM D, YYYY')}
                                        </span>
                                     </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ):(
                    <div className="loadingSkeleton">
                        {skeletonItem()}
                        {skeletonItem()}
                        {skeletonItem()}
                        {skeletonItem()}
                        {skeletonItem()}
                        {skeletonItem()}
                    </div>
                )
            }
        </WrapContent>
    </div>
  )
}

export default Carousel