import React from 'react'
import ahmed from '../assets/ahmedAladem.jpg'
function PepoleMangament() {
  return (
    <>
      <h1
        dir="rtl"
        className="text-2xl text-black dark:text-white font-bold mb-5 mt-5"
      >
        {' '}
        اعضاء مجلس الادارة
      </h1>

      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-dark-300 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              نائب رائيس مجلس الادارة
            </h3>
            <p className="my-4">
              stc مدير ادارة المخاطر المؤسسية في شركة الاتصالات السعودية
            </p>
          </blockquote>
          <figcaption className="flex sm: items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div> فارس بن صالح القحطاني</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-dark-300 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 ">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              رائيس مجلس الادارة
            </h3>
            <p className="my-4">
              رائيس وعضو لعدد من مجالس الادارة ومستثمر في قطاع المطاعم
              والكافيهات و التصنيع والاستيراد ومستشار مشاريع وريادة الاعمال
              ودراسة الجدوى
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-12 h-12"
              src={ahmed}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white ">
              <div>احمد العديم</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-dark-300 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              عضو في مجلس الإدارة
            </h3>
            <p className="my-4">
              مستثمر في قطاع التجارة والصناعة قطاع الاغذية والمشروبات
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>عبدالعزيز محمد الماضي</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-dark-300 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              عضو في مجلس الإدارة
            </h3>
            <p className="my-4">
              خبير ومستثمر في مجال التطبيقات والمتاجر الإلكترونية والاستيراد من
              الصين
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>خالد علي الشليل</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-t border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-dark-300 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              عضو مجلس الإدارة
            </h3>
            <p className="my-4">
              مستثمر في قطاع المطاعم ومطور حلول تقنية وبرمجيات ومتخصص في
              استراتيجية المصادر وإدارة العقود
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>المهندس/سعيد مشرف الشاعر</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center border-b justify-center p-8 text-center bg-white border-b border-t border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-dark-300 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              عضو مجلس الإدارة
            </h3>
            <p className="my-4">
              مستشار إداري معتمد ومتخصص في مجال الدراسات والموارد البشرية
              ومستثمر في عدة قطاعات تجارية
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>عبدالله مؤيد الذيب</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>
        <figure className="col-span-2  flex-col items-center justify-center p-8 text-center bg-white border-b border-t border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-dark-300 dark:border-gray-700 basis-">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              امين مجلس الإدارة
            </h3>
            <p className="my-4">
              مستشار تجاري ومستثمر في قطاع الأغذية والمشروبات وعدد من الأنشطة
              المختلفة
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>فواز سراج العنزي</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>
      </div>

      <h1
        dir="rtl"
        className="text-2xl text-black dark:text-white font-bold mb-5 mt-5"
      >
        {' '}
        الادارة التنفيذية
      </h1>

      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-dark-300 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              نائب الرئيس التنفيذي
            </h3>
            <p className="my-4">مطور أعمال ومؤسس عدد من الكيانات والشركات</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>سليمان ناصر آل فواز</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-dark-300 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              الرئيس التنفيذي
            </h3>
            <p className="my-4">
              أدار وتقلد عدد من المنصاب القيادية بمختلف القطاعات الصحية والطيران
              والأغذية والمشروبات
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>المهندس/وائل عبدالكريم جاوا</div>
              <div className="text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default PepoleMangament
