import React from 'react';
import {Helmet} from "react-helmet";

const PageTitle = ({text = "title"}) => {
    return (
        <Helmet>
            <title>Sapopsa - {text}</title>
        </Helmet>
    );
};

export default PageTitle;