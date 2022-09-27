import {useState} from 'react'
import logo from './../../logo.svg';
import * as React from 'react';
import Switch from '@mui/material/Switch';


function Header(props){

    const [count, setCount] = useState(1);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

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
            <div>
                <Switch {...label} />
            </div>
        </header>
    )
}

export default Header