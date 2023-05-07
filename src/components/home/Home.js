import React from 'react'
// import Navbar from './components/Shared/Navbar';

// import Honors from './components/Honors';
// import Certs from './components/Certs';
// import Footer from './components/Footer';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import CardApp from '/Users/ehabhakmi/Desktop/eats-ab-us/src/components/CardApp';
import {Route, Switch} from "react-router-dom"
import Hiro from '../Hiro';
import Skills from '../Skills';
import ContactForm from '../ContactForm';
function Home() {
  return (
    <div>
    <div className='px-6 lg:px-20 xl:px-36'>
      {/* <Navbar /> */}
       <Hiro/>
      <br/>
      {/* <CardApp/> */}
      <CardApp/>
      {/* <Skills />  */}
      <Skills/>
      
    </div>
    <ContactForm/>
    </div>
  )
}

export default Home