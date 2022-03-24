import './counter.scss'
import React from 'react'
import { useContador } from '../../../hooks/useContador'

export const CounterOps = ({ initilValue = 10 }) => {
  const { contador, sumar, resta } = useContador(initilValue)
  return (
    <section>
      <p>contador</p>
      <p>{contador}</p>
      <button onClick={() => sumar()}>suma</button>
      <button onClick={() => resta()}>resta</button>
    </section>
  )
}
