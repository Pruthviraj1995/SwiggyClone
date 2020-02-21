import React from 'react';

import './ItemComponent.scss';
import TopHeading from '../TopHeading/TopHeading';
import FoodCards from '../FoodCard/FoodCards';

const ItemComponent = ({ data}) => {
    return (
        <div className="itemcomp">
            {
                data.map((cont, i) => (
                    <div id={cont.label} key={i}>
                        <TopHeading heading={cont.menuoption.option}/>
                        <div className="foodcards">
                        {cont.carddetails.map((card, i)=>(
                          <FoodCards carddetail={card} key={i}/>
                        ))}
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default ItemComponent;