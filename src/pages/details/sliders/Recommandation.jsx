import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import customFetchData from "../../../customHooks/customFetchData"

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = customFetchData(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;