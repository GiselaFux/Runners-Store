import React from 'react';
import { Route, Routes} from 'react-router-dom'

import PanelTotales from "./components/PanelTotales"
import PanelDetalles from "./components/PanelDetalles"
import PanelCategorias from "./components/PanelCategorias"
import PanelProductos from "./components/PanelProductos"
import PanelUsuarios from './components/PanelUsuarios';


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<PanelTotales />} />
            <Route exact path="/categories" element={<PanelCategorias />} />
            <Route exact path="/products" element={<PanelProductos />} />
            <Route exact path="/users" element={<PanelUsuarios />} />
            <Route exact path="/details" element={<PanelDetalles />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
