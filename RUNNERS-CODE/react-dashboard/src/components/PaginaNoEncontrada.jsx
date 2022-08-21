import React from 'react';
import {Link} from 'react-router-dom'

import '../assets/css/error.css'
import image from '../assets/img/error.png'

function PaginaNoEncontrada(){

    return (
        <React.Fragment>
            <div className='imageContent' >
                <div className='imgProducto-error' style={{width: 300 +'px'}}><img src={image} alt="Producto"/></div>
                <div className='textos-error'>
                    <h2>Ups!</h2>
                    <h2>La página que buscas no existe!</h2>
                        <button className='btn-error'><Link to='/' >Volver a Inicio</Link></button>
               </div> 
            </div>
        </React.Fragment>
    )
}

export default PaginaNoEncontrada;