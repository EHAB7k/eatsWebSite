import React from 'react'
import buttonStyle from './ButtonQ.css'
function MassageAndVi() {
  return (
    <>
      <div dir="rtl" className="gap-5  flex flex-row justify-center m-20">
        <div
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-dark-300 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          {/* <mark className=" block p-2 bg-yellow-300 dark:bg-yellow-300 text-center text-lg  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            رسالتنا
          </mark> */}
          <button className="buttonMV buttonMV:hover text-lg grid grid-cols-3 gap-4 place-items-center">
            رسالتنا
          </button>
          <p className="font-normal text-gray-700 dark:text-gray-400 m-auto mt-5">
            استخدام الموارد البشرية والمالية والتقنية وبناء الخطط الاستراتيجية
            والتسويقية لنجعل التطبيق الوجهة الأولى للعملاء
          </p>
        </div>

        <div
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-dark-300 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <button className="buttonMV buttonMV:hover text-lg grid grid-cols-3 gap-4 place-items-center">
            رؤيتنا
          </button>

          <p className="font-normal text-gray-700 dark:text-gray-400 m-auto">
            أن تكون شركة توصيل الخليجية صانعة للحلول والاستثمار بها من خلال
            التقنيات الحديثة التي من شأنها أن تقود نشاط الخدمات في قطاع الأغذية
            والمشروبات في المملكة العربية السعودية والخليج وتوفر أبرز
            احتياجاتهم.
          </p>
        </div>
      </div>
    </>
  )
}

export default MassageAndVi
