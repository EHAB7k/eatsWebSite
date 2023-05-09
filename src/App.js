import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Shared/Navbar';
// import Hiro from './components/hiro/Hiro';
import Skills from './components/Skills'
import Honors from './components/Honors';
import Certs from './components/Certs';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardApp from './components/CardApp';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom"
import Inventory from './components/inventory/Inventory';
import Home from './components/home/Home';
import { createBrowserHistory } from "history";
import {useState} from 'react'
const history = createBrowserHistory();
function App() {
    useEffect(() => {
      document.title = 'Eats';
      AOS.init();
    }, []);

    
  return (
    <>
     
    <div className='px-10 lg:px-0 xl:px-36'>

      
      {/* <div className="px-6 lg:px-20 xl:px-36 bg-dark-500"></div> */}
      
      <Navbar />
      {/* <Hiro />
      <br/>
      <CardApp/>
      <Skills />
      {/* <Honors /> */}
      {/* <Certs /> */} 
      
      
        <Switch>

      <Route path="/" exact component={Home} />
        
      <Route path="/inventory" component={Inventory} />
      
      </Switch>
      
      
    </div>
    
      <Footer />
      
      
    

    </>
  );
}

export default App;
