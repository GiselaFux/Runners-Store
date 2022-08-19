import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';

function TotalUsuarios(){

    const [users, setUsers] = useState([0])

    useEffect(()=>{
        console.log('Se visualizan los datos');
        fetch('http://localhost:3001/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.total)
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

            <Card title="Total de usuarios" cuantity={users} /> 

    )
}

export default TotalUsuarios