import React from "react";
import Login from "./Login";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Just } from "../Styles/styles";

export default class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)

        this.handleLogout = this.handleLogout.bind(this)

        this.handleName = this.handleName.bind(this)

        this.state = {
            isLoggedID: false,
            name: ''
        }
    }

    handleLogin(){
        this.setState({isLoggedID: true})
    }

    handleLogout(){
        this.setState({isLoggedID: false})
    }

    handleName(name){
        this.setState({ name:name })
    }

    render(){
        const isLoggedID = this.state.isLoggedID

        let button

        if(isLoggedID){
            button = <Button onClick={this.handleLogout} variant="outlined">Sair</Button>
        }else{
            button = <div>
                        <TextField id="outlined-basic" label="Nome" variant="outlined" onChange={e => this.handleName(e.target.value)} focused/>
                        <Just>
                            <Button variant="outlined" onClick={this.handleLogin}>Entrar</Button>
                        </Just>
                    </div>
        }

        return(
            <div>
                <Login isLoggedIn={isLoggedID} name={this.state.name}/>
                {button}
            </div>
        )
    }
}