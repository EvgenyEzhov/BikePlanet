import './Slicker.less'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.less"; 
import "slick-carousel/slick/slick-theme.less";
import { dataSpecialBike } from './data';

function Slicker() {
  /*function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }*/
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    //nextArrow: <SampleNextArrow />,
    //prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <div className='slicker'>
        <Slider {...settings}>
          {dataSpecialBike.map((item) => (
            <div className='prewievSlider'>
            <div className='prewievInfo'>
            <div className='prewievSlide1'>
              <div className='prewievLogo'><h1>{item.title}</h1></div>
              <div className='prewievText'>{item.description}</div>
                <input type="button" className="buttonInSlide"  value="Подробнее"/>
            </div>
            <div className='prewievSlide2'>
              <div className='prewievImage'>{item.image}</div>
              <div className='prewievImageInfo'><h4>{item.product_description}</h4></div>
              <div className='prewievFooter'>
                <div className='prewievFooterPrice'>
                  <div className='oldPrice'>{item.old_price}₽</div>
                  <div className='newPrice'>{item.new_prise}₽</div>
                </div>
                <div className='prewievFooterIcon'>
                <div className='heart'></div>
                <div className='bag'></div>
                </div>
              </div>
            </div>
            </div>
          </div>
          ))}          
        </Slider>
      </div>
    );
  };
  


export default Slicker;