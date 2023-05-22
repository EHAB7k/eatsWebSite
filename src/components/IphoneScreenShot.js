import React from "react";
import iphoneBg from "../assets/car-frame.png"
import eatsSplashScreen from "../assets/c1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import IphoneScreenCard from "./IphoneScreenCard";
function IphoneScreenShot() {

    const SampleNextArrow = (props) => {
        const { className, onClick } = props
        return (
            <div 
                className={className}
                onClick={onClick}
            >
                <FontAwesomeIcon
                    icon={faAngleRight}
                    color="#434343"
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
                    color="#434343"
                    size="2x"
                />
            </div>
        );
    }


    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        speed: 2000,
        slidesToScroll: 1,
        //    nextArrow: <SampleNextArrow/>,
        //   prevArrow: <SamplePrevArrow/>,
        
      };
      const style = {
    
        width: "300px",
        height: "600px",
        backgroundImage: `url(${iphoneBg})`,
         backgroundSize: "cover",
        backgroundPosition: "center",
      };
      const imgStyle = {
        objectFit: "cover",
        width: "260px",
        height: "450px",
        
        margin: "auto", // This will center the image horizontally and vertically
        mt: "200px", // This will move the image down by 3000 pixels
        // This will add a white border around the image
        objectFit: "cover",
         
    
        };
 

  return (
    <div id="iphoneScreen" className="mt-4 text-white ">
            <div >
            {/* <h1 className="text-2xl text-black dark:text-white font-bold">تحميل التطبيقات</h1>
            <p className="font-light text-gray-400">للتحميل فقط اضغط على التطبيق المراد تحميلة</p> */}
            </div>
            <div className="" style={style}>
                <br/>
                <br/>
                <br/>
                <Slider {...settings}
                style={imgStyle}
                >
                    
                    
                <img className="rounded-lg" src={eatsSplashScreen}  />
                <img className="rounded-lg" src={eatsSplashScreen}/>
              
                </Slider>
            </div>
            {/* <img src={hr} className="w-full mt-8 md:h-3" alt="hr" /> */}
        </div>
  );
}

export default IphoneScreenShot;
