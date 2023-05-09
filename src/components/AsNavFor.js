

import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QrCard from "./QrCard.js"
import eats from '../assets/eats-logorbg.png';
import qr from '../assets/frame.png';
import eatsCustomerApple from "../assets/EatsCustomerApple.png"
import eatsDriverAndroid from "../assets/EatsDriverAndroid.png"
import eatsDriverApple from "../assets/EatsDriverApple.png"
import eatsAndroidRestaurant from "../assets/EatsAndroidRestaurant.png"
import eatsRestaurantApple from "../assets/EatsRestaurantApple.png"


export default function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  const SampleNextArrow = (props) => {
    const { className, onClick } = props
    return (
        <div 
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faAngleRight}
                color="#000"
                size="2x"
            />
        </div>
    );
}

const SamplePrevArrow = (props) => {
    const { className, onClick } = props
    return (
        <div 
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faAngleLeft}
                color="#000"
                size="2x"
            />
        </div>
    );
}
  const settings = {
    dots: true,
    //autoplay: true,
    infinite: true,
    slidesToShow: 1,
    speed: 2000,
    slidesToScroll: 1,
    
         nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
  };

  return (
    <div >
      {/* <h2>Slider Syncing (AsNavFor)</h2> */}
      <br/>
      <br/>
      <h1 dir="rtl" className="text-2xl text-black font-bold">اذا حاب تحمل التطبيق عن طريق الباركود   </h1>
     
      <p dir="rtl" className="font-light text-gray-400">قم ب مسح الباركود</p>


      <Slider asNavFor={nav2} ref={slider1}   >
        
        
        <div>
          {/* <h3 className="text-center text-2xl text-black font-bold">ايتس العميل اندرويد</h3> */}
        </div>
        <div>
        {/* <h3 className="text-center">ايتس العميل ابل</h3> */}
          
        </div>
        <div>
         
          {/* <h3 className="text-center">المطعم اندرويد</h3> */}
        </div>
        <div>
          
          {/* <h3 className="text-center">المطعم ابل</h3> */}
        </div>
        <div className="text-center">
          {/* <h3>السائق اندرويد</h3> */}
        </div>
        <div className="text-center">
          {/* <h3>السائق ابل</h3> */}
        </div>
      </Slider>
      
      <Slider
        asNavFor={nav1}
        ref={slider2}
        // slidesToShow={3}
        // swipeToSlide={true}
        // focusOnSelect={true}
        {...settings}
      >
          
              
          <QrCard name="ايتس العميل" experience="اندرويد" img={qr} />
              <QrCard name="ايتس العميل" experience="ابل" img={eatsCustomerApple} />
               
              <QrCard name="ايتس المطعم" experience="اندرويد" img={eatsAndroidRestaurant} />
              <QrCard name="ايتس المطعم" experience="ابل" img={eatsRestaurantApple} />

               
              <QrCard name="ايتس السائق" experience="اندرويد" img={eatsDriverAndroid} />
              <QrCard name="ايتس السائق" experience="ابل" img={eatsDriverApple} />
        </Slider>
      </div>

)
}