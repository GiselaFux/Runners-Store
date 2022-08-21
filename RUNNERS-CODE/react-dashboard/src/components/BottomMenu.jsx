import React from 'react';
import {Link} from 'react-router-dom'

import '../assets/css/bottomMenu.css'


function BottomMenu (){
    return (
        <React.Fragment>
            <div className='bottomMenu'>
                <ul> 
                    <li>
                        <Link className="link" to="/categories">
                        <i class="fa-solid fa-list"></i>
                            <span>Categorías</span>
                        </Link>
                    </li> 
                    <li>
                        <Link className="link" to="/detailsproducts">
                        <i class="fa-solid fa-user"></i>
                            <span>Productos</span>
                        </Link>
                    </li> 
                    <li>
                        <Link className="link" to="/detailsusers">
                        <i class="fas fa-table"></i>
                            <span>Usuarios</span>
                        </Link>
                    </li> 
                
                </ul>
            </div>
        </React.Fragment>
      );
}

export default BottomMenu
