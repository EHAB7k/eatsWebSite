import { Link } from 'react-router-dom'
import { useState } from 'react'
import Dropdown from './Dropdown'
import eatslogo from '/Users/ehabhakmi/Desktop/eats-ab-us/src/assets/eats-logorbg.png'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === 'dark')

  // const toggleDarkMode = () => {
  //   if (isDarkMode) {
  //     localStorage.theme = 'light'
  //     setIsDarkMode(document.documentElement.classList.add('dark'))
  //   } else {
  //     localStorage.theme = 'dark'

  //     setIsDarkMode(document.documentElement.classList.remove('dark'))
  //   }
  // }

  const toggleDarkMode = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }

  const dropdowns = [
    {
      id: 1,
      label: 'Dropdown 1',
      options: [
        { id: 1, label: 'Option 1', url: '#' },
        { id: 2, label: 'Option 2', url: '#' },
        { id: 3, label: 'Option 3', url: '#' },
      ],
    },
    {
      id: 2,
      label: 'Dropdown 2',
      options: [
        { id: 1, label: 'Option 1', url: '#' },
        { id: 2, label: 'Option 2', url: '#' },
        { id: 3, label: 'Option 3', url: '#' },
      ],
    },
    {
      id: 3,
      label: 'Dropdown 3',
      options: [
        { id: 1, label: 'Option 1', url: '#' },
        { id: 2, label: 'Option 2', url: '#' },
        { id: 3, label: 'Option 3', url: '#' },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <nav className="bg-white bg-dark-500 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="App-logo w-16" alt="Eats" src={eatslogo} />
          </Link>

          <ul className="hidden lg:flex lg:m-auto">
            {dropdowns.map(({ id, label, options }) => (
              <Dropdown
                key={id}
                label={label}
                options={options}
                className="border border-gray-200 p-2 rounded-lg"
              />
            ))}
          </ul>
          <div>
            {/* <button
              onClick={toggleDarkMode}
              type="button"
              className={`text-gray-500 dark:text-gray-400 ${
                isDarkMode
                  ? 'hover:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700'
              } rounded-lg p-2.5`}
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-8a1 1 0 0 1 .707.293l2 2a1 1 0 1 1-1.414 1.414L10 8.414l-1.293 1.293a1 1 0 1 1-1.414-1.414l2-2A1 1 0 0 1 10 7z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-8a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z" />
                </svg>
              )}
            </button> */}

            <button
              onClick={toggleDarkMode}
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              dark/light
            </button>
          </div>
          <button
            className="flex items-center lg:hidden text-gray-500 hover:text-white focus:outline-none"
            onClick={toggleDropdown}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isDropdownOpen ? (
                <path d="M19.707 7.293a1 1 0 0 0-1.414 0L12 13.586 6.707 8.293a1 1 0 1 0-1.414 1.414L12 16.414l7.707-7.707a1 1 0 0 0 0-1.414z" />
              ) : (
                <path d="M4.293 12.707a1 1 0 0 0 0 1.414L11.586 21H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-5.586l7.293-7.293a1 1 0 0 0-1.414-1.414L12 17.586l-6.293-6.293a1 1 0 0 0 0-1.414z" />
              )}
            </svg>
          </button>
        </div>
        <div className={`lg:hidden ${isDropdownOpen ? 'block' : 'hidden'}`}>
          <ul className="hidden lg:flex lg:m-auto">
            {dropdowns.map(({ id, label, options }) => (
              <Dropdown
                key={id}
                label={label}
                options={options}
                className="border border-gray-200 p-2 rounded-lg"
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
