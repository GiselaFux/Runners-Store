import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/css/ultimosSubidos.css'

function UltimoUsuario(){
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

    let lUser = users.length - 1
    console.log(lUser)
    let ultimoU = users[lUser]

    return (
        <React.Fragment>
        <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <h2>ÚLTIMO USUARIO</h2>
                    
                </div>

                <div className='flip-card-back'>
                    <p>Nombre: {ultimoU.nombre}</p>
                    <p>Apellido: {ultimoU.apellido}</p>
                    <p>Correo: {ultimoU.email}</p>
                    <p>Categoria de Usuario: {ultimoU.categoryUsu_id}</p>
                </div>
                
            </div>
        </div>
        </React.Fragment>
    )
}

export default UltimoUsuario