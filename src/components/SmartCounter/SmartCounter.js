import { useState } from 'react'

export default function SmartCount(){
    const [ qtd, setQtd ] = useState(0)

    return (
        <>
            <h2>Smart Counter</h2>
            <h3>Contador usando useState()</h3>
            <p>{ qtd }</p>
            <button onClick={() => setQtd( qtd - 1) }>Diminui</button>
            <button onClick={() => setQtd( qtd + 1) }>Aumenta</button>
        </>
    )
}