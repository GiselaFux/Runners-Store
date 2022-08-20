import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'


function BottomMenu (){
    return (
        <React.Fragment>
            <div>
                <Link to="/">
                    <div>
                        <img src={logo} alt="1rem"/>
                    </div>
                </Link>
            </div>

            <ul> 
                <li>
                    <Link to="/categories">
                    <i class="fa-solid fa-list"></i>
                        <span>Categorías</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/detailsproducts">
                    <i class="fa-solid fa-user"></i>
                        <span>Productos</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/detailsusers">
                    <i class="fas fa-table"></i>
                        <span>Usuarios</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/lastupdate">
                    <i class="fas fa-table"></i>
                        <span>Detalles</span>
                    </Link>
                </li> 
            
            </ul>
        </React.Fragment>
      );
}

export default BottomMenu
