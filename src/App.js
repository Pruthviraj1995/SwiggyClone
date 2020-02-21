import React, { useEffect, useState,useRef } from 'react';
import './App.css';

import TopBar from './Components/HeaderComponent/TopBar';
import SliderComp from './Components/SliderComponent/SliderComp';
import Container from './Components/ContainerComponent/Container';


function App() {

  const [cname, setCName] = useState(false);

  const pageRef=useRef();

  useEffect(()=>{
    pageRef.current.addEventListener('scroll',(e) => {  
      // console.log(cname,e.target.scrollTop)
      if (e.target.scrollTop >= 342 ) {
        // console.log('fixnav')
        setCName(true);
      } else if(e.target.scrollTop < 342 ) {
        // console.log('nav')
        setCName(false);
      }
    })
  },[])
 
  return (
    <div className="App">

      <TopBar />
      <div className="page" ref={pageRef}>
        <SliderComp />
        {/* <ButtonComp /> */}
        <Container scrolled={cname}/>
      </div>

    </div>
  );
}

export default App;
