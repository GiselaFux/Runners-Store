import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/css/ultimosSubidos.css'

function UltimoProducto(){
    const [products, setProducts] = useState([0])

    useEffect(()=>{
        console.log('se montó al componente');
        fetch('/api/products')
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
            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <h2>ÚLTIMO PRODUCTO</h2>
                        
                    </div>
                    <div className='flip-card-back'>
                        <p>Nombre: {ultimoP.name}</p>
                        <p>Categoría: {ultimoP.category_id}</p>
                        <p>Detalle: {ultimoP.description}</p>
                        <p>Precio: ${ultimoP.price}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UltimoProducto