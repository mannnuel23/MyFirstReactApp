function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2 className="MensajeBienvenido">Bienvenido {props.username}</h2>
    }
    else{
        return <h2 className="Logeate">Por favor logeate para continuar</h2>
    }
}

export default UserGreeting