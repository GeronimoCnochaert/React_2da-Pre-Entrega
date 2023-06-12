import './Form.css'
import { useState } from 'react'
import { db } from '../../services/config';
import { collection, addDoc } from 'firebase/firestore';



const Form = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");

const handleForm = (event) => {
event.preventDefault();
addDoc(collection(db, "usuarios"), { 
    nombre: nombre,
    apellido: apellido,
    celular: celular
})

setNombre("");
setApellido("");
setCelular("");

}

    return (
        <form onSubmit={ handleForm}>
            <label htmlFor=""> Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

            <label htmlFor="">Apellido</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>

            <label htmlFor="">Celular</label>
            <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)}/>

            <button type='submit'>Enviar</button>
        </form>

    )
}

export default Form
