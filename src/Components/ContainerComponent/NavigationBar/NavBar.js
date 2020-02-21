import React from 'react';

import './NavBar.scss';
import '../ButtonComponent/ButtonComp.scss';

const NavBar = (props) => {
       
    return(
        <div className={props.cnamee? "navbar pagefixed" : "navbar"} >
            {
                props.menudata.map((menu, i) => (
                    <div className={props.active===menu.label ? "button selected" : "button menubtn"} onClick={() => props.handleClick(menu)} key={i}>
                        <div className="menu-img"> 
                            <img src={props.active===menu.label ? menu.menuoption.icona : menu.menuoption.icon} alt="" className="navimg"/>
                        </div>
                        <div className="menu-content">
                            <span className="menu-title">{menu.menuoption.option}</span> 
                            <span className="menu-desc">{menu.carddetails.length+" "}OPTIONS</span>
                       </div>
                    </div>  
                ))
            }
        </div>
    );   
}

export default NavBar;