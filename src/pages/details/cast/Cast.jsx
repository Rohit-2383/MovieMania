import React from "react";
import { useSelector } from "react-redux";

import "./castStyle.scss";

import {WrapContent}from "../../../components/wrapContent/WrapContent"
import LazyImage from "../../../components/lazyImage/LazyImage";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="castSection">
                <WrapContent>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className="listItems">
                        {
                            data?.map((item)=>{
                                let imgURL = item.profile_path ? url.profile + item.profile_path:avatar
                                return(
                                    <div key={item.id}
                                    className="listItem">
                                        <div className="profileImg">
                                            <LazyImage
                                             src={imgURL}/>
                                        </div>
                                        <div className="name">
                                            {item.name}
                                        </div>
                                        <div className="character">
                                            {item.character}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </WrapContent>
        </div>
    );
};

export default Cast;