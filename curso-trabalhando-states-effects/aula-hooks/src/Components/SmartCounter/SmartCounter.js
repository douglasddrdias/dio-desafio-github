import {useState} from 'react'

function SmartCounter(){
    const [quantidade, subirQuantidade] = useState(1);

    return (
        <>
            <h1>{quantidade}</h1>
            <button onClick={() => subirQuantidade(quantidade +1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;