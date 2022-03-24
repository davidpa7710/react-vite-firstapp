import React from 'react'
import { render } from 'react-dom'
import './Styles/index.css'
import { App } from './Components/App'
import { CounterOps } from './Components/CounterOps/index'
import { LifeCicle} from './Components/lifeCicle/index'

render(
  <React.StrictMode>
    <>
    <App />
    <CounterOps />
    <LifeCicle></LifeCicle>
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
