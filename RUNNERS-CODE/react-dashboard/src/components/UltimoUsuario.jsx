import React from 'react';
import { useState, useEffect } from 'react';


function UltimoUsuario(){
    const [users, setUsers] = useState([0])

    useEffect(()=>{
        console.log('Se visualizan los datos');
        fetch('http://localhost:3001/api/users')
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

    let lUser = users.length - 1
    console.log(lUser)
    let ultimoU = users[lUser]

    return (
        <React.Fragment>
            <div> 
            <h2>Último Usuario</h2>
                <h4>Nombre: {ultimoU.nombre}</h4>
                <h4>Apellido: {ultimoU.apellido}</h4>
                <h4>Correo: {ultimoU.email}</h4>
                <h4>Categoria de Usuario: {ultimoU.categoryUsu_id}</h4>
            </div>
        </React.Fragment>
    )
}

export default UltimoUsuario