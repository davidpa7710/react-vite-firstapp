import React from 'react'
import { render } from 'react-dom'
import './Styles/index.css'
import { App } from './Components/App'
import { Counter } from './Components/Counter/index'

render(
  <React.StrictMode>
    <>
    <App />
    <Counter />
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
