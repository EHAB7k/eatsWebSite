import OurAdvantagesCard from './OurAdvantagesCard'
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import googleplay from '../assets/google.svg'
import appleStory from '../assets/apple_appstore-ar21.svg'
function SlowerExample() {
  const [flip, setFlip] = useState(false)

  const driverSignup = [
    {
      title: 'التسجيل للسائق',
      subitems: [
        'مستحقاتك ما تطول من يومين لأسبوع توصل',
        'تتبع مسار السائق ',
        'تواصل سريع وفعال ودعم السائقين على طول شغال',
      ],
    },
    {
      title: 'شروط التسجيل',
      subitems: [
        ' هوية سارية',
        'رخصة قيادة سارية',
        'نوع المركبة',
        'مبلغ التأمين لأدوات جاهزة حفظة الحرارة والصديرية',
      ],
    },
  ]

  return (
    <ReactCardFlip
      isFlipped={flip}
      // flipDirection="vertical"

      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
    >
      <div
        onClick={() => setFlip(!flip)}
        id="driverSignup"
        className="OurAdvantages"
        style={{ cursor: 'pointer' }}
      >
        {/* Render the OurAdvantagesCard component with the example data */}
        <OurAdvantagesCard
          titleFirst="شاركنا "
          titleHighlight=" ياكابتن"
          advantages={driverSignup}
          // details={detailsData}
        />{' '}
      </div>
      <div
        dir="rtl"
        onClick={() => setFlip(!flip)}
        className="flex flex-col gap-6  justify-center items-center align-middle h-1/2 w-40% text-center text-gray-500 dark:text-gray-400 mt-5 mb-40 shadow-lg rounded-lg dark:bg-dark-300"
      >
        <h1 className="mt-5 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-2xl dark:text-white">
          مرحباً يا كابتن! اضغط على المتجر الذي ترغب في الذهاب إليه
        </h1>
        <div className="flex  gap-6  mt-8 mb-20">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={googleplay}
              className="w-17 h-9 mr-4"
              alt="Google Play Store"
            />
          </a>
          <a
            href="https://www.apple.com/ios/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appleStory} className="w-17 h-9" alt="Apple App Store" />
          </a>
        </div>
      </div>
    </ReactCardFlip>
  )
}

export default SlowerExample
