import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom'

import BottomMenu from "./components/BottomMenu"
import FirstPage from "./components/FirstPage"



import PanelCategorias from "./components/PanelCategorias"
import PanelProductos from "./components/PanelProductos"
import PanelUsuarios from './components/PanelUsuarios'


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<FirstPage />} />
            <Route exact path="/categories" element={<PanelCategorias />} />
            <Route exact path="/detailsproducts" element={<PanelProductos />} />
            <Route exact path="/detailsusers" element={<PanelUsuarios />} />
        </Routes>
        <div>
        <BottomMenu/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
