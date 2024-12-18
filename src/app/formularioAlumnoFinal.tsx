'use client'
import { ISAlumno } from '@/initialState/ISAlumno'
import React, { useState } from 'react'
import { registrarAlumno } from './Firebase/Promesas'

export const FormularioAlumnoFinal=() => {
    const[alumno,setAlumno] = useState(ISAlumno)
    const handleAlumno = (estado:string,valor:string)=>{
        if(estado=="nombre" || estado=="apellido" || estado=="edad" || estado=="correo"){
        setAlumno({...alumno,[estado]:valor})
        }
    }
    const handleRegistrar = ()=>{
      console.log("le diste al boton")
      alert("Vas a registrar")
      console.log(alumno)
      registrarAlumno(alumno).then(()=>{
        alert("se registro")
      }).catch((e)=>{
        alert("xoko too mira "+e)
      })
    
    }
return (
    <>
    <h1>Formulario Final</h1>
        <p>Nombre:{alumno.nombre}</p>
        <p>Apellido:{alumno.apellido}</p>
        <p>Edad:{alumno.edad}</p>
        <p>Correo:{alumno.correo}</p>



    <form>
      
    <label>Nombre</label><br />
    <input type="text" placeholder='Ingrese su nombre'
    name='nombre'
    onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/><br />

    <label>Apellido</label><br />
    <input type="text" placeholder='Ingrese su Apellido'
    name='apellido'
    onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/><br />

    <label>Edad</label><br />
    <input type="text" placeholder='Ingrese su Edad'
    name='edad'
    onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/><br />

    <label>Correo</label><br />
    <input type="text" placeholder='Ingrese su Correo'
    name='correo'
    onChange={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/><br />
    <button type='button'
        onClick={handleRegistrar}>Registrar</button>

    </form>

    </>
    )
}
export default FormularioAlumnoFinal
