import React from 'react';

import './FoodCard.scss';

const FoodCard = (props) => {
    const details = props.carddetail;

    return(
            <div className="cardview">
                <img src={details.img} alt="" className="foodimg"/>
                <div className="restaurant">
                    <span>
                    {details.restaurant}
                    </span>
                    <span>
                    {details.dishes}
                    </span>
                </div>
                <div className="pricetag">
                    <div className="ratings">
                      <span>&#9733;</span>
                      <span>{details.ratings}</span>
                    </div>
                    <span>&#8226;</span>
                    <span>{details.delay} MINS</span>
                    <span>&#8226;</span>
                    <span>${details.price} FOR TWO</span>
                </div>
                <div className="offerstag">
                    <span><img src={details.offerimg} alt="" className="offerimg" /></span>
                    <span>50% off |</span>
                    <span>&nbsp;Use coupon WELCOME50</span>
                </div>
                <div className="quickview">QUICK VIEW</div>
            </div>
        // ))
    )
}

export default FoodCard;