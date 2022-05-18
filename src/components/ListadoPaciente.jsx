import React, { useEffect } from 'react'
import Pacientes from './Pacientes'


export const ListadoPaciente = ( { pacientes, setPaciente, eliminarPaciente } ) => {

  
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen md:overflow-y-scroll">

      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {" "}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p> 
        </>)

        : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
        
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza Agregando Pacientes {" "}
              <span className="text-indigo-600 font-bold">y Aparecerán en Este Lugar</span>
        </p> 
          </>
        )}

      {
        pacientes.map( ( paciente )  => {
          return (
            <Pacientes
              key = { paciente.id }
              paciente = { paciente }
              setPaciente = { setPaciente }
              eliminarPaciente = { eliminarPaciente }
            />
          )
        } )
      }

        

       
    </div>
  )
}
