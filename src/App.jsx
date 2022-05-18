import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import { ListadoPaciente } from "./components/ListadoPaciente"


function App() {
  //Hooks
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  //[] se ejecuta una sola vez
  const obtenerLS = () => {
    const pacienteLS = JSON.parse(localStorage.getItem('pacientes'))
    console.log(pacienteLS)
    setPacientes(pacienteLS)
    
  }
  useEffect( () => {
    console.log('1')
    obtenerLS()
    
  },[])

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = ( id ) => {
    const pacienteActualizados = pacientes.filter( paciente => paciente.id !== id )
    setPacientes(pacienteActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex mx-auto">
        <Formulario
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente = { setPaciente }
        />
        <ListadoPaciente 
          pacientes = { pacientes }
          setPaciente = { setPaciente }
          eliminarPaciente = { eliminarPaciente }
         
        />
      </div>
     
    </div>
  )
}

export default App
