import React from 'react'

import OurAdvantagesCard from './OurAdvantagesCard'
function OurAdvantages() {
  const advantagesData = [
    {
      title: 'وش نقدم',
      subitems: [
        ' توصيل، استلام، حجز طاولة',
        'تتبع مسار السائق ',
        'سهولة بالإستخدام ',
      ],
    },
    {
      title: 'قيمنا',
      subitems: [
        'نلتزم بتوفير خدمات وحلول شاملة لمنفعة الجميع',
        'نسبة سعودة عالية للسائقين والموظفين',
        'سرعة تجاوب وخدمات مميزه للعملاء والبائعين والسائقين على مدار الساعة ',
      ],
    },
    // {
    //   title: "Secure and private",
    //   subitems: [
    //     "We encrypt all your data and transactions with SSL certificates.",
    //     "We comply with the GDPR and other data protection regulations.",
    //     "We respect your privacy and never sell or share your data with third parties.",
    //   ],
    // },
  ]

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

  const orderPoint = [
    {
      title: 'تسجيل الذواقة',
      subitems: ['سجل وأطلب وش ما كان وين ماكان يجيك للمكان اللي تبي'],
    },
    {
      title: 'نقاط الذويقه',
      subitems: [
        ' اجمع نقاط وتوصل مراحل متقدمة مع ذواقة إيتس و أحصل على وجبات مجانية وعروض حصرية كل ريال توصيل تحصل على نقطةVIP',
        'ذويق جديد فور التسجيل في التطبيق تحصل على عروض حصرية من إيتس',
        'ذويق فنان فقط كل م عليك جمع ١٠٠ نقطه',
        ' ذويق احترافي فقط عليك ان تجمع ١٠٠٠٠ نقطة وتحصل على طلبين مجانا وعروض لمدة ٣ اشهرVIP',
      ],
    },
    {
      title: 'نادي الذواقة',
      subitems: [
        'اشتراك في نادي رياضي لمدة ٣ اشهر عند جمع ١٥٠٠٠ تقطة',
        'رخصة قيادة سارية',
        'نوع المركبة',
        'مبلغ التأمين لأدوات جاهزة حفظة الحرارة والصديرية',
      ],
    },
  ]

  //   const detailsData = [
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     "Sed quis leo quis nisi consequat ullamcorper.",
  //     "Vestibulum vitae nisl quis lorem aliquet lacinia.",
  //   ];
  return (
    <>
      <div id="OurAdvantages" className="OurAdvantages">
        {/* Render the OurAdvantagesCard component with the example data */}
        <OurAdvantagesCard
          titleFirst="خدماتنا "
          titleHighlight="المميزة"
          advantages={advantagesData}
          // details={detailsData}
        />
      </div>

      <div id="driverSignup" className="OurAdvantages">
        {/* Render the OurAdvantagesCard component with the example data */}
        <OurAdvantagesCard
          titleFirst="شاركنا "
          titleHighlight="ياكابتن"
          advantages={driverSignup}
          // details={detailsData}
        />
      </div>

      <div id="orderPoint" className="OurAdvantages">
        {/* Render the OurAdvantagesCard component with the example data */}
        <OurAdvantagesCard
          titleFirst=" تسجيل"
          titleHighlight=" الذويقة"
          advantages={orderPoint}
          // details={detailsData}
        />
      </div>
    </>
  )
}

export default OurAdvantages
