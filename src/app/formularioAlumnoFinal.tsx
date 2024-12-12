'use client'
import { ISAlumno } from '@/initialState/ISAlumno'
import React, { useState } from 'react'

export const formularioAlumnoFinal = () => {

const [alumno, setAlumno] = useState(ISAlumno)
const handleAlumno =(estado:string,valor:string)=>{
    if(estado=="nombre" || estado=="apellido" || estado=="edad" || estado=="correo")
    setAlumno({...alumno,[estado]:valor})
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
    </form>







    </>
    )
}
export default formularioAlumnoFinal
