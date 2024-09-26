import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css"
import Tareas from './datos';
import PaginaInicio from './PaginaInicio';
import PaginaDetalle from './PaginaDetalle';
import PaginaCreacion from './PaginaCreacion';

function App() {
  const [listaTareas, setListaTareas] = useState(Tareas);

  const agregarTarea = (tarea) => {
    setListaTareas([...listaTareas, tarea]);
  };

  return (
    <Router>
      <div class="container">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/crear">Crear Tarea</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PaginaInicio tareas={listaTareas} />} />
          <Route path="/detalle/:id" element={<PaginaDetalle tareas={listaTareas} />} />
          <Route path="/crear" element={<PaginaCreacion agregarTarea={agregarTarea} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
