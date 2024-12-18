import { IAlumno } from "@/interfaces/IAlumno";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import { db } from "./Firebase";

export const registrarAlumno = async(alumno:IAlumno)=>{
    const docRef = await addDoc(collection(db, "alumnos"), alumno);
}
export const obtenerAlumno = async()=>{
    const querySnapshot = await getDocs(collection(db, "alumnos"));
    let alumnos:IAlumno[]=[]
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    let alumno:IAlumno={
        nombre:doc.data()["nombre"],
        apellido:doc.data()["apellido"],
        correo:doc.data()["correo"],
        edad:doc.data()["edad"]
    }
    alumnos.push(alumno)
});
return alumnos

}



