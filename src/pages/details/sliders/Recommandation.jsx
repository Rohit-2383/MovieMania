import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import CustomFetchData from "../../../customHooks/CustomFetchData"

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = CustomFetchData(
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