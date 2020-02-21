import React from 'react';

import swg from '../../assets/logos/swg.jfif';
import sup from '../../assets/logos/swgsu.png';
import '../ButtonComponent/ButtonComp.scss'

import './IntroComp.scss';

const IntroComp = (props) => {
    const introdetails = [{
        introimg: swg,
        introtitle: "Introducing Swiggy Pop",
        introdesc: "Single Serve Meals, Free Delivery, No Extra Charges",
        buttons: "ORDER NOW"
    },
    {
        introimg: sup,
        introtitle: "Introducing Swiggy SUPER",
        introdesc: "The membership program you've been waiting for. Grab it at unbelievable introductory prices!",
        buttons: "GET SUPER NOW"
    }
];

    return(
        <div className={props.cnamee? "introcomp pagefixedd" : "introcomp"}>
            {
                introdetails.map((indet, i) => (
                    <div className="introdetails" key={i}>
                        <span><img src={indet.introimg} className="introimg" alt=""/></span>
                        <div className="introcontent">
                            <span className="introtitle">{indet.introtitle}</span>
                            <span className="introdesc">{indet.introdesc}</span>
                        </div>
                        <div className="button introbtn">{indet.buttons}</div>
                    </div>   
                ))
            }
        </div>
    )
}

export default IntroComp;