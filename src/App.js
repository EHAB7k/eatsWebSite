import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Shared/Navbar'
// import Hiro from './components/hiro/Hiro';
import Skills from './components/Skills'
import Honors from './components/Honors'
import Certs from './components/Certs'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CardApp from './components/CardApp'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Inventory from './components/inventory/Inventory'
import Home from './components/home/Home'
import { createBrowserHistory } from 'history'
import { useState } from 'react'
import Hiro from './components/Hiro'
import MassageAndVi from './components/MassageAndVi'
import PepoleMangament from './components/PepoleMangament'
import AboutHealth from './components/AboutHealth'
import AsNavFor from './components/AsNavFor'
import OurAdvantages from './components/OurAdvantages'
import SlowerExample from './components/SlowerExample'
import ContactForm from './components/ContactForm'
const history = createBrowserHistory()
function App() {
  useEffect(() => {
    document.title = 'Eats'
    AOS.init()
  }, [])
  // <Hiro />
  // <br />
  // <CardApp />
  // <br />
  // <MassageAndVi />
  // <File />
  // <PepoleMangament />
  // {/* <Skills/>  */}
  // <AboutHealth />
  // <AsNavFor />

  // <OurAdvantages />

  // <SlowerExample />

  // {/* <IphoneScreenCard/> */}
  // {/* <IphoneScreenShot/> */}

  // <ContactForm />
  return (
    <div className="dark:bg-dark-500">
      {/* <div className='px-10 lg:px-0 xl:px-36'> */}

      <div className=" px-6 lg:px-20 xl:px-36">
        <Navbar />
        {/* <Hiro />
        <br />
        <CardApp />
        <br />
        <MassageAndVi />
        <PepoleMangament />
        <AboutHealth />
        <AsNavFor />
        <OurAdvantages />
        <SlowerExample />
        <ContactForm />  */}
      </div>
      <div className=" dark:bg-dark-500">
        <Switch>
          <Route path="/eatsWebSite" exact component={Home} />

          <Route path="/eatsWebSite/inventory" component={Inventory} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
