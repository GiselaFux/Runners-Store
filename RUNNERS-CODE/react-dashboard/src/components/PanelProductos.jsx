import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/css/tables.css'


function PanelProductos(){
    const [products, setProducts] = useState([0]);


    useEffect(()=>{
        console.log('Se visualizan datos');
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('Se actualizan datos');
    },[])

    useEffect(()=>{
        return()=> console.log('Se dejaron de visualizar datos')
    },[products])


    return(
        <div className='table'>
            <h2 >Listado de Productos</h2>
            <table>
                <thead>
                <tr >
                    <th>Nombre</th>
                    <th>Detalle</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                </tr>
                </thead>
                {products
                .map((us , i)=>{
                    return(
                        <tr key={i}>
                    <td >
                            {us.name}
                    </td> 
                    <td >
                            {us.description}
                    </td>
                    <td >
                            {us.price}
                    </td>
                    <td >
                            {us.discount}%
                    </td>
                
                    </tr>)
                    })}  
            </table>
        </div>
    )
    
}

export default PanelProductos