import './style.css'
import {useState} from 'react'

function Imc(){
    const [weight, setWeight] = useState() 
    const [height, setHeight] = useState()
    const [imc, setImc] = useState()

    function calcular(){
        setImc(parseFloat(weight/(height*height)))
    }
    return(
        <div className='IMC'>
            <h2> Cálculo de IMC</h2>
            <div className='field'>
            <input type='text' 
            placeholder="digite seu peso"
            step="0.01" 
            value={weight} 
            onChange={e => setWeight(e.target.value)}
            />

            <input type='text' 
            placeholder="digite sua altura" 
            value={height} 
            step="0.01"
            onChange={e => setHeight(e.target.value)}
            />
            <button onClick={calcular}>Calcular</button>
            </div>
            <p>
            Resultado: {imc}
            </p>
        </div>
    )

}

export default Imc