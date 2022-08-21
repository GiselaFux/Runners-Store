import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';


function TotalProductos(){

    const [products, setProducts] = useState([0])

    useEffect(()=>{
        console.log('Se visualizan los datos');
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.total)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('Se actualizaron los datos');
    },[])

    useEffect(()=>{
        return()=> console.log('Se dejaron de visualizar los datos')
    },[products])

    return(
        <Card title="TOTAL DE PRODUCTOS" cuantity={products} /> 
    )
}

export default TotalProductos