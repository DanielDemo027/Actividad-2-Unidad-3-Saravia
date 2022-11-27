import { useEffect, useState } from "react"
import { collection, doc, getDocs, deleteDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "./config";
const AppLeerDatos = () =>{
    
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [id, setId] = useState('');
    const [editar, setEditar] = useState(false);

    const usersCollection = collection(db, 'users');
    
    const getUsers = async () =>{
        const data = await getDocs(usersCollection);
        setUsers(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
    }

    const UpdateUser = async(e)=>{
        e.preventDefault()
        const user = doc(db, 'users', id)
        const dataUserEdit = {name: name, username: username};
        await updateDoc(user, dataUserEdit)
        setEditar(false)
    }

    const getUserById = async(id) =>{
        setId(id);
        setEditar(true);
        const user = await getDoc(doc(db, 'users', id))
        if(user.exists()){
            //console.log(user.data())
            setName(user.data().name)
            setUsername(user.data().username)
        }
    }

    const deleteUsers = async(id) =>{
        const usersDoc = doc(db, 'users', id)
        await deleteDoc(usersDoc)
        getUsers()
    }
    
    useEffect(()=>{
        getUsers()
        deleteUsers()
        UpdateUser()
    })

    return(
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Username</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={()=>{getUserById(user.id)}}>Editar</button>
                                <button onClick={()=>{deleteUsers(user.id)}}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editar ? (
                <div>
                    <h2>Editar user</h2>
                    <form onSubmit={UpdateUser}>
                        <label>Nombre</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>

                        <label>Username</label>
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required/>

                        <button>Actulizar usuario</button>
                        <button onClick={(e)=>setEditar(false)}>Cancelar</button>
                    </form>
                </div>
            ) : (
                <div hidden></div>
            )}
        </div>
    )
}
export default AppLeerDatos;