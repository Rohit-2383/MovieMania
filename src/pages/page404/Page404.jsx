import React from "react";

import "./style.scss";

import { WrapContent } from "../../components/wrapContent/WrapContent";

const Page404 = () => {
    return (
        <div className="pageNotFound">
            <WrapContent>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </WrapContent>
        </div>
    );
};

export default Page404;