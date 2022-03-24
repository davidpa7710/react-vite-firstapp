import { useEffect, useState } from "react"

export const LifeCicle = () => {
    const [example, setexample] = useState('...cargando')

    useEffect(()=>{
        console.log('se cargo el componente');
        setTimeout(() => {
            console.log('se actualizo el componente');
            setexample('Cambio de estado')
        }, 2000);
    }, )
    
    return (
        <>
        <p>Ciclo de vida de un componente</p>
        <p>{example}</p>
        </>
    )
}