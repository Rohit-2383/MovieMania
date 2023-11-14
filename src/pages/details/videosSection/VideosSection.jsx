
import React, { useState } from "react";

import "./videosSectionStyle.scss";
import {WrapContent}from "../../../components/wrapContent/WrapContent"
import LazyImage from "../../../components/lazyImage/LazyImage";
import { PlayIcon } from "../PlayBtn";
import VideoPopper from "../../../components/videopopper/VideoPopper";


const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <WrapContent>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {
                            data?.results.map((video)=>(
                                <div 
                                key={video.id}
                                className="videoItem"
                                onClick={()=>{
                                    setVideoId(video.key)
                                    setShow(true)
                                }}>
                                    <div className="videoThumbnail">
                                        <LazyImage src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}/>
                                        <PlayIcon/>
                                    </div>
                                    <div className="videoTitle">
                                        {video.name}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </WrapContent>
            <VideoPopper
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;