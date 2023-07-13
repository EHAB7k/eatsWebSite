import React, { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import QrCard from './QrCard.js'
import eats from '../assets/eats-logorbg.png'
import qr from '../assets/frame.png'
import eatsCustomerApple from '../assets/EatsCustomerApple.png'
import eatsDriverAndroid from '../assets/EatsDriverAndroid.png'
import eatsDriverApple from '../assets/EatsDriverApple.png'
import eatsAndroidRestaurant from '../assets/EatsAndroidRestaurant.png'
import eatsRestaurantApple from '../assets/EatsRestaurantApple.png'
import googleplay from '../assets/google.svg'
import appleStory from '../assets/apple_appstore-ar21.svg'

import {
  faAndroid,
  faGooglePay,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons'

export default function AsNavFor() {
  let element

  if (localStorage.theme === 'dark') {
    element = <h1>ehab hakami</h1>
  } else if (localStorage.theme === 'light') {
    element = <h1>ehab </h1>
  } else {
    ;<h1>hakami </h1>
  }

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  const slider1 = useRef()
  const slider2 = useRef()

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])
  const SampleNextArrow = (props) => {
    const { className, onClick } = props
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleRight} color="#434343" size="2x" />
      </div>
    )
  }

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleLeft} color="#434343" size="2x" />
      </div>
    )
  }
  const settings = {
    dots: true,
    //autoplay: true,
    infinite: true,
    slidesToShow: 2,
    speed: 2000,
    slidesToScroll: 2,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div>
      {/* <h2>Slider Syncing (AsNavFor)</h2> */}
      <br />
      <br />
      {/* <button onClick={toggleDarkMode} type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    dark/light
                </button> */}

      {/* {element} */}
      <h1 dir="rtl" className="text-2xl text-black dark:text-white font-bold">
        {' '}
        تحميل التطبيقات
      </h1>

      <p dir="rtl" className="font-light text-gray-400">
        اذا حاب تحمل التطبيق عن طريق الضغط على الباركود او عن طريق مسح الباركود
      </p>

      <Slider asNavFor={nav2} ref={slider1}>
        <div>
          {/* <h3 className="text-center text-2xl text-black font-bold">ايتس العميل اندرويد</h3> */}
        </div>
        <div>{/* <h3 className="text-center">ايتس العميل ابل</h3> */}</div>
        <div>{/* <h3 className="text-center">المطعم اندرويد</h3> */}</div>
        <div>{/* <h3 className="text-center">المطعم ابل</h3> */}</div>
        <div className="text-center">{/* <h3>السائق اندرويد</h3> */}</div>
        <div className="text-center">{/* <h3>السائق ابل</h3> */}</div>
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2}
        // slidesToShow={3}
        // swipeToSlide={true}
        // focusOnSelect={true}
        {...settings}
      >
        {/* <QrCard name="ايتس العميل" experience="اندرويد" img={localStorage.theme === 'dark'? qr : eatsRestaurantApple}/> */}
        <a href="https://play.google.com/store/apps/details?id=com.eatscustomer">
          {' '}
          <QrCard
            name="ايتس العميل"
            experience="اندرويد"
            platform="android"
            svgImageAndroid={googleplay}
            svgImageApple={appleStory}
            // img={qr}
          />
        </a>
        <a href="https://apps.apple.com/sa/app/eats-customer/id1576647819">
          {' '}
          <QrCard
            name="ايتس العميل"
            // img={eatsCustomerApple}
            experience="ابل"
            platform="apple"
            svgImageAndroid={googleplay}
            svgImageApple={appleStory}
          />
        </a>

        <a href=" https://play.google.com/store/apps/details?id=com.eatsrestaurant">
          <QrCard
            name="ايتس المطعم"
            experience="اندرويد"
            // img={eatsAndroidRestaurant}
            platform="android"
            svgImageAndroid={googleplay}
            svgImageApple={appleStory}
          />
        </a>
        <a href="https://apps.apple.com/us/app/eats-restaurant/id1576854640">
          {' '}
          <QrCard
            name="ايتس المطعم"
            experience="ابل"
            platform="apple"
            svgImageAndroid={googleplay}
            svgImageApple={appleStory}

            // img={eatsRestaurantApple}
          />
        </a>

        <a href="https://play.google.com/store/apps/details?id=com.eatsdriver ">
          <QrCard
            name="ايتس السائق"
            experience="اندرويد"
            // img={eatsDriverAndroid}
            platform="android"
            svgImageAndroid={googleplay}
            svgImageApple={appleStory}
          />
        </a>
        <a href="https://apps.apple.com/us/app/eats-driver/id1576880595">
          {' '}
          <QrCard
            name="ايتس السائق"
            experience="ابل"
            // img={eatsDriverApple}
            platform="apple"
            svgImageAndroid={googleplay}
            svgImageApple={appleStory}
          />{' '}
        </a>
      </Slider>
    </div>
  )
}
