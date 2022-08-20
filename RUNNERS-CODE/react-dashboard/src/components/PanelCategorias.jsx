import React from 'react';

import { useState, useEffect } from 'react';

function PanelCategorias(){

    const [categories, setCategories] = useState([0])

    useEffect(()=>{
        console.log('se montó al componente');
        fetch('http://localhost:3001/api/products')
        .then(response => response.json())
        .then(data => {
            setCategories(data.data.category.countById)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('se actualizó el componente');
    },[categories])

    useEffect(()=>{
        return()=> console.log('se desmontó el componente')
    },[categories])

    let todas = Object.keys(categories)
    console.log(todas)

    let cant = Object.values(categories)
    console.log(cant)


    return(
    
        <div>
        <h2>Listado de Categorías</h2>
        <table>
            <thead>
            <tr>
                <th>Categorías</th>
                <th>Cantidad</th>
            </tr>
            </thead>
            {todas.map((cat , i)=>{
                return(
                    <tr key={i}>
                  <td >
                        {cat}
                  </td> 
                  <td >
                        {cant[i]}
                  </td> 
                  </tr>)
                })}   
               
        </table>
        </div>
   
    )
}

export default PanelCategorias