import fotoPerfil from './assets/perfil.jpg'

function Card(){
    return(
        <div className="carta">
            <img className="imgCarta" src={fotoPerfil} alt="foto de perfil"></img>
            <h2 className="tituloCarta">Jose Manuel Mejia Velazquez</h2>
            <p>Soy un programador y juego lol of legends</p>
        </div>

    );
}

export default Card