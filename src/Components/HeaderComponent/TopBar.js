import React from 'react';

//Logo
import swicon from '../assets/logos/swicon.png';

import downarrow from '../assets/logos/icons8-expand-arrow-50.png'

//TopBar Icons
import search from '../assets/topnav_icons/search.jpg';
import offer from '../assets/topnav_icons/per.png';
import help from '../assets/topnav_icons/help.png';
import login from '../assets/topnav_icons/login.png';
import cart from '../assets/topnav_icons/cart.png'

import './TopBar.scss';

const TopBar = () => {
    
    const options = [
        {
            icon: search,
            label: "Search"
        },
        {
            icon: offer,
            label: "Offers"
        },
        {
            icon: help,
            label: "Help"
        },
        {
            icon: login,
            label: "Pruthviraj"
        },
        {
            icon: cart,
            label: "Cart"
        }
    ];


    return(
        <div className="topbar">
            {/* <div className="topbar-nav"> */}
                <div className="topbar-logoloc">
                    <div className="swiggylogo">
                        <a href="/">
                            <img src={swicon} alt="" className="swiggylogo-icon"/>
                        </a>
                    </div>
                    <div className="location">
                         {/* <select >
                        { 
                        areas.map((loc, i) => (
                            <option key={i} value={loc.value}>
                                <a href="/" className="areaname" >{loc.area}</a>
                                <span className="cityname" >{loc.city}</span>
                            </option>
                        ))
                        }
                        </select>  */}
                        <span className="areaname" >Jayanagar</span>
                        <span className="cityname" >Bengaluru, Karnataka, India</span>
                        <span className="downarrow"><img src={downarrow} alt="" className="downarrowimg"/></span>
                    </div>
                </div>
                <div className="topbar-options">
                    {
                        options.map((opt, i) => (
                            <a href="/" key={i} className="topbar-options-items">
                                <span><img src={opt.icon} alt="" className="navicon"/></span>
                                <span>{opt.label}</span>
                            </a>
                        ))
                    }
                </div>
            {/* </div> */}
        </div>
    )
}

export default TopBar;