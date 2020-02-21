import React from 'react';

import './TopHeading.scss';

const TopHeading  = (props) => {
    return(
        <div className="tophead">
            {props.heading}
        </div>
    )
}

export default TopHeading;