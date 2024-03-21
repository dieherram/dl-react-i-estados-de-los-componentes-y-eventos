import { useState } from "react"
import './App.css'
import Registro from './components/Registro'

function App() {

  const [alert, setAlert] = useState({ error: false, msj: "", color: "" })

  return (
    <>
      <Registro tituloRegistro="Crea una cuenta" recomendacionRegistro="O usa tu email para registrarte" alert={alert} setAlert={setAlert} />
    </>
  )
}

export default App
