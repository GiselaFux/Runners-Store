import React from 'react';

import { useState, useEffect } from 'react';

import '../assets/css/tables.css'

function PanelCategorias(){

    const [categories, setCategories] = useState([0])

    useEffect(()=>{
        console.log('Se visualizan los datos');
        fetch('/api/categories/count')
        .then(response => response.json())
        .then(data => {
            setCategories(data.data.category_description)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('Se actualizaron los datos');
    },[categories])

    useEffect(()=>{
        return()=> console.log('Se dejaron de visualizar los datos')
    },[categories])

  


    return(
    
        <div className='table'>
            <h2>Listado de Categorías</h2>
            <table>
                <thead>
                    <tr>
                        <th>Categorías</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                {categories.map((cat , i)=>{
                    return(
                        <tr key={i}>
                    <td >
                            {cat}
                    </td> 
                    <td >
                            {[i]}
                    </td> 
                    </tr>)
                    })}   
                
            </table>
        </div>
   
    )
}

export default PanelCategorias