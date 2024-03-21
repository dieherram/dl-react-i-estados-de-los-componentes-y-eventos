import { useState } from "react"

const Formulario = ({ setAlert }) => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const validarEmail = (correo) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(correo);
  }

  const limpiarInputs = () => {
    setNombre(""),
      setEmail(""),
      setContrasena(""),
      setConfirmarContrasena("")
  }

  const validacionFormulario = (e) => {
    e.preventDefault()

    if (nombre === "" || email === "" || contrasena === "" || confirmarContrasena === "") {
      setAlert({ error: true, msj: "Todos los campos son obligatorios", color: "danger" })
      return
    } else if (validarEmail(email) === false) {
      setAlert({ error: true, msj: "Verifica el formato del correo electronico", color: "danger" })
      return
    } else if (contrasena != confirmarContrasena) {
      setAlert({ error: true, msj: "La contraseña debe ser igual en ambos campos", color: "danger" })
      return
    } else {
      setAlert({ error: true, msj: "Registro valido", color: "success" })
      limpiarInputs()
    }
  }

  return (
    <div className="formulario-container">
      <form onSubmit={validacionFormulario}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Confirma tu contraseña" value={confirmarContrasena} onChange={(e) => setConfirmarContrasena(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success">Registrarse</button>
      </form>
    </div>
  )
}

export default Formulario