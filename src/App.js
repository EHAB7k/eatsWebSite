import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import Skills from './components/Skills'
import Honors from './components/Honors';
import Certs from './components/Certs';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardApp from './components/CardApp';


function App() {
    useEffect(() => {
      document.title = 'Ehab hakami';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36">
      {/* <div className="px-6 lg:px-20 xl:px-36 bg-dark-500"></div> */}
      <Navbar />
      <Hiro />
      <br/>
      <CardApp/>
      <Skills />
      {/* <Honors /> */}
      {/* <Certs /> */}
      
      <Footer />
    </div>
  );
}

export default App;
