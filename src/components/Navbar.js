import logo from '../assets/logo.svg';
import logo1 from '../assets/free-logo.png';
import resume from "../assets/helo.xlsx"

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
                <img className="App-logo w-10 " alt="" />
                {/* <h1>E7k</h1> */}
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">dev1</a></li>
            <li className="p-4"><a href="#certdApp" className="hover:underline">dev2</a></li>
            {/* <li className="p-4"><a href="#honors" className="hover:underline">Honor & Awards</a></li> */}
            <li className="p-4"><a href="#certs" className="hover:underline">dev3</a></li>
            </ul>
            <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Inventory</a>
        </div>
    </div>
    )
}
