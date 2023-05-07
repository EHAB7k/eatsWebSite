// import logo from '../assets/logo.svg';
// import logo1 from '../assets/free-logo.png';
//  import resume from "src/assets/resume.pdf"
import { Link, NavLink } from "react-router-dom"
import React from 'react'
export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
                {/* <img className="App-logo w-10 text-white " alt="EN/AR" /> */}

                <h1>EN/AR</h1>
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#ContactForm" className="hover:underline">الشروط والاحكام </a></li> 

            <li className="p-4"><a href="#ContactForm" className="hover:underline">الخصوصية </a></li> 
            <li className="p-4"><a href="#ContactForm" className="hover:underline">اتصل بنا</a></li> 
            <li className="p-4"><a href="#skills" className="hover:underline">تحميل التطبيق</a></li> 
            <li className="p-4"><a href="#certdApp" className="hover:underline">مميزاتنا</a></li> 
            <li className="p-4"><a href="#home" className="hover:underline">من نحن</a></li>

            {/* <li className="p-4"><a href="#honors" className="hover:underline">Honor & Awards</a></li> */}
            {/* <li className="p-4"><a href="#certs" className="hover:underline">dev3</a></li> */}
            <NavLink to="/" className="nav-link" exact={true}><li className="p-4"><a className="hover:underline">الرائيسية</a></li></NavLink>

            </ul>
            {/* <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Inventory</a> */}
            <NavLink to="/inventory" className="bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4" >الاستثمار</NavLink>
            {/* <NavLink to="/"exact={true}>Home</NavLink> */}
            
            
        </div>
    </div>
    )
}
