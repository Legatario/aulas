import './style.css'
import React, {useState} from 'react'

function Imc(){
    const [weight, setWeight] = useState() 
    const [height, setHeight] = useState()
    const [imc, setImc] = useState()

    function calcular(){
         
        setWeight(parseFloat(weight).toFixed(2))
        setHeight(parseFloat(height).toFixed(2))
        setImc(parseFloat(weight/(height*height)))
    }
    return(
        <div className='IMC'>
            <h2> Cálculo de IMC</h2>
            <div className='field'>
            <input type='number' 
            placeholder="digite seu peso"
            step="0.01"
            required 
            value={weight} 
            onChange={(e) => setWeight(+e.target.value)}
            />

            <input type='number' 
            placeholder="digite sua altura" 
            value={height} 
            step="0.01"
            required
            onChange={e => setHeight(+e.target.value)}
            />
            <button onClick={calcular}>Calcular</button>
            </div>
            {imc > 0 && imc !== Infinity &&(
            <p>
            Resultado: {imc}
            </p>
            )}
            {imc === Infinity &&(
            <p>
                O seu peso não pode ser 0
            </p>
            )
            }
            {!imc &&(
            <p>
                Preencha os campos acima
            </p>
            )
            }
        </div>
    )

}

export default Imc