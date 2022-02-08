import './IfoodCounter.css'
import React, { useState, useEffect } from 'react';

export default function IfoodCounter() {
    const [ value, setValue ] = useState(0)
    const [ buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

    useEffect(()=> {
        document.getElementById('valor').innerHTML = Math.floor(2 * value).toFixed(2)
    }, [value])

    function decrement(){
        if( value <= 1) {
            setButtonStyle('counter-button-minus-desactive')
        }

        if( value > 0) {
            setValue( value - 1 )
        }
    }

    function increment(){
        setValue( value + 1 )
        setButtonStyle('counter-button-minus-active')
    }

    return (
        <>
            <h2>Ifood Counter</h2>
            <h3>Contador usando useState() com alguns estilos e useEffect()</h3>
            <div className='countex-wrapper'>
                <button 
                    className={ buttonStyle}
                    onClick={ ()=> decrement()}
                >
                    -
                </button>
                <p> {value} </p>
                <button 
                    className='counter-button-plus-active'
                    onClick={ ()=> increment()}
                >
                    +
                </button>
            </div>
            <button>
                R$ <span id="valor"></span>
            </button>
        </>
    )
}
