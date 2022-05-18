
import React, { useEffect, useState } from 'react'
import { Error } from './Error'



const Formulario = ( { pacientes ,setPacientes, paciente, setPaciente } ) => {
  //console.log(paciente)
  //Hooks
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  useEffect(() => {
    if(Object.keys(paciente).length>0){
      //console.log("Hay algo")
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)

    } 
  }, [paciente])
  
  //-----------------------
  // Estate Error
  const [error, setError] = useState(false)
  //----------------------
  //Funciones

  const generarId = ( ) => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return fecha + random
  }

  const handleSubmit = ( e ) => {
    e.preventDefault()
    // validacion del funcionario
    if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
      console.log('Hay al menos un campo vacio')
      setError(true)
      return
    }
    setError(false)
    const objetoPaciente = {
      nombre: nombre,
      propietario: propietario,
      email: email,
      fecha: fecha,
      sintomas: sintomas,
      //id: generarId()
    }
    if(paciente.id){
      //Editando el registro
      objetoPaciente.id = paciente.id
      // console.log(paciente)
      // console.log(objetoPaciente)
      const pacientesActualizado = pacientes.map( pacienteState => {
        return paciente.id === pacienteState.id ? objetoPaciente : pacienteState})

        setPacientes(pacientesActualizado)
        setPaciente({})
    }else {
      //Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }
    // Spread
    
    //Reiniciar Formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }
  //--------------

  return (
    <div className="mx-5 md:w-1/2 lg:2/5">

      <h1 className='font-black text-3xl text-center'>
        Formulario
      </h1>

      <p className="text-lg mt-5 text-center">Añade Pacientes y {" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10" 
        action=""
        onSubmit = { handleSubmit }
      >
        {error && (
          <Error 
            mensaje = 'Todos los campos son obligatorios'
          />
        )}

        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="mascota">
            Nombre de Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            type="text" 
            placeholder='Nombre de la Mascota'
            value = { nombre }
            onChange = { ( e ) => setNombre( e.target.value ) //console.log(e.target.value)
            }
          />
        </div>

        <div className='mb-5'>
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="propietario">
            Nombre Propierario
          </label>
          <input
            id="propietario"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            type="text" 
            placeholder='Nombre del Propietario'
            value = { propietario }
            onChange = { ( e ) => setPropietario( e.target.value ) }
          />
        </div>

        <div className='mb-5'>
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            type="email" 
            placeholder='Email Contacto Propietario'
            value = { email }
            onChange = { ( e ) => setEmail( e.target.value ) }
          />
        </div>

        <div className='mb-5'>
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="alta">
            Fecha de Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value = { fecha }
            onChange = { ( e ) => setFecha( e.target.value ) }
            //placeholder='Email Contacto Propietario' // No requiere place holder tipo date
          />
        </div>

        <div className='mb-5'>
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="sintomas">
            Sintomas
          </label>
          <textarea 
            name="" 
            id="sintomas" 
            cols="30" rows="10"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value = { sintomas }
            onChange = { ( e ) => setSintomas( e.target.value ) }
            >
          </textarea>
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 p-3 w-full text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value = { paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />

      </form>
    </div>
  
  )
}

export default Formulario
