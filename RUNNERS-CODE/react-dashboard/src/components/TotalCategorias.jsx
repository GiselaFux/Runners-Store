import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';

function TotalCategorias(){

    const [categories, setCategories] = useState([0])

    useEffect(()=>{
        console.log('Se visualizan datos');
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setCategories(data.data.category.category_description)
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

            <Card title="TOTAL DE CATEGORIAS" cuantity= {categories.count} /> 

    )
}

export default TotalCategorias