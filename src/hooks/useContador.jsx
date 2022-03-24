import { useState } from 'react'

export const useContador = (initialValue) => {
  const [contador, modContador] = useState(initialValue)

  const sumar = () => modContador(contador + 1)
  const resta = () => modContador(contador - 1)

  return { contador, sumar, resta }
}
