import React from 'react'
// import Navbar from './components/Shared/Navbar';

// import Honors from './components/Honors';
// import Certs from './components/Certs';
// import Footer from './components/Footer';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import CardApp from '../CardApp';
import {Route, Switch} from "react-router-dom"
import Hiro from '../Hiro';
import Skills from '../Skills';
import ContactForm from '../ContactForm';
import AsNavFor from '../AsNavFor';
function Home() {
  return (
    <div>
    
      
       
       <Hiro/>
      <br/> 
      <CardApp/>
      <Skills/> 
      <AsNavFor/>
    <ContactForm/>
    </div>
  )
}

export default Home