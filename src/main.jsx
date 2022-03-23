import React from 'react'
import { render } from 'react-dom'
import './Styles/index.css'
import { App } from './Components/App'

render(
  <React.StrictMode>
    <p>Vite react App</p>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
