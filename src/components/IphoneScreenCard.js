import iphoneBg from '../assets/car-frame.png'
import eatsSplashScreen from '../assets/c1.jpg'
import React, { useEffect } from 'react'

function IphoneScreenCard() {
  // useEffect(() => {
  //     $(".owl-carousel").owlCarousel({
  //       items: 1,
  //       loop: true,
  //       autoplay: true,
  //       autoplayTimeout: 3000,
  //       dots: false,
  //       nav: true,
  //       navText: ["<", ">"],
  //       margin: 10,
  //       center: true,
  //     });
  //   }, []);

  // Define a custom style object for the carousel
  const style = {
    width: '300px',
    height: '600px',
    backgroundImage: `url(${iphoneBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const imgStyle = {
    objectFit: 'cover',
    width: '260px',
    height: '495px',

    margin: 'auto', // This will center the image horizontally and vertically
    mt: '200px', // This will move the image down by 3000 pixels
    border: '5px solid black', // This will add a white border around the image
    objectFit: 'cover',
  }

  // Define a custom style object for the images

  return (
    // <div  classNameNameNameName=" p-3 text-center justify-center bg-yellow-300 border-dark-300 dark:bg-dark-500 rounded-md flex flex-col h-30">
    //         <img src={iphoneBg} classNameNameNameName="w-29 max-h-29 mx-auto rounded-lg" alt={props.name}></img>
    //         <div classNameNameNameName="">
    //             <h1 classNameNameNameName="font-bold text-black dark:text-white  md:text-xl">{props.name}</h1>
    //             <p classNameNameNameName="font-light text-gray-400  md:text-lg">{props.experience} </p>
    //         </div>

    <div className="owl-carousel" style={style}>
      <br />
      <br />
      <br />
      <img className="rounded-lg" src={eatsSplashScreen} style={imgStyle} />
    </div>
  )
}

export default IphoneScreenCard
