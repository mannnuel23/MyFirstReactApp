import PropTypes from 'prop-types'

function UserGreetingTernary(props){
    const MensajeBienvenida = <h2 className="MensajeBienvenido">Bienvenido {props.username}</h2>
    const loginPrompt = <h2 className="Logeate">Por favor logeate para continuar</h2>

    //return(props.isLoggedIn ?   <h2 className="MensajeBienvenido">Bienvenido {props.username}</h2>
    //                        :   <h2 className="Logeate">Por favor logeate para continuar</h2>);

    return(props.isLoggedIn ? MensajeBienvenida : loginPrompt);
}

UserGreetingTernary.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreetingTernary.defaultProps = {
    isLoggedIn: false,
    username: "Invitado",
}

export default UserGreetingTernary