function Counter() {
    let quantidade = 10;
    function subirQuantidade(){
        quantidade++;
        document.getElementById('counter-box').innerHTML = quantidade;
        console.log(quantidade);
    }
    return (
        <>
            <h1 id="counter-box">{quantidade}</h1>
            <button onClick={subirQuantidade}>Aumentar</button>
        </>

    )
}

export default Counter;