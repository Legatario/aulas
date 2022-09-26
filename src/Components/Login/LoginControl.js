import React from "react";
import Login from "./Login"

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
            button = <button onClick={this.handleLogout}>Sair</button>
        }else{
            button = <div>
                        <input placeholder="digite seu nome" onChange={e => this.handleName(e.target.value)}/>
                        <button onClick={this.handleLogin}>Entar</button>
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