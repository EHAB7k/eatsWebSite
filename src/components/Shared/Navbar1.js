// import logo from '../assets/logo.svg';
// import logo1 from '../assets/free-logo.png';
//  import resume from "src/assets/resume.pdf"
import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import eatslogo from '/Users/ehabhakmi/Desktop/eats-ab-us/src/assets/eats-logorbg.png'

import { useState, useEffect } from 'react'
import { refresh } from 'aos'
export default function Navbar() {
  // function to toggle dark mode
  const [isOpen, setIsOpen] = useState(false)

  const toggleDarkMode = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <div className="fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 ">
      <div className="flex justify-between items-center text-white">
        <img
          className="App-logo w-12 "
          alt="Eats"
          style={{ width: '85px' }}
          src={eatslogo}
        />

        <h1>EN/AR</h1>
        {/* <button onClick={toggleDarkMode} type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    dark/light
                </button> */}
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#ContactForm" className="hover:underline">
              الاسئلة الشائعة
            </a>
          </li>

          <li className="p-4">
            <a href="#ContactForm" className="hover:underline">
              الشروط والاحكام{' '}
            </a>
          </li>

          <li className="p-4">
            <a href="#ContactForm" className="hover:underline">
              الخصوصية{' '}
            </a>
          </li>
          <li className="p-4">
            <a href="#ContactForm" className="hover:underline">
              اتصل بنا
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:underline">
              تحميل التطبيق
            </a>
          </li>
          <li className="p-4">
            <a href="#OurAdvantages" className="hover:underline">
              مميزاتنا
            </a>
          </li>
          <li className="p-4">
            <a href="#home" className="hover:underline">
              من نحن
            </a>
          </li>

          {/* <li className="p-4"><a href="#honors" className="hover:underline">Honor & Awards</a></li>  */}
          {/* <li className="p-4"><a href="#certs" className="hover:underline">dev3</a></li> */}
          <Link to="/" className="nav-link">
            <li className="p-4">
              <a className="hover:underline">الرائيسية</a>
            </li>
          </Link>
        </ul>
        <button
          onClick={toggleDarkMode}
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          dark/light
        </button>
        {/* <a href={""} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Inventory</a> */}
        <Link to="/inventory" className=" "></Link>
        {/* <NavLink to="/"exact={true}>Home</NavLink> */}
        {/* <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
        </div> */}
      </div>
    </div>
  )
}
