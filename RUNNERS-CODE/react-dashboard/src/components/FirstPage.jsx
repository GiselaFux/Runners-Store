import React from 'react';
import TotalProductos from './TotalProductos';
import TotalUsuarios from './TotalUsuarios';
import TotalCategorias from './TotalCategorias';
import UltimoProducto from './UltimoProducto';
import UltimoUsuario from './UltimoUsuario';

import '../assets/css/firstPage.css'


function FirstPage() {
    return (
        <main>
            <div className='totales'>          
                <div className='cardTotales'>
                    <p><TotalProductos /></p>
                </div>

                <div className='cardTotales'>
                <p> <TotalUsuarios /></p>
                </div>
                
                <div className='cardTotales'>
                    <p><TotalCategorias /></p>
                </div>
            </div>

            <div className='ultimos'>  
                <div className='cardUltimos'>
                    <UltimoProducto />
                </div>
                <div className='cardUltimos'>
                    <UltimoUsuario />   
                </div>     
            </div>
        </main>
    )
}

export default FirstPage;

