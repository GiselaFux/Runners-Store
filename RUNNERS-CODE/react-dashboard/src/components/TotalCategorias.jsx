import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';

function TotalCategorias(){

    const [categories, setCategories] = useState([0])

    useEffect(()=>{
        console.log('Se visualizan datos');
        fetch('/api/categories')
        .then(response => response.json())
        .then(data => {
            setCategories(data.total)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('Se actualizan datos');
    },[categories])

    useEffect(()=>{
        return()=> console.log('Se dejaron de visualizar los datos')
    },[categories])

    return(

            <Card title="TOTAL DE CATEGORIAS" cuantity={categories} /> 

    )
}

export default TotalCategorias