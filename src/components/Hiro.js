import {useState} from 'react'

import profile from '../assets/eats-logorbg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn,faWhatsapp,faAppStore,faAndroid,faWindows } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
                <div className='md:w-3/6 md:p-4'>
                    
                    {/* <img className="rounded-full w-80 h-80" src="/docs/images/examples/image-4@2x.jpg" alt="image description"/> */}
                    {/* <br></br>
                    <br></br>
                    <br></br> */}

                <img className='rounded-full h-auto max-h-80 ' data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    {/* <h1 className="text-xl text-gray-400">Hi, I'm</h1> */}
                    {/* <h1 className="text-2xl font-bold text-black">Welcome To Eats Home </h1> */}
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 text-amber-400 lg:text-4xl"><span className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-2xl">Welcome To</span> eats website</h3>
                    
                    <p className="text-xl font-bold text-gray-300"></p>
                    <p className="text-md font-light text-gray-400 ">Eats is a platform that supports home food providers by presenting their best outcomes to benefit all customers around the Kingdom to enjoy variety of fresh food choices that will be delivered with the highest quality and in a timely manner.Eats is the brand name for TAWSIL AL-KHALIJIYYAH FOR TRADING COMPANY</p>
                </div>
                {/* <a href='http://blog.dama.ink' className='mt-2 block'>Go to My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a> */}
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://apps.apple.com/sa/app/eats-customer/id1576647819' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' color='gray' icon={faAppStore} /></a>
                   </li> 
                    {/* <li>
                        <a href='https://instagram.com/damaasth' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li> */}
                    <li>
                        <a href=' https://play.google.com/store/apps/details?id=com.eatscustomer' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' color='gray' icon={faAndroid} /></a>
                    </li>
                    <li>
                        <a href='https://wa.me/++966 535888427' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' color='gray' icon={faWindows} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
