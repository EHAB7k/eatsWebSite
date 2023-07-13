import { useState } from 'react'
import eatslogo from '/Users/ehabhakmi/Desktop/eats-ab-us/src/assets/eats-logorbg.png'
function Navbar() {
  const [dropdowns, setDropdowns] = useState([
    {
      name: 'عن الشركة',
      options: [
        { id: 1, label: 'Option 1', url: '#' },
        { id: 2, label: 'Option 25', url: '#' },
        { id: 3, label: 'Option 3', url: '#' },
      ],
    },
    {
      name: 'تطبيق ايتس',
      options: [
        { id: 1, label: 'Option 1', url: '#' },
        { id: 2, label: 'Option 2', url: '#' },
        { id: 3, label: 'Option 34', url: '#' },
      ],
    },
    // {
    //   name: 'Dropdown 3',
    //   options: [
    //     { id: 1, label: 'Option 13', url: '#' },
    //     { id: 2, label: 'Option 2', url: '#' },
    //     { id: 3, label: 'Option 3', url: '#' },
    //   ],
    // },
  ])

  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(id)
    }
  }

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
    <nav className="bg-white bg-dark-500 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="App-logo w-12 "
            alt="Eats"
            style={{ width: '85px' }}
            src={eatslogo}
          />
        </div>

        <ul dir="rtl" className="hidden lg:flex lg:m-auto">
          <li className="text-white hover:text-gray-400 focus:text-gray-400 focus:outline-none p-2">
            <a href="#home">الرائيسية</a>
          </li>
          {dropdowns.map((dropdown, index) => (
            <li key={index} className="relative">
              <button
                className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                onClick={() => toggleDropdown(index)}
              >
                {dropdown.name}{' '}
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {activeDropdown === index && (
                <div className="absolute top-full left-0 mt-2 bg-white text-zinc-900 lg:w-40 border border-gray-700 p-2 rounded-lg">
                  {dropdown.options.map((option) => (
                    <a
                      key={option.id}
                      href={option.url}
                      className="block  text-zinc-900  hover:text-gray-400 py-1"
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li className="text-white hover:text-gray-400 focus:text-gray-400 focus:outline-none p-2">
            <a href="#ContactForm">اتصل بنا</a>
          </li>
        </ul>

        <button
          onClick={toggleDarkMode}
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          dark/light
        </button>
      </div>
    </nav>
  )
}

export default Navbar
