import { useEffect, useState } from "react";
import { collection, addDoc } from 'firebase/firestore'
import { db } from "./config";
const AppInsertarDatos = () =>{
  const initialForm = '';
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')

  const usersCollection = collection(db, 'users');
  const AgregarDatos = async(e)=>{
    e.preventDefault()
    await addDoc(usersCollection, {name: name, username: username})
    setName(initialForm)
    setUsername(initialForm)
  }
  return(
        <div className="container">
          <h2>Agregar usuarios</h2>
            <form onSubmit={AgregarDatos}>
              <label>Nombre</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>

              <label>Username</label>
              <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} required/>

              <button>Agregar nuevo usuario</button>
            </form>
        </div>
  )
}

export default AppInsertarDatos;