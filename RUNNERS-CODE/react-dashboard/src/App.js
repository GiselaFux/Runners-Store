import React from 'react';
import { Route, Routes} from 'react-router-dom'

import BottomMenu from "./components/BottomMenu"
import PanelTotales from "./components/PanelTotales"


import PanelUltimos from "./components/PanelUltimos"
import PanelCategorias from "./components/PanelCategorias"
import PanelProductos from "./components/PanelProductos"
import PanelUsuarios from './components/PanelUsuarios'


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<PanelTotales />} />
            <Route exact path="/categories" element={<PanelCategorias />} />
            <Route exact path="/detailsproducts" element={<PanelProductos />} />
            <Route exact path="/detailsusers" element={<PanelUsuarios />} />
            <Route exact path="/lastupdate" element={<PanelUltimos />} />
        </Routes>
        <div>
        <BottomMenu/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
