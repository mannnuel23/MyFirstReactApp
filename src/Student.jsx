import PropTypes from 'prop-types'

function Student(props){
    return(
      <div className="Estudiante">
        <p>Nombre: {props.name}</p>
        <p>Edad: {props.age}</p>
        <p>Estudiante: {props.isStudent ? "Si" : "No"}</p>
      </div>  
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
  }

Student.defaultProps = {
    name: "Invitado",
    age: 0,
    isStudent: false,
}
export default Student