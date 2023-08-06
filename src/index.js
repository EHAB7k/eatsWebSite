import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter as Router } from 'react-router-dom'

import { hydrate, render } from 'react-dom'

import './index.css'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    rootElement
  )
} else {
  render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    rootElement
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//     <App />
//     </Router>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
