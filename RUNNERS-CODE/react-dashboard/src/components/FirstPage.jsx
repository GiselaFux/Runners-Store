import React from 'react';
import {Link} from 'react-router-dom'

import TotalProductos from './TotalProductos';
import TotalUsuarios from './TotalUsuarios';
import TotalCategorias from './TotalCategorias';
import UltimoProducto from './UltimoProducto';
import UltimoUsuario from './UltimoUsuario';

import '../assets/css/firstPage.css'


function FirstPage() {
    return (
        <React.Fragment>
            <main>
                <div className='totales'>          
                    <div className='cardTotales'>
                        <Link className="link" to="/detailsproducts">
                            <p><TotalProductos /></p>
                        </Link>
                    </div>

                    <div className='cardTotales'>
                        <Link className="link" to="/detailsusers">
                            <p><TotalUsuarios /></p>
                        </Link>
                    </div>
                    
                    <div className='cardTotales'>
                        <Link className="link" to="/categories">
                            <p><TotalCategorias /></p>
                        </Link>
                    </div>
                </div>

                <div className='ultimos'>  
                    <div>
                        <UltimoProducto />
                    </div>
                    <div>
                        <UltimoUsuario />   
                    </div>     
                </div>
            </main>
        </React.Fragment>
    );
}

export default FirstPage;

