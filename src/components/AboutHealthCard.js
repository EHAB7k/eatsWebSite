import React from 'react';
import 'tailwindcss/tailwind.css';

export default function AboutHealthCard(props){
  // use destructuring assignment to get props
  const { titleFirst, titleHighlight, items } = props;
  return (
    // use flexbox to create a flexible layout
    // use border-style and border-color to change the border appearance
    <div className="card-container dark:bg-dark-300 flex flex-col shadow-lg rounded-lg transform hover:scale-105 transition duration-300 p-4 m-4  ">

     
      <header className="text-center text-black mb-5  dark:text-gray-400 rounded-md bg-gradient-to-r  p-2">
        <h1 className="mt-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white"> {titleFirst}<span className="text-purple-600 dark:text-purple-500">{titleHighlight}</span> </h1>
      </header>
      
      
      <ul dir='rtl' className="pl-5 mt-1 mr-10 space-y-1 pl-5 mt-2 space-y-1 list-disc list-inside w-80vw  ">
        {/* map over items array and add key prop */}
        
        {items.map(name => (
          <li key={name} className="   text-black hover:scale-105 transition duration-300 dark:text-white">{name}</li>
        ))}
      </ul>
    </div>
  )
}
