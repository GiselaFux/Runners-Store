import React from 'react';
import TotalProductos from './TotalProductos';
import TotalUsuarios from './TotalUsuarios';
import TotalCategorias from './TotalCategorias';


function PanelTotales() {
    return (
        <div>
            <TotalProductos />
            <TotalUsuarios />
            <TotalCategorias />
        </div>
    )
}

export default PanelTotales;

