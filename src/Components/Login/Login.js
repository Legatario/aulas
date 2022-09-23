function UserGreeting(props){
    return <h3> Olá {props.name}, Bem vindo(a), de volta!</h3>
}


function Guestgreeting(props){
    return <h3>Por favor, faça o login para continuar.</h3>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    return isLoggedIn ? <UserGreeting name={props.name}/> : <Guestgreeting />
}

export default Greeting