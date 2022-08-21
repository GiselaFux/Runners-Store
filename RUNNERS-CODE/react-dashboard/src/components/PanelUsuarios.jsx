import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/css/tables.css'

function PanelUsuarios(){
    const [users, setUsers] = useState([0])

    useEffect(()=>{
        console.log('Se visualizan los datos');
        fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.data)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('Se actualizaron los datos');
    },[])

    useEffect(()=>{
        return()=> console.log('Se dejaron de visualizar los datos')
    },[users])
      

    return(
        <div className='table'>
            <h2>Listado de Usuarios</h2>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Categoría</th>
                </tr>
                </thead>
                <tbody>
                {users
                    .map((us , i)=>{
                    return(
                        <tr key={i}>
                    <td >
                            {us.nombre}
                    </td> 
                    <td >
                            {us.apellido}
                    </td> 
                    <td >
                            {us.email}
                    </td>
                    <td >
                            {us.categoryUsu_id}
                    </td>
                    </tr>)
                })}  
                
                </tbody>
        </table>
        
        </div>
    )
}

export default PanelUsuarios