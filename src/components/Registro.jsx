import Formulario from "./Formulario"
import SocialButton from "./SocialButton"
import Alert from "./Alert"

const Registro = ({ tituloRegistro, recomendacionRegistro, alert, setAlert }) => {
  return (
    <div className="registro-container">
      <h1>{tituloRegistro}</h1>
      <div className="social-container">
        <SocialButton iconClasses="fa-brands fa-facebook fa-xl" />
        <SocialButton iconClasses="fa-brands fa-linkedin-in fa-xl" />
        <SocialButton iconClasses="fa-brands fa-github fa-xl" />
      </div>
      <p>{recomendacionRegistro}</p>
      <Formulario setAlert={setAlert} />
      {alert.error ? <Alert alert={alert} /> : null}
    </div>
  )
}

export default Registro