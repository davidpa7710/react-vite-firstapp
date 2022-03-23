import './counter.scss'
import React from 'react'

const Counter = () => {
  const [contador, modContador] = React.useState(0)

  return (
    <section>
      <p>contador</p>
      <p>{contador}</p>
      <button onClick={() => modContador(contador + 1)}>suma</button>
      <button onClick={() => modContador(contador - 1)}>resta</button>
    </section>
  )
}
export { Counter }
