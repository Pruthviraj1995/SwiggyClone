import React from "react";
import Slider from "react-slick";

import './SliderComp.scss';

//Slider Images
import sone from '../assets/slider_imgs/s1.jfif';
import stwo from '../assets/slider_imgs/s2.jfif';
import sthr from '../assets/slider_imgs/s3.jfif';
import sfour from '../assets/slider_imgs/s4.jfif';
import sfive from '../assets/slider_imgs/s5.jfif';
import ssix from '../assets/slider_imgs/s6.jfif';
import ssev from '../assets/slider_imgs/s7.jfif';
import seig from '../assets/slider_imgs/s8.jfif';
import snine from '../assets/slider_imgs/s9.jfif';
import sten from '../assets/slider_imgs/s10.jfif';

  const SliderComp = () => {

  const slideimgs = [sone, stwo, sthr, sfour, sfive, ssix, ssev, seig, snine, sten];

    var settings = {
      // dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider">
        <Slider {...settings}>
            {
              slideimgs.map((img, i) => (
              <div key={i}>
                <h3><img src={img} alt="" className="imgg" /></h3>
              </div>
              ))
            }      
           
            {/* <div>
                <img src={sone} alt="" className="imgg" />
              </div>
              <div>
                <img src={stwo} alt="" className="imgg" />
              </div>
              <div>
                <img src={sthr} alt="" className="imgg" />
              </div>
              <div>
                <img src={sfour} alt="" className="imgg" />
              </div> */}
        </Slider>
      </div>
    );
  }


export default SliderComp;
