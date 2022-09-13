import {useState} from 'react'
import logo from './../../logo.svg'


function Header(props){

    const [count, setCount] = useState(1);

    function iCount(){
        setCount(count+1);
        console.log(count)
    }
    return (
        
        <header>
            <h1>{props.title}</h1>
            <img src={logo} alt="logo" className='logo'/>
            <p>Bem vindo! Pela {count} vez!!!</p>
            <button onClick={iCount}>retornar</button>
        </header>
    )
}

export default Header