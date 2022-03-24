import React from 'react'
import { render } from 'react-dom'
import './Styles/index.css'
import { App } from './Components/App'
import { CounterOps } from './Components/App/CounterOps/index'

render(
  <React.StrictMode>
    <>
    <App />
    <CounterOps />
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
