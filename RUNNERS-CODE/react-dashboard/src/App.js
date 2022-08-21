import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom'

import TopBar from "./components/TopBar"
import BottomMenu from "./components/BottomMenu"
import FirstPage from "./components/FirstPage"



import PanelCategorias from "./components/PanelCategorias"
import PanelProductos from "./components/PanelProductos"
import PanelUsuarios from './components/PanelUsuarios'


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <TopBar/>
        <Routes>
            <Route exact path="/" element={<FirstPage />} />
            <Route path="/categories" element={<PanelCategorias />} />
            <Route path="/detailsproducts" element={<PanelProductos />} />
            <Route path="/detailsusers" element={<PanelUsuarios />} />
        </Routes>

        <BottomMenu/>

      </div>
    </React.Fragment>
  );
}

export default App;
