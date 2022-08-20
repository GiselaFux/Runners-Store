import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/css/ultimosSubidos.css'

function UltimoProducto(){
    const [products, setProducts] = useState([0])

    useEffect(()=>{
        console.log('se montó al componente');
        fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('se actualizó el componente');
    },[])

    useEffect(()=>{
        return()=> console.log('se desmontó el componente')
    },[products])

    let lProduct = products.length - 1
    console.log(lProduct)
    let ultimoP = products[lProduct]

    return (
        <React.Fragment>
            <div>
                <h2>ÚLTIMO PRODUCTO</h2>
                <p className='imageLast'>{ultimoP.images}</p>
                <p className='data'>
                    <h4>Nombre: {ultimoP.name}</h4>
                    <h4>Categoría: {ultimoP.category_id}</h4>
                    <h4>Detalle: {ultimoP.description}</h4>
                    <h4>Precio: ${ultimoP.price}</h4>
                </p>
            </div>
        </React.Fragment>
    )
}

export default UltimoProducto