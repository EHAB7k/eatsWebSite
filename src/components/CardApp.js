import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruck,faDollarSign,faThumbsUp,faHeadset,faLocation,faCar,faHandshake,faUtensils } from '@fortawesome/free-solid-svg-icons'
// faForkKnife
function CardApp() {
  return (
    <div dir='rtl' className=' gap-5  flex flex-col justify-center md:flex-row' id="certdApp">
     {/* <a
  className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
  href="#"
>
  <div className="pt-4 text-gray-500">
     <svg
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg> 

     <h3 className="mt-4 text-lg font-bold text-black sm:text-xl">
    Ontime Delivery
    </h3>

    <p className="mt-2 hidden text-sm sm:block">
    Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt.
    </p>
  </div>

  <span
    className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
  >
    4.3
  </span> 
 </a>
<br/>
<a
  className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
  href="#"
>
  <div className="pt-4 text-gray-500"> 
     <svg
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg> 

     <h3 className="mt-4 text-lg font-bold text-black sm:text-xl">
    Free Delivery Cost
    </h3>

    <p className="mt-2 hidden text-sm sm:block">
    Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt.
    </p>
  </div> 

  <span
    className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
  >
    4.3
  </span> 
</a>
<br/>
<a
  className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
  href="#"
>
  <div className="pt-4 text-gray-500">
     <svg
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg> 

    <h3 className="mt-4 text-lg font-bold text-black sm:text-xl">
    Best Quality Food
    </h3>

    <p className="mt-2 hidden text-sm sm:block">
    Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt.
    </p>
  </div>

   <span
    className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
  >
    4.3
  </span> 
</a>
<br/>
<a
  className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
  href="#"
>
  <div className="pt-4 text-gray-500">
     <svg
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      ></path>
    </svg> 

    <h3 className="mt-4 text-lg font-bold text-black sm:text-xl">
    Support
    </h3>

    <p className="mt-2 hidden text-sm sm:block">
    Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt.
    </p>
  </div>

   <span
    className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
  >
    4.3
  </span> 
</a>  */}


{/* <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
<FontAwesomeIcon icon={faTruck} size="2xl"  style={{color: "#f5ec00",mt:"5px",mb:"9px",marginLeft:"40%"}} />

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Ontime Delivery</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt.</p>
</a> */}
<a href="#OurAdvantages" className="block max-w-sm p-6 bg-white dark:bg-yellow-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
<FontAwesomeIcon icon={faThumbsUp} size="2xl"  style={{color: "#000",mt:"5px",mb:"9px",marginLeft:"40%"}} />
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"> خدامتنا المميزة</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"></p>
</a>
<a href="#" className="block dark:bg-yellow-300 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
<FontAwesomeIcon icon={faUtensils} size="2xl" style={{color: "#000",mb:"5px",mt:"1px",marginLeft:"40%"}} />
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">عملاء برنامج الذويقة</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"></p>
</a>

<a href="#" className="block dark:bg-yellow-300 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
<FontAwesomeIcon icon={faHeadset} size="2xl" style={{color: "#000",mb:"5px",mt:"1px",marginLeft:"40%"}} />
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">الدعم تقني مباشر</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"></p>
</a>
<a href="#" className="block dark:bg-yellow-300 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
<FontAwesomeIcon icon={faHandshake} size="2xl" style={{color: "#000",mb:"5px",mt:"1px",marginLeft:"40%"}} />
    <h5 className="mb- text-2xl font-bold tracking-tight text-gray-900 dark:text-black">شاركناالنجاح</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"></p>
</a>
 <a href="#" className="block max-w-sm p-6 dark:bg-yellow-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 "> 
<FontAwesomeIcon icon={faCar} size="2xl"  style={{color: "#000",mt:"5px",mb:"9px",marginLeft:"40%"}}/>

    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">شاركنا ياكابتن</h3>
    
    <p className="font-normal text-gray-700 dark:text-gray-400"></p>
 </a>



{/* <a href="#" className="block dark:bg-yellow-300 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
<FontAwesomeIcon icon={faLocation} size="2xl" style={{color: "#000",mb:"5px",mt:"1px",marginLeft:"40%"}} />
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">تتبع الطلب</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"></p>
</a> */}







</div>





  )
}

export default CardApp