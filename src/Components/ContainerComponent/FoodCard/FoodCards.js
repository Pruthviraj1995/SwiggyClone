import React from 'react';

import FoodCard from './FoodCard';

const FoodCards = (props) => {

    return(
        <div>
            {
                <div>
                    <FoodCard carddetail = {props.carddetail} />
                </div>
            }
        </div>
    )
}

export default FoodCards;