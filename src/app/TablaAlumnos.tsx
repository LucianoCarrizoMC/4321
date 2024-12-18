'use client'
import React, { useEffect, useState } from 'react'
import { obtenerAlumno } from './Firebase/Promesas'
import { IAlumno } from '@/interfaces/IAlumno'

export const TablaAlumnos = () => {
  const [LAlumnos, setLAlumnos] = useState<IAlumno[]>([])


  const handleObtener=()=>{
    obtenerAlumno().then(
      (alumnos)=>{
        console.log(alumnos)
      }).catch(
        (e)=>{console.log("Error")})
  }
  useEffect(()=>{
    handleObtener();
  },([]))
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>

                <th>Apellido</th>
                <th>Edad</th>
                <th>Correo</th>
            </tr>
        </thead>
        <tbody>
          {
            LAlumnos.map((alumno)=>{return(
              <tr>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.edad}</td>
                <td>{alumno.correo}</td>
              </tr>
            )})
          }
        </tbody>
    </table>
    </>
  )
}
export default TablaAlumnos
