export default function Counter(){
    let qtd = 0

    function increment(){
        qtd = qtd + 1
        document.getElementById('counter-box').innerHTML = qtd
        console.log(qtd)
    }

    function decrement(){
        qtd = qtd - 1
        document.getElementById('counter-box').innerHTML = qtd
        console.log(qtd)
    }

    return(
        <>  
            <h2>Counter JS</h2>
            <h3>Contador Simples JS - Sem useState()</h3>
            <p id="counter-box"> { qtd } </p>
            <button onClick={ decrement } >Diminui</button>
            <button onClick={ increment } >Aumenta</button>
        </>
    )
}