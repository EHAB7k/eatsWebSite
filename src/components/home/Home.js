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
import IphoneScreenShot from '../IphoneScreenShot';
import IphoneScreenCard from '../IphoneScreenCard';
import AboutHealth from '../AboutHealth';
import OurAdvantagesCard from '../OurAdvantagesCard';
import OurAdvantages from '../OurAdvantages';
function Home() {
  return (
    <div className='px-6 lg:px-20 xl:px-36 '>
    
      
       
       <Hiro/>
      <br/> 
      <CardApp/>
      {/* <Skills/>  */}
      <AboutHealth/>
      <AsNavFor/>

    <OurAdvantages/>
    <ContactForm/>

    {/* <IphoneScreenCard/> */}
    {/* <IphoneScreenShot/> */}
    <br/> 
    <br/> 
    </div>
  )
}

export default Home