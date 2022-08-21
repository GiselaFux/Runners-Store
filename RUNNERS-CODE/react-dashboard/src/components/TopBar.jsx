import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'

import '../assets/css/bottomMenu.css'


function BottomMenu (){
    return (
        <React.Fragment>
            <div className='TopBar'>
                <h1>DASHBOARD </h1>
                    <Link to="/">
                        <div>
                            <img src={logo} alt="1rem" className='logo'/>
                        </div>
                    </Link>
            </div>
        </React.Fragment>
      );
}

export default BottomMenu